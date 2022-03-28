"use strict"

function showModal() {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

document.getElementById("terceiro_botao")
    .addEventListener("click", showModal);




function exibirDados(instituicao) {
    document.getElementById('input_email_institucional').value = instituicao.usuario.email;
    document.getElementById('nome_instituicao').value = instituicao.usuario.nome;
    document.getElementById('cnpj_instituicao').value = instituicao.cnpj;
    document.getElementById('telefone_instituicao').value = instituicao.telefone;
    document.getElementById('senha_instituicao').value = instituicao.usuario.senha;
}

async function getInfoInstituicao() {
    const url = `http://localhost:3000/instituicao/listarInstituicao/8`

    fetch (url).then(response => response.json).then(console.log)
    const dados = await fetch(url)
    const instituicao = await dados.json()
    exibirDados(instituicao.instituicao[0])
};

window.onload = getInfoInstituicao();
