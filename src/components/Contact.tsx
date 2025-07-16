'use client'

import { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Endereço',
      content: 'Rua da Saúde, 123 - Centro\nSão Paulo, SP - 01234-567',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📞',
      title: 'Telefone',
      content: '(11) 3456-7890',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      content: '(11) 98765-4321',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'contato@dentalcare.com.br',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Agende sua consulta ou tire suas dúvidas conosco. Estamos prontos para cuidar do seu sorriso!
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações de contato */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className={`group flex items-start p-4 rounded-xl bg-white shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 delay-${index * 100}`}>
                  <div className={`text-3xl mr-4 p-3 rounded-full bg-gradient-to-r ${info.color} text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 whitespace-pre-line group-hover:text-gray-800 transition-colors duration-300">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
              <h4 className="font-bold text-xl mb-4">Horário de Funcionamento</h4>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>8h às 18h</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8h às 12h</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Formulário */}
          <div className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full animate-wave"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-focus-within:border-primary"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Serviço de Interesse
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="limpeza">Limpeza Dental</option>
                      <option value="clareamento">Clareamento</option>
                      <option value="restauracao">Restauração</option>
                      <option value="ortodontia">Ortodontia</option>
                      <option value="implante">Implante</option>
                      <option value="protese">Prótese</option>
                    </select>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-bold text-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50"
                >
                  <span className={`relative z-10 transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                    Enviar Mensagem
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
