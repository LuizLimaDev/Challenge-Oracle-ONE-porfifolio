import { tiposDeErro } from "./app.js";
import { mensagens } from "./app.js";

//verificacao geral dos campos
const camposFormulario = document.querySelectorAll("[required]");
const btnEnviar = document.querySelector(".formulario__btnEnviar");

btnEnviar.addEventListener("click", () => {
    camposFormulario.forEach((campo) => {
        const mensagemErro = campo.parentNode.querySelector('.formulario__input--msgErro');

        if (campo.value === "") {
            mensagemErro.textContent = "Os campos não podem estar vazios.";
            campo.classList.add("container__invalido");
        } else {
            mensagemErro.textContent = "";
            campo.classList.remove("container__invalido");
        };

    });
});

//Verificacao e atribuicao dos erros
export default function verificaCampo(campo) {
    let mensagem = " ";

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro]
        };
    });

    const mensagemErro = campo.parentNode.querySelector('.formulario__input--msgErro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
        campo.classList.add("container__invalido");
    } else {
        mensagemErro.textContent = "";
        campo.classList.remove("container__invalido");
    };

    //Limite de caracteres
    if (campo.value.length > 50 && campo.name !== "mensagem") {
        mensagemErro.textContent = "Este campo nao pode ter mais de 50 caracteres.";
        campo.classList.add("container__invalido");
    } else if (campo.value.length > 300 && campo.name == "mensagem") {
        mensagemErro.textContent = "Este campo nao pode ter mais de 300 caracteres.";
        campo.classList.add("container__invalido");
    }
};
