"use strict"

function showModal() {
    document.querySelector(".modal").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
}

document.getElementById("terceiro_botao")
    .addEventListener("click", showModal);