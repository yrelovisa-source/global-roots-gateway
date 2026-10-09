import { Link, useLocation } from "react-router-dom";
import { Check, MessageCircle, Send } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";

export default function ThankYou() {
  const name = (useLocation().state as { name?: string } | null)?.name;
  return (
    <main className="grid min-h-screen place-items-center bg-hero-gradient px-6 py-16">
      <title>Спасибо за заявку — Yrelo</title>
      <meta name="robots" content="noindex" />
      <div className="w-full max-w-lg animate-[fade-in_0.5s_ease-out] rounded-3xl border border-border bg-card p-10 text-center shadow-glow">
        <Link to="/" className="inline-flex"><BrandLogo /></Link>
        <div className="mx-auto mt-8 grid h-20 w-20 place-items-center rounded-full bg-coral-gradient text-primary shadow-coral">
          <Check className="h-9 w-9" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-primary">
          Спасибо{name ? `, ${name}` : ""}!
        </h1>
        <p className="mt-3 text-muted-foreground">
          Заявка получена. Иммиграционный консультант свяжется с вами в ближайшее время.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="https://t.me/yrelo" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary">
            <Send className="h-4 w-4" /> Написать в Telegram
          </a>
          <a href="https://wa.me/79999999999" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <Link to="/" className="mt-6 inline-block text-sm font-semibold text-coral hover:underline">← Вернуться на главную</Link>
      </div>
    </main>
  );
}
