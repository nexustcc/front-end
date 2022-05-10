'use strict'

const imgAcoes = document.querySelector('.imgAcoes');
const iconEditar = document.getElementById('editarPastaArquivo');
const iconExcluir = document.getElementById('excluirPastaArquivo');
const iconFecharOpcoes = document.getElementById('fecharMenuOpcoes');

const modalExcluirPastaArquivo = document.getElementById('modal-excluir-arquivo');
const background = document.querySelector('.bg');

imgAcoes.addEventListener('click', function(){

    imgAcoes.style.display = 'none';
    iconEditar.style.display = 'flex';
    iconExcluir.style.display = 'flex';
    iconFecharOpcoes.style.display = 'flex';
})

iconFecharOpcoes.addEventListener('click', function(){

    imgAcoes.style.display = 'flex';
    iconEditar.style.display = 'none';
    iconExcluir.style.display = 'none';
    iconFecharOpcoes.style.display = 'none';
})

iconExcluir.addEventListener('click', function(){

    background.style.display = 'flex';
    modalExcluirPastaArquivo.style.display = 'flex';
})

const exitModalExcluirPastaArquivo = () =>{
    background.style.display = 'none';
    modalExcluirPastaArquivo.style.display = 'none';
}