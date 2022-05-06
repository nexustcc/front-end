"use strict";

let localStorageUser = [];

let idCurso;

let urlSplit = window.location.href.split(["?"])

if(urlSplit[1] == '' || urlSplit[1] == undefined){
    window.location.href = '../index.html'
} else{
    idCurso = urlSplit[1].split(["="])[1]
}


const getInfoGrupo = () => {
    
}


const logout = () => {
    localStorage.removeItem('user')
    window.location.href = '../../../../home/login/'
}

const checkLogin = () => {
    if(localStorage.user != undefined){
        localStorageUser = JSON.parse(localStorage.user)
        if(localStorageUser.tipo == 'instituição'){    
            getInfoGrupo()
            document.getElementById('nomeInstituicao').innerHTML = localStorageUser.nome
        } 
        else{
            switch (localStorageUser.tipo) {
                case 'professor':
                    window.location.href = '../professor/perfil/index.html'
                  break;
      
                case 'aluno':
                    window.location.href = '../aluno/perfil/index.html'
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