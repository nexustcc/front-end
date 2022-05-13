"use strict";

let localStorageUser = [];

const exibirDados = (aluno) => {
    const imgAluno = document.getElementById("imgPerfil");

    if (aluno.foto == null || aluno.foto == "uploads/fotopadrao.svg") {
        imgAluno.src = "http://localhost:3000/uploads/fotopadrao.svg";
    } else {
        imgAluno.src = `http://localhost:3000/${aluno.foto}`;
    }

    document.getElementById("nome").value = aluno.usuario.nome;
    document.getElementById("email").value = aluno.usuario.email;
    document.getElementById("senha").value = aluno.usuario.senha;

    document.getElementById("button-editar").addEventListener("click", () => {
        window.location.href = "./editar/";
    });
};

const getInfoAluno = async () => {
    const url = `http://localhost:3000/aluno/listarAluno/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const aluno = await dados.json();
    exibirDados(aluno.aluno[0]);
};

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "aluno") {
            getInfoAluno();
            document.getElementById("nomeAluno").innerHTML = localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "professor":
                    window.location.href = "../../professor/perfil/index.html";
                    break;

                case "instituição":
                    window.location.href = "../../instituicao/index.html";
                    break;

                case "avaliador":
                    window.location.href = "../../home/index.html";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../home/index.html";
            }
        }
    } else {
        window.location.href = "../../home/index.html";
    }
};

window.onload = checkLogin();