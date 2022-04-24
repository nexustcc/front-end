"use strict";

let localStorageUser = [];

function showModal() {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}
document.getElementById("terceiro_botao").addEventListener("click", showModal);

function exibirDados(instituicao) {
    document.getElementById("input_email_institucional").value = instituicao.usuario.email;
    document.getElementById("nome_instituicao").value = instituicao.usuario.nome;
    document.getElementById("cnpj_instituicao").value = instituicao.cnpj;
    document.getElementById("telefone_instituicao").value = instituicao.telefone;
    document.getElementById("senha_instituicao").value = instituicao.usuario.senha;
}

async function getInfoInstituicao() {
    const url = `http://localhost:3000/instituicao/listarInstituicao/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const instituicao = await dados.json();
    exibirDados(instituicao.instituicao[0]);
}

async function excluirConta() {
    let inputSenhaInstituicao = document.getElementById("senhaInstituicao");

    const senha = {
        senha: inputSenhaInstituicao.value,
    };

    console.log(senha);

    const config = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(senha),
    };

    fetch(
            `http://localhost:3000/instituicao/deletarInstituicao/${localStorageUser.idTipo}`,
            config
        )
        .then((res) => res.json())
        .then((data) => {
            let response = data[Object.keys(data)[0]];

            if (response === "senha incorreta") {
                inputSenhaInstituicao.classList.remove("container");
                inputSenhaInstituicao.classList.add("erro");
                document.getElementById("p-senha-incorreta").style.display = "flex";
            } else {
                localStorage.removeItem('localStorage.user')
                window.location.href = "../home";
            }
        });
}

const checkLogin = () => {
    if(localStorage.user != ''){
        localStorageUser = JSON.parse(localStorage.user)
        if(localStorageUser.tipo == 'instituição'){    
            getInfoInstituicao()
        } 
        else{
            switch (localStorageUser.tipo) {
                case 'professor':
                    window.location.href = '../professor/'
                  break;
      
                case 'aluno':
                    window.location.href = '../professor/'
                  break;
      
                case 'avaliador':
                  alert('O acesso dos Avaliadores a plataforma é feito pelo APP, para baixar entre em ...')
                  break;
      
                default:
                    window.location.href = '../home/'
              }
        }
    } else{
        window.location.href = '../home/login/index.html'
    }
}

window.onload = checkLogin();