import { useReveal } from "@/hooks/use-reveal";
import { Plane, BadgePercent, Handshake, Gift } from "lucide-react";
import cyprusVilla from "@/assets/cyprus-villa.jpg";

type Item = {
  country: string;
  flag: string;
  title: string;
  desc: string;
  price: string;
  img: string;
};

const items: Item[] = [
  {
    country: "Греция",
    flag: "🇬🇷",
    title: "Golden Visa через недвижимость",
    desc: "Апартаменты и виллы в Афинах, Глифаде, на Крите. ВНЖ всей семье.",
    price: "от €250 000",
    img: "https://images.unsplash.com/photo-1503152394-c571994fd383?w=900&q=80&auto=format&fit=crop",
  },
  {
    country: "Кипр",
    flag: "🇨🇾",
    title: "ПМЖ через недвижимость",
    desc: "Виллы в Лимассоле и Пафосе, новостройки у моря. ПМЖ за 2 месяца.",
    price: "от €300 000",
    img: cyprusVilla,
  },
  {
    country: "Турция",
    flag: "🇹🇷",
    title: "Гражданство за инвестиции",
    desc: "Квартиры и резиденции в Стамбуле и Анталии. Паспорт за 4–6 месяцев.",
    price: "от $400 000",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=900&q=80&auto=format&fit=crop",
  },
  {
    country: "Испания",
    flag: "\n",
    title: "Жилая и коммерческая недвижимость",
    desc: "Барселона, Валенсия, Коста-Брава. Под digital nomad визу и Non-Lucrative.",
    price: "от €180 000",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80&auto=format&fit=crop",
  },
  {
    country: "Франция",
    flag: "\n",
    title: "Апартаменты и доходная недвижимость",
    desc: "Париж, Лазурный берег. Под визу талантов Passeport Talent.",
    price: "от €350 000",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80&auto=format&fit=crop",
  },
  {
    country: "Португалия",
    flag: "\n",
    title: "Лиссабон, Порту и Алгарве",
    desc: "Под D7 и D8 (digital nomad). Доходные квартиры и виллы.",
    price: "от €220 000",
    img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80&auto=format&fit=crop",
  },
  {
    country: "Бали",
    flag: "🇮🇩",
    title: "KITAS — резиденция инвестора",
    desc: "Виллы в Чангу и Убуде. KITAS на 2 года под ваш бизнес или работу.",
    price: "от $180 000",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80&auto=format&fit=crop",
  },
  {
    country: "Таиланд",
    flag: "🇹🇭",
    title: "DTV и Investor Visa",
    desc: "Кондоминиумы Бангкока, Пхукета, Самуи. DTV до 5 лет, ELITE для инвесторов.",
    price: "от $120 000",
    img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=80&auto=format&fit=crop",
  },
];

export function RealEstate() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="realestate" ref={ref} className="relative bg-soft-gradient py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Резиденции через недвижимость</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Объекты, которые дают статус
          </h2>
          <p className="mt-4 text-muted-foreground">
            Подбираем ликвидные объекты, проверяем юридически и сопровождаем сделку.
          </p>
        </div>

        {/* Invest tour offer */}
        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-coral/30 bg-card shadow-glow">
          <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-coral-gradient px-3 py-1 text-xs font-bold uppercase tracking-wider text-coral-foreground shadow-coral">
                <Gift className="h-3.5 w-3.5" /> Бонус для клиентов
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-primary md:text-3xl">
                Инвест-тур по локациям — в подарок
              </h3>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Прилетаете на 3–5 дней: смотрим объекты вживую, встречаемся с застройщиками,
                разбираем налоги и условия ВНЖ. Тур бесплатно при выходе на сделку.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="flex items-start gap-2 text-sm">
                  <Handshake className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
                  <span><b className="text-primary">Цены напрямую</b> от застройщиков, без посредников</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <BadgePercent className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
                  <span><b className="text-primary">Комиссия 0%</b> — мы зарабатываем у девелопера</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Plane className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
                  <span><b className="text-primary">Перелёт и отель</b> компенсируем при покупке</span>
                </div>
              </div>
            </div>
            <a href="#consult" className="inline-flex items-center justify-center gap-2 rounded-full bg-coral-gradient px-7 py-3.5 text-sm font-semibold text-coral-foreground shadow-coral transition hover:scale-[1.04] md:self-center">
              Записаться на инвест-тур
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <a
              key={it.country + it.title}
              href="#consult"
              style={{ transitionDelay: `${i * 60}ms` }}
              className="reveal group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-soft">
                  <span className="text-base leading-none">{it.flag}</span> {it.country}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display text-lg font-bold text-white drop-shadow">{it.title}</div>
                  <div className="mt-1 text-xs text-white/85">{it.price}</div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{it.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-coral group-hover:underline">Посмотреть объекты →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
