import React from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {title:'Tourism Chatbot System', desc:'Conversational assistant for tourists and bookings.'},
  {title:'Facial Recognition Attendance System', desc:'Attendance automation using face recognition.'},
  {title:'Electricity Demand Forecasting Using Machine Learning', desc:'Time series forecasting solution.'},
  {title:'AI Mental Health Companion', desc:'Companion chatbot using empathetic responses.'},
  {title:'Tool Management System', desc:'Inventory and tool tracking web app.'}
]

export default function Portfolio(){
  return (
    <section id="portfolio" className="py-16">
      <h3 className="text-2xl font-bold">Portfolio</h3>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(p=> (
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden glass shadow" key={p.title}>
            <div className="h-40 bg-gradient-to-r from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">Image Placeholder</div>
            <div className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-slate-300 text-sm mt-2">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
