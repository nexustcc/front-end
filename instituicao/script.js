"use strict";

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
    document.getElementById("input_email_institucional").value =
        instituicao.usuario.email;
    document.getElementById("nome_instituicao").value = instituicao.usuario.nome;
    document.getElementById("cnpj_instituicao").value = instituicao.cnpj;
    document.getElementById("telefone_instituicao").value = instituicao.telefone;
    document.getElementById("senha_instituicao").value =
        instituicao.usuario.senha;
}

async function getInfoInstituicao() {
    const idInstituicao = 3;

    const url = `http://localhost:3000/instituicao/listarInstituicao/${idInstituicao}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const instituicao = await dados.json();
    exibirDados(instituicao.instituicao[0]);
}

async function excluirConta() {
    let idInstituicao = 3;

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
            `http://localhost:3000/instituicao/deletarInstituicao/${idInstituicao}`,
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
                // log-out
                window.location.href = "../home";
            }
        });
}

window.onload = getInfoInstituicao();