import { Headphones, MessageCircle } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { Button } from "@/components/ui/button";

export function Consultation() {
  return (
    <section id="consult" className="scroll-mt-28 border-t border-border bg-secondary py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky"><Headphones className="h-5 w-5" /> Эксперт Yrelo на связи</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-4xl">Ваш переезд начинается с разговора</h2>
          <p className="mt-5 max-w-lg text-muted-foreground">Обсудим вашу ситуацию, подходящие программы и следующие шаги. Первая консультация — бесплатно.</p>
          <Button asChild variant="outline" className="mt-7 h-auto gap-3 whitespace-normal px-5 py-3">
            <a href="https://t.me/yrelo" target="_blank" rel="noopener noreferrer"><MessageCircle /> Чат с экспертом онлайн</a>
          </Button>
        </div>
        <LeadForm program="Подбор программы переезда" />
      </div>
    </section>
  );
}