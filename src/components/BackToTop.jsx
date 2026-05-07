import React, { useEffect, useState } from 'react'

export default function BackToTop(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  if(!show) return null
  return (
    <button onClick={()=> window.scrollTo({ top:0, behavior:'smooth' })} className="fixed right-6 bottom-6 p-3 rounded-full bg-indigo-600 shadow-lg">↑</button>
  )
}
