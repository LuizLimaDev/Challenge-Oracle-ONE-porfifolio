const projetos = document.querySelectorAll(".projetos__box");
const btnVoltar = document.querySelector(".projetos__seta--esquerda");
const btnAvancar = document.querySelector(".projetos__seta--direita");

let projetoAtual = 0;

function escondeProjeto() {
    const cartaoAtual = document.querySelector(".selecionado");
    cartaoAtual.classList.remove("selecionado");
    cartaoAtual.classList.add("oculto");
}

function mostraProjeto(indiceProjeto) {
    projetos[indiceProjeto].classList.remove("oculto");
    projetos[indiceProjeto].classList.add("selecionado");
}

function adicionaCoracao(url) {
    let container = document.querySelector(".projetos__container--contador");
    let img = document.createElement("img");

    img.classList.add("projetos__coracao");
    img.src = url;
    container.appendChild(img);
}

const urlCoracaoPreenchido = "/src/img/heart-full.png";
const urlCoracaoVazio = "/src/img/heart-empty.png";

btnAvancar.addEventListener('click', function () {
    const coracoes = document.querySelectorAll(".projetos__coracao");

    if (projetoAtual === projetos.length - 1) {
        return;
    }

    escondeProjeto()
    coracoes[projetoAtual + 1].src = urlCoracaoPreenchido;

    projetoAtual++;
    mostraProjeto(projetoAtual);
});

btnVoltar.addEventListener('click', function () {
    const coracoes = document.querySelectorAll(".projetos__coracao");

    if (projetoAtual === 0) {
        return;
    }

    escondeProjeto();
    coracoes[projetoAtual].src = urlCoracaoVazio;

    projetoAtual--;
    mostraProjeto(projetoAtual);

});

adicionaCoracao(urlCoracaoPreenchido)

for (let i = 1; i < projetos.length; i++) {
    adicionaCoracao(urlCoracaoVazio)
}

