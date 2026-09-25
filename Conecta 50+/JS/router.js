import { criarConteudoRota } from "./templates.js";
import { inicializarFormulario } from "./form.js";

function obterRota() {
    const hash = window.location.hash.replace(/^#/, "");

    if (hash === "/projetos" || hash.startsWith("/projetos/")) {
        return "/projetos";
    }

    if (hash === "/cadastro") {
        return "/cadastro";
    }

    return "/";
}

export function renderRoute() {
    const app = document.querySelector("#app");

    if (!app) {
        console.error('Elemento "#app" não encontrado.');
        return;
    }

    const rotaAtual = obterRota();
    app.innerHTML = criarConteudoRota(rotaAtual);

    if (rotaAtual === "/cadastro") {
        inicializarFormulario();
    }

    const titulos = {
        "/": "Instituto Conecta 50+ | Inclusão Digital e Empregabilidade",
        "/projetos": "Projetos | Instituto Conecta 50+",
        "/cadastro": "Cadastro | Instituto Conecta 50+"
    };

    document.title = titulos[rotaAtual] || titulos["/"];

    // Fecha o menu mobile depois da navegação.
    const menuToggle = document.querySelector("#menu-toggle");
    if (menuToggle) {
        menuToggle.checked = false;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

export function iniciarRoteamento() {
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        const destino = link.getAttribute("href");

        // Apenas links internos da SPA são tratados pelo roteador.
        if (!destino || !destino.startsWith("#/")) {
            return;
        }

        event.preventDefault();

        if (window.location.hash === destino) {
            renderRoute();
            return;
        }

        history.pushState({}, "", destino);
        renderRoute();
    });

    window.addEventListener("popstate", renderRoute);
    window.addEventListener("hashchange", renderRoute);

    renderRoute();
}
