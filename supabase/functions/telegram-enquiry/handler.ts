import { z } from 'npm:zod@3';

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  contact: z.string().trim().min(5).max(255),
  country: z.string().trim().max(100).default(''),
  goal: z.string().trim().max(150).default(''),
  budget: z.string().trim().max(100).default(''),
  age: z.string().trim().max(100).default(''),
  time: z.string().trim().max(100).default(''),
}).strict();

type Dependencies = {
  getSecret: (name: string) => string | undefined;
  fetch: typeof fetch;
  cors: Record<string, string>;
};

export function createHandler(deps: Dependencies) {
  const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
    status, headers: { ...deps.cors, 'Content-Type': 'application/json' },
  });
  return async (req: Request): Promise<Response> => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: deps.cors });
    if (req.method !== 'POST') return reply({ error: 'Method not allowed' }, 405);
    let body: unknown;
    try {
      const text = await req.text();
      if (text.length > 4096) return reply({ error: 'Request too large' }, 413);
      body = JSON.parse(text);
    } catch { return reply({ error: 'Invalid JSON' }, 400); }
    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) return reply({ error: 'Invalid enquiry' }, 400);
    const token = deps.getSecret('TELEGRAM_BOT_TOKEN');
    const chatId = deps.getSecret('TELEGRAM_CHAT_ID');
    if (!token || !chatId) return reply({ error: 'Отправка заявок пока не настроена.' }, 503);
    const data = parsed.data;
    const text = [
      'Новая заявка Yrelo.com', '',
      `Имя: ${data.name}`, `Контакт: ${data.contact}`,
      `Цель: ${data.goal}`, `Возраст: ${data.age}`,
      `Страна: ${data.country}`,
      ...(data.budget ? [`Бюджет: ${data.budget}`] : []), `Срок: ${data.time}`,
    ].join('\n');
    try {
      const response = await deps.fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) {
        // Never echo provider bodies: they may contain credentials or enquiry data.
        const code = typeof result?.error_code === 'number' ? result.error_code : response.status;
        console.error('Telegram delivery rejected', { status: response.status, code });
        const error = code === 401 ? 'Бот не авторизован. Свяжитесь с нами напрямую.'
          : code === 400 ? 'Бот не может отправить сообщение в настроенный чат. Свяжитесь с нами напрямую.'
          : 'Не удалось отправить заявку. Попробуйте позже или свяжитесь с нами напрямую.';
        return reply({ error, providerStatus: response.status, code }, 502);
      }
      return reply({ ok: true, messageId: result.result?.message_id });
    } catch {
      return reply({ error: 'Telegram временно недоступен. Попробуйте позже.' }, 502);
    }
  };
}