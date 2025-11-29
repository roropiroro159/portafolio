'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900 text-cyan-400 shadow-lg shadow-cyan-500/20 relative z-50 border-b border-cyan-500/30"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-cyan-300 transition-colors">
            Mi Portafolio
          </Link>
          
          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex space-x-6"
          >
            <Link href="/sobre-mi" className="hover:text-cyan-300 transition-colors">Sobre Mí</Link>
            <Link href="/formacion" className="hover:text-cyan-300 transition-colors">Formación</Link>
            <Link href="/habilidades" className="hover:text-cyan-300 transition-colors">Habilidades</Link>
            <Link href="/contacto" className="hover:text-cyan-300 transition-colors">Contacto</Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
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
            <Link href="/sobre-mi" className="block py-2 hover:text-cyan-300 transition-colors">Sobre Mí</Link>
            <Link href="/formacion" className="block py-2 hover:text-cyan-300 transition-colors">Formación</Link>
            <Link href="/habilidades" className="block py-2 hover:text-cyan-300 transition-colors">Habilidades</Link>
            <Link href="/contacto" className="block py-2 hover:text-cyan-300 transition-colors">Contacto</Link>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
