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
      if(data.message == 'email ou senha inválidos'){
        document.getElementById('p_invalid').style.display = 'flex'
      } else{
        document.getElementById('p_invalid').style.display = 'none'

        const usuario = {
          idUsuario: data.idUsuario, 
          idTipo: data.idTipo,
          nome: data.nome,
          tipo: data.tipo
        }

        localStorage.user = JSON.stringify(usuario)

        const localStorageUser = JSON.parse(localStorage.user)

        switch (localStorageUser.tipo) {
          case 'instituição':
            window.location.href = '../../instituicao/'
            break;

          case 'professor':
            window.location.href = '../../professor/perfil/'
            break;

          case 'aluno':
            window.location.href = '../../aluno/perfil/'
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