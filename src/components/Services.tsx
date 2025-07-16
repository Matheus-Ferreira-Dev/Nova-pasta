const Services = () => {
  const services = [
    {
      icon: '🦷',
      title: 'Limpeza Dental',
      description: 'Profilaxia completa para manter sua saúde bucal em dia.',
      price: 'A partir de R$ 80'
    },
    {
      icon: '✨',
      title: 'Clareamento',
      description: 'Clareamento dental seguro e eficaz para um sorriso radiante.',
      price: 'A partir de R$ 400'
    },
    {
      icon: '🔧',
      title: 'Restauração',
      description: 'Restaurações em resina e porcelana com estética natural.',
      price: 'A partir de R$ 150'
    },
    {
      icon: '🏥',
      title: 'Ortodontia',
      description: 'Aparelhos ortodônticos para alinhamento perfeito dos dentes.',
      price: 'A partir de R$ 200/mês'
    },
    {
      icon: '🦴',
      title: 'Implante',
      description: 'Implantes dentários com tecnologia de ponta.',
      price: 'A partir de R$ 1.500'
    },
    {
      icon: '👑',
      title: 'Prótese',
      description: 'Próteses fixas e removíveis personalizadas.',
      price: 'A partir de R$ 800'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos tratamentos completos com tecnologia avançada e profissionais especializados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 card-hover">
              <div className="text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-primary font-semibold text-lg mb-4">
                  {service.price}
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition duration-300">
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
