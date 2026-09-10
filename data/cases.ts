export type CasePhoto = {
  src: string; alt: string; label: string; width: number; height: number; position: string; presentationMask?: string;
};
export type ClinicalCase = {
  id: string; title: string; mode: 'comparison' | 'reference'; photos: [CasePhoto,CasePhoto];
  complaint: string; observation: string; planning: string; outcome: string;
  editorial: [string,string][];
};
const pending = {
  complaint: '[INSERIR QUEIXA]', observation: '[INSERIR OBSERVAÇÃO DA DRA.]',
  planning: '[INSERIR PLANEJAMENTO]', outcome: '[INSERIR RESULTADO]',
};

// Ordem confirmada pelo usuário. Caso 2 não tem cronologia informada.
export const clinicalCases: ClinicalCase[] = [
  { id: 'caso-1', title: 'Full Face', mode: 'comparison', ...pending, editorial: [
    ['O foco', 'Full Face: um olhar para o rosto como um todo.'],
    ['O registro', 'Antes e depois compartilhados pela Dra. Joelane. Cada fotografia faz parte da história dessa paciente.'],
    ['A filosofia do cuidado', 'Entender estrutura, proporções e individualidade antes de indicar. Cada escolha precisa ter um motivo.'],
  ], photos: [
    { src:'/images/caso-1-b.webp', label:'Antes', alt:'Caso 1: registro anterior ao tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 76%' },
    { src:'/images/caso-1-a.webp', label:'Depois', alt:'Caso 1: registro após o tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 76%', presentationMask:'/images/caso-1-recorte.svg' },
  ]},
  { id: 'caso-2', title: 'Desarmonização', mode: 'reference', ...pending, editorial: [
    ['O tema', 'Desarmonização: registros selecionados pela Dra. Joelane para apresentar esse tema.'],
    ['Um olhar individual', 'Nem sempre aquilo que o paciente acredita precisar é o que realmente faz sentido para o seu rosto.'],
    ['A filosofia do cuidado', 'Cada indicação parte de uma avaliação individualizada e de um planejamento pensado para o seu rosto.'],
  ], photos: [
    { src:'/images/caso-2-a.webp', label:'Registro 01', alt:'Caso 2, desarmonização: registro com roupa preta, sem cronologia informada', width:1320, height:1739, position:'50% 38%' },
    { src:'/images/caso-2-b.webp', label:'Registro 02', alt:'Caso 2, desarmonização: registro com roupa branca, sem cronologia informada', width:1100, height:1429, position:'50% 40%' },
  ]},
  { id: 'caso-3', title: 'Planejamento facial', mode: 'comparison', ...pending, editorial: [
    ['O registro', 'Antes e depois de um paciente, compartilhados pela Dra. Joelane.'],
    ['O ponto de partida', 'Cada rosto possui uma estrutura, uma história e necessidades próprias.'],
    ['A filosofia do cuidado', 'Avaliar e planejar antes de indicar, respeitando a identidade de cada pessoa. O objetivo é valorizar o seu rosto.'],
  ], photos: [
    { src:'/images/caso-3-a.webp', label:'Antes', alt:'Caso 3: registro anterior ao tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 82%' },
    { src:'/images/caso-3-b.webp', label:'Depois', alt:'Caso 3: registro após o tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 40%' },
  ]},
];
