"use strict";

let localStorageUser = [];

let tiposUsuario = document.querySelectorAll(".tipo_usuario ul li");

let divNovaTarefa = document.querySelector('.adicionar-tarefa');
let btnAdicionarTarefa = document.querySelector('.botao-adicionar');

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

function caixa1Flex(){
    document.querySelector("#div1").style.display = "flex";
}

function caixa2Flex(){
    document.querySelector("#div2").style.display = "flex";
}

function showCaixa1Flex(){
    document.querySelector("#div1").style.display = "none";
}

function showCaixa2Flex(){
    document.querySelector("#div2").style.display = "none";
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

// const logout = () => {
//     localStorage.removeItem("user");
//     window.location.href = "../../home/login/";
// };

// const checkLogin = () => {
//     if (localStorage.user != undefined) {
//         localStorageUser = JSON.parse(localStorage.user);
//         if (localStorageUser.tipo == "aluno") {
//             getInfoAluno();
//             document.getElementById("nomeAluno").innerHTML = localStorageUser.nome;
//         } else {
//             switch (localStorageUser.tipo) {
//                 case "professor":
//                     window.location.href = "../../professor/perfil/index.html";
//                     break;

//                 case "instituição":
//                     window.location.href = "../../instituicao/index.html";
//                     break;

//                 case "avaliador":
//                     window.location.href = "../../home/index.html";
//                     alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
//                     break;

//                 default:
//                     window.location.href = "../home/index.html";
//             }
//         }
//     } else {
//         window.location.href = "../../home/index.html";
//     }
// };

// window.onload = checkLogin();