export type CasePhoto = {
  src: string; alt: string; label: string; width: number; height: number; position: string; presentationMask?: string;
  zoom?: number; zoomOrigin?: string;
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

// Ordem de antes/depois confirmada pelo usuário, incluindo o caso 2.
export const heroCase: ClinicalCase =
  { id: 'caso-1', title: 'Full Face', mode: 'comparison', ...pending, editorial: [
    ['O foco', 'Full Face: um olhar para o rosto como um todo.'],
    ['O registro', 'Antes e depois compartilhados pela Dra. Joelane. Cada fotografia faz parte da história dessa paciente.'],
    ['A filosofia do cuidado', 'Entender estrutura, proporções e individualidade antes de indicar. Cada escolha precisa ter um motivo.'],
  ], photos: [
    { src:'/images/roseli-antes-rosto.webp', label:'Antes', alt:'Caso 1: registro anterior ao tratamento, fornecido pela Dra. Joelane', width:1122, height:1087, position:'center' },
    { src:'/images/roseli-depois-rosto.webp', label:'Depois', alt:'Caso 1: registro após o tratamento, fornecido pela Dra. Joelane', width:1122, height:1004, position:'center' },
  ]};

// Roseli aparece somente na abertura; os estudos exploram outros pacientes.
export const clinicalCases: ClinicalCase[] = [
  { id: 'cris', title: 'Um olhar após o emagrecimento', mode: 'comparison', ...pending, editorial: [
    ['A história', 'Cris passou por uma perda importante de peso, conforme o relato da Dra. Joelane.'],
    ['O olhar', 'Mudanças no rosto após o emagrecimento fazem parte das questões que podem ser acolhidas na avaliação individualizada.'],
    ['O registro', 'Antes e depois compartilhados pela profissional. O planejamento respeita as características e a história de cada paciente.'],
  ], photos: [
    { src:'/images/cris-antes.webp', label:'Antes', alt:'Cris: fotografia anterior, fornecida pela Dra. Joelane', width:613, height:1327, position:'center' },
    { src:'/images/cris-depois.webp', label:'Depois', alt:'Cris: fotografia posterior, fornecida pela Dra. Joelane', width:671, height:1327, position:'center' },
  ]},
  { id: 'caso-2', title: 'Desarmonização', mode: 'comparison', ...pending, editorial: [
    ['O tema', 'Desarmonização: antes e depois compartilhados pela Dra. Joelane.'],
    ['Um olhar individual', 'Nem sempre aquilo que o paciente acredita precisar é o que realmente faz sentido para o seu rosto.'],
    ['A filosofia do cuidado', 'Cada indicação parte de uma avaliação individualizada e de um planejamento pensado para o seu rosto.'],
  ], photos: [
    { src:'/images/caso-2-a.webp', label:'Antes', alt:'Caso 2, desarmonização: antes, paciente com roupa preta', width:1320, height:1739, position:'50% 38%', zoom:1.9, zoomOrigin:'48% 8%' },
    { src:'/images/caso-2-b.webp', label:'Depois', alt:'Caso 2, desarmonização: depois, paciente com roupa branca', width:1100, height:1429, position:'50% 40%', zoom:1.9, zoomOrigin:'48% 11%' },
  ]},
  { id: 'caso-3', title: 'Planejamento facial', mode: 'comparison', ...pending, editorial: [
    ['O registro', 'Antes e depois de um paciente, compartilhados pela Dra. Joelane.'],
    ['O ponto de partida', 'Cada rosto possui uma estrutura, uma história e necessidades próprias.'],
    ['A filosofia do cuidado', 'Avaliar e planejar antes de indicar, respeitando a identidade de cada pessoa. O objetivo é valorizar o seu rosto.'],
  ], photos: [
    { src:'/images/caso-3-a.webp', label:'Antes', alt:'Caso 3: registro anterior ao tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 82%', zoom:1.3, zoomOrigin:'50% 85%' },
    { src:'/images/caso-3-b.webp', label:'Depois', alt:'Caso 3: registro após o tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 40%', zoom:1.3, zoomOrigin:'50% 55%' },
  ]},
];
