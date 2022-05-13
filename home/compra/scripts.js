"use strict";

let tiposPlano = document.querySelectorAll(".tipo_plano ul li");
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

