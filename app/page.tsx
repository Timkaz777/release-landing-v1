import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectFocus } from "@/components/ProjectFocus";
import { Team } from "@/components/Team";
import { WhySection } from "@/components/WhySection";

export default function HomePage() {
  return (
    <div className="min-h-screen min-h-[100svh] bg-abyss text-mist">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectFocus />
        <WhySection />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
