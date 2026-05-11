import { useReveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Как получить O-1A в США в 2026: чек-лист доказательств",
    excerpt: "Разбираем 8 критериев USCIS и реальные примеры досье, которые получают одобрение.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop",
    tag: "США",
  },
  {
    title: "Greece Golden Visa: новые пороги €250–800k",
    excerpt: "Какие зоны попали под €800k, где остались €250k и какие объекты выгоднее.",
    img: "https://images.unsplash.com/photo-1503152394-c571994fd383?w=900&q=80&auto=format&fit=crop",
    tag: "Греция",
  },
  {
    title: "DTV Таиланд: пятилетняя виза без инвестиций",
    excerpt: "Кому подходит, как доказать удалённую работу и что делать с налогами.",
    img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=80&auto=format&fit=crop",
    tag: "Таиланд",
  },
];

export function Blog() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="blog" ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Блог</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">Полезные материалы и кейсы</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <a
              key={p.title}
              href="#consult"
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-coral-gradient px-3 py-1 text-xs font-bold text-coral-foreground shadow-coral">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-coral group-hover:gap-2 transition-all">
                  Читать <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
