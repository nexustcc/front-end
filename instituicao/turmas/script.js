"use strict"

function showModal() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".modal-add-membros").style.display = "none";
    document.querySelector(".modal-add-membros-turma-criada").style.display = "none"
}

function exitModal() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalTrocarTurma() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-trocar-turma").style.display = "flex";
    document.querySelector(".modal-membros").style.display = "none";
}

function exitModalTrocarTurma() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-trocar-turma").style.display = "none";
    document.querySelector(".modal-membros").style.display = "flex";
}

function showModalGrupos() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-grupos").style.display = "flex";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function exitModalGrupos() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalExcluir() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";
}

function exitModalExcluir() { 
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-excluir").style.display = "none";
}

function showModalTurma() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "flex";
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".modal-membros").style.display = "none";
}

function exitModalTurma() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalAddMembros() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "flex";
}

function exitModalAddMembros() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-add-membro").style.display = "none";
}

function showModalAddMembrosTurmaCriada() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-membros").style.display = "none";
    document.querySelector(".modal-add-membros-turma-criada").style.display = "flex";
}

function exitModalAddMembrosTurmaCriada() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-add-membros-turma-criada").style.display = "none";
}

function showModalEditar() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
}

function exitModalEditar() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-editar").style.display = "none";
}


function showModalMembros() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-membros").style.display = "flex";
    document.querySelector(".modal-add-membros-turma-criada").style.display = "none"
}

function showModalEditar() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
}

function resetForm() {
    document.getElementById("modal").reset();
}