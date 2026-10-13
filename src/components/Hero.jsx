import React from 'react'
import Typing from './Typing'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.svg.png'

const resumeUrl = new URL('../../LIBAG_RESUME.pdf', import.meta.url).href

export default function Hero(){
  return (
    <section id="home" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I'm Marvin James Libag</h1>
          <h2 className="mt-3 text-2xl text-indigo-300 font-semibold"><Typing /></h2>
          <p className="mt-6 max-w-xl text-slate-300">I help businesses and entrepreneurs with virtual assistance, web development, AI integration and reliable remote support. Fast, detail-oriented, and based in the Philippines.</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#contact" className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md shadow-md">Hire Me</a>
            <a href="#portfolio" className="px-5 py-3 border border-indigo-400/50 text-indigo-200 rounded-md hover:bg-indigo-500/10">View Sample Works</a>
            <a href={resumeUrl} className="px-5 py-3 border border-slate-700 rounded-md" target="_blank" rel="noreferrer">Download Resume</a>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex justify-center lg:justify-end">
          <div className="w-64 h-64 rounded-2xl glass shadow-lg overflow-hidden flex items-center justify-center">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
