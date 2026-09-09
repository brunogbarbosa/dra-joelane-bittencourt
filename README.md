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
- `app/opengraph-image.png` e `app/twitter-image.png`: retrato original da Dra. Joelane para compartilhamento.
- `public/images`: fotos fornecidas, convertidas para WebP sem retoques. As comparações usam recortes CSS das imagens completas e respeitam a orientação de cada montagem.
- `public/fonts`: tipografia local e licenças do template.

Credenciais e posicionamento profissional seguem a referência do Instagram fornecida. Não foram acrescentados números de pacientes, avaliações, anos de experiência ou relatos sem confirmação. Endereço detalhado não foi informado; a página apresenta Salvador/BA.

## Validação

```sh
npm run typecheck
npm run build
```

Interface preparada para 375, 390, 430, 768, 1024, 1440 e 1920 pixels, navegação por teclado e `prefers-reduced-motion`.
