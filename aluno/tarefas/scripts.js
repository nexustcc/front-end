"use strict";

let tiposTarefa = document.querySelectorAll(".header ul li");
const tarefaIndividual = document.getElementById('tarefa-individual');
const tarefaGeral = document.getElementById('tarefa-geral');
const divTarefaIndividual = document.querySelector('.container-geral');
const divTarefaGeral = document.querySelector('.container-geral-tarefas-gerais');

tiposTarefa.forEach((tipoTarefa) => {
    tipoTarefa.addEventListener("click", () => {
        tiposTarefa.forEach((tipoTarefa) => {
            tipoTarefa.classList.remove("ativo");
        });
        tipoTarefa.classList.add("ativo");
    });
});

tarefaIndividual.addEventListener('click', function(){

    divTarefaGeral.style.display = 'none';
    divTarefaIndividual.style.display = 'flex';
})

tarefaGeral.addEventListener('click', function(){
    console.log('a')
    divTarefaIndividual.style.display = 'none';
    divTarefaGeral.style.display = 'flex';
    
})

const showModalCriarTopico = () => document.querySelector('.modal-add-topico').style.display = 'flex';

const exitModalCriarTopico = () => document.querySelector('.modal-add-topico').style.display = 'none';

const showModalCriarTarefa = () => {}

const exitModalCriarTarefa = () => {}

const showModalInfosTarefa = () => {}

const exitModalInfosTarefa = () => {}

const alterarStatus = (div) => {}

const showModalOpcoesTopico = () => {

    let iconOpcoesTopico = document.getElementById('iconOpcoesTopico');
    let modalOpcoesTopicos = document.getElementById('modalOpcoesTopico1');

    if (iconOpcoesTopico.src == 'http://127.0.0.1:5500/aluno/tarefas/img/icon-options.svg') {
        iconOpcoesTopico.src = 'img/icon-x.svg';
    } else {
        iconOpcoesTopico.src = 'img/icon-options.svg';
    } 

    if (modalOpcoesTopicos.style.display == 'flex') {
        modalOpcoesTopicos.style.display = 'none';
    } else {
        modalOpcoesTopicos.style.display = 'flex';
    }

    if (document.getElementById('modalAlterarCorTopico1').style.display == 'flex') {
        document.getElementById('modalAlterarCorTopico1').style.display = 'none';
    }
};

const showModalAlterarCorTopico = () => {
    let modalAlterarCor = document.getElementById('modalAlterarCorTopico1');

    if (modalAlterarCor.style.display == 'flex') {
        modalAlterarCor.style.display = 'none';
    } else {
        modalAlterarCor.style.display = 'flex';
    }
}

const showModalOpcoesTarefa = () => {

    let iconOpcoesTarefa = document.getElementById('iconOpcoesTarefa1');
    let modalOpcoesTarefa = document.getElementById('modalOpcoesTarefa1');

    if (iconOpcoesTarefa.src == 'http://127.0.0.1:5500/aluno/tarefas/img/icon-options.svg') {
        iconOpcoesTarefa.src = 'img/icon-x.svg';
    } else {
        iconOpcoesTarefa.src = 'img/icon-options.svg';
    } 

    if (modalOpcoesTarefa.style.display == 'flex') {
        modalOpcoesTarefa.style.display = 'none';
    } else {
        modalOpcoesTarefa.style.display = 'flex';
    }    

    if (document.getElementById('modalAlterarCorTarefa1').style.display == 'flex') {
        document.getElementById('modalAlterarCorTarefa1').style.display = 'none';
    }
}

const showModalAlterarCorTarefa = () => {
    let modalAlterarCorTarefa = document.getElementById('modalAlterarCorTarefa1');

    
    if (modalAlterarCorTarefa.style.display == 'flex') {
        modalAlterarCorTarefa.style.display = 'none';
    } else {
        modalAlterarCorTarefa.style.display = 'flex';
    }
}

const showCheckboxes = () => {
    let checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

let liExcluirTopico = document.getElementById('liExcluirTopico1');
liExcluirTopico.addEventListener('click', () => console.log('Excluir Tópico 1'));

