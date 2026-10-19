# Site institucional — construtora

Next.js (App Router), TypeScript, Tailwind CSS 4, Framer Motion e Three.js. Layout responsivo, navegação móvel, animações com preferência de movimento reduzido, portfólio filtrável com detalhes, FAQ e contato condicional via WhatsApp.

## Desenvolvimento

Requer Node.js 20.9+ (recomendado 24) e npm.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

Acesse a porta 3000 no ambiente local de desenvolvimento.

```sh
npm test
npm run typecheck
npm run build
npm start
```

## Personalização antes da publicação

- `lib/company.ts`: nome, descrição, telefone, e-mail, endereço, Instagram, domínio e WhatsApp (DDI + DDD + número). Campos vazios não produzem contatos falsos. O WhatsApp fica pendente até a configuração de um número válido.
- `app/page.tsx`: apresentação, serviços, diferenciais, FAQ e seção reservada a depoimentos autorizados. Revise as propostas de serviços conforme a atuação real da empresa.
- `lib/company.ts` e `public/`: substitua os três conceitos demonstrativos por obras reais e imagens autorizadas. As ilustrações SVG locais foram criadas para este modelo; não são fotografias de obras executadas.
- `app/globals.css`: cores, tipografia, espaçamentos e breakpoints.
- `app/layout.tsx`: título e descrição para buscadores.

Não há depoimentos, números de desempenho ou credenciais empresariais inventados. Não há formulário de coleta ou backend. O contato abre o WhatsApp apenas quando configurado. O site não usa analytics nem fontes externas. A cena 3D tem fallback decorativo, libera recursos ao desmontar e não executa com preferência por movimento reduzido.

## Vercel

Importe este repositório e mantenha a Root Directory na raiz padrão. O `vercel.json` define Next.js, instalação `npm ci` e build `npm run build`. Node.js 24 é definido em `package.json`. Não há variáveis secretas obrigatórias. Configure o domínio de produção em `company.siteUrl`, revise todos os dados comerciais e publique pela Vercel. A configuração está pronta, mas a implantação não é executada automaticamente.

## Verificações

Vitest cobre validação e normalização do link de WhatsApp, ausência de contato fictício e integridade dos caminhos de imagens dos projetos. `typecheck` verifica TypeScript; `build` gera a versão de produção. Testes não substituem a revisão dos dados comerciais e autorizações de imagens.
