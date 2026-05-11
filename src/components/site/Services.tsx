import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Briefcase, GraduationCap, Building2, Users } from "lucide-react";

const services = [
  {
    title: "Визы талантов",
    desc: "США O-1A/O-1B, EB2-NIW, Global Talent UK — для специалистов с признанными достижениями.",
    Icon: Users,
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "ВНЖ для кочевников",
    desc: "Digital nomad визы и резиденции через пассивный доход в странах ЕС.",
    Icon: Briefcase,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Образование за рубежом",
    desc: "Поступление в вузы, языковые и профкурсы с правом на работу и продление.",
    Icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80&auto=format&fit=crop",
  },
  {
    title: "Бизнес и стартапы",
    desc: "Открытие компаний и стартап-визы в США, UK, ЕС, Эмиратах и Сингапуре.",
    Icon: Building2,
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format&fit=crop",
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" ref={ref} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Что мы делаем</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Программы, которые меняют жизнь
          </h2>
          <p className="mt-4 text-muted-foreground">
            Подбираем легальный маршрут для вас и семьи — от ВНЖ до второго гражданства.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <a
              key={s.title}
              href="#consult"
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal group relative block overflow-hidden rounded-3xl bg-card-gradient text-primary-foreground shadow-soft transition-all hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/15 backdrop-blur ring-1 ring-white/30">
                  <s.Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-coral transition-all group-hover:gap-2">
                  Узнать подробнее <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
