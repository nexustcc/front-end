'use-strict'

function exibirDados(instituicao) {
    document.getElementById('input_email_institucional').value = instituicao.usuario.email;
    document.getElementById('nome_instituicao').value = instituicao.usuario.nome;
    document.getElementById('cnpj_instituicao').value = instituicao.cnpj;
    document.getElementById('telefone_instituicao').value = instituicao.telefone;
    document.getElementById('senha_instituicao').value = instituicao.usuario.senha;
}

async function getInfoInstituicao() {
    const idInstituicao = 9;

    const url = `http://localhost:3000/instituicao/listarInstituicao/${idInstituicao}`

    fetch (url).then(response => response.json)
    const dados = await fetch(url)
    const instituicao = await dados.json()
    exibirDados(instituicao.instituicao[0])
};

async function editarInstituicao(){
    event.preventDefault();

    const idInstituicao = 9;

    const instituicao = {
        "nome": document.getElementById('nome_instituicao').value,
        "email": document.getElementById('input_email_institucional').value,
        "senha": document.getElementById('senha_instituicao').value,
        "cnpj": document.getElementById('cnpj_instituicao').value,
        "telefone": document.getElementById('telefone_instituicao').value
    }

    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(instituicao)
    }
    
    fetch(`http://localhost:3000/instituicao/editarInstituicao/${idInstituicao}`, config)
        .then(() => window.location.href = "../../index.html")
}

window.onload = getInfoInstituicao();