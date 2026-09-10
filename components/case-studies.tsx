'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { clinicalCases } from '@/data/cases';
import { CasePhotos } from './case-photos';

export function CaseStudies() {
  const [active,setActive]=useState(0);
  const [expanded,setExpanded]=useState(false);
  const dialog=useRef<HTMLDialogElement>(null);
  const opener=useRef<HTMLButtonElement>(null);
  const current=clinicalCases[active];
  const clinicalReady=[current.complaint,current.observation,current.planning,current.outcome].every(value=>!value.startsWith('['));
  const details=clinicalReady?[['Queixa',current.complaint],['O que observei',current.observation],['Planejamento',current.planning],['Resultado',current.outcome]]:current.editorial;
  useEffect(()=>{
    if(expanded){dialog.current?.showModal();document.body.style.overflow='hidden';}
    else {dialog.current?.close();document.body.style.overflow='';}
    return ()=>{document.body.style.overflow='';};
  },[expanded]);
  const close=()=>{dialog.current?.close();setExpanded(false);opener.current?.focus();};
  const move=(delta:number)=>setActive(i=>(i+delta+clinicalCases.length)%clinicalCases.length);
  return <div className="case-studies">
    <div className="case-navigation" role="group" aria-label="Escolher estudo de caso">{clinicalCases.map((c,i)=><button key={c.id} aria-pressed={active===i} onClick={()=>setActive(i)}>CASO 0{i+1}<ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true"/></button>)}</div>
    <div className="case-layout" key={current.id}>
      <div className="case-media"><p className="comparison-title">Caso 0{active+1} · {current.patient}</p><CasePhotos record={current}/>
        <p className="case-image-note">{current.mode==='reference'?'Registros enviados pela profissional. Sem ordem de antes e depois informada.':current.photos.some(p=>p.presentationMask)?'Fundo do “depois” isolado para apresentação. Fotografias originais disponíveis na ampliação.':'Registros individuais, com diferenças de luz, expressão e enquadramento.'}</p>
      </div>
      <div className="case-copy" aria-live="polite"><p className="chapter-tag">Caso real / 0{active+1}</p>
        <h3>{current.title}</h3>
        <dl className="case-details">{details.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        <p className="pending-caption">Resultados individuais. A indicação depende de avaliação.</p>
        <button ref={opener} className="chapter-link" onClick={()=>setExpanded(true)}>Ver fotografias completas<ArrowUpRight size={20} aria-hidden="true"/></button>
      </div>
    </div>
    <dialog className="result-dialog case-dialog" ref={dialog} aria-labelledby="case-viewer-title" onCancel={close} onClose={()=>setExpanded(false)} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}}}>
      {expanded&&<><div className="viewer-top"><div><p className="chapter-tag">Caso 0{active+1}</p><h3 id="case-viewer-title">{current.title}</h3></div><button className="viewer-icon" onClick={close} aria-label="Fechar caso"><X aria-hidden="true"/></button></div>
        <CasePhotos record={current} original/>
        <div className="viewer-bottom"><button className="viewer-icon" aria-label="Caso anterior" onClick={()=>move(-1)}><ArrowLeft aria-hidden="true"/></button><span aria-live="polite">0{active+1} / 03</span><button className="viewer-icon" aria-label="Próximo caso" onClick={()=>move(1)}><ArrowRight aria-hidden="true"/></button></div>
      </>}
    </dialog>
  </div>;
}
