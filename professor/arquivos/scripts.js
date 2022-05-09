'use strict'

const imgAcoes = document.querySelector('.imgAcoes');
const iconEditar = document.getElementById('editarPastaArquivo');
const iconExcluir = document.getElementById('excluirPastaArquivo');

imgAcoes.addEventListener('click', function(){

    imgAcoes.style.display = 'none';
    iconEditar.style.display = 'flex';
    iconExcluir.style.display = 'flex';
})