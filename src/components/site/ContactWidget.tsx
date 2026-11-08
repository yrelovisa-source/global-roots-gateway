import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import ivanPhoto from "@/assets/expert-ivan.jpg";
import { Button } from "@/components/ui/button";
import { contactLinks } from "@/components/site/SiteLinks";

export function ContactWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && <div id="contact-messengers" className="flex flex-col gap-2 rounded-lg border border-border bg-card p-3 shadow-glow"><div className="px-2 py-1 text-xs font-semibold text-muted-foreground">Онлайн-консультация 24/7</div><Button asChild variant="whatsapp" className="h-11"><a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button><Button asChild variant="telegram" className="h-11"><a href={contactLinks.telegram} target="_blank" rel="noopener noreferrer"><Send /> Telegram</a></Button></div>}
      <div className="flex items-center gap-3">
        {!open && <span className="hidden rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-primary shadow-soft sm:inline-flex">Онлайн-консультация 24/7</span>}
        <Button onClick={() => setOpen(!open)} aria-label={open ? "Закрыть мессенджеры" : "Открыть мессенджеры"} aria-expanded={open} aria-controls="contact-messengers" variant="lime" className="relative h-16 w-16 shrink-0 rounded-full p-[3px] shadow-coral">
          {open ? <X className="relative" /> : <><span className="absolute inset-0 animate-ping rounded-full bg-coral/40" aria-hidden="true" /><img src={ivanPhoto} alt="Иван Городницкий — онлайн" className="relative h-full w-full rounded-full object-cover ring-2 ring-card" /><span className="absolute -bottom-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-card shadow-soft"><span className="h-3 w-3 rounded-full bg-whatsapp" /></span></>}
        </Button>
      </div>
    </div>
  );
}