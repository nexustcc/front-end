"use strict";

let localStorageUser = [];

let idGrupo;

let urlSplit = window.location.href.split(["?"])

if (urlSplit[1] == "" || urlSplit[1] == undefined) {
    window.location.href = "../../index.html";
} else {
    idGrupo = urlSplit[1].split(["="])[1];
}

const converterDataBanco = (data) => {

    if(data != null) {
        let dataSlipt = data.split(["T"]);
        let dataArray = dataSlipt[0];
        let dataArraySplit = dataArray.split(["-"]);
        let dataFinal = dataArraySplit[0] + "-" + dataArraySplit[1] + "-" + dataArraySplit[2];
        return dataFinal;
    }
}

const exibirGrupo = (infoGrupo, andamento) => {

    let titlePaginaGrupo = document.getElementById('nomeGrupo');
    let pTemaProjeto = document.getElementById('temaProjeto');
    let pDescricaoProjeto = document.getElementById('descricaoProjeto');
    let inputDataApresentacao = document.getElementById('inputDataApresentacaoProjeto');
    let inputHoraApresentacaoProjeto = document.getElementById('inputHoraApresentacaoProjeto');
    let barraProgressoProjeto = document.getElementById('barraProgressoProjeto');

    titlePaginaGrupo.innerHTML = infoGrupo.nomeProjeto;
    pDescricaoProjeto.innerHTML = infoGrupo.descricao
    pTemaProjeto.innerHTML = infoGrupo.temaProjeto
    inputDataApresentacao.value = converterDataBanco(infoGrupo.dataApresentacao)
    inputHoraApresentacaoProjeto.value = infoGrupo.horaApresentacao

    barraProgressoProjeto.innerHTML = andamento + '%';

    if(andamento > 3) {
        barraProgressoProjeto.style.width = andamento + '%';
    }    

}

const exibirAlunos = (alunos) => {
    const containerAlunos = document.getElementById('listIntegrantesGrupo')

    for (let a = 0; a < alunos.length; a++) {
        
        let aluno = document.createElement('li');
        aluno.classList = 'list-group-item li-integrantes';

        aluno.innerHTML += `
        <div class="integrantes">
            <img src="http://localhost:3000/${alunos[a].foto}" class="iconify icon" style="color: #05204a" width="80" height="80">
        </div>
        <p>${alunos[a].nome}</p>
        `

        containerAlunos.appendChild(aluno)
    }
}

const exibirProfessores = (professores) => {
    const containerProfessores = document.getElementById('listProfessoresGrupo');

    for (let i = 0; i < professores.length; i++) {

        let professor = document.createElement('li');
        professor.classList = 'list-group-item li-orientadores';

        professor.innerHTML += `
        <div class="orientadores">
            <img src="http://localhost:3000/${professores[i].foto}" class="iconify icon" style="color: #05204a" width="80" height="80">
        </div>
        <p>${professores[i].nome}</p>
        `

        containerProfessores.appendChild(professor);
        
    }

}


const getInfoGrupo = async () => {
    const url = `http://localhost:3000/grupo/informacoesGrupo/${idGrupo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    let grupo = await dados.json();
    
    exibirGrupo(grupo.grupo[0], grupo.andamento);
    exibirAlunos(grupo.alunos)
    exibirProfessores(grupo.professores)
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
        window.location.href = '../../../../home/login/'
    }
}

window.onload = checkLogin();