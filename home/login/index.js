"use strict";

const imgExibir = document.getElementById("show_password");
const inputSenha = document.getElementById("inputSenha");

function alternarSenha() {
  if (inputSenha.type === "password") {
    inputSenha.type = "text";
    imgExibir.src = "img/eye-off.svg";
  } else {
    inputSenha.type = "password";
    imgExibir.src = "img/eye.svg";
  }
}