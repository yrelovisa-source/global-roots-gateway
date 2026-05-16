// Vercel Serverless Function (Node runtime, auto-detected).
// Receives the quiz form and forwards it to the Telegram bot.
import { z } from "zod";

export const config = { runtime: "nodejs" };

const LeadSchema = z.object({
  country: z.string().min(1).max(100),
  goal: z.string().min(1).max(100),
  budget: z.string().min(1).max(100),
  timing: z.string().min(1).max(100),
  name: z.string().min(1).max(200),
  contact: z.string().min(3).max(300),
});

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

type VercelReq = {
  method?: string;
  body?: unknown;
  on: (event: string, cb: (chunk: unknown) => void) => void;
};
type VercelRes = {
  status: (code: number) => VercelRes;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

async function readJson(req: VercelReq): Promise<unknown> {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  return await new Promise((resolve) => {
    let raw = "";
    req.on("data", (c) => (raw += String(c)));
    req.on("end", () => {
      try { resolve(JSON.parse(raw || "{}")); } catch { resolve({}); }
    });
  });
}

export default async function handler(req: VercelReq, res: VercelRes) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    res.status(500).json({ ok: false, error: "Server not configured" });
    return;
  }

  const parsed = LeadSchema.safeParse(await readJson(req));
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "Invalid input" });
    return;
  }
  const data = parsed.data;

  const text =
    `🔥 <b>Новая заявка yrelo.com</b>\n\n` +
    `👤 <b>Имя:</b> ${esc(data.name)}\n` +
    `📞 <b>Контакт:</b> ${esc(data.contact)}\n` +
    `🌍 <b>Страна:</b> ${esc(data.country)}\n` +
    `🎯 <b>Цель:</b> ${esc(data.goal)}\n` +
    `💰 <b>Бюджет:</b> ${esc(data.budget)}\n` +
    `⏱ <b>Срок:</b> ${esc(data.timing)}`;

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    if (!tg.ok) {
      const body = await tg.text();
      console.error("Telegram API error", tg.status, body);
      res.status(502).json({ ok: false, error: `Telegram ${tg.status}` });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Telegram fetch failed", err);
    res.status(500).json({ ok: false, error: "Network error" });
  }
}
