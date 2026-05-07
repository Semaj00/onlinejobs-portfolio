import React, { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Navbar({ onToggleTheme, theme }){
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-transparent backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold">YN</div>
          <div>
            <a href="#" className="text-lg font-semibold">Your Name</a>
            <div className="text-xs text-slate-400">Freelance • Philippines</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
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
          <a onClick={()=> setOpen(false)} href="#portfolio">Portfolio</a>
          <a onClick={()=> setOpen(false)} href="#contact">Contact</a>
        </div>
      )}
    </header>
  )
}
