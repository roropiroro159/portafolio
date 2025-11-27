'use client';

import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

const page = () => {
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
          <div className="flex items-center justify-between">
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

      {/* Content */}
      <main className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Sobre Mí
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  [Tu Nombre]
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Estudiante apasionado de Informática con especial interés en el campo de la ciberseguridad. 
                  Me encanta aprender sobre nuevas tecnologías y aplicar mis conocimientos para resolver problemas reales.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Mi objetivo es convertirme en un profesional de la ciberseguridad, ayudando a proteger 
                  sistemas y datos contra amenazas digitales.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Intereses</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Ciberseguridad</li>
                  <li>• Redes y Sistemas</li>
                  <li>• Desarrollo Web</li>
                  <li>• Análisis de Datos</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Habilidades</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• HTML/CSS/JavaScript</li>
                  <li>• Python</li>
                  <li>• Redes Informáticas</li>
                  <li>• Seguridad Informática</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default page