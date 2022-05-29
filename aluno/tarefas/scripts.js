"use strict";

let tiposPlano = document.querySelectorAll(".header ul li");
const planoMensal = document.getElementById('plano-mensal');
const planoAnual = document.getElementById('plano-anual');
const divPlanoMensal = document.querySelector('.mensal');
const divPlanoAnual = document.querySelector('.anual');

tiposPlano.forEach((tipoPlano) => {
    tipoPlano.addEventListener("click", () => {
        tiposPlano.forEach((tipoPlano) => {
            tipoPlano.classList.remove("ativo");
        });
        tipoPlano.classList.add("ativo");
    });
});

planoMensal.addEventListener('click', function(){

    divPlanoAnual.style.display = 'none';
    divPlanoMensal.style.display = 'flex';
})

planoAnual.addEventListener('click', function(){

    divPlanoMensal.style.display = 'none';
    divPlanoAnual.style.display = 'flex';
    
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
    let modalOpcoesTopicos = document.getElementById('modalOpcoes1');

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

    if (document.getElementById('modalAlterarCor1').style.display == 'flex') {
        document.getElementById('modalAlterarCor1').style.display = 'none';
    }
};

const showModalALterarCor = () => {
    let modalAlterarCor = document.getElementById('modalAlterarCor1');

    if (modalAlterarCor.style.display == 'flex') {
        modalAlterarCor.style.display = 'none';
    } else {
        modalAlterarCor.style.display = 'flex';
    }
}

let liExcluirTopico = document.getElementById('liExcluirTopico1');
liExcluirTopico.addEventListener('click', () => console.log('Excluir Tópico 1'));

