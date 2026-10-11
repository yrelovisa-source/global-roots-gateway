import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { sendLead } from "@/lib/lead";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().trim().min(2, "Введите имя").max(100),
  phone: z
    .string()
    .trim()
    .min(5, "Введите телефон или мессенджер")
    .max(60)
    .regex(/^[+\d\s()@_.a-zA-Z-]+$/, "Проверьте номер"),
});

export function LeadForm({ program }: { program: string }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    const parsed = schema.safeParse({ name, phone });
    if (!parsed.success) return setError(parsed.error.issues[0].message);
    setSending(true);
    setError(null);
    try {
      await sendLead("Новая заявка Yrelo.com", {
        "Имя": parsed.data.name,
        "Телефон": parsed.data.phone,
        "Программа": program,
        "Страница": window.location.pathname,
      });
      navigate("/spasibo", { state: { name: parsed.data.name } });
    } catch (err) {
      setError((err as Error).message);
      setSending(false);
    }
  };

  return (
    <form id="lead" onSubmit={submit} aria-label="Заявка на бесплатную консультацию" className="scroll-mt-28 rounded-lg border border-border bg-card p-6 shadow-glow md:p-8">
      <h2 className="font-display text-2xl font-bold text-primary">Бесплатная консультация</h2>
       <p className="mt-1 text-sm text-muted-foreground">Обсудим программу «{program}» с вашим личным экспертом.</p>
      <div className="mt-5 space-y-3">
        <label htmlFor="lead-name" className="block text-sm font-medium">Ваше имя</label>
        <input
          id="lead-name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          autoComplete="name"
          maxLength={100}
           className="w-full rounded-lg border-2 border-border bg-card px-4 py-3.5 text-base outline-none transition focus:border-ring"
        />
        <label htmlFor="lead-phone" className="block text-sm font-medium">Телефон или Telegram</label>
        <input
          id="lead-phone"
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Телефон, WhatsApp или Telegram"
          autoComplete="tel"
          inputMode="tel"
          maxLength={60}
           className="w-full rounded-lg border-2 border-border bg-card px-4 py-3.5 text-base outline-none transition focus:border-ring"
        />
      </div>
      {error && <p role="alert" className="mt-3 text-sm text-destructive">{error}</p>}
      <Button
        type="submit"
        disabled={sending}
         className="mt-5 h-auto w-full gap-2 whitespace-normal bg-coral-gradient px-4 py-4 font-semibold text-primary shadow-coral disabled:opacity-60"
      >
        {sending ? <>Отправляем… <Loader2 className="h-4 w-4 animate-spin" /></> : <>Бесплатная консультация <Check className="h-4 w-4" /></>}
      </Button>
    </form>
  );
}
