import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  contact: z.string().trim().min(5).max(255),
  country: z.string().max(100),
  goal: z.string().max(150),
  budget: z.string().max(100),
  time: z.string().max(100),
});

export async function sendEnquiry(input: z.infer<typeof schema>) {
  const parsed = schema.safeParse(input);
  if (!parsed.success) throw new Error('Проверьте имя и контактные данные.');
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error('Форма не настроена. Свяжитесь с нами напрямую.');
  const response = await fetch(`${url}/functions/v1/telegram-enquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: key },
    body: JSON.stringify(parsed.data),
    signal: AbortSignal.timeout(20000),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.ok !== true) {
    throw new Error(result?.error ?? 'Не удалось отправить заявку. Попробуйте позже.');
  }
}