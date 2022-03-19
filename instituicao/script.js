"use strict"

function showModal() {
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showOtherModal() {
    document.querySelector(".otherModal").style.display = "flex";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "flex";
}

function exitOtherModal() {
    document.querySelector(".otherModal").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}


document.getElementById("terceiro_botao")
    .addEventListener("click", showModal);

document.getElementById("segundo_botao_modal")
    .addEventListener("click", showOtherModal);