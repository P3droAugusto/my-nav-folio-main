import React, { useState } from "react";
import { Menu, X, Rocket, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "./Particles";

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "SOBRE MIM", id: "sobre" },
    { label: "PORTFÓLIO", id: "portfolio" },
    { label: "PROJETOS", id: "projetos" },
    { label: "HABILIDADES", id: "habilidades" },
    { label: "CONTATO", id: "contato" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* ===== HEADER FIXO ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-950/80 backdrop-blur-md border-b border-blue-800/40 shadow-lg">
        <div className="container mx-auto flex justify-between items-center h-16 px-4 md:px-8">
          {/* Logo e nome */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 cursor-pointer text-lg font-bold tracking-wider uppercase text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Rocket className="w-5 h-5" />
            <span>PEDRO AUGUSTO</span>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium tracking-wider uppercase text-blue-100 hover:text-blue-400 hover:bg-blue-900/40 transition-all"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((v) => !v)}
              className="text-blue-100 hover:text-blue-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden absolute w-full bg-blue-950/95 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center space-y-2 px-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="w-full text-center py-3 text-base font-medium tracking-wider uppercase text-blue-100 hover:bg-blue-900/50 hover:text-blue-400"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== HERO PRINCIPAL ===== */}
      <section
        id="hero"
        className="md-h:10 min-h-screen flex flex-col items-center justify-center relative px-1 pt-24 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden"
      >
        {/* Partículas de fundo */}
        <Particles />

        {/* Imagem de Perfil */}
        <div className="relative z-10 w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 mb-8 bg-blue-900/40 backdrop-blur-sm transition-transform duration-500 hover:scale-125">
          <img
            src="/pedro.webp"
            alt="Foto de Pedro Augusto"
            className="object-cover w-full h-full"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.display = "none";
            }}
          />
        </div>

        {/* Texto principal */}
        <div className="text-center max-w-4xl mx-10 relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-sky-400 to-blue-500 drop-shadow-[0_0_10px_rgba(37,99,235,0.6)]">
            Pedro Augusto
          </h1>

          <p className="text-xl md:text-2xl font-light text-blue-100/90 mb-6">
            Futuro Desenvolvedor{" "}
            <span className="font-semibold text-blue-400">Full-Stack</span> &amp; Engenheiro de Hardware
          </p>

          <p className="text-base md:text-lg text-blue-100/80 mb-12 max-w-2xl mx-auto">
            Sou apaixonado por tecnologia e criação de soluções eficientes.
            Desejo Futuramente trabalhar sendo um desenvolvedor{" "}
            <span className="text-blue-400 font-medium">Full-Stack,</span>
            desenvolvendo aplicações modernas e performáticas para web.
          </p>

          {/* Botões de ação */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-10">
            <Button
              size="lg"
              onClick={() => scrollToSection("projetos")}
              className="bg-blue-600 hover:bg-blue-500 text-white text-base font-semibold tracking-wider uppercase px-8 py-3 shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Ver Projetos
            </Button>

            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-blue-600 hover:bg-blue-500 text-white text-base font-semibold tracking-wider uppercase px-8 py-3 shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Fale Comigo
            </Button>
          </nav>
        </div>

        {/* Ícone de rolagem */}
        <div
          onClick={() => scrollToSection("sobre")}
          className="mt-12 animate-bounce cursor-pointer text-blue-400 hover:text-blue-300 transition-colors z-10"
        >
          <ArrowDown className="w-8 h-8 md:w-10 md:h-10" />
        </div>
      </section>

        
      </div>
    );
  };

  export default Hero;
