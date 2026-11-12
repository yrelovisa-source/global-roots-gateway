import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Trust } from "@/components/site/Trust";
import { Programs } from "@/components/site/Programs";
import { Education } from "@/components/site/Education";
import { RealEstate } from "@/components/site/RealEstate";
import { Experts } from "@/components/site/Experts";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Quiz } from "@/components/site/Quiz";
import { Footer } from "@/components/site/Footer";
import { ContactWidget } from "@/components/site/ContactWidget";
import { ThankYou } from "@/components/site/ThankYou";
import { useEffect, useState } from "react";

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHash = () => { setHash(window.location.hash); if (window.location.hash === "#spasibo") window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  if (hash === "#spasibo") return <main className="bg-background"><ThankYou /></main>;
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Nav />
      <Hero />
      <Services />
      <Trust />
      <Programs />
      <Education />
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
