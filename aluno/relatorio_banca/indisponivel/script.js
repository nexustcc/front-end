"use strict";

let localStorageUser = [];

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../../../home/login";
};

let grupo = [];
async function getArrayGrupo() {
    const url = `http://localhost:3000/aluno/grupoAluno/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    grupo = await dados.json();

    document.getElementById("nomeGrupoAluno").innerHTML =
        grupo.grupo[0].nomeGrupo;
}

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "aluno") {
            getArrayGrupo(), console.log(JSON.stringify(localStorageUser));
        } else {
            switch (localStorageUser.tipo) {
                case "professor":
                    window.location.href = "../../../../professor/perfil/index.html";
                    break;

                case "instituição":
                    window.location.href = "../../../../instituicao/index.html";
                    break;

                case "avaliador":
                    window.location.href = "../../../../home/index.html";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../../../../home/index.html";
            }
        }
    } else {
        window.location.href = "../../../../home/login/index.html";
    }
};

window.onload = checkLogin();