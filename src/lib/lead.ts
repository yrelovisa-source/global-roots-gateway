const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Sends a lead to the owner's Telegram chat. Throws a human-readable error on failure. */
export async function sendLead(title: string, fields: Record<string, string>) {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;
  if (!token || !chatId) throw new Error("Форма не настроена. Свяжитесь с нами через WhatsApp или Telegram.");

  const text =
    `🔥 <b>${esc(title)}</b>\n\n` +
    Object.entries(fields)
      .filter(([, v]) => v)
      .map(([k, v]) => `<b>${esc(k)}:</b> ${esc(v.trim())}`)
      .join("\n");

  let res: { ok?: boolean; description?: string } = {};
  let ok = false;
  try {
    const resp = await fetch(`https://api.telegram.org/bot${encodeURIComponent(token)}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
    });
    res = await resp.json().catch(() => ({}));
    ok = resp.ok && !!res.ok;
  } catch {
    /* network error */
  }
  if (!ok) throw new Error("Не удалось отправить заявку. Напишите нам напрямую в WhatsApp или Telegram.");
}
