export type CasePhoto = {
  src: string; alt: string; label: string; width: number; height: number; position: string; presentationMask?: string;
  zoom?: number; zoomOrigin?: string;
};
export type ClinicalCase = {
  id: string; title: string; patient?: string; mode: 'comparison' | 'reference'; photos: [CasePhoto,CasePhoto];
  complaint: string; observation: string; planning: string; outcome: string;
  editorial: [string,string][];
};
const pending = {
  complaint: '[INSERIR QUEIXA]', observation: '[INSERIR OBSERVAÇÃO DA DRA.]',
  planning: '[INSERIR PLANEJAMENTO]', outcome: '[INSERIR RESULTADO]',
};

// Ordem de antes/depois confirmada pelo usuário, incluindo o caso 2.
const roseliCase: ClinicalCase =
  { id: 'roseli', patient: 'Roseli', title: 'Full Face', mode: 'comparison', ...pending, editorial: [
    ['O foco', 'Full Face: um olhar para o rosto como um todo.'],
    ['O registro', 'Antes e depois compartilhados pela Dra. Joelane. Cada fotografia faz parte da história dessa paciente.'],
    ['A filosofia do cuidado', 'Entender estrutura, proporções e individualidade antes de indicar. Cada escolha precisa ter um motivo.'],
  ], photos: [
    { src:'/images/roseli-antes-rosto.webp', label:'Antes', alt:'Caso 1: registro anterior ao tratamento, fornecido pela Dra. Joelane', width:1122, height:1087, position:'center' },
    { src:'/images/roseli-depois-rosto.webp', label:'Depois', alt:'Caso 1: registro após o tratamento, fornecido pela Dra. Joelane', width:1122, height:1004, position:'center' },
  ]};

// Cris abre a página; Roseli ocupa o primeiro estudo de caso.
export const heroCase: ClinicalCase =
  { id: 'cris', patient: 'Cris', title: 'Equilíbrio após o emagrecimento', mode: 'comparison', ...pending, editorial: [
    ['A história', 'Após uma perda importante de peso, Cris começou a perceber mudanças que também se refletiram no rosto.'],
    ['O olhar', 'A perda de volume e sustentação pode alterar a percepção dos contornos faciais. Por isso, o rosto foi avaliado como um todo, respeitando suas características e o momento vivido pela paciente.'],
    ['O resultado', 'Um planejamento pensado para restaurar equilíbrio e sustentação, preservando aquilo que faz parte da sua identidade.'],
  ], photos: [
    { src:'/images/cris-antes.webp', label:'Antes', alt:'Cris: fotografia anterior, fornecida pela Dra. Joelane', width:613, height:1327, position:'50% 30%' },
    { src:'/images/cris-depois.webp', label:'Depois', alt:'Cris: fotografia posterior, fornecida pela Dra. Joelane', width:671, height:1327, position:'50% 22%' },
  ]};

export const clinicalCases: ClinicalCase[] = [
  roseliCase,
  { id: 'caso-2', patient: 'Bruna', title: 'Recomeçar com estratégia', mode: 'comparison', ...pending, editorial: [
    ['A história', 'A paciente chegou até mim após realizar procedimentos com outro profissional e não se reconhecer no resultado.'],
    ['O olhar', 'Antes de adicionar qualquer produto, decidimos remover o preenchimento anterior e reavaliar o rosto como um todo.'],
    ['O resultado', 'Um novo planejamento, buscando devolver harmonia e preservar sua identidade.'],
  ], photos: [
    { src:'/images/bruna-antes-atualizado.webp', label:'Antes', alt:'Bruna: antes, fotografia fornecida pela Dra. Joelane', width:1320, height:1480, position:'48% 50%' },
    { src:'/images/caso-2-b.webp', label:'Depois', alt:'Caso 2, desarmonização: depois, paciente com roupa branca', width:1100, height:1429, position:'50% 40%', zoom:1.9, zoomOrigin:'48% 11%' },
  ]},
  { id: 'caso-3', patient: 'Luciano', title: 'Um novo momento para o rosto', mode: 'comparison', ...pending, editorial: [
    ['A história', 'Após iniciar seu processo de emagrecimento com Mounjaro, Luciano começou a perceber a perda de sustentação e volume no rosto.'],
    ['O olhar', 'O planejamento considerou esse novo momento e as necessidades específicas do seu rosto.'],
    ['O resultado', 'Estímulo de colágeno, reposição de volume em pontos estratégicos e cuidado com a qualidade da pele.'],
  ], photos: [
    { src:'/images/caso-3-a.webp', label:'Antes', alt:'Caso 3: registro anterior ao tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 82%', zoom:1.45, zoomOrigin:'50% 85%' },
    { src:'/images/caso-3-b.webp', label:'Depois', alt:'Caso 3: registro após o tratamento, fornecido pela Dra. Joelane', width:1125, height:2000, position:'50% 40%', zoom:1.3, zoomOrigin:'50% 55%' },
  ]},
];
