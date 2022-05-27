"use strict";

let localStorageUser = [];

let tiposUsuario = document.querySelectorAll(".tipo_usuario ul li");

let divNovaTarefa = document.getElementsByClassName('modal-add-tarefa');
let btnAdicionarTarefa = document.getElementsByClassName('botao-adicionar');
let btnCancelarNovaTarefa = document.getElementsByClassName('botao-cancelar');

let divNovoTopico = document.getElementsByClassName('modal-add-topico');
let btnAdicionarNovoTopico = document.getElementsByClassName('botao-add-topico');
let btnCancelarNovoTopico = document.getElementsByClassName('botao-cancelar-topico');

let liExcluirTopico = document.querySelector('.liExcluirTopico');
let liExcluirTarefa = document.querySelector('.liExcluirTarefa');
let liDuplicarTarefa = document.querySelector('.liDuplicarTarefa');

let imgProgresso = document.getElementById('imgStatusTarefa1');

liExcluirTopico.addEventListener('click', function() {

    console.log('Excluir tópico');
});

liExcluirTarefa.addEventListener('click', function() {

    console.log('Excluir tarefa');
});

liDuplicarTarefa.addEventListener('click', function() {

    console.log('Duplicar tarefa');
});


for (var a = 0; a < btnAdicionarNovoTopico.length; a++){

    btnAdicionarNovoTopico[a].addEventListener('click', function(){

   for (var b = 0 ; b < divNovoTopico.length; b++) {
       divNovoTopico[b].style.display = 'flex';
       }
   });

};

for (var c = 0; c < btnCancelarNovoTopico.length; c++){

    btnCancelarNovoTopico[c].addEventListener('click', function(){

   for (var d = 0 ; d < divNovoTopico.length; d++) {
       divNovoTopico[d].style.display = 'none';
       }
   });

};

const modalCriarTarefa = (idTopico) => {
    console.log(idTopico)
}

const alterarStatus = (idDiv) => {

    let elementoFilho = idDiv.children[0];
    
    if(elementoFilho.style.width == '0%') {
    
        elementoFilho.style.width = '50%';
    } else if (elementoFilho.style.width == '50%') {

        elementoFilho.style.width = '100%';
    } 

}

// for (var x = 0; x < btnAdicionarTarefa.length; x++){

//      btnAdicionarTarefa[x].addEventListener('click', function(){

//     for (var i = 0 ; i < divNovaTarefa.length; i++) {
//         divNovaTarefa[i].style.display = 'flex';
//         }
//     });

// };

// for (var y = 0; y < btnCancelarNovaTarefa.length; y++){

//     btnCancelarNovaTarefa[y].addEventListener('click', function(){

//    for (var t = 0 ; t < divNovaTarefa.length; t++) {
//        divNovaTarefa[t].style.display = 'none';
//        }
//    });

// };

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












let pontos = document.querySelector(".tresPontos"),
    middle = document.querySelector(".middle"),
    cross = document.querySelector(".cross"),
    dropdown = document.querySelector(".dropdown");

    pontos.addEventListener("click", function () {
    middle.classList.toggle("active");
    cross.classList.toggle("active");
    dropdown.classList.toggle("active");
});






let pontos2 = document.querySelector(".pontos2"),
    middle2 = document.querySelector(".middle2"),
    cross2 = document.querySelector(".cross2"),
    dropdown2 = document.querySelector(".dropdown2");

pontos2.addEventListener("click", function () {
    middle2.classList.toggle("active");
    cross2.classList.toggle("active");
    dropdown2.classList.toggle("active");
});

let altCor = document.querySelector(".liAltCor"),
    cmiddle = document.querySelector(".child-middle"),
    ccross = document.querySelector(".child-cross"),
    cdropdown = document.querySelector(".child-dropdown");

    
function enterLast() {
    document.querySelector(".lastNav").style.display = "flex";
};

function leaveLast() {
    document.querySelector(".lastNav").style.display = "none";
};













function showModal() {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
    console.log('showmodaldadiv')
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