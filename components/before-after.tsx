import Image from 'next/image';
import type { CSSProperties } from 'react';

export type ResultRecord = { image: string; alt: string; orientation: string; beforeShare: number; comparisonRatio: number; label: string };
type Props = {
  record?: ResultRecord; beforeImage?: string; afterImage?: string; beforeAlt?: string; afterAlt?: string;
  title?: string; complaint?: string; approach?: string; result?: string; priority?: boolean;
};

// Recortes CSS da montagem original: nenhum retoque nem estiramento da fotografia.
export function BeforeAfter({ record, beforeImage, afterImage, beforeAlt, afterAlt, title, complaint, approach, result, priority = false }: Props) {
  const halves = ['before', 'after'] as const;
  return <figure className="before-after">
    {title && <figcaption className="comparison-title">{title}</figcaption>}
    <div className={`before-after-pair ${record?.orientation === 'vertical' ? 'before-after-stacked' : ''}`}>
      {halves.map((half, i) => {
        const share = record ? (i === 0 ? record.beforeShare : 1 - record.beforeShare) : 1;
        const vertical = record?.orientation === 'vertical';
        const ratio = record ? record.comparisonRatio * (i === 0 ? 1 : vertical ? record.beforeShare / share : share / record.beforeShare) : 1;
        const crop: CSSProperties = record ? {
          position: 'absolute',
          width: vertical ? '100%' : `${100 / share}%`, height: vertical ? `${100 / share}%` : '100%',
          top: vertical && i === 1 ? `${-(record.beforeShare / share) * 100}%` : 0,
          left: !vertical && i === 1 ? `${-(record.beforeShare / share) * 100}%` : 0,
          right: 'auto', bottom: 'auto', maxWidth: 'none', objectFit: 'fill',
        } : { position: 'absolute', width: '100%', height: '100%', objectFit: 'contain' };
        const src = record?.image || (i === 0 ? beforeImage : afterImage);
        return <div className="before-after-half" key={half} style={{ flexGrow: ratio / (record?.comparisonRatio || 1) }}>
          <div className="before-after-crop" style={{ aspectRatio: ratio }}>
            {src && <Image src={src} alt={(i === 0 ? beforeAlt : afterAlt) || `${i === 0 ? 'Antes' : 'Depois'} — ${record?.alt || title || 'registro real'}`} width={1284} height={record ? Math.round(1284 / (vertical ? record.comparisonRatio * record.beforeShare : record.comparisonRatio / record.beforeShare)) : 1284}
              preload={priority && i === 0} loading={priority ? 'eager' : 'lazy'}
              sizes="(max-width: 700px) 88vw, (max-width: 1000px) 620px, (max-width: 1600px) 50vw, 720px" style={crop} />}
          </div>
          <span className="before-after-label">{i === 0 ? 'Antes' : 'Depois'}</span>
        </div>;
      })}
    </div>
    {(complaint || approach || result) && <dl className="case-details">
      {[["Queixa", complaint], ["Conduta", approach], ["Resultado", result]].filter(([,v])=>v).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
    </dl>}
  </figure>;
}
