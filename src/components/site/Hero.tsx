import heroImg from "@/assets/facefree-hero.jpg";
import { ArrowRight, Sparkles, Globe2, Star, MoveUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const highlights = [
  { number: "01", title: "ВНЖ в Европе", description: "Кочевники · пассивный доход · бизнес" },
  { number: "02", title: "Визы талантов", description: "США O-1 · EB-2 NIW · UK Global Talent" },
  { number: "03", title: "Гражданство", description: "По рождению · корням · инвестициям" },
];

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" ref={ref} className="relative min-h-[740px] overflow-hidden border-b border-border pb-16 pt-36 md:min-h-[740px] md:pb-20 md:pt-44">
      <img src={heroImg} alt="Панорама Барселоны и Средиземного моря" width={1536} height={1024} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.75fr)]">
        <div className="reveal max-w-3xl">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-coral">
            <span className="h-px w-10 bg-coral" /> Иммиграционный центр Yrelo
          </span>
          <h1 className="mt-8 text-balance font-display text-5xl font-bold uppercase leading-[0.98] text-primary sm:text-6xl lg:text-7xl">
            Переезд <span className="shimmer-text">без границ.</span><br />Жизнь по вашим правилам.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            ВНЖ ЕС для кочевников и пассивного дохода, визы талантов O-1 и Global Talent,
            стартап-визы, репатриация, гражданства за инвестиции и недвижимость в&nbsp;ЕС.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#consult"
              className="group relative inline-flex items-center gap-2 rounded-md bg-coral-gradient px-7 py-3.5 text-base font-bold text-coral-foreground shadow-coral transition hover:scale-[1.04]"
            >
              Подобрать программу
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/80 px-7 py-3.5 text-base font-semibold text-primary backdrop-blur transition hover:border-coral"
            >
              Все программы
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-border pt-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-coral" />
              <span><b className="text-primary">25+</b> стран</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-coral" />
              <span><b className="text-primary">98%</b> одобрений</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-coral" />
              <span><b className="text-primary">100%</b> гарантии по договору</span>
            </div>
          </div>
        </div>

        <div className="reveal-scale flex flex-col gap-3">
          {highlights.map((item) => (
            <a key={item.number} href="#consult" className="group relative overflow-hidden border-l-2 border-coral bg-card/90 p-5 backdrop-blur-sm transition hover:border-sky hover:bg-secondary md:p-6">
              <span className="absolute -right-2 -top-8 font-display text-8xl font-bold text-primary/5" aria-hidden="true">{item.number}</span>
              <div className="relative">
                <span className="text-xs font-bold text-coral">{item.number} / НАПРАВЛЕНИЕ</span>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <h2 className="font-display text-xl font-bold text-primary">{item.title}</h2>
                  <MoveUpRight className="h-5 w-5 shrink-0 text-coral transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </a>
          ))}
          <div className="border border-border bg-background/80 px-5 py-3 text-xs text-muted-foreground backdrop-blur-sm">ГАРАНТИИ ПО ДОГОВОРУ <strong className="ml-2 text-coral">100% или возврат</strong></div>
        </div>
      </div>
    </section>
  );
}
