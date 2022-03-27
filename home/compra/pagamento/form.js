'use strict'

let form = document.getElementById('form');
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

const textCartaoNumero = document.getElementById('cartao_numero');
const textCartaoNome = document.getElementById('cartao_nome');
const textCartaoValidade = document.getElementById('cartao_validade');

$(document).ready(function(){        
    $(inputCnpjInstituicao).mask("99.999.999/0001-99");
    $(inputTelefoneInstituicao).mask("(99) 9999-9999");
    // $(inputDataValidadeCartao).mask('99/99');
});

const preencherCartao = (input, text) => {
    text.value = input.value.toUpperCase()
}

inputNumeroCartao.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    preencherCartao(inputNumeroCartao, textCartaoNumero)
});
inputNomeCartao.addEventListener('input', function (e) { preencherCartao(inputNomeCartao, textCartaoNome) });

inputDataValidadeCartao.addEventListener('input', function (e) {
    preencherCartao(inputDataValidadeCartao, textCartaoValidade)
});

$(inputConfirmarEmail).on('keydown', function () {    
    validarCompatibilidadeInputs(inputEmailInstituicao, inputConfirmarEmail);
});

$(inputConfirmarSenha).on('keydown', function () {   
    validarCompatibilidadeInputs(inputSenhaInstituicao, inputConfirmarSenha);
});

const isInputNumber = (evt) =>{
    let char = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(char))) {
        evt.preventDefault();
    }
}

const errorValidation = (input, message) => {
    const inputDadosInstituicao = input.parentElement;
    const p = inputDadosInstituicao.querySelector('p');
    p.style.visibility = 'visible';
    p.innerText = message;

    if(inputDadosInstituicao.className == 'sucesso') {
        inputDadosInstituicao.classList.remove('sucesso');
    }
    
    input.focus()
    inputDadosInstituicao.className = 'input_dados_instituicao erro';
}

const sucessValidation = (input) => {
    const inputDadosInstituicao = input.parentElement;
    const p = inputDadosInstituicao.querySelector('p');

    if(inputDadosInstituicao.className == 'erro') {
        inputDadosInstituicao.classList.remove('erro');
    }

    inputDadosInstituicao.className = 'input_dados_instituicao sucesso';
    p.style.visibility = 'hidden';
}

const validarCompatibilidadeInputs = (input, inputConfirmacao) => {
    if (input.value != inputConfirmacao.value) { 
        errorValidation(inputConfirmacao, 'Os valores inseridos não coincidem');
        inputConfirmacao.focus();
    }
    else if (input.value == inputConfirmacao.value) { 
        sucessValidation(inputConfirmacao);
    }
}

const converterData = (inputValue) => {
    let splitedDate = inputValue.split(['/'])
    let dateString = '01/' + splitedDate[0] + '/20' + splitedDate[1];
    let splitedDateString = dateString.split(['/']);
    let data = splitedDateString[2]+'-'+splitedDateString[1]+'-'+splitedDateString[0];
    return data;
}

const validarVazio = (input) => {
    if (input.value == '') {
        errorValidation(input, 'Preencha todos os campos')
        return false;
    } 
     else if (input != '') {
        sucessValidation(input);
        return true;
    }
}

const checkInputs = () => {
    console.log('check')
    if(
        validarVazio(inputNomeInstituicao) &&
        validarVazio(inputEmailInstituicao) &&
        validarVazio(inputConfirmarEmail) &&
        validarVazio(inputSenhaInstituicao) && 
        validarVazio(inputConfirmarSenha) &&
        validarVazio(inputTelefoneInstituicao) &&
        validarVazio(inputCnpjInstituicao) &&
        validarVazio(inputNumeroCartao) &&
        validarVazio(inputNomeCartao) &&
        validarVazio(inputDataValidadeCartao) &&
        validarVazio(inputCvvCartao)
    ) {
        cadastrarInstituicao(inputNomeInstituicao.value.trim(),
                            inputEmailInstituicao.value.trim(), 
                            inputSenhaInstituicao.value,
                            inputTelefoneInstituicao.value,
                            inputCnpjInstituicao.value,
                            inputNumeroCartao.value.trim(),
                            inputNomeCartao.value.trim().toUpperCase(),
                            converterData(inputDataValidadeCartao.value),
                            inputCvvCartao.value
                        )                   
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})


const cadastrarInstituicao = (nomeInstituicao, emailInstituicao, senhaInstituicao, telefoneInstituicao, cnpjInstituicao, numeroCartao, nomeCartao, validadeCartao, cvvCartao) => {


    const instituicao = {
        "nome": nomeInstituicao,
        "email": emailInstituicao,
        "senha": senhaInstituicao,
        "nomeNoCartao": nomeCartao,
        "dataValidade": validadeCartao,
        "cvv": cvvCartao,
        "numero": numeroCartao,
        "cnpj": cnpjInstituicao,
        "telefone": telefoneInstituicao
    };
    
    console.log(instituicao)
    
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
