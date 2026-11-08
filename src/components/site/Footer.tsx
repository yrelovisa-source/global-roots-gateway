import { MapPin, MessageCircle, Send } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Button } from "@/components/ui/button";
import { contactLinks, siteNavigation } from "@/components/site/SiteLinks";

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-border bg-secondary text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.3fr]">
        <div><a href="#top" aria-label="Yrelo.com — на главную"><BrandLogo compact /></a><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">Иммиграционный центр полного цикла. Легальные программы для переезда и второго гражданства.</p><a href={contactLinks.community} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky"><Send className="h-4 w-4" /> Новости Yrelo.com</a></div>
        <div><h2 className="text-sm font-semibold">Навигация</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{siteNavigation.map((item) => <li key={item.label}><a href={item.href} className="hover:text-sky">{item.label}</a></li>)}</ul></div>
        <div><h2 className="text-sm font-semibold">Направления</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground"><li><a href="#programs" className="hover:text-sky">Гражданство и репатриация</a></li><li><a href="#programs" className="hover:text-sky">ВНЖ и ПМЖ</a></li><li><a href="#services" className="hover:text-sky">Визы талантов</a></li><li><a href="#education" className="hover:text-sky">Образование за рубежом</a></li><li><a href="#realestate" className="hover:text-sky">Недвижимость</a></li><li><a href="#experts" className="hover:text-sky">Наша команда</a></li></ul></div>
        <div><h2 className="text-sm font-semibold">Контакты</h2><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{["Санкт-Петербург", "Нью-Йорк", "Барселона"].map((city) => <li key={city} className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-sky" />{city}</li>)}</ul><div className="mt-5 flex flex-wrap gap-2"><Button asChild variant="whatsapp"><a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button><Button asChild variant="telegram"><a href={contactLinks.telegram} target="_blank" rel="noopener noreferrer"><Send /> Telegram</a></Button></div><Button asChild variant="outline" className="mt-3"><a href="#consult">Бесплатная консультация</a></Button></div>
      </div>
      <div className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 pb-28 text-xs text-muted-foreground sm:pb-5"><span>© {new Date().getFullYear()} Yrelo.com. Все права защищены.</span><span>Не является юридической рекомендацией публичной оферты.</span></div></div>
    </footer>
  );
}