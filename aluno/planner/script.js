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

var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

function tarefasGerais() {
    document.querySelector(".container-topicos").style.display = "none";
    document.querySelector(".container-topicos2").style.display = "flex";
}

function minhasTarefas() {
    document.querySelector(".container-topicos").style.display = "flex";
    document.querySelector(".container-topicos2").style.display = "none";
}

var kebab = document.querySelector(".kebab"),
    middle = document.querySelector(".middle"),
    cross = document.querySelector(".cross"),
    dropdown = document.querySelector(".dropdown");

kebab.addEventListener("click", function () {
    middle.classList.toggle("active");
    cross.classList.toggle("active");
    dropdown.classList.toggle("active");
});

var kebab2 = document.querySelector(".kebab2"),
    middle2 = document.querySelector(".middle2"),
    cross2 = document.querySelector(".cross2"),
    dropdown2 = document.querySelector(".dropdown2");

// let liAlterarCorTarefa = document.querySelector('#alterarCorTarefa');
// let menuDropdownAlterarCor = document.querySelector('#child-menu');

// liAlterarCorTarefa.addEventListener('click', function(){

//     menuDropdownAlterarCor.style.display = 'flex';
// })

kebab2.addEventListener("click", function () {
    middle2.classList.toggle("active");
    cross2.classList.toggle("active");
    dropdown2.classList.toggle("active");

});

function showModal() {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showModalTarefaGeral() {
    document.querySelector(".modal-tarefa-geral").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModalTarefaGeral() {
    document.querySelector(".modal-tarefa-geral").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}