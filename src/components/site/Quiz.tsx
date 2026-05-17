import { useMemo, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowLeft, ArrowRight, Check, Sparkles, Loader2 } from "lucide-react";

const countries = [
  { id: "usa", flag: "🇺🇸", label: "США" },
  { id: "uk", flag: "🇬🇧", label: "Великобритания" },
  { id: "eu", flag: "🇪🇺", label: "Евросоюз" },
  { id: "greece", flag: "🇬🇷", label: "Греция" },
  { id: "cyprus", flag: "🇨🇾", label: "Кипр" },
  { id: "turkey", flag: "🇹🇷", label: "Турция" },
  { id: "latam", flag: "🌎", label: "Лат. Америка" },
  { id: "asia", flag: "🌏", label: "Азия (Бали/Таиланд)" },
  { id: "cbi", flag: "🛂", label: "Второе гражданство" },
  { id: "any", flag: "✨", label: "Подберите сами" },
];

const goals = [
  { id: "talent", label: "Виза таланта", desc: "O-1, EB-2 NIW, Global Talent" },
  { id: "passive", label: "Пассивный доход / digital nomad", desc: "ВНЖ для удалёнщиков" },
  { id: "business", label: "Бизнес и стартап", desc: "Открытие компании, стартап-виза" },
  { id: "realestate", label: "Через недвижимость", desc: "Greece, Cyprus, Turkey, Spain" },
  { id: "study", label: "Образование", desc: "Вуз, языковые и профкурсы" },
  { id: "roots", label: "Корни / репатриация", desc: "Чили, Аргентина, Испания" },
  { id: "citizenship", label: "Второе гражданство", desc: "Вануату, Сан-Томе" },
  { id: "family", label: "Переезд семьёй", desc: "Включая детей и родителей" },
];

const budgets = [
  { id: "lt50", label: "До $50 000" },
  { id: "50_150", label: "$50 000 – $150 000" },
  { id: "150_500", label: "$150 000 – $500 000" },
  { id: "gt500", label: "Свыше $500 000" },
  { id: "unknown", label: "Пока не определился" },
];

const timing = [
  { id: "asap", label: "Срочно — в этом месяце" },
  { id: "3m", label: "В ближайшие 3 месяца" },
  { id: "year", label: "В течение года" },
  { id: "research", label: "Изучаю варианты" },
];

