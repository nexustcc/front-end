"use strict";

const turma = document.getElementById("turma");

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
    document.getElementById("modal-form").reset();
}

function deletarCampo() {
    if (document.getElementById("tipo-select").value == "3") {
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#grupo").style.display = "flex";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "flex";
        document.querySelector("#grupo-aluno").style.display = "none";
    } else if (document.getElementById("tipo-select").value == "2") {
        document.querySelector("#turma-aluno").style.display = "flex";
        document.querySelector("#curso-aluno").style.display = "flex";
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#curso").style.display = "none";
        document.querySelector("#grupo").style.display = "none";
        document.querySelector("#grupo-aluno").style.display = "flex";
    } else if (document.getElementById("tipo-select").value == "1") {
        document.querySelector("#turma").style.display = "flex";
        document.querySelector("#grupo").style.display = "none";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#grupo-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "flex";
    } else {
        document.querySelector("#turma").style.display = "flex";
        document.querySelector("#grupo").style.display = "flex";
    }
}

function disableSelected() {
    if (document.getElementById("tipo-select").value == "selected") {
        document.getElementById("input-curso").disabled = true;
        document.getElementById("input-turma").disabled = true;
    } else {
        document.getElementById("input-curso").disabled = false;
        document.getElementById("input-turma").disabled = false;
    }
}