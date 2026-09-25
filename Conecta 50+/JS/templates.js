const projetos = [
    {
        id: "inclusao-digital",
        titulo: "Inclusão Digital",
        imagem: "../imagens/inclusao-digital.jpg",
        descricao: "Cursos e oficinas para desenvolver autonomia no uso de tecnologias digitais.",
        objetivo: "Promover autonomia e segurança no uso de computadores, celulares e serviços digitais."
    },
    {
        id: "capacitacao",
        titulo: "Capacitação Profissional",
        imagem: "../imagens/capacitacao.jpg",
        descricao: "Formação prática para ampliar competências e preparar participantes para novas oportunidades.",
        objetivo: "Desenvolver competências digitais e profissionais alinhadas às oportunidades atuais."
    },
    {
        id: "empregabilidade",
        titulo: "Empregabilidade 50+",
        imagem: "../imagens/empregabilidade.jpg",
        descricao: "Apoio para currículo, busca de oportunidades e preparação para processos seletivos.",
        objetivo: "Apoiar a conexão entre pessoas 50+ capacitadas e oportunidades de trabalho."
    }
];

function criarCardsProjetos() {
    return projetos.map((projeto) => `
        <article class="card project-card" id="${projeto.id}">
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
            <div class="card-content">
                <span class="badge badge-info">Projeto</span>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <p><strong>Objetivo:</strong> ${projeto.objetivo}</p>
            </div>
        </article>
    `).join("");
}

function criarFormulario() {
    return `
        <section class="section" aria-labelledby="titulo-cadastro">
            <div class="container">
                <div class="section-heading">
                    <span class="badge badge-info">Participação</span>
                    <h1 id="titulo-cadastro">Cadastre seu interesse</h1>
                    <p>Preencha seus dados para demonstrar interesse nas iniciativas do Instituto Conecta 50+.</p>
                </div>

                <form id="cadastro-form" class="form" novalidate>
                    <fieldset>
                        <legend>Dados pessoais</legend>

                        <div class="form-grid">
                            <div class="form-group">
                                <label for="nome">Nome completo *</label>
                                <input id="nome" name="nome" type="text" autocomplete="name" required minlength="3">
                            </div>

                            <div class="form-group">
                                <label for="email">E-mail *</label>
                                <input id="email" name="email" type="email" autocomplete="email" required>
                            </div>

                            <div class="form-group">
                                <label for="telefone">Telefone *</label>
                                <input id="telefone" name="telefone" type="tel" autocomplete="tel" required minlength="10">
                            </div>

                            <div class="form-group">
                                <label for="interesse">Área de interesse *</label>
                                <select id="interesse" name="interesse" required>
                                    <option value="">Selecione uma opção</option>
                                    <option value="inclusao-digital">Inclusão Digital</option>
                                    <option value="capacitacao">Capacitação Profissional</option>
                                    <option value="empregabilidade">Empregabilidade 50+</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>

                        <div class="form-grid">
                            <div class="form-group">
                                <label for="endereco">Endereço *</label>
                                <input id="endereco" name="endereco" type="text" autocomplete="street-address" required>
                            </div>

                            <div class="form-group">
                                <label for="numero">Número *</label>
                                <input id="numero" name="numero" type="text" inputmode="numeric" required>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Consentimento</legend>
                        <div class="form-group checkbox-group">
                            <label>
                                <input id="consentimento" name="consentimento" type="checkbox" required>
                                Autorizo o uso dos dados para contato relacionado ao projeto. *
                            </label>
                        </div>
                    </fieldset>

                    <div id="form-status" class="form-status" role="status" aria-live="polite"></div>

                    <div class="form-actions">
                        <button class="button button-primary" type="submit">Enviar cadastro</button>
                        <button class="button button-secondary" type="reset">Limpar formulário</button>
                    </div>
                </form>
            </div>
        </section>
    `;
}

export function criarConteudoRota(rota) {
    switch (rota) {
        case "/projetos":
            return `
                <section class="hero">
                    <div class="container hero-content">
                        <span class="badge badge-info">Nossos projetos</span>
                        <h1>Projetos do Instituto Conecta 50+</h1>
                        <p>Iniciativas para promover inclusão digital, capacitação profissional e empregabilidade.</p>
                        <a class="button button-primary" href="#/cadastro">Cadastre seu interesse</a>
                    </div>
                </section>

                <section class="section" aria-labelledby="titulo-projetos">
                    <div class="container">
                        <div class="section-heading">
                            <h2 id="titulo-projetos">Conheça nossas iniciativas</h2>
                            <p>Os projetos são apresentados dinamicamente por JavaScript.</p>
                        </div>
                        <div class="card-grid">
                            ${criarCardsProjetos()}
                        </div>
                    </div>
                </section>
            `;

        case "/cadastro":
            return criarFormulario();

        case "/":
        default:
            return `
                <section class="hero">
                    <div class="container hero-content">
                        <span class="badge badge-info">Instituto Conecta 50+</span>
                        <h1>Inclusão digital para transformar oportunidades</h1>
                        <p>Capacitação, autonomia e empregabilidade para pessoas com 50 anos ou mais.</p>
                        <div class="hero-actions">
                            <a class="button button-primary" href="#/projetos">Conheça os projetos</a>
                            <a class="button button-secondary" href="#/cadastro">Quero participar</a>
                        </div>
                    </div>
                </section>

                <section class="section" aria-labelledby="titulo-sobre">
                    <div class="container">
                        <div class="section-heading">
                            <span class="badge badge-info">Sobre o projeto</span>
                            <h2 id="titulo-sobre">Conectar pessoas, conhecimento e oportunidades</h2>
                            <p>O Instituto Conecta 50+ propõe uma plataforma digital acessível para apoiar pessoas 50+ no desenvolvimento de competências digitais e profissionais.</p>
                        </div>
                        <div class="card-grid">
                            ${criarCardsProjetos()}
                        </div>
                    </div>
                </section>

                <section class="section section-highlight" aria-labelledby="titulo-participe">
                    <div class="container">
                        <div class="section-heading">
                            <h2 id="titulo-participe">Faça parte dessa iniciativa</h2>
                            <p>Conheça os projetos e cadastre seu interesse em participar.</p>
                            <a class="button button-primary" href="#/cadastro">Quero participar</a>
                        </div>
                    </div>
                </section>
            `;
    }
}

export { projetos };
