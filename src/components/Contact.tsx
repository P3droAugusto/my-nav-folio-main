import { Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import Particles from "./Particles";

const Contact = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulário Enviado!!!");
  };

  return (
    <section
      id="contato"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Cabeçalho */}
        <div className="text-center lg:text-left mb-12">
          <p className="font-serif text-sm md:text-base text-blue-200 mb-2 tracking-wide">
            Pedro Augusto
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-blue-200">
            CONTATO
          </h2>
          <div className="w-20 h-[3px] bg-blue-200 mt-4 mx-auto lg:mx-0 rounded-full" />
        </div>

        {/* Corpo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* Informações */}
          <div className="space-y-6 text-base md:text-lg bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-6 md:p-8 shadow-lg transition-transform duration-500 hover:scale-[1.02]">

            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <p>Rua Heráclito Muniz Barreto, (55)</p>
                <p>CEP 49045-200</p>
                <a
                  href="https://maps.app.goo.gl/yBofpeisGWrHqSPm6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <p>+55 75 99852-7133</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <p className="break-all">pedrobahia901@gmail.com</p>
            </div>

            <div className="flex gap-6 mt-6">
              <a href="https://www.instagram.com/p3dro_agust/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-blue-600 hover:text-blue-800 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/pedro-augusto-a65301340/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-blue-600 hover:text-blue-800 transition-colors" />
              </a>
              <a href="https://github.com/P3droAugusto" target="_blank" rel="noopener noreferrer">
                <Github className="text-blue-600 hover:text-blue-800 transition-colors" />
              </a>
            </div>
          </div>

          {/* Formulário */}
          <div className="flex justify-center lg:justify-end">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-gray-200 p-6 md:p-8 rounded-2xl shadow-lg space-y-5"
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 text-center">
                Entre em Contato
              </h3>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Seu nome
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Seu e-mail
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Escreva aqui
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Digite sua mensagem..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Rodapé */}
        <div className="text-center text-white mt-16 text-sm opacity-70">
          © {new Date().getFullYear()} Pedro Augusto — Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
};

export default Contact;
