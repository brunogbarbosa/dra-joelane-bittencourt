# Conteúdo a confirmar com a Dra. Joelane

## Pendências

- **Três casos (`data/cases.ts`)**: queixa, observação profissional, planejamento e resultado de cada pessoa. São 12 campos clínicos; as fotografias não permitem deduzir essas informações.
- **Depoimento do hero (`heroVoice` em `data/conversion.ts`)**: relato real da paciente do caso 1. Os três depoimentos gerais já estão preenchidos, mas não foram vinculados a pacientes específicas.
- **Horários de atendimento**: preencher `contactDetails.hours`. Confirmar torre/bloco, andar e sala do Hangar, se aplicáveis.
- **Fotos recentes do ensaio**: ainda não recebidas. A foto com cânula saiu da seção de tratamentos. A seção 08 usa composição editorial com monograma, sem repetir retratos; poderá receber uma nova foto do ensaio.
- **Domínio definitivo**: preencher `site.seo.url` se houver domínio próprio. Na Vercel, os metadados usam o domínio de produção fornecido pelo ambiente.

## Correspondência confirmada dos casos

| Caso | Arquivo recebido | Uso no site |
| --- | --- | --- |
| 1 | caso 1 (2).HEIC | Antes — caso-1-b.webp |
| 1 | caso 1 (1).HEIC | Depois — caso-1-a.webp |
| 2 | caso 2 (1).PNG | Desarmonização, Registro 01 — caso-2-a.webp |
| 2 | caso 2.jpeg | Desarmonização, Registro 02 — caso-2-b.webp |
| 3 | caso 3.DNG | Antes — caso-3-a.webp |
| 3 | caso 3.HEIC | Depois — caso-3-b.webp |

O caso 2 não possui cronologia confirmada e não apresenta rótulos de antes/depois. O caso 1 também aparece no hero, conforme o foco em Full Face solicitado. As fotos foram convertidas para WebP e redimensionadas, sem retoque clínico. O visualizador permite consultar as fotografias completas.

## Conteúdo já incorporado

- Posicionamento, identificação, possibilidades de tratamento, método, apresentação profissional e seção de avaliação enviados pela Dra.
- Quatro perguntas e respostas fornecidas pela profissional, sem respostas clínicas inventadas.
- Três depoimentos reais anônimos dos prints (naturalidade, escuta e confiança).
- Endereço: Edifício Hangar Business Park, Av. Luís Viana Filho, 13223 — São Cristóvão, Salvador.
- WhatsApp: +55 (71) 99671-4060; Instagram: @drajoelanebittencourt; CRO-BA 20242.
- Sete registros antigos preservados na galeria complementar, com ampliação e comparação.
- Favicon e arte Open Graph preservados.

## Identificadores para analytics futuro

`header-whatsapp`, `hero-whatsapp`, `treatments-whatsapp`, `results-whatsapp`, `evaluation-whatsapp`, `final-whatsapp`, `contact-whatsapp`.

Nenhuma ferramenta de analytics foi instalada.
