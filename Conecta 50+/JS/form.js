import { salvarDados, recuperarDados } from "./storage.js";

function mostrarErro(campo, mensagem) {
    campo.classList.add("campo-invalido");
    campo.setAttribute("aria-invalid", "true");

    let erro = campo.parentElement.querySelector(".mensagem-erro");

    if (!erro) {
        erro = document.createElement("small");
        erro.className = "mensagem-erro";
        campo.parentElement.appendChild(erro);
    }

    erro.textContent = mensagem;
}

function limparErro(campo) {
    campo.classList.remove("campo-invalido");
    campo.removeAttribute("aria-invalid");

    const erro = campo.parentElement.querySelector(".mensagem-erro");

    if (erro) {
        erro.remove();
    }
}

function validarCampo(campo) {
    limparErro(campo);

    if (campo.type === "checkbox") {
        if (campo.required && !campo.checked) {
            mostrarErro(campo, "É necessário aceitar o consentimento.");
            return false;
        }

        return true;
    }

    if (campo.required && !campo.value.trim()) {
        mostrarErro(campo, "Este campo é obrigatório.");
        return false;
    }

    if (campo.type === "email" && campo.value.trim() && !campo.validity.valid) {
        mostrarErro(campo, "Informe um e-mail válido.");
        return false;
    }

    if (campo.minLength > 0 && campo.value.trim().length < campo.minLength) {
        mostrarErro(campo, `Informe pelo menos ${campo.minLength} caracteres.`);
        return false;
    }

    return true;
}

function restaurarDados(formulario) {
    const dados = recuperarDados();

    if (!dados) {
        return;
    }

    Object.entries(dados).forEach(([nome, valor]) => {
        const campo = formulario.elements.namedItem(nome);

        if (!campo) {
            return;
        }

        if (campo.type === "checkbox") {
            campo.checked = Boolean(valor);
        } else {
            campo.value = valor ?? "";
        }
    });
}

export function inicializarFormulario() {
    const formulario = document.querySelector("#cadastro-form");

    if (!formulario) {
        return;
    }

    restaurarDados(formulario);

    formulario.querySelectorAll("input, select, textarea").forEach((campo) => {
        campo.addEventListener("input", () => validarCampo(campo));
        campo.addEventListener("change", () => validarCampo(campo));
    });

    formulario.addEventListener("reset", () => {
        window.setTimeout(() => {
            formulario.querySelectorAll("input, select, textarea").forEach(limparErro);

            const status = document.querySelector("#form-status");
            if (status) {
                status.textContent = "";
                status.className = "form-status";
            }
        }, 0);
    });

    formulario.addEventListener("submit", (event) => {
        // Impede definitivamente o envio tradicional para o servidor.
        event.preventDefault();
        event.stopPropagation();

        const campos = Array.from(
            formulario.querySelectorAll("input, select, textarea")
        );

        const formularioValido = campos.every(validarCampo);
        const status = document.querySelector("#form-status");

        if (!formularioValido) {
            if (status) {
                status.textContent = "Revise os campos destacados antes de enviar.";
                status.className = "form-status form-status-error";
            }

            const primeiroInvalido = formulario.querySelector(".campo-invalido");

            if (primeiroInvalido) {
                primeiroInvalido.focus();
            }

            return;
        }

        const dados = Object.fromEntries(new FormData(formulario).entries());

        dados.consentimento = formulario.elements.consentimento.checked;

        salvarDados(dados);

        if (status) {
            status.textContent = "Cadastro realizado com sucesso! Seus dados foram salvos neste navegador.";
            status.className = "form-status form-status-success";
        }
    });
}
