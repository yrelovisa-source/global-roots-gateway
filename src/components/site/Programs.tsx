import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight } from "lucide-react";

type Program = {
  flag: string;
  country: string;
  visa: string;
  desc: string;
  bullets: string[];
  img: string;
  tag?: string;
};

const groups: { title: string; subtitle: string; items: Program[] }[] = [
  {
    title: "США — визы талантов",
    subtitle: "O-1A, O-1B и переход на EB-2 NIW внутри страны",
    items: [
      {
        flag: "🇺🇸",
        country: "США",
        visa: "O-1A",
        desc: "Для специалистов с выдающимися достижениями в науке, бизнесе, спорте, образовании.",
        bullets: ["До 3 лет с продлением", "Семья O-3", "Можно подавать из США"],
        img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=900&q=80&auto=format&fit=crop",
        tag: "Топ-выбор",
      },
      {
        flag: "🇺🇸",
        country: "США",
        visa: "O-1B",
        desc: "Для деятелей искусства, кино, ТВ и креативных индустрий с международным признанием.",
        bullets: ["Признание в индустрии", "Портфолио и публикации", "Срок до 3 лет"],
        img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇺🇸",
        country: "США",
        visa: "EB-2 NIW",
        desc: "Грин-карта по национальным интересам — модификация статуса O-1 внутри США.",
        bullets: ["Без работодателя", "Грин-карта", "Семья включена"],
        img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&q=80&auto=format&fit=crop",
        tag: "Грин-карта",
      },
    ],
  },
  {
    title: "Великобритания",
    subtitle: "Виза талантов Global Talent",
    items: [
      {
        flag: "🇬🇧",
        country: "UK",
        visa: "Global Talent",
        desc: "Для лидеров и перспективных специалистов в tech, науке, искусстве, академии.",
        bullets: ["Без работодателя", "Путь к ILR за 3 года", "Семья включена"],
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&auto=format&fit=crop",
        tag: "Без оффера",
      },
    ],
  },
  {
    title: "Латинская Америка и Европа — корни",
    subtitle: "Программы репатриации по родовым связям",
    items: [
      {
        flag: "🇨🇱",
        country: "Чили",
        visa: "Резиденция",
        desc: "Программа для потомков и иммигрантов с быстрым путём к гражданству.",
        bullets: ["ВНЖ за 1 визит", "Гражданство за 5 лет", "Сильный паспорт"],
        img: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇦🇷",
        country: "Аргентина",
        visa: "Гражданство",
        desc: "Натурализация через 2 года резиденции, паспорт ЕС-friendly.",
        bullets: ["2 года до паспорта", "Безвиз 170+ стран", "Двойное гражданство"],
        img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇧🇷",
        country: "Бразилия",
        visa: "Резиденция",
        desc: "Резиденция через инвестиции, корни и стартап-программы Mercosul.",
        bullets: ["Семья сразу", "ВНЖ от 90 дней", "Доступ к Mercosul"],
        img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇪🇸",
        country: "Испания",
        visa: "Сефарды / корни",
        desc: "Программа репатриации и упрощённое гражданство по корням.",
        bullets: ["Гражданство ЕС", "Двойное возможно", "Без проживания"],
        img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=900&q=80&auto=format&fit=crop",
        tag: "Паспорт ЕС",
      },
    ],
  },
  {
    title: "Гражданства за инвестиции",
    subtitle: "Сан-Томе и Принсипи, Вануату",
    items: [
      {
        flag: "🇸🇹",
        country: "Сан-Томе и Принсипи",
        visa: "Гражданство",
        desc: "Доступная программа CBI с быстрой выдачей паспорта.",
        bullets: ["3–5 месяцев", "Безвиз 60+ стран", "Семья включена"],
        img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇻🇺",
        country: "Вануату",
        visa: "Гражданство",
        desc: "Самая быстрая в мире программа гражданства за инвестиции.",
        bullets: ["1–2 месяца", "Безвиз UK", "Без проживания"],
        img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=900&q=80&auto=format&fit=crop",
        tag: "Самая быстрая",
      },
    ],
  },
];

export function Programs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="programs" ref={ref} className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Программы по странам</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Только реально работающие маршруты
          </h2>
        </div>

        <div className="mt-14 space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="reveal mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary md:text-3xl">{g.title}</h3>
                  <p className="text-muted-foreground">{g.subtitle}</p>
                </div>
                <a href="#consult" className="text-sm font-semibold text-coral hover:underline">Подходит мне? →</a>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p, i) => (
                  <a
                    key={p.country + p.visa}
                    href="#consult"
                    style={{ transitionDelay: `${i * 80}ms` }}
                    className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-2 hover:shadow-glow"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img src={p.img} alt={p.country} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                      {p.tag && (
                        <span className="absolute left-4 top-4 rounded-full bg-coral-gradient px-3 py-1 text-xs font-bold text-coral-foreground shadow-coral">
                          {p.tag}
                        </span>
                      )}
                      <span className="absolute bottom-4 left-4 text-3xl drop-shadow">{p.flag}</span>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.country}</div>
                      <div className="mt-1 font-display text-xl font-bold text-primary">{p.visa}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                      <ul className="mt-4 space-y-1.5 text-sm">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-foreground/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-coral" /> {b}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-coral group-hover:gap-2 transition-all">
                        Подобрать <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
