import { assertEquals } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { createHandler } from './handler.ts';

const input = { name: 'Проверка Yrelo', contact: 'test@example.com' };

Deno.test('Uses TELEGRAM_BOT_TOKEN for delivery and server-owned chat only', async () => {
  const requestedSecrets: string[] = [];
  let delivered = false;
  const handler = createHandler({
    cors: {},
    getSecret: (name) => {
      requestedSecrets.push(name);
      return name === 'TELEGRAM_BOT_TOKEN' ? 'fake-test-credential' : 'server-chat';
    },
    fetch: async (_url, init) => {
      const body = JSON.parse(String(init?.body));
      assertEquals(body.chat_id, 'server-chat');
      assertEquals(body.text.includes('Проверка Yrelo'), true);
      assertEquals(body.parse_mode, undefined);
      delivered = true;
      return Response.json({ ok: true, result: { message_id: 42 } });
    },
  });
  const response = await handler(new Request('https://example.com', {
    method: 'POST', body: JSON.stringify(input),
  }));
  assertEquals(requestedSecrets, ['TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHAT_ID']);
  assertEquals(delivered, true);
  assertEquals(await response.json(), { ok: true, messageId: 42 });
});

Deno.test('Rejects client-supplied destination without contacting Telegram', async () => {
  let called = false;
  const handler = createHandler({ cors: {}, getSecret: () => 'fake', fetch: async () => {
    called = true;
    return Response.json({ ok: true });
  } });
  const response = await handler(new Request('https://example.com', {
    method: 'POST', body: JSON.stringify({ ...input, chat_id: 'different-chat' }),
  }));
  assertEquals(response.status, 400);
  assertEquals(called, false);
});