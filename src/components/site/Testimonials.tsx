import { useReveal } from "@/hooks/use-reveal";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Мария В.",
    role: "Product Designer → UK Global Talent",
    text: "Получили endorsement Tech Nation за 4 месяца. Помогли с портфолио, рекомендациями и подачей. Виза одобрена с первого раза.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Андрей К.",
    role: "Founder → США O-1A",
    text: "Команда Yrelo помогла собрать кейс на O-1A. Сейчас перевожу семью в Майами и готовим переход на EB-2 NIW.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Ольга Д.",
    role: "Семья → Greece Golden Visa",
    text: "Купили апартаменты в Афинах, ВНЖ на всю семью получили за 3 месяца. Дети уже в международной школе.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Игорь М.",
    role: "Инвестор → Гражданство Турции",
    text: "Подобрали ликвидный объект в Стамбуле, оформили паспорт за 5 месяцев. Юристы вели всю сделку.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="reviews" ref={ref} className="relative overflow-hidden bg-secondary py-20 text-foreground md:py-28">

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Отзывы клиентов</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Истории тех, кто уже переехал</h2>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-coral text-coral" />
            <Star className="h-5 w-5 fill-coral text-coral" />
            <Star className="h-5 w-5 fill-coral text-coral" />
            <Star className="h-5 w-5 fill-coral text-coral" />
            <Star className="h-5 w-5 fill-coral text-coral" />
            <span className="ml-2 font-semibold">4.97 / 5 — 380 отзывов</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal relative rounded-lg bg-card p-7 ring-1 ring-border transition hover:-translate-y-1 hover:shadow-soft"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-coral/60" />
              <p className="text-lg leading-relaxed text-foreground">{r.text}</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={r.avatar} alt={r.name} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-coral/40" />
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
