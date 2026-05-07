import React from 'react'
import { Github, Linkedin, Facebook } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="mt-16 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <div className="flex gap-2 ml-2">
            <a href="#" aria-label="GitHub" className="p-2 rounded-full glass"><Github size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full glass"><Linkedin size={16} /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full glass"><Facebook size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
