'use strict'

const form = document.getElementById('form');
const inputNomeInstituicao = document.getElementById('inputNomeInstituicao');
const inputEmailInstituicao = document.getElementById('inputEmailInstituicao');
const inputConfirmarEmail = document.getElementById('inputConfirmarEmail');
const inputSenhaInstituicao = document.getElementById('inputSenhaInstituicao');
const inputConfirmarSenha = document.getElementById('inputConfirmarSenha');
const inputTelefoneInstituicao = document.getElementById('inputTelefoneInstituicao');
const inputCnpjInstituicao = document.getElementById('inputCnpjInstituicao');
const inputNumeroCartao = document.getElementById('inputNumeroCartao');
const inputNomeCartao = document.getElementById('inputNomeCartao');
const inputDataValidadeCartao = document.getElementById('inputDataValidadeCartao');
const inputCvvCartao = document.getElementById('inputCvvCartao');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})


const errorValidation = (input, message) => {
    const inputDadosInstituicao = input.parentElement;
    const p = inputDadosInstituicao.querySelector('p');

    p.style.visibility = 'visible';
    p.innerText = message;

    inputDadosInstituicao.className = 'input_dados_instituicao erro';
}

const sucessValidation = (input) => {
    const inputDadosInstituicao = input.parentElement;
    const p = inputDadosInstituicao.querySelector('p');

    inputDadosInstituicao.classList.remove('erro');
    inputDadosInstituicao.className = 'input_dados_instituicao sucesso';

    p.style.visibility = 'hidden';
}

const validarVazio = (input) => {

    if (input.value == '') {
        errorValidation(input, 'Preencha todos os campos')
        return false;
    } else {
        sucessValidation(input)
        return true;
    }
}

const validarCompatibilidadeInputs = (input, inputConfirmacao) => {

    if (input.value != inputConfirmacao.value) {
        errorValidation(inputConfirmacao, 'Os valores inseridos não correspondem')
    } else {
        sucessValidation(inputConfirmacao)
    }
}

const checkInputs = () => {

    validarVazio(inputNomeInstituicao);
    validarVazio(inputEmailInstituicao);

    if (validarVazio(inputConfirmarEmail)) {
        validarCompatibilidadeInputs(inputEmailInstituicao, inputConfirmarEmail);
    }

    if(validarVazio(inputConfirmarSenha)) {
        validarCompatibilidadeInputs(inputSenhaInstituicao, inputConfirmarSenha);
    }
    
    validarVazio(inputSenhaInstituicao);
    validarVazio(inputTelefoneInstituicao);
    validarVazio(inputCnpjInstituicao);
    validarVazio(inputNumeroCartao);
    validarVazio(inputNomeCartao);
    validarVazio(inputDataValidadeCartao);
    validarVazio(inputCvvCartao);

}

//INTEGRAÇÃO COM O BACK-END
const cadastrarInstituicao = () => {

    event.preventDefault()

    let nomeInstituicao = document.getElementById('inputNomeInstituicao').value
    let emailInstituicao = document.getElementById('inputEmailInstituicao').value
    let senhaInstituicao = document.getElementById('inputSenhaInstituicao').value
    let telefoneInstituicao = document.getElementById('inputTelefoneInstituicao').value
    let cnpjInstituicao = document.getElementById('inputCnpjInstituicao').value
    let numeroCartao = document.getElementById('inputNumeroCartao').value
    let nomeCartao = document.getElementById('inputNomeCartao').value
    let validadeCartao = document.getElementById('inputValidadeCartao').value
    let cvvCartao = document.getElementById('inputCvvCartao').value

    const instituicao = {
        "nome": nomeInstituicao.toString(),
        "email": emailInstituicao.toString(),
        "senha": senhaInstituicao.toString(),
        "nomeNoCartao": nomeCartao.toString(),
        "dataValidade": validadeCartao,
        "cvv": parseInt(cvvCartao),
        "numero": numeroCartao.toString(),
        "cnpj": cnpjInstituicao.toString(),
        "telefone": telefoneInstituicao.toString()
    };

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(instituicao)
    }

    fetch('http://localhost:3000/instituicao/cadastrarInstituicao', config)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        });
}