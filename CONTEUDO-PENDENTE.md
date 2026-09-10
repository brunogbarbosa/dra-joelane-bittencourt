# Informações a fornecer pela Dra. Joelane

Os campos abaixo são placeholders visíveis. Não representam relatos ou informações clínicas verificadas. A navegação, os CTAs, os casos e o FAQ funcionam mesmo antes de preencher o conteúdo.

## Arquivo central: `data/conversion.ts`

- `heroVoice`: depoimento real relacionado ao registro do hero (`resultado-01.webp`). Após inserir o relato, mudar `pending` para `false`. Não associar um depoimento a outra pessoa.
- `caseStudies[0..2]`: queixa, conduta e resultado de cada caso. Os vínculos são, respectivamente, `resultado-01.webp`, `resultado-02.webp` e `resultado-03.webp`. Substituir `[INSERIR QUEIXA]`, `[INSERIR CONDUTA]` e `[INSERIR RESULTADO]` apenas com informações confirmadas. Os índices referem-se aos registros, não a procedimentos presumidos.
- `patientVoices[0..2]`: preenchidos com trechos literais dos três prints enviados em 10/09/2026 (naturalidade, escuta e confiança; anexos 1, 3 e 5). Sem identificação ou associação a casos. Nomes/iniciais, fotos e `resultIndex` são opcionais e dependem da correspondência informada pela Dra.
- `questions[0..4].answer`: respostas da profissional às cinco dúvidas. A primeira começa aberta; todas funcionam com teclado.
- `contactDetails.building` e `address`: preenchidos pelo print de localização: Edifício Hangar Business Park, Av. Luís Viana Filho, 13223 — São Cristóvão, Salvador. Faltam torre/bloco, andar e sala, se aplicáveis.
- `contactDetails.hours`: horários de atendimento.

## Informações já mantidas em `data/site.ts`

- Dra. Joelane Bittencourt; cirurgiã-dentista; Harmonização Orofacial; CRO-BA 20242.
- WhatsApp: +55 (71) 99671-4060.
- Instagram: @drajoelanebittencourt.
- Apresentação profissional e sete registros originais.

O título e a descrição de SEO foram atualizados. A arte OG otimizada e o favicon existentes foram preservados. Caso haja domínio próprio, informar o endereço definitivo em `seo.url`.

## Identificadores para analytics futuro

`header-whatsapp`, `hero-whatsapp`, `treatments-whatsapp`, `results-whatsapp`, `evaluation-whatsapp`, `final-whatsapp` e `contact-whatsapp`.

Nenhum dado de conversão é enviado a serviços externos pelo site; os identificadores apenas preparam a integração futura.
