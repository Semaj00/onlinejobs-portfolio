import React from 'react'
import { Briefcase, FileText, Github, Linkedin, Mail, PhoneCall } from 'lucide-react'

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/Semaj00', icon: Github },
  { label: 'OnlineJobs.ph', href: 'https://v2.onlinejobs.ph/jobseekers/info/2727220', icon: Briefcase },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marvin-james-libag-063b44278/?locale=en', icon: Linkedin },
  { label: 'Resume', href: new URL('../../LIBAG_RESUME.pdf', import.meta.url).href, icon: FileText, download: true },
]

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
          <div className="mt-5 flex flex-wrap gap-3">
            {contactLinks.map(({ label, href, icon: Icon, download }) => (
              <a
                key={label}
                href={href}
                download={download ? '' : undefined}
                target={download ? undefined : '_blank'}
                rel={download ? undefined : 'noreferrer'}
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700 hover:border-indigo-500 transition"
                aria-label={label}
              >
                <Icon size={18} />
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <form
          className="glass p-6 rounded-lg shadow space-y-3"
          action="https://formsubmit.co/jameslbag000@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New portfolio inquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={window.location.href} />
          <input required name="name" placeholder="Your name" className="w-full p-3 rounded bg-transparent border border-slate-700" />
          <input required name="email" placeholder="Email" type="email" className="w-full p-3 rounded bg-transparent border border-slate-700" />
          <textarea required name="message" placeholder="Message" className="w-full p-3 rounded bg-transparent border border-slate-700" rows={5}></textarea>
          <div className="flex gap-3">
            <button type="submit" className="px-5 py-3 bg-indigo-600 rounded">Send Message</button>
            <a className="px-5 py-3 border border-slate-700 rounded" href="mailto:jameslbag000@gmail.com">Email Me</a>
          </div>
        </form>
      </div>
    </section>
  )
}
