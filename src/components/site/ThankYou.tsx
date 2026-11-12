import { Check, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/site/BrandLogo";
import { contactLinks } from "@/components/site/SiteLinks";

export function ThankYou() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-soft-gradient px-6 py-16">
      <div className="pointer-events-none absolute inset-0 dot-bg opacity-40" />
      <div className="relative w-full max-w-xl animate-[fade-in_0.5s_ease-out] rounded-3xl border border-border bg-card p-10 text-center shadow-glow">
        <a href="#top" aria-label="Yrelo.com — на главную" className="inline-block"><BrandLogo compact /></a>
        <div className="mx-auto mt-8 grid h-20 w-20 place-items-center rounded-full bg-coral-gradient text-coral-foreground shadow-coral animate-cta-pulse"><Check className="h-9 w-9" /></div>
        <h1 className="mt-6 font-display text-4xl font-bold text-primary">Спасибо за заявку!</h1>
        <p className="mt-3 text-muted-foreground">Иммиграционный консультант свяжется с вами в течение часа и пришлёт стратегию с программами, сроками и стоимостью.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="whatsapp"><a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button>
          <Button asChild variant="telegram"><a href={contactLinks.telegram} target="_blank" rel="noopener noreferrer"><Send /> Telegram</a></Button>
        </div>
        <a href={contactLinks.community} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold text-sky">Пока ждёте — новости в нашем Telegram-сообществе</a>
        <div className="mt-6"><a href="#top" className="text-sm text-muted-foreground underline">Вернуться на сайт</a></div>
      </div>
    </section>
  );
}
