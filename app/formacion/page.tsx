'use client';

import React from 'react'
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
                  <p className="text-gray-600 dark:text-gray-300">Instituto THEPOWER ACADEMY | 2024 - Presente</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Grado de Sistemas Microinformáticos y Redes 
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Bachillerato Ciencias</h3>
                  <p className="text-gray-600 dark:text-gray-300">Instituto iES JIMENEZ LANDI | 2021 - 2023</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    1er y 2do año cursado
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
                  <h3 className="font-semibold text-gray-800 dark:text-white">Cisco Networking Academy</h3>
                  <p className="text-gray-600 dark:text-gray-300">2024</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Configuración de dispositivos, asignación de IPs y pruebas de conectividad
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Phython Institute</h3>
                  <p className="text-gray-600 dark:text-gray-300">2025 | Presente</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Python Essentials
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
                EXPERIENCIA
              </h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Carpintero de aluminio</h3>
                  <p className="text-gray-600 dark:text-gray-300">Julio 2023 - Junio 2024</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Fabricación e instalación de estructuras de aluminio. Manejo de herramientas eléctricas y medición precisa.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Mesero</h3>
                  <p className="text-gray-600 dark:text-gray-300">Septiembre 2024 - Octubre 2024</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    Atención al cliente, toma de pedidos y coordinación en equipo.
                  </p>
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
