import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experiencia from "@/components/Experiencia";
import Projetos from "@/components/Projetos";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <About />
      < Experiencia />
      < Projetos />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
