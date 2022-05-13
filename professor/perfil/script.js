"use strict";

let localStorageUser = [];

function exibirDados(professor) {
    const imgProfessor = document.getElementById("fotoPerfil");

    if (professor.foto == null || professor.foto == "uploads/fotopadrao.svg") {
        imgProfessor.src = "http://localhost:3000/uploads/fotopadrao.svg";
    } else {
        imgProfessor.src = `http://localhost:3000/${professor.foto}`;
    }

    document.getElementById("input_email_professor").value =
        professor.usuario.email;
    document.getElementById("nome_professor").value = professor.usuario.nome;
    document.getElementById("senha_professor").value = professor.usuario.senha;
}

async function getInfoProfessor() {
    const url = `http://localhost:3000/professor/listarProfessor/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const professor = await dados.json();
    exibirDados(professor.professor[0]);
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "professor") {
            getInfoProfessor();
            document.getElementById("nomeProfessor").innerHTML =
                localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "instituição":
                    window.location.href = "../../instituicao/";
                    break;

                case "aluno":
                    window.location.href = "../../aluno/perfil/";
                    break;

                case "avaliador":
                    window.location.href = "../../home/";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../../home/";
            }
        }
    } else {
        window.location.href = "../../home/login/index.html";
    }
};

window.onload = checkLogin();