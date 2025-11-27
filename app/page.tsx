'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 text-white shadow-lg relative z-50"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              Mi Portafolio
            </motion.h1>
            
            {/* Desktop Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex space-x-6"
            >
              <Link href="/" className="hover:text-blue-200 transition-colors">Inicio</Link>
              <Link href="/sobre-mi" className="hover:text-blue-200 transition-colors">Sobre Mí</Link>
              <Link href="/formacion" className="hover:text-blue-200 transition-colors">Formación</Link>
              <Link href="/servicios" className="hover:text-blue-200 transition-colors">Servicios</Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-200 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2">
              <Link href="/" className="block py-2 hover:text-blue-200 transition-colors">Inicio</Link>
              <Link href="/sobre-mi" className="block py-2 hover:text-blue-200 transition-colors">Sobre Mí</Link>
              <Link href="/formacion" className="block py-2 hover:text-blue-200 transition-colors">Formación</Link>
              <Link href="/servicios" className="block py-2 hover:text-blue-200 transition-colors">Servicios</Link>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
          <Image
            src="https://cdn.pixabay.com/photo/2022/02/18/06/17/futuristic-7020072_1280.jpg"
            alt="Imagen futurista de ciencia ficción y datos"
            fill
            className="object-cover opacity-70"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 py-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider"
            style={{
              fontFamily: 'monospace',
              textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)',
              letterSpacing: '0.1em'
            }}
          >
            HOLA, SOY <span className="text-cyan-400" style={{textShadow: '0 0 30px rgba(34, 211, 238, 0.8)'}}>LUIS CONTRERAS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wide"
            style={{
              fontFamily: 'monospace',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
              letterSpacing: '0.05em'
            }}
          >
            &gt; ESTUDIANTE DE INFORMÁTICA CON ENFOQUE EN CIBERSEGURIDAD_
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="space-x-4"
          >
            <Link 
              href="/sobre-mi" 
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all duration-300 inline-block border border-cyan-400 shadow-lg hover:shadow-cyan-500/50"
              style={{
                fontFamily: 'monospace',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
              }}
            >
              [ CONÓCEME MÁS ]
            </Link>
            <Link 
              href="/formacion" 
              className="bg-transparent text-cyan-400 border-2 border-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 inline-block"
              style={{
                fontFamily: 'monospace',
                textShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.2)'
              }}
            >
              [ MI FORMACIÓN ]
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
