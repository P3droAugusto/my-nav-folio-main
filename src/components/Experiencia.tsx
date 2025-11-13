import React from 'react'

const Experiencia = () => {
  return (
    <div>
        {/* ===== EXPERIÊNCIA PROFISSIONAL ===== */}
        <section
          id="portfolio"
          className="min-h-screen items-center bg-gradient-to-b from-blue-300 to-background py-20 px-2 overflow-x-hidden"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Texto à esquerda */}
            <div className="text-left space-y-6">
              <h2 className="text-4xl md:text-6xl font-extrabold text-blue-800">
                EXPERIÊNCIA PROFISSIONAL
              </h2>

              <p className="italic text-gray-600">
                Trabalho na área de computadores:
              </p>

              <p className="text-blue-800 leading-relaxed">
                — Desenvolvimento de soluções de Hardwares <br />
                <span className="text-blue-600 font-semibold">(2024–2025)</span>
              </p>
            </div>

            {/* Vídeo à direita */}
            <div className="flex justify-center md:justify-end">
              <div className="w-96 h-100 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-100 to-blue-200 transition-transform duration-500 xl:hover:scale-110 hover:scale-105">
                <video
                  src="/trab.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Experiencia