// Conteúdo pendente fica explícito. Substituir somente com informações da Dra.
export type PatientVoice = {
  id: string; quote: string; name?: string; photo?: string; photoAlt?: string;
  resultIndex?: number; objective?: string; pending: boolean;
};
export const heroVoice: PatientVoice = { id: 'hero', quote: '[DEPOIMENTO REAL DA PACIENTE]', pending: true };
// Transcrições/trechos literais dos prints enviados dos destaques de depoimentos.
// Sem nomes, fotos ou vínculo com casos: a correspondência ainda não foi informada.
export const patientVoices: PatientVoice[] = [
  { id: 'relato-1', quote: 'Dra., estou me amando cada vez mais! Estou mais jovem, e a aparência natural é o que mais me deixa realizada. Obrigada por devolver minha autoestima de forma tão delicada.', pending: false },
  { id: 'relato-2', quote: 'Possui uma escuta ativa, cuidadosa e bem estudiosa. Não promete mágica, lhe acolhe. Não tem pressa, é ética no cuidado com o outro no sentido do que é possível ser feito.', pending: false },
  { id: 'relato-3', quote: 'Desde o início, ela foi extremamente atenciosa, paciente e sempre disposta a tirar minhas dúvidas, explicando tudo de forma clara e tranquila, o que me trouxe confiança.', pending: false },
];
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
export const contactDetails = {
  building: 'Edifício Hangar Business Park',
  address: 'Av. Luís Viana Filho, 13223 — São Cristóvão, Salvador',
  hours: '[HORÁRIO DE ATENDIMENTO]',
};
