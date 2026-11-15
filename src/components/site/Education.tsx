import { useReveal } from "@/hooks/use-reveal";
import { GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

type Case = {
  country: string;
  client: string;
  school: string;
  price: string;
  term: string;
  steps: string[];
  tag?: string;
};

const cases: Case[] = [
  { country: "США", client: "Алексей, 18 лет, Москва", school: "Бакалавриат, Computer Science — Boston University", price: "$58 000 / год", term: "11 месяцев", steps: ["Подбор 8 вузов и SAT", "Эссе и рекомендации", "Оффер и стипендия $12 000", "Виза F-1 через Астану"], tag: "Стипендия" },
  { country: "Великобритания", client: "Мария, 13 лет, Казань", school: "Школа-пансион — Harrow School", price: "£52 000 / год", term: "7 месяцев", steps: ["Тесты UKiset и интервью", "Подготовка к экзаменам", "Опекун в Лондоне", "Виза Child Student"], tag: "Топ-выбор" },
  { country: "Великобритания", client: "Дмитрий, 24 года, Санкт-Петербург", school: "Магистратура MSc Finance — King's College London", price: "£38 000 / год", term: "6 месяцев", steps: ["Мотивационное письмо", "IELTS 7.0", "Безусловный оффер", "Student visa + Graduate Route"] },
  { country: "Германия", client: "Анна, 19 лет, Екатеринбург", school: "Бакалавриат — TU München", price: "€0 обучение · €12 000 / год жизнь", term: "9 месяцев", steps: ["Studienkolleg и признание аттестата", "Немецкий до C1", "Блокированный счёт", "Национальная виза D"], tag: "Бесплатно" },
  { country: "Испания", client: "Игорь, 27 лет, Новосибирск", school: "Master in Management — IE Business School", price: "€42 000 / программа", term: "5 месяцев", steps: ["Подбор программы и GMAT", "Интервью с комиссией", "Студенческая виза", "Работа 30 ч/нед"] },
  { country: "Нидерланды", client: "Екатерина, 22 года, Москва", school: "MSc Data Science — University of Amsterdam", price: "€20 000 / год", term: "6 месяцев", steps: ["Портфолио и CV", "Оффер через Studielink", "Виза MVV за 3 недели", "Orientation Year"] },
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
            Обучение в США, Великобритании и Евросоюзе
          </h2>
          <p className="mt-4 text-muted-foreground">
            Реальные кейсы наших клиентов из России: стоимость, сроки и этапы поступления под ключ.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <a
              key={c.school}
              href="#consult"
              style={{ transitionDelay: `${i * 70}ms` }}
              className="reveal group relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-2 hover:border-coral hover:shadow-glow"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.country}</span>
                {c.tag && <span className="rounded-full bg-coral-gradient px-3 py-1 text-xs font-bold text-coral-foreground shadow-coral">{c.tag}</span>}
              </div>
              <div className="mt-3 font-display text-lg font-bold text-primary">{c.school}</div>
              <div className="mt-1 text-sm text-muted-foreground">Кейс: {c.client}</div>
              <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-secondary p-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Стоимость</div>
                  <div className="font-display text-sm font-bold text-primary">{c.price}</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Срок под ключ</div>
                  <div className="font-display text-sm font-bold text-primary">{c.term}</div>
                </div>
              </div>
              <ol className="mt-4 flex-1 space-y-2 text-sm">
                {c.steps.map((s, n) => (
                  <li key={s} className="flex items-start gap-2 text-foreground/80">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{n + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-coral transition-all group-hover:gap-2">
                <CheckCircle2 className="h-4 w-4" /> Хочу так же <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
