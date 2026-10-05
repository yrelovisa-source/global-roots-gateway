import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Briefcase, GraduationCap, Building2, Users } from "lucide-react";
import talentImage from "@/assets/facefree-talent.jpg";
import nomadImage from "@/assets/facefree-nomad.jpg";
import educationImage from "@/assets/facefree-campus.jpg";
import businessImage from "@/assets/facefree-business.jpg";

const services = [
  {
    title: "Визы талантов",
    desc: "США O-1A/O-1B, EB2-NIW, Global Talent UK — для специалистов с признанными достижениями.",
    Icon: Users,
    img: talentImage,
  },
  {
    title: "ВНЖ для кочевников",
    desc: "Digital nomad визы и резиденции через пассивный доход в странах ЕС.",
    Icon: Briefcase,
    img: nomadImage,
  },
  {
    title: "Образование за рубежом",
    desc: "Поступление в вузы, языковые и профкурсы с правом на работу и продление.",
    Icon: GraduationCap,
    img: educationImage,
  },
  {
    title: "Бизнес и стартапы",
    desc: "Открытие компаний и стартап-визы в США, UK, ЕС, Эмиратах и Сингапуре.",
    Icon: Building2,
    img: businessImage,
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" ref={ref} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
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
              className="reveal group relative block overflow-hidden border border-border bg-card-gradient text-card-foreground shadow-soft transition-all hover:-translate-y-2 hover:border-coral hover:shadow-glow"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-md bg-card/90 text-coral backdrop-blur ring-1 ring-border">
                  <s.Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="border-l-2 border-coral p-6">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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
