'use client'

import { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    patients: 0,
    experience: 0,
    specialties: 0,
    rating: 0
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { patients: 1000, experience: 10, specialties: 15, rating: 5 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets]
      const stepValue = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, increment)
    })
  }

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-secondary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Sobre Nossa 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 
                Clínica
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Com mais de 10 anos de experiência, nossa clínica odontológica é referência em tratamentos de qualidade na região. Combinamos tecnologia de ponta com atendimento humanizado para garantir a melhor experiência aos nossos pacientes.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2 transform transition-all duration-300 group-hover:scale-110">
                    {counters.patients}+
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="text-gray-600 font-medium">Pacientes Atendidos</div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2 transform transition-all duration-300 group-hover:scale-110">
                    {counters.experience}+
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="text-gray-600 font-medium">Anos de Experiência</div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2 transform transition-all duration-300 group-hover:scale-110">
                    {counters.specialties}+
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="text-gray-600 font-medium">Especialidades</div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-2 transform transition-all duration-300 group-hover:scale-110">
                    {counters.rating}⭐
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="text-gray-600 font-medium">Avaliação Média</div>
              </div>
            </div>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-105">
                <h3 className="text-3xl font-bold mb-8 text-center">Por que nos escolher?</h3>
                <ul className="space-y-6">
                  {[
                    'Tecnologia de última geração',
                    'Profissionais especializados',
                    'Ambiente moderno e acolhedor',
                    'Atendimento personalizado',
                    'Horários flexíveis',
                    'Planos de pagamento facilitados'
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start transform transition-all duration-500 delay-${index * 100}`}>
                      <span className="text-accent mr-4 text-2xl font-bold">✓</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full animate-bounce"></div>
              
              {/* Partículas flutuantes */}
              <div className="absolute top-1/4 -left-4 w-3 h-3 bg-primary rounded-full animate-float"></div>
              <div className="absolute top-3/4 -right-4 w-2 h-2 bg-accent rounded-full animate-float-delayed"></div>
              <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-secondary rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ondas decorativas */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
    </section>
  )
}

export default About
