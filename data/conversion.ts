// Conteúdo pendente fica explícito. Substituir somente com informações da Dra.
export type PatientVoice = {
  id: string; quote: string; name?: string; photo?: string; photoAlt?: string;
  resultIndex?: number; objective?: string; sourceUrl?: string; pending: boolean;
};
export const googleReviewsUrl = 'https://share.google/WqcmKMWTbYfE0un8z';
// Trecho conferido no Google; vínculo com a paciente do caso 1 confirmado pelo usuário.
export const heroVoice: PatientVoice = { id: 'hero', quote: 'A minha experiência foi ótima, um atendimento perfeito o local totalmente aconchegante e organizado.', name: 'Roseli Bittencourt', sourceUrl: 'https://share.google/rW4Rqi9Fnfw0owdky', resultIndex: 0, pending: false };
// Transcrições/trechos literais dos prints enviados dos destaques de depoimentos.
// Sem nomes, fotos ou vínculo com casos: a correspondência ainda não foi informada.
export const instagramVoices: PatientVoice[] = [
  { id: 'relato-1', quote: 'Dra., estou me amando cada vez mais! Estou mais jovem, e a aparência natural é o que mais me deixa realizada. Obrigada por devolver minha autoestima de forma tão delicada.', pending: false },
  { id: 'relato-2', quote: 'Possui uma escuta ativa, cuidadosa e bem estudiosa. Não promete mágica, lhe acolhe. Não tem pressa, é ética no cuidado com o outro no sentido do que é possível ser feito.', pending: false },
  { id: 'relato-3', quote: 'Desde o início, ela foi extremamente atenciosa, paciente e sempre disposta a tirar minhas dúvidas, explicando tudo de forma clara e tranquila, o que me trouxe confiança.', pending: false },
];
// Trechos conferidos no Google em 10/09/2026. Não vinculados às fotos dos casos.
export const patientVoices: PatientVoice[] = [
  { id: 'google-jonathas', name: 'Jonathas Mota', quote: 'Sou grato pela sua atenção e dedicação.', sourceUrl: 'https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s113626764259642265117!2s0x7161bb64079fae3:0xff57dc0e6d2d8305', pending: false },
  { id: 'google-diego', quote: 'Nota 1000, excelente profissional.', name: 'Diego Matheus Mendes dos Santos', sourceUrl: 'https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s109890063617594263457!2s0x7161bb64079fae3:0xff57dc0e6d2d8305', pending: false },
  { ...instagramVoices[2], id: 'google-renan', name: 'Renan Nunes', sourceUrl: 'https://www.google.com/maps/reviews/data=!4m5!14m4!1m3!1m2!1s102058650109724459172!2s0x7161bb64079fae3:0xff57dc0e6d2d8305' },
];
export const painPoints = [
  'Começou a perceber mudanças no rosto.', 'Sente que parece cansada.',
  'Perdeu volume após emagrecer.', 'Quer melhorar algo, mas tem medo de ficar artificial.',
  'Já fez procedimentos e não se reconheceu.',
];
export const treatments = [
  ['Para restaurar', 'Volumes e estruturas que foram perdidos com o tempo.'],
  ['Para prevenir', 'Estratégias para acompanhar o processo de envelhecimento de forma inteligente.'],
  ['Para redefinir', 'Contornos e proporções faciais quando existe indicação.'],
  ['Para melhorar a qualidade da pele', 'Tratamentos pensados para textura, viço e saúde da pele.'],
  ['Para valorizar', 'Lábios, perfil e outros pontos que podem ser aprimorados sem perder sua identidade.'],
];
export const careSteps = [
  ['Entender antes de indicar', 'Nem sempre aquilo que o paciente acredita precisar é o que realmente faz sentido para o seu rosto.'],
  ['Planejar antes de transformar', 'Cada escolha precisa ter um motivo. Nada deve ser feito apenas porque está em tendência.'],
  ['Tratar sem descaracterizar', 'Meu objetivo não é criar um novo rosto. É valorizar o seu.'],
  ['Cuidar além do procedimento', 'Dependendo da necessidade, o planejamento pode envolver uma visão mais ampla do paciente e do processo de envelhecimento.'],
];
export const questions = [
  { question: 'Tenho medo de ficar artificial. Como você trabalha?', answer: 'Naturalidade não significa não perceber resultado. Significa buscar equilíbrio, respeitando seus traços e evitando excessos.' },
  { question: 'Como sei o que preciso fazer?', answer: 'Você não precisa chegar sabendo qual procedimento deseja. A avaliação existe justamente para entender suas queixas e definir o que realmente faz sentido para você.' },
  { question: 'Preciso fazer tudo de uma vez?', answer: 'Não. Um planejamento pode ser construído por etapas, respeitando suas necessidades, prioridades e o momento de cada paciente.' },
  { question: 'Como funciona a avaliação?', answer: 'Na avaliação, conversamos sobre suas queixas, expectativas e histórico. Analiso o rosto, suas proporções e aquilo que pode fazer sentido dentro de um planejamento individualizado.' },
].map((q,i) => ({ id: `duvida-${i+1}`, ...q }));
export const contactDetails = {
  building: 'Edifício Hangar Business Park',
  address: 'Av. Luís Viana Filho, 13223 — São Cristóvão, Salvador',
  hours: 'Segunda a sexta, das 9h às 18h.',
  saturdayHours: 'Sábado, das 9h às 13h, mediante agendamento.',
};
