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

function showModalExcluirUsuario() {
    document.querySelector("#modalInfoUsuario").style.display = "none";
    document.querySelector(".modal-excluir-usuario").style.display = "flex";
}

function exitModalExcluirUsuario() {
    document.querySelector(".modal-excluir-usuario").style.display = "none";
    document.querySelector("#modalInfoUsuario").style.display = "flex";
}

function exitModalsUsuario() {
    document.querySelector(".modal-excluir-usuario").style.display = "none";
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector("#modalInfoUsuario").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showModalCriarUsuario() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-criar").style.display = "flex";
}

function exitModalCriarUsuario() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-criar").style.display = "none";
}

function deletarCampo() {
    if (document.getElementById("tipo-select-edit").value == "3") {
        document.querySelector("#turma").style.display = "flex";
        document.querySelector("#grupo").style.display = "flex";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#grupo-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "none";
        document.querySelector("#modal-editar").style.height = "55vh";
    } else if (document.getElementById("tipo-select-edit").value == "2") {
        document.querySelector("#turma-aluno").style.display = "flex";
        document.querySelector("#curso-aluno").style.display = "flex";
        document.querySelector("#grupo-aluno").style.display = "flex";
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#curso").style.display = "none";
        document.querySelector("#grupo").style.display = "none";
        document.querySelector("#modal-editar").style.height = "65vh";
    } else {
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#grupo").style.display = "none";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#grupo-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "none";
        document.querySelector("#modal-editar").style.height = "50vh";
    }
}

function alterarInputTipoUsuario() {
    if (document.getElementById("tipo-select-criar").value == "3") {
        document.querySelector("#turmaNovoUsuario").style.display = "flex";
        document.querySelector("#grupoNovoUsuario").style.display = "flex";
        document.querySelector("#turma-novo-aluno").style.display = "none";
        document.querySelector("#curso-novo-aluno").style.display = "none";
        document.querySelector("#grupo-novo-aluno").style.display = "none";
        document.querySelector("#cursoNovoUsuario").style.display = "none";
        document.querySelector("#modal-criar").style.height = "55vh";
    } else if (document.getElementById("tipo-select-criar").value == "2") {
        document.querySelector("#turma-novo-aluno").style.display = "flex";
        document.querySelector("#curso-novo-aluno").style.display = "flex";
        document.querySelector("#grupo-novo-aluno").style.display = "flex";
        document.querySelector("#turmaNovoUsuario").style.display = "none";
        document.querySelector("#cursoNovoUsuario").style.display = "none";
        document.querySelector("#grupoNovoUsuario").style.display = "none";
        document.querySelector("#modal-criar").style.height = "65vh";
    } else {
        document.querySelector("#turmaNovoUsuario").style.display = "none";
        document.querySelector("#grupoNovoUsuario").style.display = "none";
        document.querySelector("#turma-novo-aluno").style.display = "none";
        document.querySelector("#curso-novo-aluno").style.display = "none";
        document.querySelector("#grupo-novo-aluno").style.display = "none";
        document.querySelector("#cursoNovoUsuario").style.display = "none";
        document.querySelector("#modal-criar").style.height = "50vh";
    }
}