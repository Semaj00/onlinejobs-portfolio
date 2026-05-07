import React from 'react'
import { Github, Linkedin, Mail, PhoneCall } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <h3 className="text-2xl font-bold">Contact</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-lg shadow">
          <h4 className="font-semibold">Get in touch</h4>
          <p className="text-slate-300 mt-2 flex items-center gap-2"><Mail size={16} /> Email: <span className="text-indigo-300">jameslbag000@gmail.com</span></p>
          <p className="text-slate-300 mt-1 flex items-center gap-2"><PhoneCall size={16} /> Phone: <span className="text-indigo-300">+63 9362133099</span></p>
          <p className="text-slate-300 mt-1">Location: <span className="text-indigo-300">Philippines</span></p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="p-2 rounded-md border border-slate-700 hover:border-indigo-500 transition" aria-label="GitHub"><Github size={18} /></a>
            <a href="#" className="p-2 rounded-md border border-slate-700 hover:border-indigo-500 transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

        <form className="glass p-6 rounded-lg shadow space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Form submission disabled in demo.')}}>
          <input required placeholder="Your name" className="w-full p-3 rounded bg-transparent border border-slate-700" />
          <input required placeholder="Email" type="email" className="w-full p-3 rounded bg-transparent border border-slate-700" />
          <textarea required placeholder="Message" className="w-full p-3 rounded bg-transparent border border-slate-700" rows={5}></textarea>
          <div className="flex gap-3">
            <button className="px-5 py-3 bg-indigo-600 rounded">Send Message</button>
            <a className="px-5 py-3 border border-slate-700 rounded" href="mailto:youremail@example.com">Email Me</a>
          </div>
        </form>
      </div>
    </section>
  )
}
