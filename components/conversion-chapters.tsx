'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { painPoints, treatments, careSteps, caseStudies, patientVoices, questions, contactDetails } from '@/data/conversion';
import { BeforeAfter } from './before-after';
import { AppointmentLink } from './appointment-link';

export function PainPoints() {
  return <section id="identificacao" className="pain-chapter conversion-section" aria-labelledby="pain-title">
    <p className="chapter-tag">02 / Um olhar para você</p>
    <h2 id="pain-title" data-reveal>Talvez você tenha<br/>chegado até aqui <em>porque…</em></h2>
    <ol className="pain-list">{painPoints.map((text,i)=><li key={text} className={i===4?'pain-highlight':''} data-reveal>
      <span className="editorial-index">0{i+1}</span><p>“{text}”</p>
    </li>)}</ol>
  </section>;
}

export function Treatments() {
  return <section id="tratamentos" className="treatments-chapter conversion-section" aria-labelledby="treatments-title">
    <div className="treatments-intro"><p className="chapter-tag">03 / Possibilidades de cuidado</p>
      <h2 id="treatments-title" data-reveal>O que pode ser<br/><em>feito por você</em></h2>
      <p>Cada rosto tem uma necessidade diferente.</p><p>Por isso, o tratamento começa com uma avaliação individualizada para entender suas queixas e definir o que realmente faz sentido para você.</p>
      <figure className="treatments-photo"><Image src={site.images.beauty} alt="Dra. Joelane Bittencourt em seu consultório" fill sizes="(max-width:700px) 88vw, 35vw"/></figure>
    </div>
    <div className="treatments-options"><ol>{treatments.map((text,i)=><li key={text} data-reveal><span className="editorial-index">0{i+1}</span><h3>{text}</h3></li>)}</ol>
      <AppointmentLink id="treatments-whatsapp">AGENDAR AVALIAÇÃO</AppointmentLink>
    </div>
  </section>;
}

export function CaseStudies({ onOpen }: { onOpen: (index:number, button:HTMLButtonElement)=>void }) {
  const [active,setActive]=useState(0);
  const current=caseStudies[active];
  const pending=[current.complaint,current.approach,current.result].some(value=>value.startsWith('['));
  return <div className="case-studies">
    <div className="case-navigation" role="group" aria-label="Escolher estudo de caso">{caseStudies.map((_,i)=><button key={i} aria-pressed={active===i} onClick={()=>setActive(i)}>CASO 0{i+1}<span aria-hidden="true">↗</span></button>)}</div>
    <div className="case-layout" key={active}>
      <BeforeAfter record={site.results.items[current.resultIndex]} title={`Caso 0${active+1} · Antes e depois`}/>
      <div className="case-copy" aria-live="polite"><p className="chapter-tag">Um olhar mais próximo / 0{active+1}</p>
        <h3>Cada rosto.<br/><em>Uma história.</em></h3>
        <dl className="case-details">{[['Queixa',current.complaint],['Conduta',current.approach],['Resultado',current.result]].map(([label,value])=><div key={label}><dt>{label}</dt><dd className="content-placeholder" data-placeholder>{value}</dd></div>)}</dl>
        {pending&&<p className="pending-caption">Informações do caso a serem preenchidas pela Dra.</p>}
        <button className="chapter-link" onClick={e=>onOpen(current.resultIndex,e.currentTarget)}>Ampliar registro original<ArrowUpRight size={20}/></button>
      </div>
    </div>
  </div>;
}

