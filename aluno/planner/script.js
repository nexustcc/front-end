"use strict";

let tiposUsuario = document.querySelectorAll(".tipo_usuario ul li");

tiposUsuario.forEach((tipoUsuario) => {
    tipoUsuario.addEventListener("click", () => {
        tiposUsuario.forEach((tipoUsuario) => {
            tipoUsuario.classList.remove("ativo");
        });
        tipoUsuario.classList.add("ativo");
    });
});

function showModal() {
    document.querySelector(".modal-add-tarefa").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal-add-tarefa").style.display = "none";
}


document.querySelector('.botao-adicionar').addEventListener("click", showModal)
document.querySelector('.botao-adicionar').addEventListener("click", showModal)