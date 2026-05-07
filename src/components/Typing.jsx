import React, { useEffect, useState } from 'react'

const TITLES = [
  'Virtual Assistant',
  'Web Developer',
  'AI Enthusiast',
  'Data Entry Specialist'
]

export default function Typing(){
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)

  useEffect(()=>{
    const timeout = setInterval(()=>{
      setSubIndex((prev)=>{
        if(prev === TITLES[index].length){
          clearInterval(timeout)
          setTimeout(()=> setIndex((i)=> (i+1)%TITLES.length), 900)
        }
        return Math.min(prev+1, TITLES[index].length)
      })
    }, 80)
    return ()=> clearInterval(timeout)
  },[index])

  useEffect(()=>{
    const blinkInterval = setInterval(()=> setBlink(b=>!b), 400)
    return ()=> clearInterval(blinkInterval)
  },[])

  return (
    <span className="typing-cursor">
      {TITLES[index].slice(0, subIndex)}{blink ? '' : ''}
    </span>
  )
}
