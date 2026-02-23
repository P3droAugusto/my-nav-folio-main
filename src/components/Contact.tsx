import { Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import Particles from "./Particles";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Formulario Enviado!!!")
  }

  return (
    <section
      id="contato"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-950 py-20 px-8 relative"
    >
      {/* Partículas de fundo */}
       <div className="absolute inset-0 -z-10">
          <Particles />
        </div>
      <div className="max-w-7xl mx-auto w-full">
        {/* Cabeçalho */}
        <div className="text-center lg:text-left mb-11">
          <p className="font-serif text-base text-blue-200 mb-2 tracking-wide">
            Pedro Augusto
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-blue-200">
            CONTATO
          </h2>
          <div className="w-24 h-[3px] bg-blue-200 mt-4 mx-auto lg:mx-0 rounded-full" />
        </div>

        {/* Corpo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Informações de contato */}
          <div className="space-y-8 text-lg bg-white/70 backdrop-blur-md border border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-105">
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
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
              <p> +55 75 99852-7133 </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <p>pedrobahia901@gmail.com</p>
            </div>

            {/* Ícones sociais */}
            <div className="flex gap-8 mt-10">
              <a
                href="https://www.instagram.com/p3dro_agust/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-augusto-a65301340/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/P3droAugusto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Campo à direita */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full h-full rounded-2xl overflow-hidden transition-transform">
                  <form onSubmit={handleSubmit} className="w-full bg-gray-300 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                  Entre em Contato
                </h3>

                {/* Campo Nome */}
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

                {/* Campo E-mail */}
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

                {/* Campo para escrever oq a pessoa quer me falar sobre */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">
                    Escreva aqui
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>
                {/* Botão */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-md hover:shadow-blue-800/90"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Rodapé */}
        <div className="text-center text-white mt-20 font-light text-md opacity-70">
          © {new Date().getFullYear()} Pedro Augusto — Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
};

export default Contact;
