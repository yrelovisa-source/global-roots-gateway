import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ivanPhoto from "@/assets/expert-ivan.jpg";

export function ContactWidget() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const consultation = pathname.startsWith("/programmy/") ? "#lead" : "/#consult";
  return (
    <div className="fixed bottom-3 right-3 z-40 flex max-w-[calc(100vw-24px)] flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      {open && (
        <div id="expert-chat" className="w-72 max-w-full rounded-lg border border-border bg-card p-4 shadow-soft">
          <p className="font-semibold text-primary">Чат с экспертом онлайн</p>
          <p className="mt-1 text-sm text-muted-foreground">Бесплатная консультация</p>
          <Button asChild className="mt-4 h-auto w-full bg-coral-gradient py-3 text-primary"><a href="https://t.me/yrelo" target="_blank" rel="noopener noreferrer"><Send /> Написать в Telegram</a></Button>
          <Button asChild variant="outline" className="mt-2 h-auto w-full py-3"><a href={consultation} onClick={() => setOpen(false)}>Оставить заявку</a></Button>
        </div>
      )}
      <Button variant="ghost" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="expert-chat" aria-label={open ? "Закрыть чат с экспертом" : "Чат с экспертом онлайн — бесплатная консультация"} className="h-auto max-w-full gap-3 rounded-lg border border-border bg-card p-2 text-primary shadow-coral hover:bg-secondary">
        {open ? <X className="m-3" /> : <img src={ivanPhoto} width={44} height={44} decoding="async" alt="Иван Городницкий" className="h-11 w-11 shrink-0 rounded-full object-cover" />}
        <span className="pr-1 text-left"><span className="flex items-center gap-2 text-xs font-semibold sm:text-sm"><span className="online-indicator h-2 w-2 shrink-0 rounded-full bg-sky" aria-hidden="true" /> Чат с экспертом онлайн</span><span className="mt-0.5 block text-xs text-muted-foreground">Бесплатная консультация</span></span>
        <MessageCircle className="hidden sm:block" />
      </Button>
    </div>
  );
}
