const linhas = [document.querySelector(`.ln1`),
document.querySelector(`.ln2`),
document.querySelector(`.ln3`),
document.querySelector(`.ln4`),
document.querySelector(`.ln5`),
document.querySelector(`.ln6`),
document.querySelector(`.ln7`),
document.querySelector(`.ln8`),
document.querySelector(`.ln9`),
document.querySelector(`.ln10`),
document.querySelector(`.ln11`),
document.querySelector(`.ln12`)];

// capitulos
const capitulo1 = [linhas[0], linhas[1], linhas[2], linhas[3]];
const capitulo2 = [linhas[4], linhas[5], linhas[6], linhas[7]];
const capitulo3 = [linhas[8], linhas[9], linhas[10], linhas[11]];
const final = document.querySelector('.text__final');
const coracao = document.querySelector('.frameworks');

// passa capitulo

// capitulo 1
for (let i = 0; i < capitulo1.length; i++) {
    capitulo1[i].addEventListener('animationend', () => {
        capitulo1[i + 1].classList.add('active');
    })

    if (capitulo1[i] === linhas[2]) {
        break
    }
}

linhas[3].addEventListener('animationend', () => {
    setTimeout(apagaCapitulo(capitulo1), 2000);
})

// capitulo 2
for (let i = 0; i < capitulo2.length; i++) {
    capitulo1[3].addEventListener('animationend', () => {
        capitulo2[0].classList.add('active');
    })

    capitulo2[i].addEventListener('animationend', () => {
        capitulo2[i + 1].classList.add('active');
    })

    if (capitulo2[i] === linhas[6]) {
        break
    }
}

// temporizador para apagar o capitulo2

// capitulo 3


// troca de capitulos
function apagaCapitulo(caiptulo) {
    for (let item of caiptulo) {
        item.style.display = "none";
    }
}




