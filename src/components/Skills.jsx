import React from 'react'
import { Code, Database, FileText, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const SKILLS = [
  {name:'Data Entry', icon: FileText},
  {name:'Microsoft Excel', icon: Database},
  {name:'Google Workspace', icon: Code},
  {name:'Canva', icon: Cpu},
  {name:'ChatGPT & AI Tools', icon: Cpu},
  {name:'Web Development', icon: Code},
  {name:'Bookkeeping', icon: Database},
  {name:'Digital Marketing', icon: Code},
  {name:'Customer Support', icon: FileText},
  {name:'Social Media Management', icon: FileText}
]

export default function Skills(){
  return (
    <section id="skills" className="py-16">
      <h3 className="text-2xl font-bold">Skills</h3>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {SKILLS.map((s, idx)=>{
          const Icon = s.icon
          return (
            <motion.div key={s.name} whileHover={{ y: -6 }} className="glass p-4 rounded-lg shadow-sm flex items-center gap-3">
              <div className="p-3 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 text-white"><Icon size={20} /></div>
              <div>
                <div className="font-semibold">{s.name}</div>
                <div className="text-xs text-slate-400">Freelancer skill</div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
