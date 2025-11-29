'use client';

import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Content */}
      <main className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Mis Servicios
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Análisis de Seguridad
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Evaluación de vulnerabilidades y análisis de riesgos en sistemas y aplicaciones web.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Escaneo de puertos</li>
                <li>• Análisis de malware</li>
                <li>• Auditoría de seguridad</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-green-600 dark:text-green-400 text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Desarrollo Web Seguro
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Creación de aplicaciones web con enfoque en seguridad y mejores prácticas.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• HTML/CSS/JavaScript</li>
                <li>• React/Next.js</li>
                <li>• Seguridad OWASP</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-purple-600 dark:text-purple-400 text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Pentesting Básico
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pruebas de penetración éticas para identificar debilidades en sistemas.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Reconocimiento</li>
                <li>• Pruebas de intrusión</li>
                <li>• Reportes detallados</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-orange-600 dark:text-orange-400 text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Consultoría de Seguridad
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Asesoramiento sobre mejores prácticas de seguridad para empresas.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Políticas de seguridad</li>
                <li>• Capacitación</li>
                <li>• Implementación</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-red-600 dark:text-red-400 text-3xl mb-4">🐍</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Scripts de Automatización
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Desarrollo de scripts en Python para tareas de seguridad y monitoreo.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Python/Bash</li>
                <li>• Automatización</li>
                <li>• Monitoreo</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-teal-600 dark:text-teal-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Análisis de Logs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Monitoreo y análisis de registros para detectar actividades sospechosas.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• SIEM</li>
                <li>• Análisis forense</li>
                <li>• Alertas</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                ¿Interesado en trabajar juntos?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Como estudiante, estoy buscando oportunidades para aplicar mis conocimientos 
                y ganar experiencia en proyectos reales de ciberseguridad.
              </p>
              <div className="space-x-4">
                <Link 
                  href="/sobre-mi" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  Contáctame
                </Link>
                <Link 
                  href="/formacion" 
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  Ver Formación
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default page