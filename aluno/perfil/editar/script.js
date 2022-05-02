"use strict";

let localStorageUser = [];

let uploadedImage = "";

Array.prototype.forEach.call(
    document.querySelectorAll(".btn_upload_foto"),
    function (button) {
        const hiddenInput = button.parentElement.querySelector(".input_foto");
        let imgProfessor = document.querySelector("#fotoPerfilProfessor");

        button.addEventListener("click", function () {
            hiddenInput.click();
        });

        hiddenInput.addEventListener("change", function () {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                uploadedImage = reader.result;
                imgProfessor.style.backgroundImage = `url(${uploadedImage})`;
            });
            reader.readAsDataURL(this.files[0]);
        });
    }
);

function infoStatusNome() {
    document.querySelector(".info_preenchido_nome").style.display = "flex";
    document.querySelector(".info_vazado_nome").style.display = "none";
    document.querySelector(".alert_text_nome").style.display = "flex";
}

function resetStatusNome() {
    document.querySelector(".info_preenchido_nome").style.display = "none";
    document.querySelector(".info_vazado_nome").style.display = "flex";
    document.querySelector(".alert_text_nome").style.display = "none";
}

function infoStatusEmail() {
    document.querySelector(".info_preenchido_email").style.display = "flex";
    document.querySelector(".info_vazado_email").style.display = "none";
    document.querySelector(".alert_text_email").style.display = "flex";
}

function resetStatusEmail() {
    document.querySelector(".info_preenchido_email").style.display = "none";
    document.querySelector(".info_vazado_email").style.display = "flex";
    document.querySelector(".alert_text_email").style.display = "none";
}


const editarAluno = async (senha, foto) => {
    event.preventDefault();

    console.log(foto)

    // var data = new FormData()
    // data.append('senha', senha)
    // data.append('foto', foto)

    // console.log(data.foto)

    const aluno = {
        senha: senha,
        foto: JSON.stringify(file)
    }

    console.log(aluno)

    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(aluno)
    };

    console.log(config)

    // fetch(`http://localhost:3000/aluno/editarAluno/${localStorageUser.idTipo}`, config).
    // then(() => (window.location.href = "../index.html"));
}

const exibirDados = (aluno) => {
    document.getElementById('nome').value = aluno.usuario.nome
    document.getElementById('email').value = aluno.usuario.email
    const senha = document.getElementById('senha').value = aluno.usuario.senha
    document.getElementById('confirmar_senha').value = aluno.usuario.senha

    document.querySelector('.botao_editar').addEventListener('click', () => {
        const foto = document.getElementById('file')
        editarAluno(senha, foto.files[0])
    })
}

const getInfoAluno = async () => {
    const url = `http://localhost:3000/aluno/listarAluno/${localStorageUser.idTipo}`

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const aluno = await dados.json();
    exibirDados(aluno.aluno[0]);
}

const logout = () => {
    localStorage.removeItem('user')
    window.location.href = '../home/login'
}

const checkLogin = () => {
    if(localStorage.user != undefined){
        localStorageUser = JSON.parse(localStorage.user)
        if(localStorageUser.tipo == 'aluno'){    
            getInfoAluno()
            document.getElementById('nomeAluno').innerHTML = localStorageUser.nome
        } 
        else{
            switch (localStorageUser.tipo) {
                case 'professor':
                    window.location.href = '../professor/perfil/index.html'
                  break;
      
                case 'instituição':
                    window.location.href = '../../instituicao/index.html'
                  break;
      
                case 'avaliador':
                    window.location.href = '../home/index.html'
                    alert('O acesso dos Avaliadores a plataforma é feito pelo APP')
                  break;
      
                default:
                    window.location.href = '../home/index.html'
              }
        }
    } else{
        window.location.href = '../home/login/index.html'
    }
}

window.onload = checkLogin();