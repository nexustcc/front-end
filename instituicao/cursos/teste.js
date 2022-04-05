// O PASSO QUE EU ESTOU TENTANDO CONCLUIR É FAZER O NOME DO CURSO APARECER NO INPUT DE EDITAR,
// EU PRECISO FAZER UM FETCH, POIS EU CONSIGO PEGAR O ID DO CURSO E COM ISSO PRECISO PEGAR O NOME
// - ARTUR

"use strict";

function showModal() {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showModalEditar(idCurso) {
    document.querySelector(".modal-editar").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
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
}

function exitModalExcluir() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-excluir").style.display = "none";
}

async function getArrayCursos() {
    const url = `http://localhost:3000/curso/listarCursos/3`;

    fetch(url)
        .then((response) => response.json)
        .then(console.log);
    const dados = await fetch(url);
    const cursos = await dados.json();
    return cursos.cursos;
}

function exibirDados() {

    let cursos = getArrayCursos;

    console.log(cursos);

    const container = document.getElementById("ul_container");

    for (var i = 0; i < cursos.length; i++) {
        var cursosJson = {
            idCurso: cursos[i].idCurso,
            nome: cursos[i].nome,
        };

        console.log(cursosJson);

        const curso = document.createElement("li");
        curso.classList = "list-group-item li";
        curso.id = "li";

        curso.innerHTML += `
        <div id="icone">
            <p class="curso">Curso:</p>
            <img id="book" src="./img/books.svg" alt="book" />
            <p class="nome">${cursos[i].nome}</p>
        </div>
        <div class="button">
            <button id="terceiro_botao">TURMAS EXISTENTES NO CURSO</button>
            <button onclick="showModalEditar(${cursos[i].idCurso})" class="terceiro" id="primeiro_botao">
                EDITAR
            </button>
            <button onclick="showModalExcluir(${cursos[i].idCurso})" id="quarto_botao">
                EXCLUIR
            </button>
        </div>
        `;

        container.appendChild(curso);
    }
}

async function cadastrarCurso(nome) {
    event.preventDefault();

    const cadastrarCurso = {
        nome: document.getElementById("inputCriarCurso").value.toString(),
    };

    console.log(cadastrarCurso);

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastrarCurso),
    };

    console.log(cadastrarCurso);

    fetch("http://localhost:3000/curso/cadastrarCurso/3", config)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .then(() => (window.location.href = "./index.html"));
}

async function editarCurso(cursos) {
    event.preventDefault();

    const editarCurso = {
        nome: document.getElementById("inputEditarNomeCurso").value.toString(),
    };

    console.log(editarCurso);

    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editarCurso),
    };

    console.log(editarCurso);

    fetch(`http://localhost:3000/curso/editarCurso/${cursos[i].idCurso}`, config)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .then(() => (window.location.href = "./index.html"));
}

window.onload = exibirDados();