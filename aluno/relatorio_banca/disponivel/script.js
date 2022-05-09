"use strict";

let tiposPlano = document.querySelectorAll(".tipo_plano ul li");

tiposPlano.forEach((tipoPlano) => {
    tipoPlano.addEventListener("click", () => {
        tiposPlano.forEach((tipoPlano) => {
            tipoPlano.classList.remove("ativo");
        });
        tipoPlano.classList.add("ativo");
    });
});