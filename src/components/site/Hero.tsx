import heroImg from "@/assets/hero-clouds.jpg";
import { ArrowRight, Sparkles, Globe2, Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-accent/40 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-sky/40 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-coral">
            <Sparkles className="h-3.5 w-3.5" /> Иммиграционный центр
          </span>
          <h1 className="mt-5 text-balance font-display text-5xl font-extrabold leading-[1.05] text-primary md:text-6xl lg:text-7xl">
            Путь к жизни <span className="shimmer-text">мечты</span> — за&nbsp;границей
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            ВНЖ ЕС для кочевников и пассивного дохода, визы талантов O-1 и Global Talent,
            стартап-визы, репатриация, гражданства за инвестиции и недвижимость в&nbsp;ЕС.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#consult"
              className="group relative inline-flex items-center gap-2 rounded-full bg-coral-gradient px-7 py-3.5 text-base font-semibold text-coral-foreground shadow-coral transition hover:scale-[1.04]"
            >
              Подобрать программу
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-7 py-3.5 text-base font-semibold text-primary backdrop-blur transition hover:bg-white"
            >
              Все программы
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
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

        <div className="reveal-scale relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-hero-gradient blur-2xl opacity-60" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-glow ring-1 ring-primary/10">
            <img
              src={heroImg}
              alt="Карьерный путь к мечте — бизнесмен идёт по облакам"
              width={1600}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="rounded-2xl bg-white/85 p-4 backdrop-blur-md shadow-soft animate-float-y">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">ГАРАНТИИ ПО ДОГОВОРУ</div>
                <div className="font-display text-2xl font-bold text-primary">100% или возврат</div>
              </div>
              <span className="grid h-14 w-14 place-items-center rounded-full bg-coral-gradient text-coral-foreground shadow-coral animate-float-y" style={{ animationDelay: "1s" }}>
                <Sparkles className="h-6 w-6" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
