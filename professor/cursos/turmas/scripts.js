"use strict";

let localStorageUser = [];

let idCurso;

let urlSplit = window.location.href.split(["?"])

if(urlSplit[1] == '' || urlSplit[1] == undefined){
    //window.location.href = '../index.html'

    console.log(urlSplit)
} else{
    idCurso = urlSplit[1].split(["="])[1]
}

let nomeCurso;

function showModal() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".modal-add-membros").style.display = "none";
    document.querySelector(".modal-add-membros-turma-criada").style.display =
        "none";
}

function exitModal() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalGrupos() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-grupos").style.display = "flex";
}

function exitModalGrupos() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "none";
}

function showModalTurma() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "flex";
    document.querySelector(".modal-membros").style.display = "none";
}

function exitModalTurma() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
}

function showModalMembros() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-membros").style.display = "flex";
}

function resetForm() {
    document.getElementById("modal").reset();
}

const showModalCriarGrupo = () => {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-criar-grupo").style.display = "flex";
    document.querySelector(".modal-membros").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "none";
};

const exitModalCriarGrupo = () => {
    document.querySelector(".modal-criar-grupo").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "flex";
};

function showModalExcluirGrupo() {
    document.querySelector(".modal-grupos").style.display = "none";
    document.querySelector(".modal-excluir-grupo").style.display = "flex";
}

function exitModalExcluirGrupo() {
    document.querySelector(".modal-excluir-grupo").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "flex";
}

const excluirGrupo = (idGrupo) => {
    console.log("excluir grupo");
};

const isInputNumber = (evt) => {
    let char = String.fromCharCode(evt.which);
    if (!/[0-9]/.test(char)) {
        evt.preventDefault();
    }
};

const exibirDadosTeste = (turmas) => {
    const container = document.getElementById("turma-container");

    if (turmas.length == 0) {
        const sem_turmas = document.createElement("p");
        sem_turmas.innerHTML = "NENHUMA TURMA CADASTRADA";
        sem_turmas.style.textAlign = "center";
        container.appendChild(sem_turmas);
    } else {
        for (var i = 0; i < turmas.length; i++) {
            const turma = document.createElement("li");
            turma.classList = "list-group-item li";

            turma.innerHTML += `
                    <div class="turma">
                        <p class="turma">Turma:</p>
                        <img class="book" src="./img/icone_turma.svg" alt="book">
                        <p class="nome">${turmas[i].nome}</p>
                    </div>
                    <div class="button">
                        <button onclick="showModalTurma(${turmas[i].idTurma})" class="terceiro_botao">SOBRE A TURMA</button>
                        <button onclick="showModalGrupos(${turmas[i].idTurma})" class="primeiro_botao">GRUPOS DE TCC</button>
                        <button onclick="showModalExcluir(${turmas[i].idTurma})" class="quarto_botao">EXCLUIR</button>
                    </div>
            `;

            container.appendChild(turma);

            const linha = document.createElement("img");
            linha.src = "./img/linha.svg";

            container.appendChild(linha);
        }
    }
};

const exibirDados = (turmas) => {
    const container = document.getElementById("ul_container");

    for (var i = 0; i < turmas.length; i++) {
        const turma = document.createElement("li");
        turma.classList = "list-group-item li";

        turma.innerHTML += `
            <div class="turma">
                <p class="turma">Turma:</p>
                <img class="book" src="./img/icone_turma.svg" alt="book">
                <p class="nome" id="nomeTurmaPrincipal">${turmas[i].nome}</p>
            </div>
            <div class="button">
                <button onclick="showModalTurma()" class="terceiro_botao" id="modalSobreATurma">SOBRE A
                    TURMA</button>
                <button onclick="showModalGrupos()" class="primeiro_botao" id="modalGruposTccTurma">GRUPOS DE
                    TCC</button>
            </div>
        `;

        console.log(turma);

        container.appendChild(turma);
    }
}

const exibirDadosPesquisa = (turmas) => {
    const htmlString = turmas
        .map((turmas) => {
            return `
        <li class="list-group-item li">
            <div class="turma">
                <p class="turma">Turma:</p>
                <img class="book" src="./img/icone_turma.svg" alt="book">
                <p class="nome" id="nomeTurmaPrincipal">${turmas.nome}</p>
            </div>
            <div class="button">
                <button onclick="showModalTurma()" class="terceiro_botao" id="modalSobreATurma">SOBRE A
                    TURMA</button>
                <button onclick="showModalGrupos()" class="primeiro_botao" id="modalGruposTccTurma">GRUPOS DE
                    TCC</button>
            </div>
        </li>`;
        })
        .join("");
    document.getElementById("ul_container").innerHTML = htmlString;
};

const searchBar = document.getElementById("inputBuscarTurmas");

let turmas = [];
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    const turmasFiltradas = turmas.turmas.filter((turma) => {
        return turma.nome.toLowerCase().includes(searchString);
    });
    exibirDadosPesquisa(turmasFiltradas);

});

async function getArrayTurmas() {
    if (idCurso == "" || idCurso == undefined) {
        window.location.href = "../../index.html";
    } else {
        const url = `http://localhost:3000/turma/listarTurmasCurso/${idCurso}`;

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        let turmas = await dados.json();
        exibirDados(turmas.turma);
    }
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "professor") {
            getArrayTurmas();
            document.getElementById("nomeProfessor").innerHTML =
                localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "instituição":
                    window.location.href = "../../instituicao/";
                    break;

                case "aluno":
                    window.location.href = "../../../aluno/perfil/index.html";
                    break;

                case "avaliador":
                    window.location.href = "../../../home/index.html";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../../home/index.html";
            }
        }
    } else {
        window.location.href = "../../../home/login/index.html";
    }
};

window.onload = checkLogin();