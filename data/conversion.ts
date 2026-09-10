// Conteúdo pendente fica explícito. Substituir somente com informações da Dra.
export type PatientVoice = {
  id: string; quote: string; name?: string; photo?: string; photoAlt?: string;
  resultIndex?: number; objective?: string; pending: boolean;
};
export const heroVoice: PatientVoice = { id: 'hero', quote: '[DEPOIMENTO REAL DA PACIENTE]', pending: true };
export const patientVoices: PatientVoice[] = [1, 2, 3].map(n => ({ id: `relato-${n}`, quote: '[DEPOIMENTO REAL DA PACIENTE]', pending: true }));
export const caseStudies = [0, 1, 2].map(resultIndex => ({
  resultIndex, complaint: '[INSERIR QUEIXA]', approach: '[INSERIR CONDUTA]', result: '[INSERIR RESULTADO]',
}));
export const painPoints = [
  'Meu rosto parece cansado.', 'Comecei a perceber mais a flacidez.',
  'Não gosto do meu perfil.', 'Sinto que meu rosto perdeu definição.',
  'Quero melhorar, mas tenho medo de ficar artificial.', 'Quero me cuidar, mas não sei por onde começar.',
];
export const treatments = [
  'Preenchimento facial', 'Bioestimuladores', 'Contorno e definição facial', 'Tratamentos para flacidez',
  'Lábios', 'Queixo e mandíbula', 'Rejuvenescimento facial', 'Outros tratamentos indicados após avaliação',
];
export const careSteps = [
  ['Escuta', 'Um momento para compartilhar o que você procura. Para conversar, perguntar e se sentir à vontade.'],
  ['Planejamento', 'Suas necessidades orientam as escolhas. Cada etapa é conversada, cada detalhe tem um propósito.'],
  ['Cuidado', 'Atenção ao seu conforto e à sua individualidade, do começo ao fim.'],
  ['Acompanhamento', 'O encontro termina. O cuidado continua, com orientações e espaço para suas dúvidas.'],
];
export const questions = [
  'Tenho medo de ficar artificial. E se isso acontecer?',
  'Como sei qual procedimento é indicado para mim?', 'Preciso fazer vários procedimentos?',
  'Como funciona a avaliação?', 'Quanto tempo dura o resultado?',
].map((question, i) => ({ id: `duvida-${i+1}`, question, answer: '[RESPOSTA DA PROFISSIONAL]' }));
export const contactDetails = { address: '[ENDEREÇO COMPLETO]', hours: '[HORÁRIO DE ATENDIMENTO]' };
