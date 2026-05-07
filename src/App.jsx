import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

export default function App(){
  const [theme, setTheme] = useState('dark')

  useEffect(()=>{
    const stored = localStorage.getItem('site-theme')
    if(stored) setTheme(stored)
    document.documentElement.classList.toggle('dark', stored !== 'light')
  },[])

  const toggleTheme = ()=>{
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next !== 'light')
    localStorage.setItem('site-theme', next)
    setTheme(next)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-[#020617] to-slate-900 text-slate-100">
      <ScrollProgress />
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main className="container mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
