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

    fetch(`http://localhost:3000/curso/listarCurso/${idCurso}`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("inputEditarNomeCurso").value = data.nome[0].nome;
        });

    document.getElementById("terceiro_botao").onclick = () =>
        editarCurso(idCurso);
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

function exibirDados(cursos) {
    const container = document.getElementById("ul_container");

    for (var i = 0; i < cursos.length; i++) {
        var cursosJson = {
            idCurso: cursos[i].idCurso,
            nome: cursos[i].nome,
        };

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
            <button>TURMAS EXISTENTES NO CURSO</button>
            <button type="button" onclick="showModalEditar(${cursos[i].idCurso})" class="terceiro" id="primeiro_botao">
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

async function getArrayCursos() {
    const url = `http://localhost:3000/curso/listarCursos/3`;

    fetch(url)
        .then((response) => response.json)
        .then(console.log);
    const dados = await fetch(url);
    const cursos = await dados.json();
    exibirDados(cursos.cursos);
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

async function editarCurso(idCurso) {
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

    fetch(`http://localhost:3000/curso/editarCurso/${idCurso}`, config)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .then(() => (window.location.href = "./index.html"));
}

async function deletarCurso(idCurso) {
    fetch(`http://localhost:3000/curso/deletarCurso/${idCurso}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .then(() => (window.location.href = "./index.html"));
}

window.onload = getArrayCursos();