
let perguntas = [
    {
        pergunta: "Qual é a unidade básica dos seres vivos?",
        a: "Órgão",
        b: "Célula",
        c: "Sistema",
        resposta: "B"
    },

    {
        pergunta: "Qual organela produz energia para a célula?",
        a: "Mitocôndria",
        b: "Ribossomo",
        c: "Núcleo",
        resposta: "A"
    },

    {
        pergunta: "Qual molécula armazena informações genéticas?",
        a: "Água",
        b: "Oxigênio",
        c: "DNA",
        resposta: "C"
    }
];

let numero = 0;
let pontos = 0;
let respondeu = false;

function verificarResposta(escolha) {

    if (respondeu == true) {
        return;
    }

    respondeu = true;

    if (escolha == perguntas[numero].resposta) {

        document.getElementById("resultado").innerHTML =
            " Resposta correta!";

        pontos++;

    } else {

        document.getElementById("resultado").innerHTML =
            " Resposta incorreta!";
    }

    document.getElementById("pontuacao").innerHTML =
        "Pontos: " + pontos;
}

function proximaPergunta() {

    if (respondeu == false) {
        return;
    }

    numero++;

    if (numero >= perguntas.length) {

        document.getElementById("pergunta").innerHTML =
            "Quiz finalizado!";

        document.getElementById("resultado").innerHTML =
            "Você acertou " + pontos + " de " + perguntas.length + "!";

        document.getElementById("proxima").style.display = "none";

        return;
    }

    respondeu = false;

    document.getElementById("pergunta").innerHTML =
        perguntas[numero].pergunta;

    let botoes = document.querySelectorAll(".alternativas button");

    botoes[0].innerHTML = "A) " + perguntas[numero].a;
    botoes[1].innerHTML = "B) " + perguntas[numero].b;
    botoes[2].innerHTML = "C) " + perguntas[numero].c;

    document.getElementById("resultado").innerHTML = "";
}
