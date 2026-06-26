import { useReveal } from "@/hooks/use-reveal";
import { GraduationCap, ArrowRight, Award, Building2 } from "lucide-react";
import eduSpain from "@/assets/edu-spain.jpg";
import eduGermany from "@/assets/edu-germany.jpg";
import eduNetherlands from "@/assets/edu-netherlands.jpg";

type Item = {
  flag: string;
  country: string;
  title: string;
  desc: string;
  bullets: string[];
  img: string;
  tag?: string;
};

const items: Item[] = [
  {
    flag: "\n",
    country: "Великобритания",
    title: "Школы-пансионы и университеты",
    desc: "Eton, Harrow, Westminster, топ-10 британских университетов. Подбор, подача, опекунство и виза Student / Child Student.",
    bullets: ["Boarding schools от 11 лет", "Russell Group университеты", "Опека и виза под ключ"],
    img: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=900&q=80&auto=format&fit=crop",
    tag: "Топ-выбор",
  },
  {
    flag: "\n",
    country: "Великобритания",
    title: "Graduate Route — работа после диплома",
    desc: "2 года рабочей визы после окончания UK университета без оффера. Путь к Skilled Worker и ILR.",
    bullets: ["2 года без оффера", "Любая работа", "Путь к ВНЖ"],
    img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=900&q=80&auto=format&fit=crop",
  },
  {
    flag: "\n",
    country: "Швейцария",
    title: "Частные школы Швейцарии",
    desc: "Le Rosey, Institut auf dem Rosenberg, Aiglon. Билингвальное обучение, IB / A-Level / Matura.",
    bullets: ["Сильнейшие школы Европы", "Семья получает ВНЖ", "Программы IB и A-Level"],
    img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=900&q=80&auto=format&fit=crop",
  },
  {
    flag: "\n",
    country: "Испания",
    title: "Университеты и магистратура",
    desc: "IE, ESADE, IESE и государственные вузы. Студенческая виза с правом работать 30 ч/нед.",
    bullets: ["Топ-бизнес-школы мира", "Семья включена", "Работа 30 ч/нед"],
    img: eduSpain,
  },
  {
    flag: "\n",
    country: "Италия",
    title: "Bocconi, Politecnico, дизайн-академии",
    desc: "Bachelor и Master на английском. Доступная стоимость, гранты, виза с работой и стажировками.",
    bullets: ["От €4 000/год", "Английские программы", "Стажировки в ЕС"],
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80&auto=format&fit=crop",
  },
  {
    flag: "\n",
    country: "Германия",
    title: "Бесплатное высшее в Германии",
    desc: "TU Munich, RWTH Aachen, LMU. Государственные университеты — обучение бесплатно, виза Job Seeker после диплома.",
    bullets: ["€0 за обучение", "18 мес Job Seeker", "Путь к ВНЖ ЕС"],
    img: eduGermany,
    tag: "Бесплатно",
  },
  {
    flag: "\n",
    country: "Франция",
    title: "Sciences Po, HEC, Сорбонна",
    desc: "Бакалавриат и магистратура на английском и французском. APS-виза на 12 месяцев после диплома.",
    bullets: ["Топ-вузы Европы", "Английские треки", "APS после диплома"],
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80&auto=format&fit=crop",
  },
  {
    flag: "\n",
    country: "Нидерланды",
    title: "Голландские исследовательские университеты",
    desc: "Amsterdam, Delft, Utrecht. 95% программ на английском, Orientation Year для поиска работы.",
    bullets: ["English-taught", "1 год Orientation", "Сильный диплом"],
    img: eduNetherlands,
  },
];

export function Education() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="education" ref={ref} className="relative bg-soft-gradient py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            <GraduationCap className="h-4 w-4" /> Образование
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Обучение в Великобритании и Европе
          </h2>
          <p className="mt-4 text-muted-foreground">
            Школы-пансионы, топ-университеты и магистратура — с визой, опекой и поступлением под ключ.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { Icon: Award, t: "Поступление от 95%", d: "Из всех заявок наших студентов" },
            { Icon: GraduationCap, t: "100+ вузов и школ", d: "Прямые договоры с приёмными комиссиями" },
            { Icon: Building2, t: "Виза + опека", d: "Полное сопровождение для несовершеннолетних" },
          ].map((s) => (
            <div key={s.t} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-coral-gradient text-coral-foreground shadow-coral">
                <s.Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-base font-bold text-primary">{s.t}</div>
                <div className="text-sm text-muted-foreground">{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <a
              key={p.country + p.title}
              href="#consult"
              style={{ transitionDelay: `${i * 60}ms` }}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                {p.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-coral-gradient px-3 py-1 text-xs font-bold text-coral-foreground shadow-coral">
                    {p.tag}
                  </span>
                )}
                <span className="absolute bottom-4 left-4 text-3xl drop-shadow">{p.flag}</span>
              </div>
              <div className="flex-1 p-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.country}</div>
                <div className="mt-1 font-display text-lg font-bold text-primary">{p.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral" /> {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coral group-hover:gap-2 transition-all">
                  Узнать подробнее <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
