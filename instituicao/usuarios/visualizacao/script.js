"use strict"

let tiposUsuario = document.querySelectorAll(".tipo_usuario ul li");

tiposUsuario.forEach((tipoUsuario) => {
    tipoUsuario.addEventListener("click", () => {
        tiposUsuario.forEach((tipoUsuario) => {
            tipoUsuario.classList.remove("ativo");
        })
        tipoUsuario.classList.add("ativo");
    })
})

function showModal() {
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function changeModalEditar() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitChangeModalEditar() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-editar").style.display = "none";
}

function changeModalExcluir() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";
}

function exitchangeModalExcluir() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-excluir").style.display = "none";
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
