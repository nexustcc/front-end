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

$(document).ready(function(){        
    $(inputCnpjInstituicao).mask("99.999.999/0001-99");
    $(inputTelefoneInstituicao).mask("(99) 9999-9999");
    $(inputDataValidadeCartao).mask('99/99');
});

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
        console.log('vazio')
        return false;
    } else {
        sucessValidation(input)
        console.log('preenchido')
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

const converterData = (inputValue) => {
    let splitedDate = inputValue.split(['/'])
    let dateString = '01/' + splitedDate[0] + '/20' + splitedDate[1];
    let splitedDateString = dateString.split(['/']);
    let data = new Date(splitedDateString[2]+splitedDateString[1]+splitedDateString[0]);
    console.log(data);
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

    if(validarVazio(inputDataValidadeCartao)){
        converterData(inputDataValidadeCartao.value)
    }
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