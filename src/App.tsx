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

export default function App() {
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
