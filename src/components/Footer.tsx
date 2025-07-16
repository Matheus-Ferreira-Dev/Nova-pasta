const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-primary">
                🦷 DentalCare
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Cuidando do seu sorriso com excelência e tecnologia de ponta há mais de 10 anos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                📸
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                🐦
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition duration-300">Limpeza Dental</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Clareamento</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Restauração</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Ortodontia</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Implante</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition duration-300">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Convênios</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Depoimentos</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 Rua da Saúde, 123 - Centro</p>
              <p>São Paulo, SP - 01234-567</p>
              <p>📞 (11) 3456-7890</p>
              <p>📱 (11) 98765-4321</p>
              <p>✉️ contato@dentalcare.com.br</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DentalCare. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
