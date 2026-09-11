'use client';

import Image from 'next/image';
import { CasePhotos } from './case-photos';
import { heroCase } from '@/data/cases';
import { AppointmentLink } from './appointment-link';
import { heroVoice } from '@/data/conversion';
import { appointmentUrl, site } from '@/data/site';
import { Phone } from 'lucide-react';
import { useId } from 'react';
import { useCampaignMotion } from './use-campaign-motion';


function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Sua beleza, sua identidade">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">JOELANE BITTENCOURT</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">BELEZA COM IDENTIDADE</textPath>
      </text>
      <text x="90" y="106" textAnchor="middle" className="seal-monogram">JB</text>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign conversion-hero" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true"/>
    <div className="campaign-organic campaign-organic-two" aria-hidden="true"/>
    <div className="campaign-contour" aria-hidden="true"/>
    <div className="campaign-inner">
      <div className="hero-introduction">
      <div className="campaign-copy">
        <p className="campaign-kicker">HARMONIZAÇÃO FACIAL EM SALVADOR</p>
        <h1 id="campaign-title"><span className="campaign-title-line"><span>Seu rosto não precisa de mais procedimentos.</span></span><span className="campaign-title-line"><em>Precisa da estratégia certa.</em></span></h1>
        <div className="campaign-action hero-primary-action">
          <AppointmentLink id="hero-whatsapp" className="hero-booking"><span>QUERO AGENDAR</span><span>MINHA AVALIAÇÃO</span></AppointmentLink>
        </div>
        <p className="campaign-subtitle">Avaliação e planejamento para entender seu rosto como um todo e preservar quem você é.</p>
        <p className="hero-credentials">Dra. Joelane Bittencourt · CRO-BA 20242<br/>Salvador · Bahia</p>
      </div>
      <figure className="campaign-portrait hero-doctor"><div className="campaign-silhouette">
        <picture>
        <source media="(max-width:700px)" srcSet="/images/joelane-hero-mobile.webp"/>
        <Image src={site.images.hero} alt="Dra. Joelane Bittencourt em seu consultório" fill preload sizes="(max-width:700px) 88vw, 44vw"/>
        </picture>
      </div></figure>
      </div>
      <div className="hero-case">
        <p className="comparison-title">Full Face · Um olhar para o rosto como um todo.</p>
        <CasePhotos record={heroCase}/>
        <div className="hero-voice"><blockquote>“{heroVoice.quote}”</blockquote><span className="review-source">{heroVoice.name} · Depoimento compartilhado no Instagram</span></div>
        <p className="hero-result-note">Resultados individuais. Fotografias fornecidas pela profissional.</p>
      </div>
      <div className="campaign-action hero-contact">
        <a className="hero-phone" href={appointmentUrl} target="_blank" rel="noopener noreferrer" data-cta="hero-phone-whatsapp" aria-label={`Agendar pelo WhatsApp: ${site.phone}`}><Phone size={23} aria-hidden="true"/><span>{site.phone.replace('+55 ', '')}</span></a>
      </div>
      <SmileSeal/>
    </div>
  </section>;
}
