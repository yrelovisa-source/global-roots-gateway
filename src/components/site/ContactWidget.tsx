import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function ContactWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      {open && (
        <div className="animate-[fade-in_0.3s_ease-out] flex flex-col gap-2 rounded-2xl bg-card p-3 shadow-glow ring-1 ring-border">
          <div className="px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Связь 24/7
          </div>
          <a
            href="https://wa.me/79999999999"
            target="_blank"
            rel="noopener"
            className="group flex items-center gap-3 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
          <a
            href="https://t.me/yrelo"
            target="_blank"
            rel="noopener"
            className="group flex items-center gap-3 rounded-xl bg-[#229ED9] px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
          >
            <Send className="h-5 w-5" /> Telegram
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Открыть мессенджеры"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-coral-gradient text-coral-foreground shadow-coral transition hover:scale-110"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-coral/40 animate-ping" aria-hidden="true" />
        )}
        {open ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-6 w-6" />}
      </button>
    </div>
  );
}
