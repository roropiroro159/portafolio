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
            Mi Formación
          </h1>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Educación
              </h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Grado en Informática</h3>
                  <p className="text-gray-600 dark:text-gray-300">Universidad [Nombre] | 2021 - Presente</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Especialización en Ciberseguridad y Redes
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Bachillerato Tecnológico</h3>
                  <p className="text-gray-600 dark:text-gray-300">Instituto [Nombre] | 2019 - 2021</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Especialidad en Informática
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
                Certificaciones
              </h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">CompTIA Security+</h3>
                  <p className="text-gray-600 dark:text-gray-300">En Progreso | 2024</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Fundamentos de seguridad informática
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Cisco CCNA</h3>
                  <p className="text-gray-600 dark:text-gray-300">Planificado | 2024</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Redes y conectividad
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                Cursos y Talleres
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Python para Ciberseguridad</h3>
                  <p className="text-gray-600 dark:text-gray-300">Online | 2023</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Análisis de Malware</h3>
                  <p className="text-gray-600 dark:text-gray-300">Workshop | 2023</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Ethical Hacking Básico</h3>
                  <p className="text-gray-600 dark:text-gray-300">Online | 2022</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Redes Informáticas</h3>
                  <p className="text-gray-600 dark:text-gray-300">Curso | 2022</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default page