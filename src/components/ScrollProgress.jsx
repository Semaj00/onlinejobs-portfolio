import React, { useEffect, useState } from 'react'

export default function ScrollProgress(){
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    const handler = ()=>{
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = (window.scrollY / total) * 100
      setProgress(Math.min(100, Math.max(0, pct || 0)))
    }
    window.addEventListener('scroll', handler)
    handler()
    return ()=> window.removeEventListener('scroll', handler)
  },[])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div style={{ width: `${progress}%` }} className="h-1 bg-indigo-500 transition-[width] duration-150"></div>
    </div>
  )
}
