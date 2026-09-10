'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, Instagram, MapPin, MessageCircle, Plus, Stethoscope } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { painPoints, treatments, careSteps, patientVoices, questions, contactDetails } from '@/data/conversion';
import { BeforeAfter } from './before-after';
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
      <p className="treatments-lead">O ponto de partida é o que o seu rosto precisa.</p>
      <p>Harmonização Orofacial em Salvador, com avaliação individualizada e planejamento para cada indicação.</p>
      <p className="treatments-context">Do preenchimento facial ao rejuvenescimento, cada possibilidade tem um propósito dentro do seu planejamento.</p>
      <div className="treatment-signature" aria-hidden="true"><span>JB</span><i/>ESTRUTURA · PROPORÇÃO · IDENTIDADE</div>
    </div>
    <div className="treatments-options"><ol>{treatments.map(([title,copy],i)=><li key={title} data-reveal><span className="editorial-index">0{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
      <AppointmentLink id="treatments-whatsapp">AGENDAR AVALIAÇÃO</AppointmentLink>
    </div>
  </section>;
}

export function CareMethod() {
  return <section id="metodo" className="care-chapter conversion-section" aria-labelledby="care-title">
    <p className="chapter-tag">05 / Critério · Planejamento · Identidade</p>
    <div className="care-heading"><h2 id="care-title" data-reveal>O meu jeito<br/><em>de cuidar</em></h2><div className="care-manifesto" data-reveal>
      <p>Um resultado bonito não depende apenas da quantidade de produto utilizada.</p>
      <p>Depende de entender estrutura, proporções, envelhecimento e aquilo que realmente precisa ser tratado.</p>
      <p>Por isso, meu trabalho não segue fórmulas prontas ou protocolos iguais para todos os pacientes.</p>
      <p>Cada indicação parte de uma avaliação individualizada e de um planejamento pensado para o seu rosto.</p>
    </div></div>
    <div className="care-body"><figure className="care-photo"><Image src={site.images.about} alt="Dra. Joelane Bittencourt durante o planejamento no consultório" fill sizes="(max-width:700px) 88vw, 39vw"/></figure>
      <div className="ritual-list">{careSteps.map(([title,copy],i)=><article key={title} data-reveal><span>0{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={22} strokeWidth={1}/></article>)}</div>
    </div>
  </section>;
}

export function Testimonials() {
  const [index,setIndex]=useState(0); const voice=patientVoices[index];
  return <section id="depoimentos" className="testimonials-chapter conversion-section" aria-labelledby="testimonials-title">
    <p className="chapter-tag">06 / Experiências compartilhadas</p><h2 id="testimonials-title" data-reveal>O que meus<br/><em>pacientes dizem</em></h2>
    <div className="voice-stage" aria-live="polite" aria-atomic="true">
      {voice.photo&&<Image className="voice-photo" src={voice.photo} alt={voice.photoAlt||'Retrato autorizado da paciente'} width={96} height={96}/>}
      {voice.pending?<div className="voice-pending"><span className="editorial-index">RELATO 0{index+1} / A INSERIR</span><p className="content-placeholder" data-placeholder>{voice.quote}</p></div>:<blockquote>“{voice.quote}”</blockquote>}
      {voice.name&&<p className="voice-name">{voice.name}</p>}{voice.objective&&<p>{voice.objective}</p>}
      {voice.sourceUrl&&<a className="review-source" href={voice.sourceUrl} target="_blank" rel="noopener noreferrer">Ler avaliação no Google<ArrowUpRight size={16} aria-hidden="true"/></a>}
      {voice.resultIndex!==undefined&&<BeforeAfter record={site.results.items[voice.resultIndex]}/>}
    </div>
    <p className="voice-context">Trechos de avaliações públicas no Google. Experiências individuais, sem vínculo presumido com as fotografias dos casos.</p>
    <div className="voice-navigation"><button className="viewer-icon" aria-label="Depoimento anterior" onClick={()=>setIndex((index+patientVoices.length-1)%patientVoices.length)}><ArrowLeft/></button>
      <div role="group" aria-label="Selecionar depoimento">{patientVoices.map((v,i)=><button key={v.id} aria-label={`Depoimento ${i+1}`} aria-pressed={index===i} onClick={()=>setIndex(i)}>0{i+1}</button>)}</div>
      <button className="viewer-icon" aria-label="Próximo depoimento" onClick={()=>setIndex((index+1)%patientVoices.length)}><ArrowRight/></button>
    </div>
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
