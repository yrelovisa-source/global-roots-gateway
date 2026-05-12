import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Trust } from "@/components/site/Trust";
import { Programs } from "@/components/site/Programs";
import { RealEstate } from "@/components/site/RealEstate";
import { Experts } from "@/components/site/Experts";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Quiz } from "@/components/site/Quiz";
import { Footer } from "@/components/site/Footer";
import { ContactWidget } from "@/components/site/ContactWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "yrelo — иммиграционный центр: ВНЖ, визы талантов, гражданство" },
      {
        name: "description",
        content:
          "Подбираем легальные программы переезда: США O-1, UK Global Talent, ВНЖ ЕС, гражданства за инвестиции, недвижимость в Греции, Кипре, Турции, Испании. Бесплатная консультация.",
      },
      { property: "og:title", content: "yrelo — путь к жизни мечты за границей" },
      {
        property: "og:description",
        content:
          "Иммиграционный центр полного цикла. Визы талантов, ВНЖ для кочевников, гражданства, недвижимость в ЕС.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Nav />
      <Hero />
      <Services />
      <Trust />
      <Programs />
      <RealEstate />
      <Experts />
      <Testimonials />
      <Blog />
      <Quiz />
      <Footer />
      <ContactWidget />
    </main>
  );
}
