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


var kebab = document.querySelector('.kebab'),
    middle = document.querySelector('.middle'),
    cross = document.querySelector('.cross'),
    dropdown = document.querySelector('.dropdown');

    kebab.addEventListener('click', function() {
    middle.classList.toggle('active');
    cross.classList.toggle('active');
    dropdown.classList.toggle('active');
})

var kebab2 = document.querySelector('.kebab2'),
    middle2 = document.querySelector('.middle2'),
    cross2 = document.querySelector('.cross2'),
    dropdown2 = document.querySelector('.dropdown2');

    kebab2.addEventListener('click', function() {
    middle2.classList.toggle('active');
    cross2.classList.toggle('active');
    dropdown2.classList.toggle('active');
})