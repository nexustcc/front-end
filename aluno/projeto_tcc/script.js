"use strict";

let localStorageUser = [];

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "aluno") {
            getInfoProjeto();
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