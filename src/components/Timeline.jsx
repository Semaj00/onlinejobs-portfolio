import React from 'react'

export default function Timeline(){
  const items = [
    {title:'Freelance Projects', date:'2021 - Present', desc:'Various client projects for web apps and virtual assistance.'},
    {title:'Academic Projects', date:'2019 - 2021', desc:'University projects involving ML and system design.'},
    {title:'Training & Certifications', date:'2020 - 2023', desc:'Online courses: AI, data analysis, web development.'}
  ]

  return (
    <section id="experience" className="py-16">
      <h3 className="text-2xl font-bold">Experience & Training</h3>
      <div className="mt-8 border-l border-slate-700 pl-6">
        {items.map((it, idx)=> (
          <div key={it.title} className="mb-8 relative">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-indigo-500 ring-4 ring-slate-900"></div>
            <h4 className="font-semibold">{it.title} <span className="text-sm text-slate-400">— {it.date}</span></h4>
            <p className="text-slate-300 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
