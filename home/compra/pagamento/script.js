'use strict'

const inputNomeInstituicao = document.getElementById('inputNomeInstituicao');
const inputEmailInstituicao = document.getElementById('inputEmailInstituicao');
const inputConfirmarEmail = document.getElementById('inputConfirmarEmail');
const inputSenhaInstituicao = document.getElementById('inputSenhaInstituicao');
const inputConfirmarSenha = document.getElementById('inputConfirmarSenha');
const inputTelefoneInstituicao = document.getElementById('inputTelefoneInsituicao');
const inputCnpjInstituicao = document.getElementById('inputCnpjInstituicao');
const inputNumeroCartao = document.getElementById('inputNumeroCartao');
const inputNomeCartao = document.getElementById('inputNomeCartao');
const inputDataValidadeCartao = document.getElementById('inputDataValidadeCartao');
const inputCvvCartao = document.getElementById('inputCvvCartao');

const validarCampos = () => {
    console.log('VALIDAR CAMPOS')

    const valueNomeInstituicao = inputNomeInstituicao.value.trim();
    const valueEmailInsituicao = inputEmailInstituicao.value.trim();
    const valueConfirmarEmail = inputConfirmarEmail.value.trim();
    const valueSenhaInstituicao = inputSenhaInstituicao.value.trim();
    const valueConfirmarSenha = inputConfirmarSenha.value.trim();
    const valueTelefoneInstituicao = inputTelefoneInstituicao.value.trim();
    const valueCnpjInstituicao = inputCnpjInstituicao.value.trim();
    const valueNumeroCartao = inputNumeroCartao.value.trim();
    const valueNomeCartao = inputNomeCartao.value.trim();
    const valueDataValidadeCartao = inputDataValidadeCartao.value.trim();
    const valueCvvCartao = inputCvvCartao.value.trim();

    if (valueConfirmarEmail !== valueEmailInsituicao) {
        
        alert('Os e-mais são diferentes');

        return false;
    }
    else {
        return true;
    }
    
}

const criarInstituicao = () => {
    console.log('CRIAR INSTITUÇÃO');
    validarCampos();
}
