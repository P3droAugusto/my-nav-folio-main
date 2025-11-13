// components/Skills.tsx
const Skills = () => {
  const skills = [
    "Especialista em manutenção técnica e upgrade de componentes de computadores",
    "Instalação de redes básicas (Wi-Fi, roteadores, cabos).",
    "Soluções Para Sistemas Corrompidos",
    "Atualização de Softwares / Sistemas",
    "Soluções em problemas de Hardware",
  ];

  return (
    <section
      id="habilidades"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-background py-20 px-8 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Título */}
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-16 leading-tight text-blue-600 text-center lg:text-left">
          HABILIDADES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem / Card ilustrativo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-90 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500 bg-gradient-to-br from-blue-100 to-blue-200 transition-transform duration-500 hover:scale-125">
              <img
                src="/aabb.jpeg"
                alt="Imagem relacionada a habilidades"
                className="object-cover w-full h-full"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                }}
              />

            </div>
          </div>

          {/* Lista de habilidades */}
          <div>
            <h3 className="font-serif text-2xl mb-6 font-light italic text-blue-600">
              Algumas delas:
            </h3>

            <ul className="space-y-4 text-lg leading-relaxed text-foreground/90">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-blue-100/40 hover:bg-blue-200/50 border border-blue-200 rounded-lg py-2 px-4 transition-colors duration-300"
                >
                  <span className="text-blue-600 text-xl font-bold">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
