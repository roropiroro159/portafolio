'use client';

import React from 'react'
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
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
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  Luis Contreras Mendoza
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Soy estudiante de informática apasionado por las nuevas tecnologías. Me caracterizo por mi responsabilidad, rápida capacidad de aprendizaje y facilidad para trabajar en equipo. Busco desarrollar mi carrera profesional en el ámbito tecnológico, contribuyendo con compromiso y entusiasmo.
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
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Intereses</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Ciberseguridad</li>
                  <li>• Redes y Sistemas</li>
                  <li>• Desarrollo Web</li>
                  <li>• Videojuegos</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 shadow-sm">
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