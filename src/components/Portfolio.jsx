import React from 'react'
import { motion } from 'framer-motion'

const sampleWorkUrl = 'https://drive.google.com/drive/folders/1MdxkNaUcdv6n_X-kwLI7up3sdyVKz9f9?usp=drive_link'

const PROJECTS = [
  {title:'Short-Form AI Video Creator Samples', desc:'A collection of short-form AI video creator sample works and edits.', href: sampleWorkUrl, cta: 'View Samples'}
]

export default function Portfolio(){
  return (
    <section id="portfolio" className="py-16">
      <h3 className="text-2xl font-bold">Sample Works</h3>
      <div className="mt-6 grid gap-6 max-w-2xl">
        {PROJECTS.map(p=> (
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden glass shadow" key={p.title}>
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center">
              <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.45),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.35),_transparent_32%)]" />
              <div className="relative z-10 flex flex-col items-center text-center px-6">
                <div className="mb-4 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">
                  AI Video Editor
                </div>
                <div className="text-3xl font-extrabold text-white leading-tight">Short-form cuts</div>
                <p className="mt-3 max-w-sm text-sm text-slate-300">Fast pacing, clean captions, hook-driven editing, and polished social-ready visuals.</p>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-slate-300 text-sm mt-2">{p.desc}</p>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mt-4 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition text-sm font-medium"
                >
                  {p.cta}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
