'use client'

import { useEffect, useState } from 'react'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary bg-size-200 animate-gradient"></div>
      
      {/* Formas geométricas animadas */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-white/5 rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`lg:w-1/2 text-white transform transition-all duration-1000 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Seu Sorriso É Nossa 
              <span className="text-accent bg-gradient-to-r from-accent to-white bg-clip-text text-transparent animate-text-shine"> 
                Prioridade
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
              Clínica odontológica moderna com tecnologia avançada e profissionais especializados para cuidar da sua saúde bucal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-white text-primary px-8 py-4 rounded-lg font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                  Agendar Consulta
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </button>
              <button className="group relative border-2 border-white text-white px-8 py-4 rounded-lg font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105">
                <span className="relative z-10 transition-all duration-300">
                  Nossos Serviços
                </span>
                <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <span className="absolute inset-0 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Nossos Serviços
                </span>
              </button>
            </div>
          </div>
          
          <div className={`lg:w-1/2 mt-10 lg:mt-0 transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:bg-white/20 group">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    🦷
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                    Tecnologia Avançada
                  </h3>
                  <p className="text-gray-100 group-hover:text-white transition-colors duration-300">
                    Utilizamos equipamentos de última geração para garantir o melhor tratamento para você.
                  </p>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
