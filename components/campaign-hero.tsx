'use client';

import { BeforeAfter } from './before-after';
import { AppointmentLink } from './appointment-link';
import { heroVoice } from '@/data/conversion';
import { useId } from 'react';
import { site } from '@/data/site';
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
      <div className="campaign-copy">
        <p className="campaign-kicker">HARMONIZAÇÃO OROFACIAL</p>
        <h1 id="campaign-title"><span className="campaign-title-line"><span>Harmonização facial com <em>naturalidade,</em></span></span><span className="campaign-title-line"><span>estratégia e respeito à individualidade de cada rosto.</span></span></h1>
        <p className="campaign-subtitle">Cada tratamento começa com uma avaliação individualizada, respeitando seus traços, suas necessidades e aquilo que realmente faz sentido para você.</p>
        <div className="hero-voice">{heroVoice.pending ? <><span className="pending-caption">Relato da paciente · a inserir</span><p className="content-placeholder" data-placeholder>{heroVoice.quote}</p></> : <blockquote>“{heroVoice.quote}”</blockquote>}</div>
        <div className="campaign-action"><AppointmentLink id="hero-whatsapp"/></div>
        <p className="hero-credentials">Dra. Joelane Bittencourt · CRO-BA 20242<br/>Salvador · Bahia</p>
      </div>
      <div className="campaign-portrait"><div className="campaign-silhouette">
        <BeforeAfter record={site.results.items[0]} priority title="Um registro real. Uma história única."/>
        <p className="hero-result-note">Resultados individuais. Cada pessoa tem características próprias.</p>
      </div></div>
      <SmileSeal/>
    </div>
  </section>;
}
