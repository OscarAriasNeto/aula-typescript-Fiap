type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else {
        console.log(`Resposta do servidor: ${resposta ? "Sucesso" : "Falha"}`);
    }
}

processarResposta("Operação concluída com sucesso");
processarResposta(true);
processarResposta(false);