import verificaCampo from "./validacaoFormulario.js";

const camposFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

//envio dos dados do formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "assunto": e.target.elements["assunto"].value,
    }

    localStorage.setItem("mensagem", JSON.stringify(listaRespostas));

    window.location.href = `https://api.whatsapp.com/send?phone=5514988116402&text=${listaRespostas}`;
});

//verificacoes dos campos
camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

//mensagem de erros personalizadas
export const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

export const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooShort: "O nome precisa ter mais de 2 caracteres",
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        patternMismatch: "Por favor, preencha contendo @ e o servidor de e-mail."
    },
    assunto: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        tooShort: "O nome precisa ter mais de 2 caracteres",
    },
    mensagem: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        tooShort: "O nome precisa ter mais de 2 caracteres",
    },
}
