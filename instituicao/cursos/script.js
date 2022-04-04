"use strict";

function showModal() {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showModalEditar() {
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

function exitModalExcluir(idCurso) {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-excluir").style.display = "none";
}

function exibirDados(cursos) {
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
            <button onclick="showModalEditar()" class="terceiro" id="primeiro_botao">
                EDITAR
            </button>
            <button onclick="showModalExcluir()" id="quarto_botao">
                EXCLUIR
            </button>
        </div>
        `;

        container.appendChild(curso);
    }
}

async function getArrayCursos() {
    const url = `http://localhost:3000/curso/listarCursos/3`;

    fetch(url)
        .then((response) => response.json)
        .then(console.log);
    const dados = await fetch(url);
    const cursos = await dados.json();
    exibirDados(cursos.cursos);
}

window.onload = getArrayCursos();