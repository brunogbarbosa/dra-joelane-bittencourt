export type CasePhoto = {
  src: string; alt: string; label: string; width: number; height: number; position: string;
};
export type ClinicalCase = {
  id: string; title: string; mode: 'comparison' | 'reference'; photos: [CasePhoto,CasePhoto];
  complaint: string; observation: string; planning: string; outcome: string;
};
const pending = {
  complaint: '[INSERIR QUEIXA]', observation: '[INSERIR OBSERVAÇÃO DA DRA.]',
  planning: '[INSERIR PLANEJAMENTO]', outcome: '[INSERIR RESULTADO]',
};

// Ordem confirmada pelo usuário. Caso 2 não tem cronologia informada.
export const clinicalCases: ClinicalCase[] = [
  { id: 'caso-1', title: 'Full Face', mode: 'comparison', ...pending, photos: [
    { src:'/images/caso-1-b.webp', label:'Antes', alt:'Caso 1: registro anterior ao tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 76%' },
    { src:'/images/caso-1-a.webp', label:'Depois', alt:'Caso 1: registro após o tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 76%' },
  ]},
  { id: 'caso-2', title: 'Desarmonização', mode: 'reference', ...pending, photos: [
    { src:'/images/caso-2-a.webp', label:'Registro 01', alt:'Caso 2, desarmonização: registro com roupa preta, sem cronologia informada', width:1320, height:1739, position:'50% 38%' },
    { src:'/images/caso-2-b.webp', label:'Registro 02', alt:'Caso 2, desarmonização: registro com roupa branca, sem cronologia informada', width:1100, height:1429, position:'50% 40%' },
  ]},
  { id: 'caso-3', title: 'Planejamento facial', mode: 'comparison', ...pending, photos: [
    { src:'/images/caso-3-a.webp', label:'Antes', alt:'Caso 3: registro anterior ao tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 82%' },
    { src:'/images/caso-3-b.webp', label:'Depois', alt:'Caso 3: registro após o tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 40%' },
  ]},
];
