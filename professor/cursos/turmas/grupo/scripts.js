"use strict"

let localStorageUser = [];


let idGrupo;
let urlSplit = window.location.href.split(["?"]);
if (urlSplit[1] == "" || urlSplit[1] == undefined) {
    window.location.href = "../../index.html";
} else {
    idGrupo = urlSplit[1].split(["="])[1];
}







const showModalEditarAluno = () =>{
    document.querySelector(".modal-editar-aluno").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-editar-aluno").style.height = "30vh";
}

const exitModalEditarAluno = () =>{
    document.querySelector(".modal-editar-aluno").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

const showModalCriarAlunoGrupo = () =>{
    document.querySelector(".modal-criar-aluno-grupo").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-criar-aluno-grupo").style.height = "60vh";
}

const exitModalCriarAlunoGrupo = () =>{
    document.querySelector(".modal-criar-aluno-grupo").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

const showModalAddProfessorGrupo = () =>{
    document.querySelector(".modal-add-professor-grupo").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-add-professor-grupo").style.height = "40vh";
}

const exitModalAddProfessorGrupo = () =>{
    document.querySelector(".modal-add-professor-grupo").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

const showModalExcluirUsuarioGrupo = () =>{
    document.querySelector(".modal-editar-aluno").style.display = "none";
    document.querySelector(".modal-excluir-usuario-grupo").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

const exitModalExcluirUsuarioGrupo = () =>{
    document.querySelector(".modal-excluir-usuario-grupo").style.display = "none";
    document.querySelector(".bg").style.display = "none";
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

    if(andamento > 3) {
        barraProgressoProjeto.style.width = andamento + '%';
    }    

}

const exibirAlunos = (alunos) => {
    const container = document.getElementById('listIntegrantesGrupo')

    for (let a = 0; a < alunos.length; a++) {
        
        let aluno = document.createElement('li');
        aluno.classList = 'list-group-item li-integrantes';

        aluno.innerHTML += `
            <button class="btnEditarAlunoGrupo" onclick="showModalEditarAluno(${alunos[a].idAluno})"><i class='bx bx-edit'></i></button>
            <div class="integrantes">
                <img src="http://localhost:3000/${alunos[a].foto}" class="iconify icon" style="color: #05204a" width="80" height="80">
            </div>
            <p id="nomeAlunoGrupo">${alunos[a].nome}</p>
        `

        container.appendChild(aluno)
    }
}

const exibirProfessores = (professores) => {
    const containerProfessores = document.getElementById('listProfessoresGrupo');

    for (let i = 0; i < professores.length; i++) {

        let professor = document.createElement('li');
        professor.classList = 'list-group-item li-orientadores';

        professor.innerHTML += `
        <button class="btnExcluirProfessor" onclick="showModalExcluirUsuarioGrupo(${professores[i].idProfessor})"><i class='bx bx-x'></i></button>
        <div class="orientadores">
            <img src="http://localhost:3000/${professores[i].foto}" class="iconify icon" style="color: #05204a" width="80" height="80">
        </div>
        <p id="nomeProfessorGrupo">${professores[i].nome}</p>
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
    localStorage.removeItem("user");
    window.location.href = "../../../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "professor") {
            getInfoGrupo();
            document.getElementById("nomeProfessor").innerHTML = localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "instituição":
                    window.location.href = "../../../../instituicao/";
                    break;

                case "aluno":
                    window.location.href = "../../../../aluno/perfil/";
                    break;

                case "avaliador":
                    window.location.href = "../../../../home/";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../../../../home/";
            }
        }
    } else {
        window.location.href = "../../../../home/login/index.html";
    }
};

window.onload = checkLogin();