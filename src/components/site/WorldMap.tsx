import { useEffect, useRef, useState } from "react";
import { ArrowRight, Globe2, MapPin } from "lucide-react";
import worldLand from "@/assets/world-land.svg";

type Destination = {
  country: string;
  programs: string[];
  longitude: number;
  latitude: number;
};

const destinations: Destination[] = [
  { country: "Канада", longitude: -106, latitude: 57, programs: ["Учёба и поступление", "Иммиграционные программы"] },
  { country: "США", longitude: -98, latitude: 39, programs: ["Виза талантов O-1", "EB-2 NIW"] },
  { country: "Великобритания", longitude: -2, latitude: 54, programs: ["Global Talent", "Школы и университеты"] },
  { country: "Португалия", longitude: -8, latitude: 39, programs: ["ВНЖ D7 — пассивный доход", "Недвижимость"] },
  { country: "Испания", longitude: -4, latitude: 40, programs: ["Digital Nomad на 3 года", "Университеты и магистратура", "Недвижимость"] },
  { country: "Франция", longitude: 2, latitude: 47, programs: ["Passeport Talent", "Стартап-виза", "Обучение"] },
  { country: "Нидерланды", longitude: 5, latitude: 52, programs: ["Исследовательские университеты", "Обучение"] },
  { country: "Германия", longitude: 10, latitude: 51, programs: ["Бесплатное высшее образование", "Учёба"] },
  { country: "Хорватия", longitude: 16, latitude: 45, programs: ["Digital Nomad — подача из РФ"] },
  { country: "Италия", longitude: 12, latitude: 42, programs: ["Elective Residence", "Обучение и гранты"] },
  { country: "Черногория", longitude: 19, latitude: 42, programs: ["Подбор маршрута переезда"] },
  { country: "Сербия", longitude: 21, latitude: 44, programs: ["ВНЖ через бизнес", "ВНЖ через недвижимость"] },
  { country: "Греция", longitude: 24, latitude: 38, programs: ["Golden Visa через недвижимость"] },
  { country: "Кипр", longitude: 33, latitude: 35, programs: ["ПМЖ через недвижимость"] },
  { country: "Турция", longitude: 35, latitude: 39, programs: ["Гражданство через инвестиции"] },
  { country: "Армения", longitude: 45, latitude: 40, programs: ["Репатриация по корням"] },
  { country: "Израиль", longitude: 35, latitude: 31, programs: ["Репатриация — алия"] },
  { country: "ОАЭ", longitude: 54, latitude: 24, programs: ["Golden Visa", "Freelance-виза"] },
  { country: "Таиланд", longitude: 101, latitude: 16, programs: ["Виза DTV", "Инвестиционная виза"] },
  { country: "Бали", longitude: 115, latitude: -8, programs: ["KITAS инвестора", "Недвижимость"] },
  { country: "Бразилия", longitude: -52, latitude: -13, programs: ["Гражданство при рождении"] },
  { country: "Перу", longitude: -75, latitude: -10, programs: ["Гражданство при рождении"] },
  { country: "Чили", longitude: -71, latitude: -33, programs: ["Гражданство при рождении"] },
  { country: "Аргентина", longitude: -64, latitude: -38, programs: ["Гражданство при рождении"] },
  { country: "Австралия", longitude: 134, latitude: -25, programs: ["Обучение и программы переезда"] },
];

const x = (lon: number) => ((lon + 180) / 360) * 100;
const y = (lat: number) => ((85 - lat) / 145) * 100;

