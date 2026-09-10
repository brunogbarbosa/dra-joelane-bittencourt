import Image from 'next/image';
import type { ClinicalCase } from '@/data/cases';

export function CasePhotos({ record, priority=false, original=false }: { record:ClinicalCase; priority?:boolean; original?:boolean }) {
  return <div className={`case-photos${original?' case-photos-original':''}`}>
    {record.photos.map((photo,i)=><figure key={photo.src}>
      <div className="case-photo-frame"><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
        preload={priority&&i===0} loading={priority?'eager':'lazy'}
        sizes={original?'(max-width:700px) 88vw, 42vw':'(max-width:700px) 44vw, (max-width:1000px) 310px, 28vw'}
        style={{objectPosition:original?'center':photo.position}}/></div>
      <figcaption>{photo.label}</figcaption>
    </figure>)}
  </div>;
}
