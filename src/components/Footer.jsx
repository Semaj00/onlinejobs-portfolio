import React from 'react'
import { Briefcase, FileText, Github, Linkedin } from 'lucide-react'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/Semaj00', icon: Github },
  { label: 'OnlineJobs.ph', href: 'https://v2.onlinejobs.ph/jobseekers/info/2727220', icon: Briefcase },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marvin-james-libag-063b44278/?locale=en', icon: Linkedin },
  { label: 'Resume', href: new URL('../../LIBAG_RESUME.pdf', import.meta.url).href, icon: FileText, download: true },
]

export default function Footer(){
  return (
    <footer className="mt-16 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <div className="flex flex-wrap gap-2 ml-2">
            {footerLinks.map(({ label, href, icon: Icon, download }) => (
              <a
                key={label}
                href={href}
                download={download ? '' : undefined}
                target={download ? undefined : '_blank'}
                rel={download ? undefined : 'noreferrer'}
                aria-label={label}
                className="flex items-center gap-2 px-3 py-2 rounded-full glass"
              >
                <Icon size={16} />
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
