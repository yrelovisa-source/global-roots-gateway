import { useReveal } from "@/hooks/use-reveal";
import ivan from "@/assets/expert-ivan.jpg";
import { Linkedin, Send } from "lucide-react";

const team = [
  {
    name: "Анна Петрова",
    role: "Старший иммиграционный юрист",
    focus: "США O-1, EB-2 NIW",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Михаил Краузе",
    role: "Эксперт по визам талантов",
    focus: "UK Global Talent, Шенген",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Елена Соколова",
    role: "Консультант по недвижимости",
    focus: "Греция, Кипр, Португалия",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Давид Аракелян",
    role: "Эксперт по репатриации",
    focus: "Армения, Израиль",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Ольга Никитина",
    role: "Эксперт по гражданству за инвестиции",
    focus: "Вануату, Сан-Томе, Турция",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
  },
];

export function Experts() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experts" ref={ref} className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Команда</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Ваши эксперты по переезду
          </h2>
          <p className="mt-4 text-muted-foreground">
            Юристы и консультанты, которые ведут ваш кейс лично — от стратегии до релокации.
          </p>
        </div>

        {/* CEO featured */}
        <div className="reveal-scale mt-14 grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-glow lg:grid-cols-[320px_1fr] md:p-10">
          <div className="relative mx-auto">
            <div className="absolute -inset-4 rounded-full bg-coral-gradient opacity-20 blur-2xl" />
            <img
              src={ivan}
              alt="Иван Савин — CEO yrelo"
              loading="lazy"
              width={320}
              height={320}
              className="relative h-72 w-72 rounded-full object-cover shadow-coral ring-8 ring-white"
            />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-coral-gradient px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-coral-foreground shadow-coral">
              CEO
            </span>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Ваш эксперт</span>
            <h3 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Иван Савин
            </h3>
            <p className="mt-1 font-semibold text-foreground/80">
              Основатель и CEO yrelo, иммиграционный консультант с опытом 12+ лет
            </p>
            <p className="mt-4 text-muted-foreground">
              Лично провёл более 800 кейсов: визы талантов США и UK, золотые визы ЕС,
              гражданства за инвестиции. Выступает экспертом для медиа об иммиграции
              и инвестиционной резиденции.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#consult" className="inline-flex items-center gap-2 rounded-full bg-coral-gradient px-6 py-3 text-sm font-semibold text-coral-foreground shadow-coral transition hover:scale-105">
                Записаться на разбор
              </a>
              <a href="https://t.me/yrelo" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary transition hover:bg-secondary">
                <Send className="h-4 w-4" /> Telegram
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary transition hover:bg-secondary">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Team grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m, i) => (
            <div
              key={m.name}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="font-display text-lg font-bold text-primary">{m.name}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-coral">{m.role}</div>
                <div className="mt-2 text-sm text-muted-foreground">{m.focus}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
