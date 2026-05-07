import React from 'react'
import { Briefcase, Code, Cpu, Search } from 'lucide-react'
import { motion } from 'framer-motion'

const SERVICES = [
  {title:'Virtual Assistance', icon: Briefcase},
  {title:'Web Development', icon: Code},
  {title:'AI Chatbot Setup', icon: Cpu},
  {title:'Lead Generation', icon: Search},
  {title:'Research & Data Entry', icon: Briefcase},
  {title:'Social Media Assistance', icon: Briefcase}
]

export default function Services(){
  return (
    <section id="services" className="py-16">
      <h3 className="text-2xl font-bold">Services</h3>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SERVICES.map(s=>{
          const Icon = s.icon
          return (
            <motion.div whileHover={{ y: -6 }} className="glass p-6 rounded-xl shadow" key={s.title}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-indigo-600 text-white"><Icon /></div>
                <div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-slate-300 text-sm mt-1">Professional, reliable and tailored to client needs.</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
