export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export const site = {
  name: 'Joelane Bittencourt', monogram: 'JB',
  headline: 'Harmonização orofacial. Rejuvenescimento facial com naturalidade.',
  cro: 'CRO-BA 20242',
  bio: 'Sou a Dra. Joelane Bittencourt, cirurgiã-dentista e especialista em Harmonização Orofacial. Em Salvador, meu olhar se volta para o rejuvenescimento facial com naturalidade, respeitando os traços e a identidade de cada pessoa.',
  education: [] as string[], specialties: ['Harmonização Orofacial'],
  phone: '+55 (71) 99671-4060', whatsapp: '5571996714060', whatsappUrl: '', address: 'Salvador · Bahia', professionalPhilosophy: '',
  instagram: 'https://www.instagram.com/drajoelanebittencourt/', instagramHandle: '@drajoelanebittencourt',
  philosophy: ['NATURALIDADE', 'ANTES DE', 'EXCESSOS.'],
  colors: { paper: '#faf7f1', ink: '#352c24', taupe: '#765c39', champagne: '#deceb6', dark: '#30271f' },
  images: { hero: '/images/joelane-retrato.webp', about: '/images/joelane-planejamento.webp', beauty: '/images/joelane-cuidado.webp' },
  procedures: [] as Procedure[], office: [] as { src: string; alt: string }[], testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Harmonia do perfil', alt: 'Registro 01 de antes e depois fornecido pela Dra. Joelane Bittencourt: harmonia do perfil', orientation: 'horizontal', beforeShare: 0.4883177570093458, comparisonRatio: 0.39285714285714285 },
    { image: '/images/resultado-02.webp', label: 'A beleza dos detalhes', alt: 'Registro 02 de antes e depois fornecido pela Dra. Joelane Bittencourt: a beleza dos detalhes', orientation: 'vertical', beforeShare: 0.49686028257456827, comparisonRatio: 2.028436018957346 },
    { image: '/images/resultado-03.webp', label: 'Leveza na expressão', alt: 'Registro 03 de antes e depois fornecido pela Dra. Joelane Bittencourt: leveza na expressão', orientation: 'horizontal', beforeShare: 0.48909657320872274, comparisonRatio: 0.3969658659924147 },
    { image: '/images/resultado-04.webp', label: 'Equilíbrio dos contornos', alt: 'Registro 04 de antes e depois fornecido pela Dra. Joelane Bittencourt: equilíbrio dos contornos', orientation: 'vertical', beforeShare: 0.498125, comparisonRatio: 1.603513174404015 },
    { image: '/images/resultado-05.webp', label: 'Identidade em cada ângulo', alt: 'Registro 05 de antes e depois fornecido pela Dra. Joelane Bittencourt: identidade em cada ângulo', orientation: 'vertical', beforeShare: 0.505625, comparisonRatio: 1.557478368355995 },
    { image: '/images/resultado-06.webp', label: 'Expressão e naturalidade', alt: 'Registro 06 de antes e depois fornecido pela Dra. Joelane Bittencourt: expressão e naturalidade', orientation: 'horizontal', beforeShare: 0.5079365079365079, comparisonRatio: 0.4150453955901427 },
    { image: '/images/resultado-07.webp', label: 'Um olhar renovado', alt: 'Registro 07 de antes e depois fornecido pela Dra. Joelane Bittencourt: um olhar renovado', orientation: 'horizontal', beforeShare: 0.4944, comparisonRatio: 0.38625 },
  ] },
  seo: { title: 'Dra. Joelane Bittencourt | Harmonização Facial em Salvador', description: 'Rejuvenescimento facial com naturalidade. Conheça a Dra. Joelane Bittencourt, especialista em Harmonização Orofacial em Salvador. CRO-BA 20242.', url: '' },
};
export const appointmentUrl = site.whatsappUrl || (site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Olá, gostaria de agendar uma avaliação com a Dra. Joelane.')}` : site.instagram);
