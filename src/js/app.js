import verificaCampo from "./validacaoFormulario.js";

const camposFormulario = document.querySelectorAll("[required]");

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
