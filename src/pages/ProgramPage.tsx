import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { getProgram, programs } from "@/data/programs";
import { LeadForm } from "@/components/site/LeadForm";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactWidget } from "@/components/site/ContactWidget";

const SITE = "https://yrelo.com";

export default function ProgramPage() {
  const { slug } = useParams();
  const p = getProgram(slug);
  if (!p) return <Navigate to="/" replace />;
  const url = `${SITE}/programmy/${p.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.title,
      description: p.seoDescription,
      areaServed: p.country,
      provider: { "@type": "Organization", name: "Yrelo", url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: p.title, item: url },
      ],
    },
  ];

  return (
    <main className="relative overflow-x-hidden bg-background">
      <title>{p.seoTitle}</title>
      <meta name="description" content={p.seoDescription} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={p.seoTitle} />
      <meta property="og:description" content={p.seoDescription} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <Nav />
      <section className="bg-hero-gradient pb-16 pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_400px]">
          <div className="animate-[fade-in_0.5s_ease-out]">
            <nav aria-label="Хлебные крошки" className="text-sm text-muted-foreground">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-primary"><ArrowLeft className="h-4 w-4" /> Главная</Link>
              <span className="mx-2">/</span>{p.country}
            </nav>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary md:text-5xl">{p.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{p.intro}</p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {p.facts.map((f) => (
                <div key={f.label} className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</div>
                  <div className="mt-1 font-display text-lg font-bold text-primary">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start"><LeadForm program={p.title} /></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        {[
          { h: "Кому подходит", items: p.who },
          { h: "Этапы", items: p.steps.map((s, i) => `${i + 1}. ${s}`) },
          { h: "Документы", items: p.documents },
        ].map((b) => (
          <div key={b.h} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-primary">{b.h}</h2>
            <ul className="mt-4 space-y-2.5">
              {b.items.map((t) => (
                <li key={t} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" />{t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl font-bold text-primary">Частые вопросы</h2>
          <div className="mt-6 space-y-3">
            {p.faq.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-primary">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <a href="#lead" className="mt-8 inline-flex rounded-full bg-coral-gradient px-7 py-3.5 font-semibold text-primary shadow-coral transition hover:scale-105">
            Бесплатная консультация
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-primary">Другие программы</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {programs.filter((o) => o.slug !== p.slug).map((o) => (
            <Link key={o.slug} to={`/programmy/${o.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-ring">
              {o.title}
            </Link>
          ))}
        </div>
      </section>
      <Footer />
      <ContactWidget />
    </main>
  );
}
