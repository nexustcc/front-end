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
    inputDadosInstituicao.classList.remove('sucesso');
    inputDadosInstituicao.className = 'input_dados_instituicao erro';
}

const sucessValidation = (input) => {
    const inputDadosInstituicao = input.parentElement;
    const p = inputDadosInstituicao.querySelector('p');
    inputDadosInstituicao.classList.remove('erro');
    inputDadosInstituicao.className = 'input_dados_instituicao sucesso';
    p.style.visibility = 'hidden';
}

const validarCompatibilidadeInputs = (input, inputConfirmacao) => {
    console.log('validar comopatibilidade')
    if (input.value == inputConfirmacao.value) { 
        console.log('valores iguais');
        console.log('valor 1: ' + input.value);
        console.log('valor 2: ' + inputConfirmacao.value);
        sucessValidation(inputConfirmacao)
    }
    else { 
        console.log('valores diferentes')
        console.log('valor 1: ' + input.value);
        console.log('valor 2: ' + inputConfirmacao.value);
        errorValidation(inputConfirmacao, 'Os valores inseridos não coincidem')
    }
}

const validarVazio = (input) => {

    if (input.value == '') {
        errorValidation(input, 'Preencha todos os campos')
        return false;
    } else {
        if( input == document.getElementById('inputConfirmarEmail')){
            console.log('validação email')
            validarCompatibilidadeInputs(inputEmailInstituicao, inputConfirmarEmail)
        }

        // if( input == document.getElementById('inputSenhaInstituicao')){
        //     validarCompatibilidadeInputs(inputSenhaInstituicao, inputConfirmarSenha)
        // }
        
        if( input == document.getElementById('inputDataValidadeCartao')){
            converterData(inputDataValidadeCartao.value)
        }  

        sucessValidation(input)
        return true;
    }
}


const converterData = (inputValue) => {
    let splitedDate = inputValue.split(['/'])
    let dateString = '01/' + splitedDate[0] + '/20' + splitedDate[1];
    let splitedDateString = dateString.split(['/']);
    let data = splitedDateString[2]+'-'+splitedDateString[1]+'-'+splitedDateString[0];
    console.log(data);
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
        cadastrarInstituicao(inputNomeInstituicao.value,
                            inputEmailInstituicao.value, 
                            inputSenhaInstituicao.value,
                            inputTelefoneInstituicao.value,
                            inputCnpjInstituicao.value,
                            inputNomeCartao.value,
                            inputDataValidadeCartao.value,
                            inputCvv.value
                        )
    }
}

//INTEGRAÇÃO COM O BACK-END
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
    
        // const config = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(instituicao)
        // }
    
        // fetch('http://localhost:3000/instituicao/cadastrarInstituicao', config)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //     });
}