export function Quiz() {
  const ref = useReveal<HTMLDivElement>();
  const [step, setStep] = useState(0);
  const [country, setCountry] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const steps = ["Страна", "Цель", "Бюджет", "Срок", "Контакты"];
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const canNext =
    (step === 0 && !!country) ||
    (step === 1 && !!goal) ||
    (step === 2 && !!budget) ||
    (step === 3 && !!time) ||
    (step === 4 && name.trim().length > 1 && contact.trim().length > 4);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canNext || sending) return;
    setSending(true);
    setError(null);
    try {
      const labelOf = <T extends { id: string; label: string }>(arr: T[], id: string | null) =>
        arr.find((x) => x.id === id)?.label ?? id ?? "";

      const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;
      if (!token || !chatId) {
        setError("Форма не настроена. Свяжитесь с нами через WhatsApp или Telegram.");
        setSending(false);
        return;
      }

      const esc = (s: string) =>
        s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      const text =
        `🔥 <b>Новая заявка yrelo.com</b>\n\n` +
        `👤 <b>Имя:</b> ${esc(name.trim())}\n` +
        `📞 <b>Контакт:</b> ${esc(contact.trim())}\n` +
        `🌍 <b>Страна:</b> ${esc(labelOf(countries, country))}\n` +
        `🎯 <b>Цель:</b> ${esc(labelOf(goals, goal))}\n` +
        `💰 <b>Бюджет:</b> ${esc(labelOf(budgets, budget))}\n` +
        `⏱ <b>Срок:</b> ${esc(labelOf(timing, time))}`;

      const resp = await fetch(`https://api.telegram.org/bot${encodeURIComponent(token)}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      });
      const res = await resp.json().catch(() => ({ ok: false }));
      if (resp.ok && res?.ok) {
        setSent(true);
      } else {
        const description = typeof res?.description === "string" ? res.description : "";
        const hint = description.includes("chat not found")
          ? "Проверьте VITE_TELEGRAM_CHAT_ID: бот должен быть добавлен в чат или пользователь должен сначала написать боту."
          : description.includes("Unauthorized")
            ? "Проверьте VITE_TELEGRAM_BOT_TOKEN в GitHub Secrets."
            : "Напишите нам напрямую в WhatsApp или Telegram.";
        setError(`Не удалось отправить заявку. ${hint}`);
      }
    } catch {
      setError("Не удалось отправить заявку. Напишите нам напрямую в WhatsApp или Telegram.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="consult" ref={ref} className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-72 bg-hero-gradient opacity-50 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-coral">
            <Sparkles className="h-3.5 w-3.5" /> Бесплатная консультация
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Подберём программу за 2 минуты
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ответьте на 4 вопроса — иммиграционный консультант пришлёт стратегию и стоимость.
          </p>
        </div>

        <div className="reveal-scale mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
          {!sent ? (
            <form onSubmit={submit} className="grid lg:grid-cols-[1fr_320px]">
              <div className="p-8 md:p-10">
                <div className="mb-6 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <span>Шаг {step + 1} из {steps.length}</span>
                  <span>{steps[step]}</span>
                </div>
                <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-coral-gradient transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>

                <div key={step} className="animate-[fade-in_0.4s_ease-out]">
                  {step === 0 && (
                    <>
                      <h3 className="font-display text-2xl font-bold text-primary">Какая страна интересует?</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Можно выбрать регион — поможем с конкретикой.</p>
                      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {countries.map((c) => (
                          <button key={c.id} type="button" onClick={() => setCountry(c.id)}
                            className={`flex items-center gap-2 rounded-2xl border-2 p-4 text-left text-sm font-semibold transition ${
                              country === c.id ? "border-coral bg-coral/10 text-primary shadow-coral" : "border-border bg-card hover:border-coral/40"
                            }`}>
                            <span className="text-xl">{c.flag}</span>{c.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <h3 className="font-display text-2xl font-bold text-primary">Для чего вам ВНЖ или гражданство?</h3>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {goals.map((g) => (
                          <button key={g.id} type="button" onClick={() => setGoal(g.id)}
                            className={`rounded-2xl border-2 p-4 text-left transition ${
                              goal === g.id ? "border-coral bg-coral/10 shadow-coral" : "border-border hover:border-coral/40"
                            }`}>
                            <div className="font-semibold text-primary">{g.label}</div>
                            <div className="text-xs text-muted-foreground">{g.desc}</div>
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <h3 className="font-display text-2xl font-bold text-primary">Какой бюджет на программу?</h3>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {budgets.map((b) => (
                          <button key={b.id} type="button" onClick={() => setBudget(b.id)}
                            className={`rounded-2xl border-2 p-4 text-left font-semibold transition ${
                              budget === b.id ? "border-coral bg-coral/10 text-primary shadow-coral" : "border-border hover:border-coral/40"
                            }`}>
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <h3 className="font-display text-2xl font-bold text-primary">Когда планируете старт?</h3>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {timing.map((t) => (
                          <button key={t.id} type="button" onClick={() => setTime(t.id)}
                            className={`rounded-2xl border-2 p-4 text-left font-semibold transition ${
                              time === t.id ? "border-coral bg-coral/10 text-primary shadow-coral" : "border-border hover:border-coral/40"
                            }`}>
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {step === 4 && (
                    <>
                      <h3 className="font-display text-2xl font-bold text-primary">Куда отправить стратегию?</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Свяжемся в течение часа. Ваши данные защищены.</p>
                      <div className="mt-6 space-y-3">
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="w-full rounded-2xl border-2 border-border bg-card px-5 py-4 text-base outline-none transition focus:border-coral" />
                        <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Telegram, WhatsApp или email" className="w-full rounded-2xl border-2 border-border bg-card px-5 py-4 text-base outline-none transition focus:border-coral" />
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-10 flex items-center justify-between gap-3">
                  <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary transition disabled:opacity-40 hover:bg-secondary">
                    <ArrowLeft className="h-4 w-4" /> Назад
                  </button>

                  {step < steps.length - 1 ? (
                    <button type="button" disabled={!canNext} onClick={() => setStep((s) => s + 1)}
                      className="inline-flex items-center gap-2 rounded-full bg-coral-gradient px-7 py-3.5 text-sm font-semibold text-coral-foreground shadow-coral transition disabled:opacity-50 hover:scale-105">
                      Далее <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button type="submit" disabled={!canNext || sending}
                      className="inline-flex items-center gap-2 rounded-full bg-coral-gradient px-7 py-3.5 text-sm font-semibold text-coral-foreground shadow-coral transition disabled:opacity-50 hover:scale-105">
                      {sending ? (<>Отправляем… <Loader2 className="h-4 w-4 animate-spin" /></>) : (<>Получить стратегию <Check className="h-4 w-4" /></>)}
                    </button>
                  )}
                </div>
                {error && (
                  <p className="mt-4 text-sm text-destructive">{error}</p>
                )}
              </div>

              <aside className="hidden flex-col justify-between bg-card-gradient p-8 text-primary-foreground lg:flex">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/70">Что вы получите</div>
                  <ul className="mt-5 space-y-4">
                    {[
                      "2–3 рабочие программы под профиль",
                      "Сроки, бюджет и шаги",
                      "Список документов и рисков",
                      "Цена и условия договора",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-coral-gradient text-coral-foreground">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
                  <div className="text-sm">Среднее время ответа</div>
                  <div className="mt-1 font-display text-2xl font-bold">2 минуты</div>
                </div>
              </aside>
            </form>
          ) : (
            <div className="p-12 text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-coral-gradient text-coral-foreground shadow-coral">
                <Check className="h-9 w-9" />
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold text-primary">Заявка отправлена!</h3>
              <p className="mt-3 text-muted-foreground">Иммиграционный консультант свяжется в течение часа в выбранном мессенджере.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
