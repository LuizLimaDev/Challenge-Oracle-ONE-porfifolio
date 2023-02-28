
const checaID = document.querySelectorAll(".animacaoPausada");

function animacaoScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.3);
    checaID.forEach((elemento) => {
        if ((windowTop) > elemento.offsetTop) {
            elemento.style = "animation-play-state: running";
        }
    });
}

animacaoScroll();

if (checaID.length) {
    window.addEventListener("scroll", function () {
        animacaoScroll();
    });
}