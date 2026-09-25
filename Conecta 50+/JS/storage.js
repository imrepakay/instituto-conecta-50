const STORAGE_KEY = "conecta50_dados_participacao";

export function salvarDados(dados) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

export function recuperarDados() {
    const dadosSalvos = localStorage.getItem(STORAGE_KEY);

    if (!dadosSalvos) {
        return null;
    }

    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        console.error("Erro ao recuperar dados:", erro);
        localStorage.removeItem(STORAGE_KEY);
        return null;
    }
}

export function limparDados() {
    localStorage.removeItem(STORAGE_KEY);
}
