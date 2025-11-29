'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
  <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
          <Image
            src="/fondo.jpg"
            alt="Imagen de fondo personalizada"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>
        
        {/* Content */}
        <Link href="/sobre-mi" className="relative z-10 text-center px-6 py-16 block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-transparent border-2 border-cyan-400 rounded-full flex flex-col items-center justify-center hover:bg-cyan-900 hover:bg-opacity-20 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg shadow-cyan-500/50"
          >
            <div className="text-center px-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wider"
                style={{
                  fontFamily: 'monospace',
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                  letterSpacing: '0.05em'
                }}
              >
                SOY
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-cyan-400 tracking-wider mb-4"
                style={{
                  fontFamily: 'monospace',
                  textShadow: '0 0 30px rgba(34, 211, 238, 0.8)'
                }}
              >
                LUIS CONTRERAS
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-sm md:text-base text-gray-200 font-light tracking-wide"
                style={{
                  fontFamily: 'monospace',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                  letterSpacing: '0.03em'
                }}
              >
                &gt; ESTUDIANTE DE INFORMÁTICA<br/>CON ENFOQUE EN CIBERSEGURIDAD
              </motion.p>
            </div>
          </motion.div>
        </Link>
      </main>
    </div>
  );
}      