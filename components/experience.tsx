'use client';
import { CampaignHero } from './campaign-hero';
import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowUpRight, X, Menu } from 'lucide-react';
import { Chapters } from './chapters';
import { site, appointmentUrl } from '@/data/site';

function Appointment({className=''}:{className?:string}){return <a className={`appointment ${className}`} data-cta="header-whatsapp" href={appointmentUrl} target="_blank" rel="noreferrer">Agendar avaliação <ArrowUpRight size={19}/></a>}
function Label({children}:{children:React.ReactNode}){return <p className="eyebrow">{children}</p>}
const navigation=[['Início','inicio'],['Tratamentos','tratamentos'],['Resultados','resultados'],['Sobre','sobre'],['Dúvidas','duvidas'],['Contato','contato']];
function Header(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const dialog=useRef<HTMLDialogElement>(null); const trigger=useRef<HTMLButtonElement>(null);
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>70);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
 useEffect(()=>{if(open){dialog.current?.showModal();document.body.style.overflow='hidden'}else{dialog.current?.close();document.body.style.overflow=''}return()=>{document.body.style.overflow=''}},[open]);
 const close=()=>{setOpen(false);trigger.current?.focus()};
 return <><header className={scrolled?'header scrolled':'header'}><a className="wordmark" href="#inicio" aria-label={`${site.name}, início`}><span className="brand-monogram" aria-hidden="true"><svg viewBox="0 0 100 100" width="54" height="54" fill="none"><path d="M18 57v24h23V19M49 19h32L54 47l31 34H49V28m8 3 14-12M54 54l23 27" stroke="currentColor" strokeWidth="2.5"/></svg></span><span className="brand-type">JOELANE BITTENCOURT<small>HARMONIZAÇÃO OROFACIAL</small></span></a><nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([name,id])=><a key={id} href={`#${id}`}>{name}</a>)}</nav><Appointment className="header-cta"/><button className="mobile-menu icon-button" ref={trigger} aria-label="Abrir menu" aria-expanded={open} onClick={()=>setOpen(true)}><Menu/></button></header><dialog ref={dialog} className="menu-dialog" aria-label="Menu de navegação" onCancel={close} onClose={()=>setOpen(false)}><button className="menu-close icon-button" aria-label="Fechar menu" onClick={close}><X/></button><Label>{site.name}</Label><nav aria-label="Navegação mobile">{navigation.map(([name,id])=><a key={id} href={`#${id}`} onClick={close}>{name}<ArrowUpRight/></a>)}</nav></dialog></>;
}
export function Experience(){const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');if(media.matches)return;const animations:Animation[]=[];const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;animations.push(entry.target.animate([{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:850,easing:'cubic-bezier(.2,.7,.2,1)'}));observer.unobserve(entry.target)}),{threshold:.08});root.current?.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));const stop=()=>{if(media.matches){animations.forEach(a=>a.cancel());observer.disconnect()}};media.addEventListener('change',stop);return()=>{observer.disconnect();animations.forEach(a=>a.cancel());media.removeEventListener('change',stop)}},[]);
 return <div ref={root}><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header/><main id="conteudo" tabIndex={-1}><CampaignHero/><Chapters/></main><footer className="footer conversion-footer"><a href="#inicio" className="footer-name">{site.name}</a><div className="footer-bottom"><span>© {new Date().getFullYear()} · {site.cro}</span><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={16}/></a><a href="#inicio">Voltar ao início <ArrowUp size={16} aria-hidden="true"/></a></div></footer></div>
}
