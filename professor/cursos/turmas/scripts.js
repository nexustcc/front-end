"use strict";

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
    document.querySelector(".modal-add-membros").style.display = "flex";
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
};

const exitModalCriarGrupo = () => {
    document.querySelector(".modal-criar-grupo").style.display = "none";
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