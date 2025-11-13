import React from 'react'

const Projetos = () => {
  return (
    <div>
        {/* ===== PROJETOS ===== */}
<section
  id="projetos"
  className="min-h-screen items-baseline justify-center bg-gradient-to-b from-blue-300 to-background py-20 px-8 relative overflow-x-hidden"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Texto à esquerda */}
    <div className="text-left space-y-6">
      <h2 className="text-4xl md:text-7xl font-extrabold text-blue-800">
        PROJETOS
      </h2>

      <p className="italic text-gray-600">
        Alguns dos Projetos feitos ao decorrer da matéria:
      </p>

      <p className="text-blue-800 leading-relaxed">
        Começamos com alguns projetos na primeira Unidade, mas apartir da segunda começamos a avançar mais com esses ao lado. <br />
        <span className="text-blue-600 font-semibold">(2025)</span>
      </p>
    </div>

    {/* Imagens / Cards à direita */}
    <div className="grid sm:grid-cols-1 gap-6">
      {/* Card 1 */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl overflow-hidden shadow-lg border-2 border-blue-300 hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300"
      >
        <img
          src="/projeto1.png" // caminho da imagem
          alt="Projeto 1"
          className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
        />
        <div className="p-4 bg-white text-center">
          <h3 className="text-blue-800 font-semibold text-lg">Lampada</h3>
          <p className="text-gray-600 text-sm">Projeto da lampada</p>
        </div>
      </a>

      {/* Card 2 */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl overflow-hidden shadow-lg border-2 border-blue-300 hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300"
      >
        <img
          src="/projeto2.png"
          alt="Projeto 2"
          className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
        />
        <div className="p-4 bg-white text-center">
          <h3 className="text-blue-800 font-semibold text-lg">Carros</h3>
          <p className="text-gray-600 text-sm">Projeto dos Carros</p>
        </div>
      </a>

      {/* Card 3 */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl overflow-hidden shadow-lg border-2 border-blue-300 hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300"
      >
        <img
          src="/projeto3.png"
          alt="Projeto 3"
          className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
        />
        <div className="p-4 bg-white text-center">
          <h3 className="text-blue-800 font-semibold text-lg">Calculadora</h3>
          <p className="text-gray-600 text-sm">Projeto Calculadora</p>
        </div>
      </a>
      </div>
    </div>
  </section>
</div>
  )
}

export default Projetos