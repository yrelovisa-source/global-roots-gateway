import { useEffect, useState } from "react";
import logo from "@/assets/yrelo-logo.png";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#programs", label: "Программы" },
  { href: "#education", label: "Образование" },
  { href: "#realestate", label: "Недвижимость" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#blog", label: "Блог" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2" aria-label="yrelo — на главную">
          <img src={logo} alt="yrelo" width={120} height={36} className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-foreground/70 transition hover:text-primary
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                after:bg-coral after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#consult"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-coral-gradient px-5 py-2.5 text-sm font-semibold text-coral-foreground shadow-coral transition hover:scale-[1.04]"
        >
          <span className="relative z-10">Бесплатная консультация</span>
          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
        </a>
      </div>
    </header>
  );
}
