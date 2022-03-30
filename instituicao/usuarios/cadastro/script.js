"use strict"

function showModal() {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showModalTurma() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "flex";
    document.querySelector(".modal-membros").style.display = "none";
}

function exitModalTurma() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
}

function showModalMembros() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-membros").style.display = "flex";
}

function showModalEditar() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
}

function resetForm() {
    document.getElementById("modal").reset();
}