# Instituto Conecta 50+

Projeto acadêmico de desenvolvimento Front-End do **Instituto Conecta 50+**, uma iniciativa de impacto social voltada à inclusão digital, capacitação profissional e empregabilidade para pessoas com 50 anos ou mais.

## Etapa atual

Esta versão evolui a estrutura HTML5 validada para **CSS3**, com Design System, layouts responsivos, Grid, Flexbox, navegação interativa e componentes de feedback.

## Páginas

- `index.html` — página inicial, projetos, chamadas de participação e demonstração de feedbacks.
- `projetos.html` — apresentação detalhada dos projetos.
- `cadastro.html` — formulário HTML5 com validação nativa e estilização responsiva.

## Estrutura

```text
Instituto-Conecta-50/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   └── style.css
├── imagens/
│   ├── logo.jpg
│   ├── banner.jpg
│   ├── inclusao-digital.jpg
│   ├── capacitacao.jpg
│   └── empregabilidade.jpg
├── js/
│   ├── app.js
│   ├── router.js
│   ├── templates.js
│   ├── form.js
│   └── storage.js
└── README.md
```

## CSS3 implementado

- Design System com variáveis de cores, tipografia, espaçamentos, bordas e sombras.
- Paleta moderna e sóbria, priorizando contraste e legibilidade para o público 50+.
- CSS Grid de 12 colunas para os layouts macro.
- Flexbox para navegação, cartões, formulários, botões e rodapé.
- Cinco breakpoints: 1200px, 992px, 768px, 576px e 400px.
- Navegação desktop com dropdown e menu condensado para dispositivos móveis.
- Estados `:hover`, `:focus-visible`, `:active`, `:disabled`, `:valid` e `:invalid`.
- Badges, alertas, modal e toast com abordagem CSS e âncoras `:target`.
- `prefers-reduced-motion` para reduzir efeitos de movimento quando solicitado pelo sistema.

## Acessibilidade

Foram mantidos textos alternativos nas imagens, labels associados aos campos, foco visível, estrutura semântica, navegação por teclado e feedbacks que não dependem exclusivamente de cor.

## Observação

O modal e o toast desta etapa utilizam recursos nativos de HTML e CSS, sem JavaScript. A implementação de comportamentos mais avançados poderá ser realizada posteriormente na etapa de programação da interface Web.

# JavaScript modular — Instituto Conecta 50+

Arquivos:
- `app.js`: inicialização.
- `router.js`: navegação SPA usando hash + History API.
- `templates.js`: dados e templates dos componentes.
- `form.js`: eventos e validação do formulário.
- `storage.js`: persistência com `localStorage`.

Como o projeto utiliza a pasta `html/`, o `index.html` deve carregar:
```html
<main id="app"></main>
<script type="module" src="../js/app.js"></script>
```

Nesta implementação, as rotas são mantidas no hash (`#/projetos` e `#/cadastro`) para funcionar de forma previsível no Live Server sem exigir configuração de servidor. O `pushState()` atualiza o histórico e `popstate`/`hashchange` re-renderizam a interface.
## Próximas etapas

## Estratégia de versionamento

O projeto utiliza GitFlow para organizar o desenvolvimento por meio das branches master, develop e feature.


