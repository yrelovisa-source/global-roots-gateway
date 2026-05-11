import { Plane, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-coral-gradient text-coral-foreground shadow-coral">
              <Plane className="h-4 w-4 -rotate-45" />
            </span>
            yrelo
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Иммиграционный центр полного цикла. Легальные программы для переезда и второго гражданства.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-coral">Программы</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#programs" className="hover:text-coral">США O-1A / O-1B</a></li>
            <li><a href="#programs" className="hover:text-coral">UK Global Talent</a></li>
            <li><a href="#programs" className="hover:text-coral">Гражданства за инвестиции</a></li>
            <li><a href="#realestate" className="hover:text-coral">ВНЖ через недвижимость</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-coral">Компания</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#services" className="hover:text-coral">Услуги</a></li>
            <li><a href="#reviews" className="hover:text-coral">Отзывы</a></li>
            <li><a href="#blog" className="hover:text-coral">Блог</a></li>
            <li><a href="#consult" className="hover:text-coral">Контакты</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-coral">Контакты</div>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-coral" /> hello@yrelo.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-coral" /> +1 (305) 555-01-23</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-coral" /> Дубай · Лиссабон · Тбилиси</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} yrelo. Все права защищены.</span>
          <span>Не является юридической рекомендацией публичной оферты.</span>
        </div>
      </div>
    </footer>
  );
}
