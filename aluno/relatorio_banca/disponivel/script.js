"use strict";

let localStorageUser = [];

let tiposPlano = document.querySelectorAll(".tipo_avaliador ul li");

tiposPlano.forEach((tipoAvaliador) => {
    tipoAvaliador.addEventListener("click", () => {
        tiposPlano.forEach((tipoAvaliador) => {
            tipoAvaliador.classList.remove("ativo");
        });
        tipoAvaliador.classList.add("ativo");
    });
});

const getInfoAluno = async () => {

}

const logout = () => {
    localStorage.removeItem('user')
    window.location.href = '../../../../home/login'
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
                    window.location.href = '../../../../professor/perfil/index.html'
                    break;

                case 'instituição':
                    window.location.href = '../../../../instituicao/index.html'
                    break;

                case 'avaliador':
                    window.location.href = '../../../../home/index.html'
                    alert('O acesso dos Avaliadores a plataforma é feito pelo APP')
                    break;

                default:
                    window.location.href = '..././../../home/index.html'
            }
        }
    } else {
        window.location.href = '..././../../home/login/index.html'
    }
}

window.onload = checkLogin();