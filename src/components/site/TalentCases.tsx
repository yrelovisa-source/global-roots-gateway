import { Award, ArrowRight, Clock, Wallet } from "lucide-react";

type TalentCase = { visa: string; country: string; client: string; strengths: string[]; cost: string; term: string; result: string };

const cases: TalentCase[] = [
  { visa: "O-1A", country: "США", client: "IT-архитектор, 34 года, Москва", strengths: ["Патент и 2 доклада на конференциях", "Высокая зарплата в топ-5% отрасли", "Рекомендации от CTO из США"], cost: "$14 500", term: "4,5 месяца", result: "Виза на 3 года, семья — O-3" },
  { visa: "O-1B", country: "США", client: "Фотограф, 29 лет, Санкт-Петербург", strengths: ["Публикации в Vogue и GQ", "Участие в международных выставках", "Премия на фестивале"], cost: "$12 900", term: "3 месяца", result: "Виза на 3 года, работа с агентством в NY" },
  { visa: "O-1A", country: "США", client: "Предприниматель, 41 год, Казань", strengths: ["Стартап с инвестициями $2 млн", "Статьи о компании в Forbes", "Членство в профассоциации"], cost: "$15 800", term: "5 месяцев", result: "Виза O-1A, далее EB-2 NIW внутри США" },
  { visa: "EB-1A", country: "США", client: "Учёный-биолог, 38 лет, Новосибирск", strengths: ["60+ публикаций и 900 цитирований", "Рецензент научных журналов", "Гранты и премии"], cost: "$18 000", term: "11 месяцев", result: "Грин-карта всей семье" },
  { visa: "Global Talent", country: "Великобритания", client: "Data Scientist, 31 год, Москва", strengths: ["Open-source проект 3 000+ звёзд", "Выступления на митапах", "Рекомендации лидеров Tech Nation"], cost: "£9 800", term: "4 месяца", result: "Виза на 5 лет, ILR через 3 года" },
  { visa: "Passeport Talent", country: "Франция", client: "Продакт-менеджер, 36 лет, Екатеринбург", strengths: ["Контракт от €53 000/год", "Опыт в международной компании", "Диплом магистра"], cost: "€6 500", term: "2,5 месяца", result: "ВНЖ на 4 года всей семье" },
];

export function TalentCases() {
  return (
    <div>
      <div className="reveal mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary md:text-3xl">Кейсы по визам талантов</h3>
          <p className="text-muted-foreground">Что усиливали в профиле клиентов и сколько стоило под ключ</p>
        </div>
        <a href="#consult" className="text-sm font-semibold text-coral hover:underline">Оценить мой профиль →</a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <a key={c.client} href="#consult" style={{ transitionDelay: `${i * 70}ms` }} className="reveal group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-2 hover:border-coral hover:shadow-glow">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-gradient px-3 py-1 text-xs font-bold text-coral-foreground shadow-coral"><Award className="h-3.5 w-3.5" />{c.visa}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.country}</span>
            </div>
            <div className="mt-3 font-display text-lg font-bold text-primary">{c.client}</div>
            <div className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Что усилили</div>
            <ul className="mt-2 flex-1 space-y-1.5 text-sm">
              {c.strengths.map((s) => <li key={s} className="flex items-start gap-2 text-foreground/80"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />{s}</li>)}
            </ul>
            <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-secondary p-3 text-sm">
              <div><div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-muted-foreground"><Wallet className="h-3 w-3" />Стоимость</div><div className="font-bold text-primary">{c.cost}</div></div>
              <div><div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-muted-foreground"><Clock className="h-3 w-3" />Срок</div><div className="font-bold text-primary">{c.term}</div></div>
            </div>
            <div className="mt-3 text-sm font-semibold text-primary">Итог: {c.result}</div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coral transition-all group-hover:gap-2">Хочу так же <ArrowRight className="h-4 w-4" /></span>
          </a>
        ))}
      </div>
    </div>
  );
}
