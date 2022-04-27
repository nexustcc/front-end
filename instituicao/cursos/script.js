"use strict";

let localStorageUser = [];

let nomeCurso

function showModal() {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showModalEditar(idCurso, nomeCurso) {
    document.querySelector(".modal-editar").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";

    console.log(idCurso)

    let valorInputEditar = document.getElementById('inputEditarNomeCurso')
    valorInputEditar.value = nomeCurso

    document.getElementById("terceiro_botao").onclick = () => editarCurso(idCurso, valorInputEditar);
}

function exitModalEditar() {
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showModalCurso() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-curso").style.display = "flex";
}

function exitModalCurso() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-curso").style.display = "none";
}

function showModalExcluir(idCurso) {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";

    document
        .getElementById("quarto_botao_confirmar")
        .addEventListener("click", () => {
            deletarCurso(idCurso);
        });
}

function exitModalExcluir() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-excluir").style.display = "none";
}

async function turmasCurso(idCurso) {
    window.location.href = `turmas/index.html?idCurso=${idCurso}`;
}

function exibirDados(cursos) {
    const container = document.getElementById("ul_container");

    for (var i = 0; i < cursos.length; i++) {
        const curso = document.createElement("li");
        curso.classList = "list-group-item li";
        curso.id = "li";

        nomeCurso = cursos[i].nome

        curso.innerHTML += `
            <div id="icone">
                <p class="curso">Curso:</p>
                <img id="book" src="./img/books.svg" alt="book" />
                <p class="nome">${cursos[i].nome}</p>
            </div>
            <div class="button">
                <button class="terceiro_botao" onclick="turmasCurso(${cursos[i].idCurso})">TURMAS EXISTENTES NO CURSO</button>
                <button type="button" onclick='showModalEditar(${cursos[i].idCurso}, "${nomeCurso.toString()}")' class="terceiro" id="primeiro_botao">EDITAR</button>
                <button onclick="showModalExcluir(${cursos[i].idCurso})" id="quarto_botao">EXCLUIR</button>
            </div>
        `;

        container.appendChild(curso);
    }
}

const exibirDadosPesquisa = (cursos) => {
    const htmlString = cursos
        .map((cursos) => {
            return `
        <li class="list-group-item li" id="li">
            <div id="icone">
                <p class="curso">Curso:</p>
                <img id="book" src="./img/books.svg" alt="book" />
                <p class="nome">${cursos.nome}</p>
            </div>
            <div class="button">
                <button class="terceiro_botao" onclick="turmasCurso(${cursos.nome})>TURMAS EXISTENTES NO CURSO</button>
                <button type="button" onclick="showModalEditar(${cursos.idCurso})" class="terceiro" id="primeiro_botao">EDITAR</button>
                <button onclick="showModalExcluir(${cursos.idCurso})" id="quarto_botao">EXCLUIR</button>
            </div> 
        </li>`;
        })
        .join("");
    document.getElementById("ul_container").innerHTML = htmlString;
};

const searchBar = document.getElementById("inputBuscarCurso");

let cursos = [];
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    const cursosFiltrados = cursos.cursos.filter((curso) => {
        return curso.nome.toLowerCase().includes(searchString);
    });
    exibirDadosPesquisa(cursosFiltrados);
});

async function getArrayCursos() {
    const url = `http://localhost:3000/curso/listarCursos/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    cursos = await dados.json();
    exibirDados(cursos.cursos);
}

async function cadastrarCurso(nome) {
    event.preventDefault();

    const cadastrarCurso = {
        nome: document.getElementById("inputCriarCurso").value.toString(),
    };

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastrarCurso),
    };

    fetch(
            `http://localhost:3000/curso/cadastrarCurso/${localStorageUser.idTipo}`,
            config
        )
        .then((res) => res.json())
        .then(() => (window.location.href = "./index.html"));
}

async function editarCurso(idCurso, nomeCurso) {
    event.preventDefault();

    const editarCurso = {
        nome: nomeCurso
    };

    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editarCurso),
    };

<<<<<<< Updated upstream
    fetch(`http://localhost:3000/curso/editarCurso/${idCurso}`, config)
=======
    fetch(
            `http://localhost:3000/curso/editarCurso/${localStorageUser.idTipo}`,
            config
        )
>>>>>>> Stashed changes
        .then((res) => res.json())
        .then(() => (window.location.href = "./index.html"));
}

async function deletarCurso(idCurso) {
    fetch(`http://localhost:3000/curso/deletarCurso/${idCurso}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => (window.location.href = "./index.html"));
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../home";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "instituição") {
            getArrayCursos();
            document.getElementById("nomeInstituicao").innerHTML =
                localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "professor":
                    window.location.href = "../professor/perfil/index.html";
                    break;

                case "aluno":
                    window.location.href = "../aluno/perfil/index.html";
                    break;

                case "avaliador":
                    window.location.href = "../home/index.html";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../home/index.html";
            }
        }
    } else {
        window.location.href = "../home/login/index.html";
    }
};

window.onload = checkLogin();