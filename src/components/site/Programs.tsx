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

const groups: { title: string; subtitle: string; note?: string; items: Program[] }[] = [
  {
    title: "Реально работающие маршруты",
    subtitle: "Самые востребованные программы 2025 года — в порядке скорости и надёжности",
    items: [
      {
        flag: "🇪🇸",
        country: "Испания",
        visa: "Digital Nomad — под ключ на 3 года",
        desc: "Подача из Испании, тур-визы для семьи в подарок. ВНЖ на 3 года с продлением и путём к ПМЖ.",
        bullets: ["Подача из Испании", "Тур-визы в подарок", "Семья включена"],
        img: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=900&q=80&auto=format&fit=crop",
        tag: "Хит сезона",
      },
      {
        flag: "🇭🇷",
        country: "Хорватия",
        visa: "Digital Nomad — подача из РФ",
        desc: "Полный цикл за 4 месяца с подачей документов из России. ВНЖ на 1 год с продлением.",
        bullets: ["Подача из РФ", "4 месяца под ключ", "Шенген с ВНЖ"],
        img: "https://images.unsplash.com/photo-1555990538-32eb0d727mq?w=900&q=80&auto=format&fit=crop",
        tag: "Без выезда",
      },
      {
        flag: "🇵🇹",
        country: "Португалия",
        visa: "D7 — пассивный доход",
        desc: "ВНЖ для тех, у кого есть стабильный пассивный доход. Путь к паспорту ЕС за 5 лет.",
        bullets: ["От €870/мес дохода", "Семья включена", "Паспорт ЕС за 5 лет"],
        img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇫🇷",
        country: "Франция",
        visa: "Passeport Talent — стартап и эксперт",
        desc: "ВНЖ на 4 года для основателей стартапов и признанных специалистов. Путь к гражданству.",
        bullets: ["4 года сразу", "Стартап или контракт", "Семья включена"],
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇺🇸",
        country: "США",
        visa: "O-1 / EB-2 NIW",
        desc: "Виза талантов O-1A и O-1B с переходом на грин-карту EB-2 NIW внутри США.",
        bullets: ["До 3 лет O-1", "EB-2 NIW грин-карта", "Подача из США"],
        img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=900&q=80&auto=format&fit=crop",
        tag: "Топ-выбор",
      },
      {
        flag: "🇬🇧",
        country: "Великобритания",
        visa: "Global Talent",
        desc: "Виза талантов без работодателя для tech, науки, искусства, академии. ILR за 3 года.",
        bullets: ["Без оффера", "ILR за 3 года", "Семья включена"],
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇦🇪",
        country: "ОАЭ",
        visa: "Golden Visa / Freelance",
        desc: "Резиденция на 2–10 лет через бизнес, инвестиции или фриланс-статус. 0% подоходного.",
        bullets: ["До 10 лет", "0% налогов", "Семья включена"],
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇮🇹",
        country: "Италия",
        visa: "Elective Residence / Investor",
        desc: "ВНЖ для финансово независимых и инвесторов. Путь к гражданству ЕС за 10 лет.",
        bullets: ["От €31к/год дохода", "Семья включена", "Паспорт ЕС"],
        img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇷🇸",
        country: "Сербия",
        visa: "ВНЖ через бизнес или недвижимость",
        desc: "Быстрый ВНЖ за 1 месяц через регистрацию компании или покупку жилья. Без отказа от паспорта.",
        bullets: ["1 месяц", "Двойное гражданство", "Низкий бюджет"],
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=900&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Гражданство при рождении",
    subtitle: "Паспорт ребёнку сразу и ускоренная натурализация для родителей",
    items: [
      {
        flag: "🇦🇷",
        country: "Аргентина",
        visa: "Гражданство по рождению",
        desc: "Jus soli: ребёнок — гражданин Аргентины. Родители получают паспорт через 2 года резиденции.",
        bullets: ["Паспорт ребёнку сразу", "Родителям 2 года до паспорта", "Безвиз 170+ стран"],
        img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=900&q=80&auto=format&fit=crop",
        tag: "Топ-1",
      },
      {
        flag: "🇨🇱",
        country: "Чили",
        visa: "Гражданство по рождению",
        desc: "Ребёнок, рождённый в Чили, получает гражданство сразу. Родителям — ВНЖ и натурализация за 2 года.",
        bullets: ["Паспорт малышу", "ВНЖ родителям", "Гражданство за 2 года"],
        img: "/src/assets/chile-family.jpg",
        tag: "Семейный фаворит",
      },
      {
        flag: "🇧🇷",
        country: "Бразилия",
        visa: "Гражданство по рождению",
        desc: "Паспорт ребёнку сразу + ускоренная натурализация родителей за 1 год по программе родителя гражданина.",
        bullets: ["Паспорт ребёнку", "Родителям 1 год", "Один из сильнейших паспортов ЛатАм"],
        img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇵🇪",
        country: "Перу",
        visa: "Гражданство по рождению",
        desc: "Гражданство по jus soli ребёнку и натурализация родителям через 2 года резиденции.",
        bullets: ["Паспорт малышу", "ВНЖ всей семье", "Гражданство за 2 года"],
        img: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇪🇸",
        country: "Испания",
        visa: "Гражданство ребёнку при ВНЖ родителей",
        desc: "Если у родителей ВНЖ Испании, ребёнок может получить гражданство уже через 1 год после рождения.",
        bullets: ["Через 1 год после рождения", "Паспорт ЕС ребёнку", "Родителям ускоренный путь"],
        img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80&auto=format&fit=crop",
      },
      {
        flag: "🇺🇸",
        country: "США",
        visa: "Гражданство по рождению",
        desc: "Ребёнок, рождённый в США, — гражданин по 14-й поправке. Родителям — путь через спонсорство в 21 год.",
        bullets: ["Паспорт США ребёнку", "Безвиз 180+ стран", "Спонсорство родителей"],
        img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Европа и Кавказ — репатриация по корням",
    subtitle: "Армянская, израильская, болгарская и румынская программы",
    note: "Если у вас есть реальные корни — мы бесплатно поможем заполнить файл «Семейное древо» и проверим право на репатриацию.",
    items: [
      {
        flag: "🇦🇲",
        country: "Армения",
        visa: "Репатриация",
        desc: "Гражданство по этническим корням за 1–4 месяца, без отказа от текущего паспорта.",
        bullets: ["1–4 месяца", "Двойное гражданство", "Без проживания"],
        img: "/src/assets/armenia.jpg",
      },
      {
        flag: "🇮🇱",
        country: "Израиль",
        visa: "Алия",
        desc: "Возвращение по Закону о возвращении: гражданство по приезду для евреев и членов семьи.",
        bullets: ["Гражданство сразу", "Поддержка от государства", "Сильный паспорт"],
        img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=900&q=80&auto=format&fit=crop",
        tag: "Сразу паспорт",
      },
      {
        flag: "🇧🇬",
        country: "Болгария",
        visa: "Гражданство по корням",
        desc: "Восстановление болгарского гражданства по происхождению — паспорт ЕС.",
        bullets: ["Паспорт ЕС", "Без проживания", "Двойное возможно"],
        img: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=900&q=80&auto=format&fit=crop",
        tag: "Паспорт ЕС",
      },
      {
        flag: "🇷🇴",
        country: "Румыния",
        visa: "Гражданство по корням",
        desc: "Восстановление румынского гражданства по предкам до 1940 года. Паспорт ЕС за 1.5–3 года.",
        bullets: ["Паспорт ЕС", "Без проживания", "Двойное возможно"],
        img: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?w=900&q=80&auto=format&fit=crop",
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
