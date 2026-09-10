'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Star } from 'lucide-react';
import { heroVoice, patientVoices, googleReviewsUrl } from '@/data/conversion';

const reviews = [...patientVoices, heroVoice];

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {threshold: .25});
    if (section.current) observer.observe(section.current);
    return () => {media.removeEventListener('change', update); observer.disconnect();};
  }, []);

  const moveTo = (next: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.children[next] as HTMLElement;
    el.scrollTo({left: card.offsetLeft - (el.children[0] as HTMLElement).offsetLeft, behavior: reducedMotion ? 'auto' : 'smooth'});
  };

  useEffect(() => {
    if (paused || engaged || reducedMotion || !visible) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      const el = track.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) {el.scrollTo({left: 0, behavior: 'smooth'}); return;}
      const step = (el.children[0] as HTMLElement).getBoundingClientRect().width + parseFloat(getComputedStyle(el).gap);
      el.scrollBy({left: step, behavior: 'smooth'});
    }, 6500);
    return () => clearInterval(timer);
  }, [paused, engaged, reducedMotion, visible]);

  const syncIndex = () => {
    const el = track.current;
    if (!el) return;
    const step = (el.children[0] as HTMLElement).getBoundingClientRect().width + parseFloat(getComputedStyle(el).gap);
    setIndex(Math.round(el.scrollLeft / step));
  };
  const move = (direction: number) => {
    const el = track.current;
    if (!el) return;
    if (direction > 0 && el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) moveTo(0);
    else if (direction < 0 && el.scrollLeft <= 4) moveTo(reviews.length - 1);
    else moveTo(Math.max(0, Math.min(reviews.length - 1, index + direction)));
  };

  return <section ref={section} id="depoimentos" className="testimonials-chapter conversion-section" aria-labelledby="testimonials-title">
    <div className="reviews-heading"><div><p className="chapter-tag">06 / Experiências compartilhadas</p><h2 id="testimonials-title" data-reveal>O que meus<br/><em>pacientes dizem</em></h2></div>
      <a className="reviews-google-link" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer"><span className="google-word">Google</span><span>Avaliações de pacientes<ArrowUpRight size={17} aria-hidden="true"/></span></a>
    </div>
    <div className="reviews-carousel" onMouseEnter={()=>setEngaged(true)} onMouseLeave={()=>setEngaged(false)} onFocusCapture={()=>setEngaged(true)} onBlurCapture={e=>{if (!e.currentTarget.contains(e.relatedTarget)) setEngaged(false);}}>
      <div ref={track} className="reviews-track" onScroll={syncIndex} onTouchStart={()=>setPaused(true)} role="region" aria-roledescription="carrossel" aria-label="Avaliações de pacientes no Google" tabIndex={0} onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();setPaused(true);move(e.key==='ArrowRight'?1:-1);}}}>
        {reviews.map((voice,i)=><article className="google-review" key={voice.id} aria-label={`Avaliação ${i+1} de ${reviews.length}`}>
          <header><span className="review-avatar" aria-hidden="true">{voice.name?.split(' ').filter(Boolean).map(n=>n[0]).slice(0,2).join('')}</span><div><h3>{voice.name}</h3><span>Avaliação no Google</span></div></header>
          <div className="review-stars" role="img" aria-label="5 de 5 estrelas">{[0,1,2,3,4].map(s=><Star key={s} size={17} fill="currentColor" strokeWidth={0} aria-hidden="true"/>)}</div>
          <blockquote>“{voice.quote}”</blockquote>
          <a className="review-source" href={voice.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ler avaliação completa de ${voice.name} no Google`}>Ler avaliação completa<ArrowUpRight size={16} aria-hidden="true"/></a>
        </article>)}
      </div>
      <div className="reviews-controls"><span>Relatos reais. Cuidado que se compartilha.</span><div>
        {!reducedMotion&&<button className="viewer-icon" aria-label={paused?'Retomar passagem automática':'Pausar passagem automática'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?<Play size={18} aria-hidden="true"/>:<Pause size={18} aria-hidden="true"/>}</button>}
        <button className="viewer-icon" aria-label="Depoimento anterior" onClick={()=>{setPaused(true);move(-1);}}><ArrowLeft aria-hidden="true"/></button>
        <button className="viewer-icon" aria-label="Próximo depoimento" onClick={()=>{setPaused(true);move(1);}}><ArrowRight aria-hidden="true"/></button>
      </div></div>
    </div>
    <p className="voice-context">Trechos de avaliações públicas no Google. Cada relato descreve uma experiência individual.</p>
  </section>;
}
