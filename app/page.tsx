'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 text-white shadow-lg"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center text justify-between">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              Mi Portafolio
            </motion.h1>
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
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
          >
            Hola, soy <span className="text-blue-600">Luis Contreras</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Estudiante de Informática con enfoque en Ciberseguridad
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="space-x-4"
          >
            <Link 
              href="/sobre-mi" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Conóceme más
            </Link>
            <Link 
              href="/formacion" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Mi Formación
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
