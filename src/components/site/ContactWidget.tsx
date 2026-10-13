import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import ivanPhoto from "@/assets/expert-ivan.jpg";

export function ContactWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="animate-[fade-in_0.3s_ease-out] flex flex-col gap-2 rounded-2xl bg-card p-3 shadow-glow ring-1 ring-border">
          <div className="px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Онлайн-консультация 24/7
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
      <div className="flex items-center gap-3">
        {!open && (
          <span className="hidden rounded-full bg-card px-4 py-2 text-xs font-semibold text-primary shadow-soft ring-1 ring-border sm:inline-flex">
            Онлайн-консультация 24/7
          </span>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть мессенджеры"
          className="group relative h-16 w-16 overflow-visible rounded-full bg-coral-gradient p-[3px] shadow-coral transition hover:scale-110"
        >
          {!open && (
            <span className="absolute inset-0 rounded-full bg-coral/40 animate-ping" aria-hidden="true" />
          )}
          {open ? (
            <span className="relative grid h-full w-full place-items-center rounded-full bg-coral text-coral-foreground">
              <X className="h-6 w-6" />
            </span>
          ) : (
            <img
              src={ivanPhoto}
              alt="Иван Городницкий — онлайн"
              className="relative h-full w-full rounded-full object-cover ring-2 ring-card"
            />
          )}
          {!open && (
            <span className="absolute -bottom-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-card shadow-soft">
              <span className="h-3 w-3 rounded-full bg-[#25D366]" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
