import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  country: z.string().min(1).max(100),
  goal: z.string().min(1).max(100),
  budget: z.string().min(1).max(100),
  timing: z.string().min(1).max(100),
  name: z.string().min(1).max(200),
  contact: z.string().min(3).max(300),
});

export const sendLeadToTelegram = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      console.error("Telegram env vars missing");
      return { ok: false, error: "Server not configured" };
    }

    const text =
      `🔥 <b>Новая заявка yrelo.com</b>\n\n` +
      `👤 <b>Имя:</b> ${escape(data.name)}\n` +
      `📞 <b>Контакт:</b> ${escape(data.contact)}\n` +
      `🌍 <b>Страна:</b> ${escape(data.country)}\n` +
      `🎯 <b>Цель:</b> ${escape(data.goal)}\n` +
      `💰 <b>Бюджет:</b> ${escape(data.budget)}\n` +
      `⏱ <b>Срок:</b> ${escape(data.timing)}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error("Telegram API error", res.status, body);
        return { ok: false, error: `Telegram ${res.status}` };
      }
      return { ok: true };
    } catch (err) {
      console.error("Telegram fetch failed", err);
      return { ok: false, error: "Network error" };
    }
  });

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
