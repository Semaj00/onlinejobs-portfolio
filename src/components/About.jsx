import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.svg.png'

export default function About(){
  return (
    <section id="about" className="py-16">
      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold">About Me</h3>
          <p className="mt-4 text-slate-300">Virtual assistant and web developer with experience supporting businesses with automation, AI tools and remote operations. I focus on providing organized, reliable and secure services. Strong communication, attention to detail, and quick learning.</p>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>- Freelancer-focused, available for flexible schedules</li>
            <li>- Comfortable with data privacy and handling sensitive information</li>
            <li>- Committed to clear reporting and deadline-driven delivery</li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-44 h-44 rounded-xl overflow-hidden glass shadow-md">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
