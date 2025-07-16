'use client'

import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              🦷 DentalCare
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition duration-300">Início</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition duration-300">Serviços</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition duration-300">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition duration-300">Contato</a>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition duration-300">
              Agendar Consulta
            </button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#home" className="block py-2 text-gray-700 hover:text-primary">Início</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-primary">Serviços</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-primary">Sobre</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-primary">Contato</a>
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg">
              Agendar Consulta
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
