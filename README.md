# Dra. Joelane Bittencourt

Site único em Next.js, React e TypeScript, adaptado do template **premium-vendas**. Identidade champagne, marrom e dourado; fotografias reais fornecidas; monograma JB; galeria de sete resultados com ampliação e comparação; navegação responsiva e movimento reduzido.

## Executar

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

## Publicar na Vercel

Importe este repositório no painel da Vercel. Use o preset **Next.js**, diretório raiz `./`, instalação `npm ci` e build `npm run build`. Não há variáveis obrigatórias, banco ou servidor externo. A Vercel gerencia a saída do Next.js; deixe o diretório de saída no padrão.

Os metadados utilizam `VERCEL_PROJECT_PRODUCTION_URL`. Ao configurar domínio próprio, preencha `seo.url` em `data/site.ts` com o endereço definitivo. Não foi criado um site privado adicional.

## Conteúdo e identidade

- `data/site.ts`: nome, CRO-BA 20242, Salvador/BA, especialidade, Instagram, WhatsApp e registros.
- WhatsApp informado pelo solicitante: +55 (71) 99671-4060. Todos os CTAs de agendamento usam `appointmentUrl`.
- `app/joelane.css`: adaptação dos enquadramentos e responsividade à nova identidade.
- `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png`: monograma JB em formatos para navegador e celular.
- `app/opengraph-image.jpg` e `app/twitter-image.jpg`: arte de compartilhamento fornecida, otimizada em JPEG sem recortar ou alterar sua composição.
- `public/images`: fotos fornecidas, convertidas para WebP sem retoques. As comparações usam recortes CSS das imagens completas e respeitam a orientação de cada montagem.
- `public/fonts`: tipografia local e licenças do template.

Credenciais e posicionamento profissional seguem a referência do Instagram fornecida. Não foram acrescentados números de pacientes, avaliações, anos de experiência ou relatos sem confirmação. Endereço detalhado não foi informado; a página apresenta Salvador/BA.

## Validação

```sh
npm run typecheck
npm run build
```

Interface verificada em 320, 375, 390, 430, 768, 1024, 1280, 1440, 1920 e 2560 pixels, com navegação por teclado e `prefers-reduced-motion`. O projeto não possui comando ou configuração de lint; a validação de código utiliza TypeScript e o build do Next.js.

## Evolução da página — setembro de 2026

O projeto existente foi reorganizado em dez etapas: hero com resultado real, identificação, tratamentos, resultados, método, depoimentos, FAQ, convite à avaliação, apresentação profissional e contato.

`components/chapters.tsx` organiza a sequência. A galeria original foi extraída para `components/result-gallery.tsx`, mantendo ampliação, navegação e comparação. Os três primeiros registros viraram casos destacados; os outros quatro aparecem na galeria complementar. O componente `BeforeAfter` exibe recortes das montagens sem alterar os arquivos originais. No celular, montagens originalmente verticais podem ser empilhadas para melhorar a leitura.

`components/conversion-chapters.tsx` contém as novas seções. `app/conversion.css` estende os estilos existentes. Hero, apresentação profissional, convite editorial, selo, fontes, cores e animações foram reaproveitados. Os princípios da antiga seção de essência e as etapas da experiência foram incorporados ao método; o arquivo `essence-chapter.tsx` permanece preservado como referência, sem duplicar a seção na página. Nenhum asset foi excluído nesta evolução.

Todos os CTAs de agendamento usam o mesmo WhatsApp e possuem `data-cta`; nenhuma ferramenta de analytics foi instalada. OG e favicon permanecem preservados.

As informações pendentes estão em `data/conversion.ts`, são exibidas explicitamente entre colchetes e estão documentadas em [CONTEUDO-PENDENTE.md](CONTEUDO-PENDENTE.md).
