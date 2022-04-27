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

function resetForm() {
    document.getElementById("modal-form").reset();
}

function showModal() {
    document.querySelector(".modal-cadastro").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal-cadastro").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showModalListagem() {
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".modal-listagem").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}


function exitModalListagem() {
    document.querySelector(".modal-listagem").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function changeModalEditar() {
    document.querySelector(".modal-listagem").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitChangeModalEditar() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-editar").style.display = "none";
}

function changeModalExcluir() {
    document.querySelector(".modal-listagem").style.display = "none";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";
}

function exitchangeModalExcluir() {
    document.querySelector(".modal-listagem").style.display = "none";
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

function deletarCampo() {
    if (document.getElementById("tipo-select-edit").value == "3") {
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#grupo").style.display = "flex";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "flex";
    } else if (document.getElementById("tipo-select-edit").value == "2") {
        document.querySelector("#turma-aluno").style.display = "flex";
        document.querySelector("#curso-aluno").style.display = "flex";
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#curso").style.display = "none";
        document.querySelector("#grupo").style.display = "none";
    } else {
        document.querySelector("#turma").style.display = "flex";
        document.querySelector("#grupo").style.display = "none";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "flex";
    }
}

function deletarCampoCadastro() {
    if (document.getElementById("tipo-select-criar").value == "3") {
        document.querySelector("#turma-aluno-cadastro").style.display = "none";
        document.querySelector("#curso-aluno-cadastro").style.display = "none";
        document.querySelector("#grupo-aluno-cadastro").style.display = "none";
        document.querySelector("#turma-cadastro").style.display = "none";
        document.querySelector("#grupo-cadastro").style.display = "flex";
        document.querySelector("#curso-cadastro").style.display = "flex";
    } else if (document.getElementById("tipo-select-criar").value == "2") {
        document.querySelector("#turma-aluno-cadastro").style.display = "flex";
        document.querySelector("#curso-aluno-cadastro").style.display = "flex";        
        document.querySelector("#grupo-aluno-cadastro").style.display = "flex";
        document.querySelector("#turma-cadastro").style.display = "none";
        document.querySelector("#curso-cadastro").style.display = "none";
        document.querySelector("#grupo-cadastro").style.display = "none";
    } else if (document.getElementById("tipo-select-criar").value == "1") {
        document.querySelector("#turma-cadastro").style.display = "flex";
        document.querySelector("#grupo-cadastro").style.display = "none";
        document.querySelector("#turma-aluno-cadastro").style.display = "none";
        document.querySelector("#curso-aluno-cadastro").style.display = "none";
        document.querySelector("#grupo-aluno-cadastro").style.display = "none";
        document.querySelector("#curso-cadastro").style.display = "flex";
    } else {
        document.querySelector("#turma").style.display = "flex";
        document.querySelector("#grupo").style.display = "flex";
    }
}

function disableSelected() {
    if (document.getElementById("tipo-select-criar").value == "selected") {
        document.getElementById("input-curso").disabled = true;
        document.getElementById("input-turma").disabled = true;
    } else {
        document.getElementById("input-curso").disabled = false;
        document.getElementById("input-turma").disabled = false;
    }
}

const form = document.getElementById('modal-form');
const salvar = document.getElementById('button_salvar')
