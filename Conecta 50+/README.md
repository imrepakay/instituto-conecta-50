# Instituto Conecta 50+

Projeto acadêmico de desenvolvimento Front-End do **Instituto Conecta 50+**, uma iniciativa de impacto social voltada à inclusão digital, capacitação profissional e empregabilidade para pessoas com 50 anos ou mais.

O projeto foi desenvolvido de forma incremental, passando pelas etapas de HTML5, CSS3 e JavaScript, evoluindo posteriormente para uma aplicação SPA modular, otimização de recursos, build de produção, controle de versão e publicação em ambiente de produção.

---

## Status do projeto

**Versão atual:** `v1.0.1`  
**Status:** Publicado e validado em produção  
**Ambiente de produção:** Vercel  
**Branch de produção:** `master`  
**Build:** Vite  
**Validação funcional:** 10/10 testes aprovados

---

## Objetivo

Desenvolver uma plataforma Web acessível, responsiva e otimizada para apresentar iniciativas relacionadas à inclusão digital, capacitação profissional e empregabilidade destinadas ao público com 50 anos ou mais.

O projeto também tem como objetivo aplicar, de forma prática, conhecimentos de desenvolvimento Front-End, incluindo HTML5 semântico, CSS3, JavaScript, modularização, responsividade, acessibilidade, controle de versão, otimização e deploy.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Vite
- Git
- GitHub
- Vercel
- WebP
- Sharp
- LocalStorage
- SPA com Hash Routing
- ES Modules (`import` / `export`)

---

## Funcionalidades

A versão atual do projeto possui:

- Página inicial institucional.
- Apresentação dos projetos sociais.
- Página de projetos.
- Formulário de cadastro.
- Navegação SPA utilizando rotas com hash.
- Renderização dinâmica de conteúdo com JavaScript.
- Templates dinâmicos para apresentação dos projetos.
- Validação e feedback do formulário.
- Persistência de dados utilizando `localStorage`.
- Layout responsivo.
- Navegação por teclado.
- Foco visual nos elementos interativos.
- Feedbacks visuais para interação e validação.
- Imagens otimizadas em formato WebP.
- Build de produção utilizando Vite.
- Deploy em ambiente de produção utilizando Vercel.

---

## Páginas e rotas

A aplicação utiliza Hash Routing para controlar as páginas da SPA.

| Rota | Descrição |
|---|---|
| `#/` | Página inicial |
| `#/projetos` | Apresentação dos projetos |
| `#/cadastro` | Formulário de cadastro |

Os arquivos HTML utilizados como base da aplicação estão localizados na pasta `HTML/`.

---

## Estrutura do projeto

