import React from 'react'
import { motion } from 'framer-motion'

const SAMPLE_FOLDERS = [
  'https://drive.google.com/drive/folders/1bWH-Ofo0lZOdXv0Czi2xCayNiE_Bf5Kw?usp=drive_link',
  'https://drive.google.com/drive/folders/1SRri50KvRetiowejKED2F44e3EUM1oVD?usp=drive_link',
  'https://drive.google.com/drive/folders/1gg8JZ0cSCX0hPIpn-Med3L7VhGJlrNmy?usp=drive_link',
  'https://drive.google.com/drive/folders/16aAvQ1JLsPt4_xAM1lar1shlFYochSN5?usp=drive_link'
]

const PROJECTS = [
  {
    title:'Sample Videos',
    desc:'Short-form and long-form video editing samples with engaging pacing, clean transitions, and polished storytelling.',
    tag:'Video Editor',
    visualTitle:'Short & long-form edits',
    visualDesc:'From fast social cuts to structured long-form stories, edited for clarity, pacing, and engagement.',
    folders: SAMPLE_FOLDERS
  }
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
                  {p.tag}
                </div>
                <div className="text-3xl font-extrabold text-white leading-tight">{p.visualTitle}</div>
                <p className="mt-3 max-w-sm text-sm text-slate-300">{p.visualDesc}</p>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-slate-300 text-sm mt-2">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.folders.map((folder, index) => (
                  <a
                    href={folder}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition text-sm font-medium"
                    key={folder}
                  >
                    Open Sample Folder {index + 1}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
