"use strict";

const imgExibir = document.getElementById("show_password");
const inputSenha = document.getElementById("inputSenha");
const inputEmail = document.getElementById('inputEmail')

function alternarSenha() {
  if (inputSenha.type === "password") {
    inputSenha.type = "text";
    imgExibir.src = "img/eye-off.svg";
  } else {
    inputSenha.type = "password";
    imgExibir.src = "img/eye.svg";
  }
}

async function login (email, senha) {
    const login = {
      email: email,
      senha: senha
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    };

    await fetch(
      'http://localhost:3000/login/',
      config
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if(data.message == 'email ou senha inválidos'){
        document.getElementById('p_invalid').style.display = 'flex'
      } else{
        document.getElementById('p_invalid').style.display = 'none'

        // localStorage.removeItem(usuario)

        const usuario = {
          idUsuario: data.idUsuario, 
          nome: data.nome,
          tipo: data.tipo
        }

        localStorage.user = JSON.stringify(usuario)

        const localStorageUser = JSON.parse(localStorage.user)

        switch (localStorageUser.tipo) {
          case 'instituição':
            console.log('instituição')
            break;

          case 'professor':
            console.log('professor')
            break;

          case 'aluno':
            console.log('aluno')
            break;

          case 'avaliador':
            console.log('avaliador')
            alert('O acesso dos Avaliadores a plataforma é feito pelo APP, para baixar entre em ...')
            break;

          default:
            break;
        }
      }
    });
}

const formValidation = () => {
  login(inputEmail.value, inputSenha.value)
}