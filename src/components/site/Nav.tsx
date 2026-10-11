import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { programs } from "@/data/programs";

const sections = [
  { href: "/#services", label: "Услуги" },
  { href: "/#education", label: "Образование" },
  { href: "/#realestate", label: "Недвижимость" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/#blog", label: "Блог" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  const consultation = pathname.startsWith("/programmy/") ? "#lead" : "/#consult";
  useEffect(() => { setMobileOpen(false); setDropdown(false); }, [pathname]);
  useEffect(() => {
    const dismiss = (event: KeyboardEvent) => { if (event.key === "Escape") setDropdown(false); };
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95">
      <div className="relative mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-3 px-4 lg:px-6">
        <Link to="/#top" aria-label="Yrelo — на главную" className="shrink-0"><BrandLogo /></Link>
        <nav aria-label="Основное меню" className="hidden items-center gap-4 text-sm font-medium lg:flex">
          <Link to="/#services" className="hover:text-sky">Услуги</Link>
          <div onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDropdown(false); }}>
            <Button variant="ghost" aria-expanded={dropdown} aria-controls="programs-menu" onClick={() => setDropdown(!dropdown)} onFocus={() => setDropdown(true)} className="gap-1 px-2">Программы <ChevronDown className={dropdown ? "rotate-180" : ""} /></Button>
            {dropdown && <div id="programs-menu" className="absolute inset-x-4 top-full max-h-[75vh] overflow-y-auto rounded-b-lg border border-border bg-card p-5 shadow-soft">
              <div className="grid grid-cols-3 gap-2">
                {programs.map((p) => <Link key={p.slug} to={`/programmy/${p.slug}`} onClick={() => setDropdown(false)} className="rounded-md px-3 py-3 text-sm hover:bg-secondary focus-visible:bg-secondary">{p.title}</Link>)}
              </div>
              <Link to="/#programs" onClick={() => setDropdown(false)} className="mt-4 inline-flex font-semibold text-sky">Все программы →</Link>
            </div>}
          </div>
          {sections.slice(1).map((link) => <Link key={link.href} to={link.href} className="hover:text-sky">{link.label}</Link>)}
        </nav>
        <Button asChild className="hidden h-auto shrink-0 gap-2 bg-coral-gradient px-4 py-3 text-primary sm:inline-flex">
          <Link to={consultation}><span aria-hidden="true" className="online-indicator h-2 w-2 rounded-full bg-primary" /> Бесплатная консультация</Link>
        </Button>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild><Button variant="outline" size="icon" aria-label="Открыть меню" className="h-11 w-11 shrink-0 lg:hidden"><Menu /></Button></SheetTrigger>
          <SheetContent aria-describedby={undefined} className="w-[min(90vw,400px)] overflow-y-auto pb-10">
            <SheetTitle className="mb-7 text-left">Меню Yrelo</SheetTitle>
            <nav aria-label="Мобильное меню" className="flex flex-col gap-2">
              <Link to="/#services" onClick={() => setMobileOpen(false)} className="py-3 font-semibold">Услуги</Link>
              <details className="border-y border-border py-3">
                <summary className="cursor-pointer font-semibold">Программы</summary>
                <div className="mt-3 flex flex-col gap-1">{programs.map((p) => <Link key={p.slug} to={`/programmy/${p.slug}`} onClick={() => setMobileOpen(false)} className="rounded-md px-2 py-3 text-sm hover:bg-secondary">{p.title}</Link>)}</div>
              </details>
              {sections.slice(1).map((link) => <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className="py-3 font-semibold">{link.label}</Link>)}
              <Button asChild className="mt-4 h-auto whitespace-normal bg-coral-gradient py-4 text-primary"><Link to={consultation} onClick={() => setMobileOpen(false)}>Бесплатная консультация</Link></Button>
              <Button asChild variant="outline" className="mt-2 h-auto whitespace-normal py-3"><a href="https://t.me/yrelo" target="_blank" rel="noopener noreferrer"><MessageCircle /> Чат с экспертом онлайн</a></Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
