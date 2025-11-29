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
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            🧠 Mis Habilidades (Actualizadas)
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-green-600 dark:text-green-400 text-3xl mb-4">🐍</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Programación
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Python</span>
                  <span className="text-cyan-500">88%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
                <div className="flex justify-between">
                  <span>Bash/Shell</span>
                  <span className="text-cyan-500">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="flex justify-between">
                  <span>SQL</span>
                  <span className="text-cyan-500">70%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-purple-600 dark:text-purple-400 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Ciberseguridad
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Análisis de Vulnerabilidades</span>
                  <span className="text-cyan-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="flex justify-between">
                  <span>Redes y Sistemas</span>
                  <span className="text-cyan-500">80%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <div className="flex justify-between">
                  <span>Análisis de Malware</span>
                  <span className="text-cyan-500">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-orange-600 dark:text-orange-400 text-3xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Herramientas
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Git/GitHub</span>
                  <span className="text-cyan-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="flex justify-between">
                  <span>Docker</span>
                  <span className="text-cyan-500">70%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
                <div className="flex justify-between">
                  <span>VS Code</span>
                  <span className="text-cyan-500">95%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
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
                Análisis de Datos
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Excel</span>
                  <span className="text-cyan-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="flex justify-between">
                  <span>Power BI</span>
                  <span className="text-cyan-500">70%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
                <div className="flex justify-between">
                  <span>Python (Pandas)</span>
                  <span className="text-cyan-500">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-6 shadow-lg"
            >
              <div className="text-yellow-600 dark:text-yellow-400 text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Soft Skills
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between items-center">
                  <span>Proactividad</span>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Responsabilidad</span>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Trabajo en equipo</span>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Aprendizaje rápido</span>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Comunicación</span>
                  <span className="text-yellow-500">⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gestión del tiempo</span>
                  <span className="text-yellow-500">⭐⭐⭐⭐</span>
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
