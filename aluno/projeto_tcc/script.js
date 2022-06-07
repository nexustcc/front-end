"use strict";

let localStorageUser = [];


const editarGrupo = () => {
    
    event.preventDefault();

    const grupo = {
        temaProjeto: document.getElementById('inputTemaProjetoGrupo').value,
        descricao: document.getElementById('textDescricaoProjetoGrupo').value
    };

    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(grupo),
    };

    const url = `http://localhost:3000/grupo/editarGrupoAluno/${localStorageUser.idTipo}`

    fetch(url, config).then(() => (window.location.href = "./index.html"));
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

    let inputTema = document.getElementById('inputTemaProjetoGrupo');
    let inputDescricaoProjeto = document.getElementById('textDescricaoProjetoGrupo');
    let inputDataApresentacao = document.getElementById('inputDataApresentacaoProjetoGrupo');
    let inputHoraApresentacaoProjetoGrupo = document.getElementById('inputHoraApresentacaoProjetoGrupo');
    let barraProgressoProjeto = document.getElementById('barraProgressoProjeto');

    inputDescricaoProjeto.value = infoGrupo.descricao
    inputTema.value = infoGrupo.temaProjeto
    inputDataApresentacao.value = converterDataBanco(infoGrupo.dataApresentacao)
    inputHoraApresentacaoProjetoGrupo.value = infoGrupo.horaApresentacao

    barraProgressoProjeto.innerHTML = andamento + '%';

    if (andamento == 100){
        barraProgressoProjeto.style.width = andamento + '%';
        barraProgressoProjeto.style.backgroundColor = '#248052';
    } else if (andamento > 3) {
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
    const url = `http://localhost:3000/aluno/informacoesGrupo/${localStorageUser.idTipo}`
    const dados = await fetch(url);
    let grupo = await dados.json();

    console.log(grupo)
    
    exibirGrupo(grupo.grupo[0], grupo.andamento);
    exibirAlunos(grupo.alunos)
    exibirProfessores(grupo.professores)
}



const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "aluno") {
            getInfoGrupo();
            document.getElementById("nomeAluno").innerHTML = localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "professor":
                    window.location.href = "../../professor/perfil/index.html";
                    break;

                case "instituição":
                    window.location.href = "../../instituicao/index.html";
                    break;

                case "avaliador":
                    window.location.href = "../../home/index.html";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../home/index.html";
            }
        }
    } else {
        window.location.href = "../../home/index.html";
    }
};

window.onload = checkLogin();