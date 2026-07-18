import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-16">
      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="max-w-3xl">
        <h3 className="text-2xl font-bold">About Me</h3>
        <p className="mt-4 text-slate-300">Virtual assistant and web developer with experience supporting businesses with automation, AI tools and remote operations. I focus on providing organized, reliable and secure services. Strong communication, attention to detail, and quick learning.</p>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>- Freelancer-focused, available for flexible schedules</li>
          <li>- Comfortable with data privacy and handling sensitive information</li>
          <li>- Committed to clear reporting and deadline-driven delivery</li>
        </ul>
      </motion.div>
    </section>
  )
}
