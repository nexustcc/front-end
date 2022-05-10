'use strict'

const imgAcoes = document.querySelector('.imgAcoes');
const iconEditar = document.getElementById('editarPastaArquivo');
const iconExcluir = document.getElementById('excluirPastaArquivo');
const iconFecharOpcoes = document.getElementById('fecharMenuOpcoes');

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