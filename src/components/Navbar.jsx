import { useState } from 'react'
import { Menu, X, ArrowUpRight, SunMoon } from 'lucide-react'
const links = [['Home','home'],['Services','services'],['Experience','experience'],['Projects','projects'],['About Me','about'],['Contact','contact']]
export default function Navbar(){
 const [open,setOpen]=useState(false)
 return <header className="nav-wrap"><nav className="navbar shell"><a href="#home" className="brand"><span className="brand-mark">L.</span><span>Oeu Lina<span className="brand-dot">.</span></span></a><div className="nav-links">{links.map(([label,id])=><a key={id} className={id==='home'?'active':''} href={`#${id}`}>{label}</a>)}</div><a className="nav-cta" href="#contact">Let’s Talk <ArrowUpRight size={15}/></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></nav>{open&&<div className="mobile-menu">{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}<a href="#contact" onClick={()=>setOpen(false)}>Let’s Talk ↗</a></div>}</header>
}
