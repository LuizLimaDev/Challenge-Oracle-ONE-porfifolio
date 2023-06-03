const animacao = document.querySelector(".titulo__titulo");

animacao.addEventListener('animationend', () => {
    setTimeout(timeOut, 2000)
    setTimeout(reset, 2500)

    function timeOut() {
        const timeOut = animacao.classList.remove("animacao");
        setTimeout(timeOut, 2000);
    };

    function reset() {
        const reset = animacao.classList.add("animacao");
        setTimeout(reset, 3500);
    };
});