```text
Conecta 50+/
├── HTML/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
│
├── CSS/
│   └── style.css
│
├── Imagens/
│   ├── logo.jpg
│   ├── banner.jpg
│   ├── inclusao-digital.jpg
│   ├── capacitacao.jpg
│   └── empregabilidade.jpg
│
├── imagens-webp/
│   ├── logo.webp
│   ├── banner.webp
│   ├── inclusao-digital.webp
│   ├── capacitacao.webp
│   └── empregabilidade.webp
│
├── JS/
│   ├── app.js
│   ├── router.js
│   ├── templates.js
│   ├── form.js
│   └── storage.js
│
├── README.md
├── package.json
├── package-lock.json
├── vite.config.js
├── convert-images.mjs
└── .gitignore
HTML5

A estrutura inicial do projeto foi desenvolvida utilizando HTML5 semântico.

Foram utilizados elementos como:

header
nav
main
section
article
figure
footer
formulários e elementos de entrada semânticos

As páginas HTML foram validadas utilizando o Nu HTML Checker, sem erros ou avisos na validação final.

O formulário também utiliza recursos nativos de validação HTML5.

CSS3

A interface utiliza uma organização baseada em Design System e recursos modernos de CSS3.

Recursos implementados
Variáveis CSS.
Sistema de cores.
Tipografia.
Espaçamentos.
Bordas e sombras.
CSS Grid.
Flexbox.
Layout responsivo.
Componentes reutilizáveis.
Estados de interação.
Feedback visual.
Controle de movimento.
Grid e Flexbox

O CSS Grid é utilizado principalmente na organização dos layouts macro da interface.

O Flexbox é utilizado em componentes como:

navegação;
cartões;
formulários;
botões;
rodapé;
elementos de alinhamento.
Breakpoints

Foram definidos cinco principais breakpoints:

1200px
992px
768px
576px
400px

A interface foi adaptada para diferentes larguras de tela.

Estados de interação

Foram utilizados estados como:

:hover
:focus-visible
:active
:disabled
:valid
:invalid

Também foi utilizado:

@media (prefers-reduced-motion: reduce)

para reduzir animações e transições quando essa preferência estiver configurada no sistema do usuário.

Acessibilidade

A acessibilidade foi considerada durante o desenvolvimento da interface.

Foram utilizados:

HTML semântico.
Textos alternativos nas imagens.
label associados aos campos de formulário.
Foco visível.
Navegação por teclado.
Feedback visual que não depende exclusivamente de cor.
Contraste e legibilidade.
Estrutura organizada de títulos e seções.
Redução de movimentos por meio de prefers-reduced-motion.

O projeto foi desenvolvido considerando especialmente a necessidade de uma interface clara e legível para o público 50+.

JavaScript modular

O JavaScript foi organizado em módulos ES6, separando responsabilidades e facilitando a manutenção do código.

app.js

Responsável pela inicialização da aplicação e integração dos principais módulos.

router.js

Responsável pelo gerenciamento da navegação SPA utilizando Hash Routing.

As rotas utilizadas são:

#/
#/projetos
#/cadastro

Também são utilizados eventos relacionados ao histórico e à alteração da URL, permitindo a atualização da interface durante a navegação.

templates.js

Responsável pelos dados e templates utilizados para renderizar dinamicamente os conteúdos dos projetos.

A implementação utiliza recursos como:

arrays;
.map();
template literals;
.join();
innerHTML.
form.js

Responsável pelos eventos e pela validação do formulário.

São utilizados recursos como:

submit;
input;
preventDefault();
validações;
mensagens de erro;
classes para campos inválidos;
feedback de sucesso.
storage.js

Responsável pela persistência de informações utilizando:

localStorage
SPA e navegação

A aplicação utiliza uma arquitetura de Single Page Application (SPA) baseada em JavaScript modular e Hash Routing.

As rotas são mantidas no hash da URL para permitir uma navegação previsível durante o desenvolvimento e no ambiente de produção.

Exemplo:

https://dominio/#/projetos

A navegação utiliza eventos como:

hashchange
popstate

e o histórico do navegador é considerado durante a navegação.

Otimização de imagens

As imagens originais foram mantidas em formato JPEG na pasta:

Imagens/

Para otimização da aplicação, foram geradas versões em WebP na pasta:

imagens-webp/

A conversão foi automatizada utilizando a biblioteca Sharp por meio do arquivo:

convert-images.mjs
Resultado da otimização

O tamanho total aproximado das imagens foi reduzido de:

JPEG: aproximadamente 2,81 MB
WebP: aproximadamente 466 KB

Representando uma redução aproximada de:

83,4%

Essa otimização reduz a quantidade de dados transferidos e contribui para um carregamento mais eficiente da aplicação.

Build de produção

O projeto utiliza Vite para gerar a versão otimizada para produção.

Instalação das dependências
npm install
Ambiente de desenvolvimento
npm run dev
Build de produção
npm run build
Pré-visualização da build
npm run preview

A build final é gerada no diretório:

dist/
Configuração do Vite

O arquivo vite.config.js define o diretório:

HTML/

como raiz do projeto para o processo de build.

A configuração também permite gerar os arquivos necessários para o ambiente de produção e manter as imagens WebP disponíveis no resultado final.

O diretório de saída da build é:

dist/
Controle de versão

O projeto utiliza Git para controle de versão e organização do desenvolvimento.

O repositório remoto utilizado é o GitHub.

Branches

As principais branches utilizadas no desenvolvimento são:

master
develop
feature/melhorias-navegacao
feature/build-minificacao
Organização

A branch develop foi utilizada para desenvolvimento e integração.

A branch master representa a versão destinada ao ambiente de produção.

As branches feature/* foram utilizadas para desenvolvimento de funcionalidades específicas.

Histórico de versões
v1.0.0

Primeira versão preparada para produção, contendo a integração das funcionalidades desenvolvidas nas etapas anteriores.

v1.0.1

Versão corrigida, publicada e validada em ambiente de produção.

Principais características:

correção dos caminhos case-sensitive;
compatibilidade com o ambiente Linux utilizado pela Vercel;
publicação em produção;
validação funcional completa.

Commit relacionado à correção:

619bbf1
fix: corrige caminhos case-sensitive para deploy
Deploy em produção

O projeto foi publicado utilizando a plataforma Vercel, integrada ao repositório GitHub.

Configuração utilizada
Framework: Other
Root Directory: Conecta 50+
Build Command: npm run build
Output Directory: dist
Node.js: 24.x
Production Branch: master
Processo

O repositório GitHub foi conectado ao projeto da Vercel.

Durante o primeiro processo de deploy foi identificado um problema relacionado à diferença entre maiúsculas e minúsculas nos nomes dos diretórios.

O projeto utilizava os diretórios:

CSS/
JS/

enquanto alguns caminhos HTML estavam utilizando:

../css/
../js/

Essa diferença não causava o mesmo problema no ambiente Windows utilizado durante o desenvolvimento, mas impedia a resolução correta dos arquivos no ambiente Linux utilizado pela Vercel.

Os caminhos foram corrigidos para:

../CSS/style.css
../JS/app.js

A alteração foi registrada no commit:

619bbf1

Posteriormente, o commit foi enviado ao GitHub e publicado no ambiente de produção da Vercel.

Ambiente de produção

A versão atual está disponível em:

https://instituto-conecta-50.vercel.app

Repositório:

https://github.com/imrepakay/instituto-conecta-50

Branch de produção:

master

Versão:

v1.0.1
Validação da versão de produção

Após o deploy da versão v1.0.1, foram realizados testes funcionais diretamente no ambiente de produção.

Testes realizados
Carregamento da página inicial.
Exibição do logotipo.
Aplicação dos arquivos CSS.
Navegação para a área de projetos.
Carregamento das imagens dos projetos.
Acesso à área de participação/cadastro.
Exibição do formulário.
Validação e feedback do formulário.
Navegação entre as rotas da aplicação.
Retorno e navegação da aplicação.
Resultado
10/10 testes aprovados

A versão v1.0.1 foi considerada validada para o ambiente de produção após a conclusão desses testes.

Aprendizados técnicos

O desenvolvimento do projeto permitiu aplicar conhecimentos relacionados a:

estruturação semântica com HTML5;
desenvolvimento de interfaces com CSS3;
responsividade;
CSS Grid;
Flexbox;
acessibilidade;
JavaScript moderno;
manipulação do DOM;
eventos;
validação de formulários;
localStorage;
arquitetura SPA;
modularização com ES Modules;
gerenciamento de rotas;
Git e GitHub;
organização por branches;
criação de releases;
Vite;
otimização de imagens;
build de produção;
integração contínua com plataforma de deploy;
resolução de problemas de compatibilidade entre ambientes;
publicação e validação de uma aplicação Web em produção.
Desenvolvimento acadêmico

O projeto foi desenvolvido de maneira incremental, acompanhando a evolução das competências de desenvolvimento Front-End.

Etapa HTML5

Estruturação semântica das páginas, formulários, conteúdo institucional e acessibilidade básica.

Etapa CSS3

Implementação do Design System, responsividade, Grid, Flexbox, componentes visuais, estados de interação e melhorias de acessibilidade.

Etapa JavaScript

Implementação de:

SPA;
roteamento;
manipulação do DOM;
renderização dinâmica;
eventos;
validação;
armazenamento local;
modularização.
Etapa de build e otimização

Implementação de:

Vite;
build de produção;
minificação;
otimização das imagens;
conversão para WebP;
organização da distribuição.
Etapa de versionamento e deploy

Implementação de:

Git;
GitHub;
branches;
merge;
tags;
releases;
Vercel;
ambiente de produção;
validação pós-deploy.
Próximas etapas

O projeto poderá continuar evoluindo com:

Ampliação das funcionalidades da plataforma.
Novos recursos de interação.
Evolução dos recursos de acessibilidade.
Melhorias contínuas na experiência responsiva.
Ampliação dos conteúdos relacionados à capacitação e empregabilidade.
Desenvolvimento de novas funcionalidades relacionadas aos objetivos sociais do Instituto Conecta 50+.
Links
Repositório: https://github.com/imrepakay/instituto-conecta-50
Produção: https://instituto-conecta-50.vercel.app
Autor

Imre Pakay

Projeto acadêmico desenvolvido no curso de Análise e Desenvolvimento de Sistemas — Universidade Cruzeiro do Sul.
