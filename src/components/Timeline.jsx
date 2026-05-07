import React from 'react'

export default function Timeline(){
  const items = [

    {title:'Training & Certifications', date:'July 9, 2025', desc:'OJT Training: Code, Create, Protect: Navigating Intellectual Property Rights in Computer Science .'},
    {title:'Training & Certifications', date:' February 24, 2025', desc:'OJT Training: AI Frontier: Generative AI Insight and Practice of AI Creation .'}, 
    {title:'Training & Certifications', date:' November 25, 2023', desc:'Webinar: Cyber Wellness  .'}
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