export function WorldMap() {
  const [selected, setSelected] = useState("Испания");
  const current = destinations.find((d) => d.country === selected) ?? destinations[0];
  const mapScrollRef = useRef<HTMLDivElement>(null);

  const showDestination = (destination: Destination) => {
    setSelected(destination.country);
    const scroller = mapScrollRef.current;
    if (scroller && scroller.scrollWidth > scroller.clientWidth) {
      scroller.scrollTo({ left: scroller.scrollWidth * x(destination.longitude) / 100 - scroller.clientWidth / 2, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scroller = mapScrollRef.current;
    if (scroller && scroller.scrollWidth > scroller.clientWidth) {
      scroller.scrollLeft = scroller.scrollWidth * x(-4) / 100 - scroller.clientWidth / 2;
    }
  }, []);

  return (
    <div className="reveal-scale mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div ref={mapScrollRef} className="relative overflow-x-auto bg-sky/20" aria-label="Карта мира, прокрутите в сторону для других стран">
        <div className="relative aspect-[1200/510] min-w-[850px] overflow-hidden" aria-label="Интерактивная карта иммиграционных программ">
          <img src={worldLand} alt="Карта мира с расположением стран" className="absolute inset-0 h-full w-full" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_98%,var(--border)_100%),linear-gradient(90deg,transparent_98%,var(--border)_100%)] bg-[length:10%_20%] opacity-30" />
          {destinations.map((destination, index) => {
            const active = selected === destination.country;
            return (
              <button
                type="button"
                key={destination.country}
                onMouseEnter={() => setSelected(destination.country)}
                onFocus={() => setSelected(destination.country)}
                onClick={() => showDestination(destination)}
                aria-label={`${destination.country}: ${destination.programs.join(", ")}`}
                aria-pressed={active}
                className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                style={{ left: `${x(destination.longitude)}%`, top: `${y(destination.latitude)}%`, width: 20, height: 20, animationDelay: `${index * 35}ms` }}
              >
                <span className={`absolute h-5 w-5 rounded-full border border-coral/50 bg-coral/20 ${active ? "map-marker-ring" : ""}`} />
                <span className={`relative h-2.5 w-2.5 rounded-full border-2 border-card shadow-soft transition-transform duration-200 group-hover:scale-150 ${active ? "scale-150 bg-primary" : "bg-coral"}`} />
                <span className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-2 py-1 text-[11px] font-semibold text-primary-foreground shadow-soft transition-opacity ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {destination.country}
                </span>
              </button>
            );
          })}
          <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs font-medium text-primary shadow-soft">
            <Globe2 className="h-4 w-4 text-coral" /> 25 направлений
          </div>
          <div className="absolute bottom-4 right-4 z-20 hidden w-60 border border-border bg-card/95 p-4 shadow-soft backdrop-blur-sm lg:block" aria-live="polite">
            <div className="flex items-center gap-1.5 text-sm font-bold text-primary"><MapPin className="h-4 w-4 text-coral" />{current.country}</div>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              {current.programs.map((program) => <li key={program}>• {program}</li>)}
            </ul>
            <a href="#consult" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:underline">Бесплатная консультация <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="grid gap-6 border-t border-border p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:p-8">
        <div aria-live="polite" className="flex flex-col justify-center">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-coral"><MapPin className="h-4 w-4" /> Выбранное направление</div>
          <h4 className="mt-2 font-display text-2xl font-bold text-primary">{current.country}</h4>
          <p className="mt-1 text-sm text-muted-foreground">Доступные программы и варианты переезда:</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {current.programs.map((program) => <li key={program} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">{program}</li>)}
          </ul>
          <a href="#consult" className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-coral-gradient px-5 py-3 text-sm font-semibold text-coral-foreground shadow-coral transition hover:scale-[1.03]">
            Получить консультацию <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="border-t border-border pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Выберите страну на карте или в списке</p>
          <div className="flex max-h-44 flex-wrap content-start gap-1.5 overflow-y-auto pr-1">
            {destinations.map((destination) => (
              <button
                key={destination.country}
                type="button"
                onMouseEnter={() => setSelected(destination.country)}
                onFocus={() => setSelected(destination.country)}
                onClick={() => showDestination(destination)}
                aria-pressed={selected === destination.country}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${selected === destination.country ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-primary hover:border-coral hover:text-coral"}`}
              >
                {destination.country}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
