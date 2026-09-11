'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useId, useRef } from 'react';
import { appointmentUrl, site } from '@/data/site';
import styles from './experience-statement.module.css';

function ImageSeal({ id }: { id: string }) {
  const sealPath = `${id}-experience-seal`;

  return <svg className={styles.seal} viewBox="0 0 126 126" aria-hidden="true" focusable="false">
    <defs>
      <path id={sealPath} d="M 13,63 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
    </defs>
    <text className={styles.sealCopy} textLength="282" lengthAdjust="spacing">
      <textPath href={`#${sealPath}`} startOffset="1%">ESTÉTICA · SAÚDE · CONFIANÇA · </textPath>
    </text>
    <text className={styles.sealMark} x="63" y="74" textAnchor="middle">jb.</text>
  </svg>;
}

export function ExperienceStatement() {
  const root = useRef<HTMLElement>(null);
  const uid = useId().replace(/:/g, '');

  useEffect(() => {
    const section = root.current;
    if (!section) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    const setup = () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      section.classList.remove(styles.motionReady, styles.motionArmed, styles.motionVisible);

      if (media.matches || !('IntersectionObserver' in window)) return;

      section.classList.add(styles.motionReady);
      void section.offsetWidth;
      frame = window.requestAnimationFrame(() => {
        section.classList.add(styles.motionArmed);
        observer = new IntersectionObserver(([entry]) => {
          if (!entry?.isIntersecting) return;
          section.classList.add(styles.motionVisible);
          observer?.disconnect();
        }, { threshold: .1, rootMargin: '0px 0px -8% 0px' });
        observer.observe(section);
      });
    };

    setup();
    media.addEventListener('change', setup);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      media.removeEventListener('change', setup);
    };
  }, []);

  return <section ref={root} id="avaliacao" className={`${styles.root} evaluation-chapter`} aria-labelledby="experience-statement-title">
    <svg className={styles.thread} viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M 552 934 C 557 687 678 552 836 475 C 1116 338 1287 119 1648 -18" pathLength="1" vectorEffect="non-scaling-stroke" data-experience-motion="line" />
    </svg>

    <header className={styles.topline} data-experience-motion="fade">
      <p>08 / Um convite ao cuidado</p>
      <span aria-hidden="true" />
    </header>

    <div className={styles.heading}>
      <h2 id="experience-statement-title" aria-label="Tudo começa pela avaliação.">
        <span className={styles.titleMask}><span data-experience-motion="title">Tudo começa</span></span>
        <span className={styles.titleMask}><em data-experience-motion="title">pela avaliação.</em></span>
      </h2>
      <p className={styles.subtitle} data-experience-motion="fade">ANTES DE PENSAR EM PROCEDIMENTOS, É PRECISO ENTENDER VOCÊ.</p>
    </div>

    <div className={styles.invitationSeal} aria-hidden="true"><ImageSeal id={uid}/></div>

    <div className={styles.evaluationBody}>
    <figure className={styles.evaluationPhoto}>
      <Image src={site.images.evaluation} alt="Detalhe do trabalho da Dra. Joelane: registros fotográficos no notebook durante o planejamento" width={1800} height={1200} loading="lazy" sizes="(max-width:800px) 88vw, 52vw" />
      <figcaption>Um olhar atento a cada detalhe.</figcaption>
    </figure>
    <div className={styles.quote} data-experience-motion="quote">

      <div>
        <p>Conversamos sobre suas queixas, expectativas e histórico. A análise do rosto e das suas proporções orienta cada escolha do planejamento.</p>
        <details className="professional-details"><summary>Um olhar mais amplo</summary><p>Em alguns casos, uma visão mais ampla também pode ser necessária para compreender fatores que influenciam pele, envelhecimento e resposta aos tratamentos.</p></details>
        <p className={styles.evaluationEmphasis}>Você não sai com uma fórmula pronta. Sai com uma estratégia pensada para você.</p>
      </div>
    </div>
    </div>

    <p className={styles.ctaPrelude}>Seu próximo passo não precisa ser escolher um procedimento. Pode ser simplesmente começar entendendo o que o seu rosto precisa.</p>

    <a className={styles.cta} href={appointmentUrl} target="_blank" rel="noopener noreferrer" data-cta="evaluation-whatsapp" data-experience-motion="cta">
      <span>QUERO AGENDAR MINHA AVALIAÇÃO</span>
      <ArrowUpRight size={25} strokeWidth={1.4} aria-hidden="true" />
    </a>
  </section>;
}