export function CareMethod() {
  return <section id="metodo" className="care-chapter conversion-section" aria-labelledby="care-title">
    <p className="chapter-tag">05 / Identidade · Naturalidade · Intenção</p>
    <div className="care-heading"><h2 id="care-title" data-reveal>O meu jeito<br/><em>de cuidar</em></h2><div className="care-manifesto" data-reveal>
      <p>Não existe uma fórmula pronta para todos os rostos.</p><p>Cada paciente possui uma estrutura, uma história e uma expectativa.</p>
      <p>Por isso, antes de qualquer procedimento, existe escuta, avaliação e planejamento.</p>
      <p>O objetivo não é transformar você em outra pessoa.</p><p>É valorizar o que já existe, respeitando sua individualidade e buscando um resultado natural e equilibrado.</p>
    </div></div>
    <div className="care-body"><figure className="care-photo"><Image src={site.images.about} alt="Dra. Joelane Bittencourt durante o planejamento no consultório" fill sizes="(max-width:700px) 88vw, 39vw"/></figure>
      <div className="ritual-list">{careSteps.map(([title,copy],i)=><article key={title} data-reveal><span>0{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={22} strokeWidth={1}/></article>)}</div>
    </div>
  </section>;
}

export function Testimonials() {
  const [index,setIndex]=useState(0); const voice=patientVoices[index];
  return <section id="depoimentos" className="testimonials-chapter conversion-section" aria-labelledby="testimonials-title">
    <p className="chapter-tag">06 / Experiências compartilhadas</p><h2 id="testimonials-title" data-reveal>O que minhas<br/><em>pacientes dizem</em></h2>
    <div className="voice-stage" aria-live="polite" aria-atomic="true">
      {voice.photo&&<Image className="voice-photo" src={voice.photo} alt={voice.photoAlt||'Retrato autorizado da paciente'} width={96} height={96}/>}
      {voice.pending?<div className="voice-pending"><span className="editorial-index">RELATO 0{index+1} / A INSERIR</span><p className="content-placeholder" data-placeholder>{voice.quote}</p></div>:<blockquote>“{voice.quote}”</blockquote>}
      {voice.name&&<p>{voice.name}</p>}{voice.objective&&<p>{voice.objective}</p>}
      {voice.resultIndex!==undefined&&<BeforeAfter record={site.results.items[voice.resultIndex]}/>}
    </div>
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
      <h3><button id={`${uid}-${q.id}-button`} aria-expanded={expanded} aria-controls={`${uid}-${q.id}-panel`} onClick={()=>setOpen(expanded?null:q.id)}>{q.question}<span className="faq-icon" aria-hidden="true">{expanded?'−':'+'}</span></button></h3>
      <div className="faq-answer" id={`${uid}-${q.id}-panel`} role="region" aria-labelledby={`${uid}-${q.id}-button`} aria-hidden={!expanded} inert={!expanded}><div><p className="content-placeholder" data-placeholder>{q.answer}</p></div></div>
    </article>;})}</div>
  </section>;
}

export function ContactDetails() {
  return <section id="contato" className="contact-chapter conversion-section" aria-labelledby="contact-title">
    <p className="chapter-tag">10 / Vamos conversar</p><div className="contact-heading"><h2 id="contact-title">O próximo passo<br/><em>começa com você.</em></h2><AppointmentLink id="final-whatsapp">AGENDAR AVALIAÇÃO</AppointmentLink></div>
    <dl className="contact-details">
      <div><dt>Endereço</dt><dd>{site.address}<span className="content-placeholder" data-placeholder>{contactDetails.address}</span></dd></div>
      <div><dt>WhatsApp</dt><dd><a href={appointmentUrl} data-cta="contact-whatsapp" target="_blank" rel="noopener noreferrer">{site.phone}<ArrowUpRight size={16}/></a></dd></div>
      <div><dt>Horários de atendimento</dt><dd className="content-placeholder" data-placeholder>{contactDetails.hours}</dd></div>
      <div><dt>Instagram</dt><dd><a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}<ArrowUpRight size={16}/></a></dd></div>
      <div><dt>Informações profissionais</dt><dd>Dra. {site.name}<br/>Cirurgiã-dentista · {site.cro}<br/>Harmonização Orofacial</dd></div>
    </dl>
  </section>;
}
