'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aqui você pode implementar o envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Agende sua consulta ou tire suas dúvidas conosco
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="text-primary text-2xl mr-4">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Endereço</h4>
                  <p className="text-gray-600">Rua da Saúde, 123 - Centro<br />São Paulo, SP - 01234-567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-primary text-2xl mr-4">📞</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telefone</h4>
                  <p className="text-gray-600">(11) 3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-primary text-2xl mr-4">📱</div>
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600">(11) 98765-4321</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-primary text-2xl mr-4">✉️</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">contato@dentalcare.com.br</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Horário de Funcionamento</h4>
              <div className="text-gray-600">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Descreva sua necessidade ou dúvida..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
