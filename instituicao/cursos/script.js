"use strict"

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

function showModalExcluir() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";
}

function exitModalExcluir() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-excluir").style.display = "none";
}

document.getElementById("terceiro_botao")
    .addEventListener("click", showModal);

