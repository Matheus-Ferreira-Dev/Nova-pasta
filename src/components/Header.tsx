'use client'

import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-primary/10' 
        : 'bg-white shadow-md'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center group">
            <div className="text-2xl font-bold text-primary flex items-center gap-2 transform transition-all duration-300 hover:scale-105">
              <span className="text-3xl animate-pulse">🦷</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DentalCare
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="relative text-gray-700 hover:text-primary transition-all duration-300 group">
              <span className="relative z-10">Início</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#services" className="relative text-gray-700 hover:text-primary transition-all duration-300 group">
              <span className="relative z-10">Serviços</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#about" className="relative text-gray-700 hover:text-primary transition-all duration-300 group">
              <span className="relative z-10">Sobre</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#contact" className="relative text-gray-700 hover:text-primary transition-all duration-300 group">
              <span className="relative z-10">Contato</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
          
          <div className="hidden md:block">
            <button className="relative bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-semibold overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                Agendar Consulta
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          <button 
            className="md:hidden relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 relative transform transition-all duration-300">
              <span className={`absolute left-0 top-0 w-full h-0.5 bg-primary transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`absolute left-0 top-2 w-full h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute left-0 top-4 w-full h-0.5 bg-primary transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 transform transition-all duration-300 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 space-y-3">
              <a href="#home" className="block py-2 text-gray-700 hover:text-primary transition-all duration-300 hover:pl-2">Início</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-primary transition-all duration-300 hover:pl-2">Serviços</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-primary transition-all duration-300 hover:pl-2">Sobre</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-primary transition-all duration-300 hover:pl-2">Contato</a>
              <button className="mt-4 w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Agendar Consulta
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
