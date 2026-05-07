import React from 'react'
import { motion } from 'framer-motion'

const TESTS = [
  {name:'Client A', role:'', quote:''},
  {name:'Client B', role:'', quote:''},
  {name:'Client C', role:'', quote:''}
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-16">
      <h3 className="text-2xl font-bold">Testimonials</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {TESTS.map(t=> (
          <motion.div whileHover={{ y: -6 }} className="glass p-6 rounded-lg shadow" key={t.name}>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-slate-400">{t.role}</div>
            <p className="mt-3 text-slate-300">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
