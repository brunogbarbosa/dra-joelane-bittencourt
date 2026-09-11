'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import { ArrowUpRight, Clock3, Instagram, MapPin, MessageCircle, Plus, Stethoscope } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { painPoints, treatments, careSteps, questions, contactDetails } from '@/data/conversion';
export { Testimonials } from './testimonials';
import { AppointmentLink } from './appointment-link';

export function PainPoints() {
  return <section id="identificacao" className="pain-chapter conversion-section" aria-labelledby="pain-title">
    <p className="chapter-tag">02 / Um olhar para você</p>
    <h2 id="pain-title" data-reveal>Talvez você tenha<br/>chegado até aqui <em>porque…</em></h2>
    <ol className="pain-list">{painPoints.map((text,i)=><li key={text} className={i===3?'pain-highlight':''} data-reveal>
      <span className="editorial-index">0{i+1}</span><p>“{text}”</p>
    </li>)}</ol>
    <p className="pain-reassurance" data-reveal><span>Você não precisa saber qual procedimento fazer.</span> <strong>Essa é a minha parte.</strong></p>
  </section>;
}

export function Treatments() {
  return <section id="tratamentos" className="treatments-chapter conversion-section" aria-labelledby="treatments-title">
    <div className="treatments-intro"><p className="chapter-tag">03 / Possibilidades de cuidado</p>
      <h2 id="treatments-title" data-reveal>Possibilidades<br/><em>de tratamento</em></h2>
      <p className="treatments-lead">Cada possibilidade tem um propósito. E toda indicação começa pela sua avaliação.</p>
      <div className="treatment-signature" aria-hidden="true"><span>JB</span><i/>ESTRUTURA · PROPORÇÃO · IDENTIDADE</div>
    </div>
    <div className="treatments-options"><ol>{treatments.map(([title,copy],i)=><li key={title} data-reveal><span className="editorial-index">0{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
      <p className="treatments-possibilities">Entre as possibilidades estão: Toxina botulínica (Botox®), preenchimento facial, bioestimuladores, fios de PDO e tratamentos para qualidade da pele.</p>
      <AppointmentLink id="treatments-whatsapp">AGENDAR AVALIAÇÃO</AppointmentLink>
    </div>
  </section>;
}

export function CareMethod() {
  return <section id="metodo" className="care-chapter conversion-section" aria-labelledby="care-title">
    <p className="chapter-tag">05 / Critério · Planejamento · Identidade</p>
    <div className="care-intro" data-reveal><p>Um resultado bonito não depende apenas da quantidade de produto utilizada. Depende de entender estrutura, proporções, envelhecimento e aquilo que realmente precisa ser tratado.</p></div>
    <div className="care-heading"><h2 id="care-title" data-reveal>O meu jeito<br/><em>de cuidar</em></h2></div>
    <div className="care-body"><figure className="care-photo"><div className="care-photo-image"><Image src={site.images.about} alt="Dra. Joelane Bittencourt durante o planejamento no consultório" fill sizes="(max-width:700px) 88vw, 44vw"/></div></figure>
    <div className="care-content">
      <div className="care-details">{careSteps.map(([title,copy],i)=><details key={title} open={i===0}><summary><span className="editorial-index">0{i+1}</span><h3>{title}</h3><Plus size={20} aria-hidden="true"/></summary><p>{copy}</p></details>)}</div>
    </div></div>
  </section>;
}

export function FAQ() {
  const [open,setOpen]=useState<string|null>(questions[0].id); const uid=useId();
  return <section id="duvidas" className="faq-chapter conversion-section" aria-labelledby="faq-title">
    <div><p className="chapter-tag">07 / Espaço para suas perguntas</p><h2 id="faq-title" data-reveal>Dúvidas<br/><em>frequentes</em></h2></div>
    <div className="faq-list">{questions.map(q=>{const expanded=open===q.id;return <article className={`faq-item ${expanded?'is-open':''}`} key={q.id}>
      <h3><button id={`${uid}-${q.id}-button`} aria-expanded={expanded} aria-controls={`${uid}-${q.id}-panel`} onClick={()=>setOpen(expanded?null:q.id)}>{q.question}<Plus className="faq-icon" size={24} strokeWidth={1.5} aria-hidden="true"/></button></h3>
      <div className="faq-answer" id={`${uid}-${q.id}-panel`} role="region" aria-labelledby={`${uid}-${q.id}-button`} aria-hidden={!expanded} inert={!expanded}><div><p>{q.answer}</p></div></div>
    </article>;})}</div>
  </section>;
}

export function ContactDetails() {
  return <section id="contato" className="contact-chapter conversion-section" aria-labelledby="contact-title">
    <p className="chapter-tag">10 / Vamos conversar</p><div className="contact-heading"><h2 id="contact-title">O próximo passo<br/><em>começa com você.</em></h2><AppointmentLink id="final-whatsapp">AGENDAR AVALIAÇÃO</AppointmentLink></div>
    <dl className="contact-details">
      <div><dt><MapPin aria-hidden="true"/>Endereço</dt><dd>{contactDetails.building}<br/>{contactDetails.address}</dd></div>
      <div><dt><MessageCircle aria-hidden="true"/>WhatsApp</dt><dd><a href={appointmentUrl} data-cta="contact-whatsapp" target="_blank" rel="noopener noreferrer">{site.phone}<ArrowUpRight size={16} aria-hidden="true"/></a></dd></div>
      <div><dt><Clock3 aria-hidden="true"/>Horários de atendimento</dt><dd>{contactDetails.hours}<br/><span className="saturday-hours">{contactDetails.saturdayHours}</span></dd></div>
      <div><dt><Instagram aria-hidden="true"/>Instagram</dt><dd><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}<ArrowUpRight size={16} aria-hidden="true"/></a></dd></div>
      <div><dt><Stethoscope aria-hidden="true"/>Informações profissionais</dt><dd>Dra. {site.name}<br/>Cirurgiã-dentista · {site.cro}<br/>Harmonização Orofacial</dd></div>
    </dl>
  </section>;
}
