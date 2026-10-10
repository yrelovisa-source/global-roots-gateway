import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { programs } from "@/data/programs";
import { useReveal } from "@/hooks/use-reveal";

export function ProgramDirectory() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="all-programs" ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="reveal font-display text-4xl font-bold text-primary md:text-5xl">Все основания для переезда</h2>
      <p className="reveal mt-3 max-w-2xl text-muted-foreground">Подробно о каждой программе: условия, этапы, документы и заявка на консультацию.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p, i) => (
          <Link
            key={p.slug}
            to={`/programmy/${p.slug}`}
            style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            className="reveal group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-ring hover:shadow-glow"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-coral">{p.country}</div>
              <div className="mt-1 font-display text-lg font-bold text-primary">{p.title}</div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:rotate-45 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </section>
  );
}
