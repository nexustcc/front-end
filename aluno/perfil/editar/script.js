"use strict";

let localStorageUser = [];

let uploadedImage = "";

const imgShowPassword = document.getElementById('show_password');
const imgShowConfirmPassword = document.getElementById('show_confirm_password');
const inputSenha = document.getElementById('senha');
const inputConfirmarSenha = document.getElementById('confirmar_senha');

const alternarVisibilidadeSenha = (input, img) => {

    if (input.type === "password") {
        input.type = "text";
        img.src = "img/eye-off.svg";
    } else if (input.type === "text") {
        input.type = "password";
        img.src = "img/eye.svg";
      }
}

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

async function editarAluno() {
    event.preventDefault();

    const fotoAluno = document.getElementById("file");
    const formData = new FormData();

    formData.append("nome", document.getElementById("nome").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("senha", document.getElementById("senha").value);

    if (fotoAluno.files[0] != undefined) {
        formData.append("foto", fotoAluno.files[0]);
    }

    axios
        .put(`http://localhost:3000/aluno/editarAluno/${localStorageUser.idTipo}`, formData, {
            headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            },
        })
    .then((response) => console.log(response)).then(() => (window.location.href = "../index.html"));;
}

const exibirDados = (aluno) => {

    const divImgAluno = document.getElementById("fotoPerfilAluno");

    if (aluno.foto == null || aluno.foto == "uploads/fotopadrao.svg") {
        divImgAluno.style.backgroundImage =
            "url(http://localhost:3000/uploads/fotopadrao.svg)";
    } else {
        divImgAluno.style.backgroundImage = `url(http://localhost:3000/${aluno.foto})`;
    }

    const senha = document.getElementById('senha')
    document.getElementById('nome').value = aluno.usuario.nome
    document.getElementById('email').value = aluno.usuario.email
    senha.value = aluno.usuario.senha
    document.getElementById('confirmar_senha').value = aluno.usuario.senha

    document.querySelector('.botao_editar').addEventListener('click', () => {
        const foto = document.getElementById('file')
        editarAluno(senha.value, foto)
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
    window.location.href = '../../../home/login'
}

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user)
        if (localStorageUser.tipo == 'aluno') {
            getInfoAluno()
            document.getElementById('nomeAluno').innerHTML = localStorageUser.nome
        } else {
            switch (localStorageUser.tipo) {
                case 'professor':
                    window.location.href = '../../../professor/perfil/index.html'
                    break;

                case 'instituição':
                    window.location.href = '../../../instituicao/index.html'
                    break;

                case 'avaliador':
                    window.location.href = '../../../home/index.html'
                    alert('O acesso dos Avaliadores a plataforma é feito pelo APP')
                    break;

                default:
                    window.location.href = '../../../home/index.html'
            }
        }
    } else {
        window.location.href = '../../../home/login/index.html'
    }
}

window.onload = checkLogin();