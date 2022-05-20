"use strict";

let localStorageUser = [];

let idGrupo;

let urlSplit = window.location.href.split(["?"])

if (urlSplit[1] == "" || urlSplit[1] == undefined) {
    window.location.href = "../index.html";
} else {
    idGrupo = urlSplit[1].split(["="])[1];
}


const getInfoGrupo = async () => {
    const url = `http://localhost:3000/grupo/listarGrupo/${idGrupo}`

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    let grupo = await dados.json();

    console.log(grupo)
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
                    window.location.href = '../../../../professor/perfil/'
                  break;
      
                case 'aluno':
                    window.location.href = '../../../../aluno/perfil/'
                  break;
      
                case 'avaliador':
                    window.location.href = '../../../../home/'
                    alert('O acesso dos Avaliadores a plataforma é feito pelo APP')
                  break;
      
                default:
                    window.location.href = '../../../../home/'
            }
        }
    } else{
        window.location.href = '../home/login/index.html'
    }
}

window.onload = checkLogin();