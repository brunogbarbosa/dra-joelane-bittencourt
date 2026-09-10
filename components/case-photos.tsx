import Image from 'next/image';
import type { ClinicalCase } from '@/data/cases';

export function CasePhotos({ record, priority=false, original=false }: { record:ClinicalCase; priority?:boolean; original?:boolean }) {
  return <div className={`case-photos${original?' case-photos-original':` case-photos-${record.id}`}`}>
    {record.photos.map((photo,i)=><figure key={photo.src}>
      <div className="case-photo-frame"><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
        preload={priority&&i===0} loading={priority?'eager':'lazy'}
        sizes={original?'(max-width:700px) 88vw, 42vw':priority?'(max-width:1100px) 44vw, 500px':photo.zoom?'(max-width:700px) 95vw, (max-width:1000px) 670px, 60vw':'(max-width:1000px) 44vw, 38vw'}
        style={{objectPosition:original?'center':photo.position,...(!original&&photo.zoom?{transform:`scale(${photo.zoom})`,transformOrigin:photo.zoomOrigin}:{ }),...(!original&&photo.presentationMask?{maskImage:`url(${photo.presentationMask})`,maskSize:'cover',maskPosition:photo.position,maskRepeat:'no-repeat'}:{})}}/></div>
      <figcaption>{photo.label}</figcaption>
    </figure>)}
  </div>;
}
