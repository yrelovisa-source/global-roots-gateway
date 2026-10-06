import heroImg from "@/assets/facefree-hero.jpg";
import {
  ArrowRight,
  Globe2,
  BadgeCheck,
  ShieldCheck,
  Headphones,
  MoveUpRight,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const directions = [
  {
    number: "01",
    title: "ВНЖ в Европе",
    description: "Кочевники • Пассивный доход • Бизнес",
  },
  {
    number: "02",
    title: "Визы талантов",
    description: "O-1 • EB-2 NIW • Global Talent",
  },
  {
    number: "03",
    title: "Гражданство",
    description: "Рождение • Корни • Инвестиции",
    dark: true,
  },
];

const advantages = [
  {
    Icon: Globe2,
    value: "25+",
    label: "Стран присутствия",
    description: "Европа, Америка, Азия и Океания",
  },
  {
    Icon: BadgeCheck,
    value: "98%",
    label: "Одобрений",
    description: "Работаем только с реальными маршрутами",
  },
  {
    Icon: ShieldCheck,
    value: "100%",
    label: "Гарантии по договору",
    description: "Фиксируем результат юридически",
  },
  {
    Icon: Headphones,
    value: "24/7",
    label: "Личный менеджер",
    description: "На связи на каждом этапе кейса",
  },
];

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  const advRef = useReveal<HTMLDivElement>();

  return (
    <>
      <section
        id="top"
        ref={ref}
        className="relative min-h-[740px] overflow-hidden border-b border-border pb-16 pt-36 md:pb-24 md:pt-44"
      >
        <img
          src={heroImg}
          alt="Панорама Барселоны и Средиземного моря"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-15 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/60" />
        <div className="pointer-events-none absolute inset-0 dot-bg opacity-40" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <div className="reveal flex flex-col items-start gap-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-sky" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
                Иммиграционный центр Yrelo
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-5xl font-bold uppercase leading-[0.98] tracking-tight text-primary sm:text-6xl lg:text-7xl">
                Масштабируйте
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">свою</span>
                  <span
                    className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-coral sm:h-4"
                    aria-hidden="true"
                  />
                </span>{" "}
                <span className="inline-flex h-[1.1em] overflow-hidden align-top text-sky">
                  <span className="animate-word-slide inline-flex h-[4.4em] flex-col">
                    <span className="flex h-[1.1em] items-center">свободу</span>
                    <span className="flex h-[1.1em] items-center">жизнь</span>
                    <span className="flex h-[1.1em] items-center">миграцию</span>
                    <span className="flex h-[1.1em] items-center" aria-hidden="true">
                      свободу
                    </span>
                  </span>
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Полное сопровождение легализации в Европе, США и Азии — от виз
                талантов и ВНЖ кочевника до гражданства и недвижимости под ключ.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#consult"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-coral-gradient px-8 py-4 text-base font-bold uppercase tracking-wider text-primary shadow-coral transition-all hover:scale-[1.03]"
              >
                Бесплатная консультация
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 border-2 border-border bg-card/60 px-8 py-4 text-base font-bold uppercase tracking-wider text-primary backdrop-blur transition hover:border-coral hover:bg-card"
              >
                Все программы
              </a>
            </div>
          </div>

          <div className="reveal-scale flex flex-col gap-4">
            {directions.map((d) => (
              <a
                key={d.number}
                href="#consult"
                className={`group relative p-6 transition-all duration-500 hover:-translate-y-1 md:p-8 ${
                  d.dark
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "border border-border bg-card shadow-soft hover:border-coral"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-display text-lg font-bold tracking-tight ${
                      d.dark ? "text-coral" : "text-sky"
                    }`}
                  >
                    {d.number}
                  </span>
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${
                      d.dark
                        ? "bg-primary-foreground/10 group-hover:bg-coral group-hover:text-primary"
                        : "bg-secondary group-hover:bg-coral"
                    }`}
                  >
                    <MoveUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold uppercase">{d.title}</h2>
                <p
                  className={`mt-2 text-sm uppercase tracking-wide ${
                    d.dark ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {d.description}
                </p>
              </a>
            ))}
            <div className="border border-border bg-background/80 px-5 py-3 text-xs text-muted-foreground backdrop-blur-sm">
              ГАРАНТИИ ПО ДОГОВОРУ <strong className="ml-2 text-coral">100% или возврат</strong>
            </div>
          </div>
        </div>
      </section>

      <section
        id="advantages"
        ref={advRef}
        aria-label="Наши преимущества"
        className="relative border-b border-border bg-secondary"
      >
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-coral" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">
              Наши преимущества
            </span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a, i) => (
              <div
                key={a.label}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="reveal relative border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-coral"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center bg-coral-gradient text-primary">
                    <a.Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-bold text-primary">{a.value}</span>
                </div>
                <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wide text-primary">
                  {a.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
