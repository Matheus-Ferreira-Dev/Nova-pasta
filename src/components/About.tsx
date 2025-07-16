const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Sobre Nossa Clínica
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Com mais de 10 anos de experiência, nossa clínica odontológica é referência em tratamentos de qualidade na região. Combinamos tecnologia de ponta com atendimento humanizado para garantir a melhor experiência aos nossos pacientes.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Pacientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Especialidades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
                <div className="text-gray-600">Avaliação Média</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Por que nos escolher?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Tecnologia de última geração</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Profissionais especializados</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Ambiente moderno e acolhedor</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Atendimento personalizado</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Horários flexíveis</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Planos de pagamento facilitados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
