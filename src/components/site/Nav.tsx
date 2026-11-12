import { useState } from "react";
import { ChevronDown, Menu, MessageCircle, Send, X } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Button } from "@/components/ui/button";
import { contactLinks, siteNavigation } from "@/components/site/SiteLinks";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 shadow-soft backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" aria-label="Yrelo.com — на главную"><BrandLogo /></a>
        <p className="hidden border-l border-border pl-5 text-xs leading-relaxed text-muted-foreground xl:block">Иммиграционный центр<br />ВНЖ · ПМЖ · Гражданство</p>
        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <Button asChild variant="lime" className="h-11"><a href={contactLinks.community} target="_blank" rel="noopener noreferrer"><Send /> Подписаться</a></Button>
          <span className="text-xs leading-relaxed text-muted-foreground">Следите за новостями<br /><a href={contactLinks.community} target="_blank" rel="noopener noreferrer" className="font-medium text-sky">в нашем Telegram-сообществе</a></span>
          <Button asChild variant="outline" size="icon" className="rounded-full" title="Написать в Telegram"><a href={contactLinks.telegram} target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram"><Send /></a></Button>
          <Button asChild variant="outline" size="icon" className="rounded-full" title="Написать в WhatsApp"><a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Написать в WhatsApp"><MessageCircle /></a></Button>
        </div>
        <Button asChild variant="lime" size="sm" className="ml-auto animate-cta-pulse whitespace-nowrap px-3 text-xs lg:hidden"><a href="#consult" onClick={() => setOpen(false)}>Консультация</a></Button>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      <nav aria-label="Основное меню" className="mx-auto mb-3 hidden max-w-6xl items-center justify-between rounded-lg border border-border bg-card px-3 shadow-soft lg:flex">
        {siteNavigation.map((item) => (
          <div key={item.label} className="group relative">
            <a href={item.href} className="flex items-center gap-2 px-4 py-4 text-sm font-semibold text-foreground transition hover:text-sky">{item.label}{item.children && <ChevronDown className="h-4 w-4" />}</a>
            {item.children && <div className="invisible absolute left-0 top-full min-w-64 rounded-lg border border-border bg-card p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">{item.children.map((child) => <a key={child.label} href={child.href} className="block rounded-md px-3 py-3 text-sm text-foreground hover:bg-secondary focus:bg-secondary">{child.label}</a>)}</div>}
          </div>
        ))}
        <Button asChild variant="lime" className="ml-2"><a href="#consult">Бесплатная консультация</a></Button>
      </nav>
      {open && <nav id="mobile-navigation" aria-label="Мобильное меню" className="max-h-[calc(100dvh-84px)] overflow-y-auto border-t border-border bg-card px-5 pb-5 lg:hidden">
        {siteNavigation.map((item) => item.children ? <details key={item.label} className="border-b border-border"><summary className="cursor-pointer py-3 font-semibold">{item.label}</summary><div className="pb-2 pl-3">{item.children.map((child) => <a key={child.label} href={child.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">{child.label}</a>)}</div></details> : <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-semibold">{item.label}</a>)}
        <div className="mt-4 flex flex-wrap gap-2"><Button asChild variant="lime"><a href="#consult" onClick={() => setOpen(false)}>Бесплатная консультация</a></Button><Button asChild variant="telegram"><a href={contactLinks.community} target="_blank" rel="noopener noreferrer"><Send /> Новости Yrelo.com</a></Button></div>
        <div className="mt-3 flex gap-2"><Button asChild variant="whatsapp"><a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button><Button asChild variant="telegram"><a href={contactLinks.telegram} target="_blank" rel="noopener noreferrer"><Send /> Telegram</a></Button></div>
      </nav>}
    </header>
  );
}