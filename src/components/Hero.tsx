const Hero = () => {
  return (
    <section id="home" className="pt-20 gradient-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Seu Sorriso É Nossa 
              <span className="text-accent"> Prioridade</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Clínica odontológica moderna com tecnologia avançada e profissionais especializados para cuidar da sua saúde bucal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Agendar Consulta
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition duration-300">
                Nossos Serviços
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">🦷</div>
                <h3 className="text-2xl font-bold mb-4">Tecnologia Avançada</h3>
                <p className="text-gray-100">
                  Utilizamos equipamentos de última geração para garantir o melhor tratamento para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
