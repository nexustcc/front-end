"use strict"

const showModalEditarAluno = () =>{
    document.querySelector(".modal-editar-aluno").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-editar-aluno").style.height = "60vh";
}

const exitModalEditarAluno = () =>{
    document.querySelector(".modal-editar-aluno").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

const showModalCriarAlunoGrupo = () =>{
    document.querySelector(".modal-criar-aluno-grupo").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-criar-aluno-grupo").style.height = "60vh";
}

const exitModalCriarAlunoGrupo = () =>{
    document.querySelector(".modal-criar-aluno-grupo").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

const showModalAddProfessorGrupo = () =>{
    document.querySelector(".modal-add-professor-grupo").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-add-professor-grupo").style.height = "40vh";
}

const exitModalAddProfessorGrupo = () =>{
    document.querySelector(".modal-add-professor-grupo").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

const showModalExcluirUsuarioGrupo = () =>{
    document.querySelector(".modal-editar-aluno").style.display = "none";
    document.querySelector(".modal-excluir-usuario-grupo").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

const exitModalExcluirUsuarioGrupo = () =>{
    document.querySelector(".modal-excluir-usuario-grupo").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}