import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createHandler } from './handler.ts';

// Public enquiry form: no user account is required, destination is server-owned.
Deno.serve(createHandler({
  getSecret: (name) => Deno.env.get(name),
  fetch: globalThis.fetch,
  cors: corsHeaders,
}));