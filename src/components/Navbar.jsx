import React, { useState } from 'react'
import { Moon, Sun, Menu, X, Video } from 'lucide-react'

export default function Navbar({ onToggleTheme, theme }){
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div aria-label="MJL video editor logo" className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20 rotate-3">
            <div className="w-9 h-9 rounded-lg bg-slate-950/80 flex items-center justify-center -rotate-3">
              <Video size={19} strokeWidth={2.4} className="text-white" />
            </div>
            <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-rose-300 ring-2 ring-slate-950" />
          </div>
          <div>
            <a href="#" className="text-lg font-semibold">Marvin James Libag</a>
            <div className="text-xs text-slate-400">Freelance • Philippines</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onToggleTheme} aria-label="Toggle theme" className="p-2 rounded-md glass">
            {theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>}
          </button>
          <button onClick={()=> setOpen(!open)} aria-label="Toggle menu" className="md:hidden p-2 rounded-md glass">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-6 mb-4 glass rounded-xl p-4 flex flex-col gap-3">
          <a onClick={()=> setOpen(false)} href="#about">About</a>
          <a onClick={()=> setOpen(false)} href="#skills">Skills</a>
          <a onClick={()=> setOpen(false)} href="#services">Services</a>
          <a onClick={()=> setOpen(false)} href="#contact">Contact</a>
        </div>
      )}
    </header>
  )
}
