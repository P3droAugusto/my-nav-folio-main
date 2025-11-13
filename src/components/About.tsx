// components/About.tsx
import { GraduationCap, Code, Rocket } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Início na Área de programação",
      description:
        "Comecei a ter interesse nessa grande área.",
      icon: <GraduationCap className="text-blue-600" size={24} />,
    },
    {
      year: "2025",
      title: "Início na Ciência da Computação",
      description:
        "Comecei minha graduação e entrei de vez no mundo da tecnologia.",
      icon: <Code className="text-blue-600" size={24} />,
    },
    {
      year: "2025 - Futuro",
      title: "Foco em Desenvolvimento Full-Stack",
      description:
        "Aprofundei meus estudos em integração front-end e back-end.",
      icon: <Rocket className="text-blue-600" size={24} />,
    },
  ];

  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-background py-20 px-8 relative"
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-blue-600">
            <br />SOBRE MIM
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-foreground/80 max-w-md">
            <p>
              Sou <span className="text-blue-600 font-medium">Pedro Augusto</span>, 
              estudante de <span className="font-semibold">Ciência da Computação, </span> tenho 18 anos,
              com uma enorme paixão por tecnologia e desenvolvimento de software.
            </p>
            <p>
              Tenho como objetivo crescer na área da programação, buscando sempre aprender novas tecnologias
              e aprimorar minhas habilidades para criar soluções criativas e eficientes.
            </p>
            <p>
              Atualmente, estudo e desenvolvo projetos utilizando 
              <span className="text-blue-600 font-medium"> React, Node.js e entre outras que além do estudo vou conseguir me aprofundar mais</span>,
              com foco em me tornar um <span className="font-semibold">Desenvolvedor Full-Stack.</span>
            </p>
          </div>
        </div>

        {/* Timeline à direita */}
        <div className="justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute left-15 top-0 bottom-0 w-1 bg-blue-500 rounded-full"></div>
            <ul className="space-y-8 pl-8">
              {timeline.map((item, index) => (
                <li key={index} className="relative flex gap-2 items-start">
                  <div className="mr-0 -translate-x-1/2 bg-white border-2 border-blue-500 rounded-full p-2">
                    {item.icon}
                  </div>
                  <div className="bg-white/70 backdrop-blur-md shadow-md p-4 rounded-xl border border-blue-100 hover:shadow-lg transition-transform duration-500 hover:scale-110">
                    <span className="text-blue-600 font-semibold">{item.year}</span>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
