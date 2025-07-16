'use client'

import { useEffect, useState } from 'react'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const footer = document.querySelector('footer')
    if (footer) {
      observer.observe(footer)
    }

    return () => observer.disconnect()
  }, [])

  const footerSections = [
    {
      title: 'Serviços',
      links: [
        { name: 'Limpeza Dental', href: '#services' },
        { name: 'Clareamento', href: '#services' },
        { name: 'Restauração', href: '#services' },
        { name: 'Ortodontia', href: '#services' },
        { name: 'Implante', href: '#services' }
      ]
    },
    {
      title: 'Links Úteis',
      links: [
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Convênios', href: '#' },
        { name: 'Depoimentos', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Política de Privacidade', href: '#' }
      ]
    }
  ]

  const socialLinks = [
    { icon: '📘', name: 'Facebook', href: '#' },
    { icon: '📸', name: 'Instagram', href: '#' },
    { icon: '🐦', name: 'Twitter', href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center mb-6 group">
              <div className="text-3xl font-bold text-primary flex items-center gap-3">
                <span className="text-4xl animate-pulse group-hover:animate-bounce">🦷</span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  DentalCare
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cuidando do seu sorriso com excelência e tecnologia de ponta há mais de 10 anos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label={social.name}
                >
                  <span className="text-xl group-hover:animate-bounce">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Seções de links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={`transform transition-all duration-1000 delay-${(sectionIndex + 1) * 200} ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-primary transition-all duration-300 hover:pl-2 group relative"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute left-0 top-0 w-0 h-full bg-primary/10 transition-all duration-300 group-hover:w-full -z-10"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Informações de contato */}
          <div className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <span className="text-primary mr-3 text-lg group-hover:animate-bounce">📍</span>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Rua da Saúde, 123 - Centro
                  </p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    São Paulo, SP - 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <span className="text-primary mr-3 text-lg group-hover:animate-bounce">📞</span>
                <a 
                  href="tel:+551134567890" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  (11) 3456-7890
                </a>
              </div>
              
              <div className="flex items-center group">
                <span className="text-primary mr-3 text-lg group-hover:animate-bounce">📱</span>
                <a 
                  href="https://wa.me/5511987654321" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (11) 98765-4321
                </a>
              </div>
              
              <div className="flex items-center group">
                <span className="text-primary mr-3 text-lg group-hover:animate-bounce">✉️</span>
                <a 
                  href="mailto:contato@dentalcare.com.br" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  contato@dentalcare.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-gray-400 mb-4 md:mb-0 transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p>&copy; 2025 DentalCare. Todos os direitos reservados.</p>
            </div>
            
            <div className={`flex space-x-6 transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl group z-50"
        aria-label="Voltar ao topo"
      >
        <span className="text-xl group-hover:animate-bounce">↑</span>
      </button>
    </footer>
  )
}

export default Footer
