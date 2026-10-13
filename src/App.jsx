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
    document.documentElement.classList.add('dark')
  },[])

  const toggleTheme = ()=>{
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next !== 'light')
    setTheme(next)
  }

  return (
    <div className={theme === 'light'
      ? 'theme-light min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-200 text-slate-900'
      : 'theme-dark min-h-screen bg-gradient-to-b from-slate-900 via-[#020617] to-slate-900 text-slate-100'}>
      <ScrollProgress />
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main className="container mx-auto px-6 lg:px-8">
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Services />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
