const elementos = document.querySelectorAll(".text");
const imagem = document.querySelector(".story__img");
const cap1 = document.querySelector(".capitulo__um");
const cap2 = document.querySelector(".capitulo__dois");
const mensagemFinal = document.querySelector(".container__mensagemFinal");
const textoFinal = document.querySelector(".mensagemFinal__texto");
const coracao = document.querySelector(".mensagemFinal__coracao");

function play() {
    for (let i = 0; i < elementos.length; i++) {

        elementos[i].addEventListener("animationend", function () {
            elementos[i + 1].classList.remove("pause");
        })

        if (elementos[i] === elementos[3]) {
            elementos[3].addEventListener("animationend", () => {
                imagem.src = "../img/historia/capitulo2.png"
            });
        }

        if (elementos[i] === elementos[10]) {
            elementos[10].addEventListener("animationend", () => {
                imagem.src = "../img/historia/capitulo3.png"
            });

        }

        if (elementos[i] === elementos[10]) {
            elementos[10].addEventListener("animationend", () => {
                textoFinal.style.display = "flex";
                coracao.style.display = "flex";
            });
        }
    }

    coracao.addEventListener("animationend", function () {
        window.location.href = "../../index.html";
    });
}

play();
