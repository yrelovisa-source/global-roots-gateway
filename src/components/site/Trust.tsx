import passportImg from "@/assets/passport.jpg";
import caseImg from "@/assets/case-management.jpg";
import consultantImg from "@/assets/consultant.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { CheckCircle2, ShieldCheck, FileCheck, Clock } from "lucide-react";

const dots = [
  { top: "29%", left: "23%", label: "США" },
  { top: "19%", left: "21%", label: "Канада" },
  { top: "20%", left: "49%", label: "UK" },
  { top: "21%", left: "51%", label: "Нидерланды" },
  { top: "22%", left: "53%", label: "Германия" },
  { top: "24%", left: "50%", label: "Франция" },
  { top: "27%", left: "48%", label: "Испания" },
  { top: "28%", left: "47%", label: "Португалия" },
  { top: "29%", left: "56%", label: "Греция" },
  { top: "27%", left: "55%", label: "Черногория" },
  { top: "26%", left: "56%", label: "Сербия" },
  { top: "28%", left: "60%", label: "Турция" },
  { top: "31%", left: "59%", label: "Кипр" },
  { top: "28%", left: "63%", label: "Армения" },
  { top: "42%", left: "78%", label: "Таиланд" },
  { top: "54%", left: "82%", label: "Бали" },
  { top: "64%", left: "87%", label: "Австралия" },
  { top: "56%", left: "35%", label: "Бразилия" },
  { top: "67%", left: "30%", label: "Чили" },
  { top: "69%", left: "32%", label: "Аргентина" },
];

export function Trust() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative bg-soft-gradient py-20 md:py-28">
      <div className="mx-auto max-w-6xl space-y-24 px-6">
        {/* Trust block with passport */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-scale relative order-2 lg:order-1">
            <div className="absolute -inset-6 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-glow">
              <img src={passportImg} alt="Паспорт и билеты" loading="lazy" className="h-[420px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-card p-4 shadow-coral animate-float-y">
              <div className="text-xs text-muted-foreground">Срок одобрения</div>
              <div className="font-display text-2xl font-bold text-coral">от 30 дней</div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Почему yrelo</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
              Делаем переезд предсказуемым
            </h2>
            <p className="mt-4 text-muted-foreground">
              Юристы и иммиграционные консультанты с опытом в 25+ юрисдикциях. Работаем по
              договору и фиксированной цене, ведём кейс до получения статуса.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { Icon: ShieldCheck, t: "Договор и гарантии", d: "Этапная оплата, чёткие KPI и SLA по срокам." },
                { Icon: FileCheck, t: "Юридическая чистота", d: "Только легальные программы, без серых схем." },
                { Icon: Clock, t: "Полное сопровождение", d: "От стратегии и документов до релокации семьи." },
              ].map(({ Icon, t, d }) => (
                <li key={t} className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-coral/10 text-coral">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold text-primary">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#consult" className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral-gradient px-7 py-3.5 font-semibold text-coral-foreground shadow-coral hover:scale-105 transition">
              Получить консультацию
            </a>
          </div>
        </div>

        {/* Map block */}
        <div>
          <div className="reveal mx-auto max-w-2xl text-center">
            <h3 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Помогаем мигрировать на 4 континентах
            </h3>
            <p className="mt-3 text-muted-foreground">Кликните на точку — увидите программу страны.</p>
          </div>
          <div className="reveal-scale relative mt-10 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
            <div className="relative aspect-[2/1] w-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/1280px-Equirectangular_projection_SW.jpg"
                alt="Карта мира"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply"
              />
              <div className="absolute inset-0 grid-bg opacity-40" />
              {dots.map((d, i) => (
                <a key={d.label} href="#consult" style={{ top: d.top, left: d.left, animationDelay: `${i * 120}ms` }} className="group absolute -translate-x-1/2 -translate-y-1/2">
                  <span className="relative grid h-3.5 w-3.5 place-items-center rounded-full bg-coral pulse-ring" />
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground opacity-0 shadow-soft transition group-hover:opacity-100">
                    {d.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Suitcase + checklist */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">5 шагов</span>
            <h3 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
              Как мы ведём ваш кейс
            </h3>
            <ul className="mt-8 space-y-3">
              {[
                "Бесплатная диагностика профиля и целей",
                "Подбор 2–3 программ под бюджет и сроки",
                "Сбор и легализация документов под ключ",
                "Подача и сопровождение в посольстве",
                "Релокация семьи: жильё, школы, банки",
              ].map((t, i) => (
                <li key={t} style={{ transitionDelay: `${i * 60}ms` }} className="reveal flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
                  <span className="font-medium text-primary">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-scale relative">
            <div className="absolute -inset-8 rounded-full bg-sky/40 blur-3xl animate-blob" />
            <img src={caseImg} alt="Команда yrelo сопровождает кейс" loading="lazy" className="relative animate-float-y rounded-3xl object-cover shadow-glow" />
          </div>
        </div>

        {/* Consultant featured */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-scale relative order-2 lg:order-1">
            <div className="absolute inset-6 rounded-full bg-sky animate-blob" />
            <img src={consultantImg} alt="Личный консультант" loading="lazy" className="relative mx-auto h-[420px] w-[420px] rounded-full object-cover shadow-glow ring-8 ring-white" />
          </div>
          <div className="reveal order-1 lg:order-2">
            <h3 className="font-display text-3xl font-bold text-primary md:text-4xl">
              Личный иммиграционный менеджер 24/7
            </h3>
            <p className="mt-4 text-muted-foreground">
              Один человек, который знает ваш кейс, страну и сроки. Связь в мессенджере,
              онлайн-кабинет с документами и статусами.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Мультистрановой подбор",
                "Документы под ключ",
                "Поддержка после переезда",
                "Сопровождение семьи",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-primary shadow-soft">
                  <CheckCircle2 className="h-4 w-4 text-coral" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
