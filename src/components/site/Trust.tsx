import passportImg from "@/assets/passport-tickets.jpg";
import { WorldMap } from "@/components/site/WorldMap";
import { useReveal } from "@/hooks/use-reveal";
import { CheckCircle2, ShieldCheck, FileCheck, Clock } from "lucide-react";

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
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Почему Yrelo</span>
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
              Помогаем мигрировать на 5 континентах
            </h3>
            <p className="mt-3 text-muted-foreground">Наведите на страну или выберите её из списка — увидите программы и сможете записаться на консультацию.</p>
          </div>
          <WorldMap />
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
          <div className="reveal grid grid-cols-2 gap-4">
            {[["5", "этапов под контролем"], ["800+", "закрытых кейсов"], ["30", "дней — от подачи"], ["0", "скрытых платежей"]].map(([v, l], i) => (
              <div key={l} style={{ transitionDelay: `${i * 90}ms` }} className="reveal group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-coral">
                <div className="font-display text-5xl font-bold text-primary transition group-hover:text-sky">{v}</div>
                <div className="mt-2 h-1 w-10 rounded-full bg-coral transition-all duration-500 group-hover:w-20" />
                <div className="mt-3 text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultant featured */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative order-2 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft lg:order-1">
            <div className="flex items-center gap-3"><span className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-60" /><span className="relative h-3 w-3 rounded-full bg-whatsapp" /></span><span className="text-sm font-semibold text-primary">Менеджер на связи</span></div>
            <div className="mt-6 font-display text-7xl font-bold leading-none text-primary md:text-8xl">24<span className="text-sky">/</span>7</div>
            <p className="mt-4 text-muted-foreground">Ответ в мессенджере в среднем за 15 минут — в любом часовом поясе.</p>
            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-secondary"><div className="h-full w-1/3 animate-[progress-slide_2.4s_ease-in-out_infinite] rounded-full bg-coral" /></div>
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
