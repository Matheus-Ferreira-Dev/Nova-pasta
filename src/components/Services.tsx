'use client'

import { useEffect, useRef, useState } from 'react'

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: '🦷',
      title: 'Limpeza Dental',
      description: 'Profilaxia completa para manter sua saúde bucal em dia.',
      price: 'A partir de R$ 80',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '✨',
      title: 'Clareamento',
      description: 'Clareamento dental seguro e eficaz para um sorriso radiante.',
      price: 'A partir de R$ 400',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🔧',
      title: 'Restauração',
      description: 'Restaurações em resina e porcelana com estética natural.',
      price: 'A partir de R$ 150',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '🏥',
      title: 'Ortodontia',
      description: 'Aparelhos ortodônticos para alinhamento perfeito dos dentes.',
      price: 'A partir de R$ 200/mês',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '🦴',
      title: 'Implante',
      description: 'Implantes dentários com tecnologia de ponta.',
      price: 'A partir de R$ 1.500',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '👑',
      title: 'Prótese',
      description: 'Próteses fixas e removíveis personalizadas.',
      price: 'A partir de R$ 800',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 transform transition-all duration-1000">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos tratamentos completos com tecnologia avançada e profissionais especializados
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card group relative bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Icon com animação */}
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative text-6xl mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className={`text-xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  
                  <button className={`w-full group relative bg-gradient-to-r ${service.gradient} text-white py-3 rounded-lg font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                    <span className="relative z-10 transition-all duration-300">
                      Agendar
                    </span>
                    <div className="absolute inset-0 bg-black/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                  </button>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
