"use strict";

let localStorageUser = [];

let idCurso;

let urlSplit = window.location.href.split(["?"])

if(urlSplit[1] == '' || urlSplit[1] == undefined){
    window.location.href = '../index.html'
} else{
    idCurso = urlSplit[1].split(["="])[1]
}

let nomeCurso;

document.getElementById('button_modal_cadastrar_turma').addEventListener('click', async () => {
    const url = `http://localhost:3000/curso/nomeCurso/${idCurso}`
    
    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    let curso = await dados.json();

    nomeCurso = curso.nome[0].nome

    showModal(idCurso, nomeCurso)
})

const cadastrarTurma = (nomeTurma, idCurso, dataInicio, dataConclusao) => {
    event.preventDefault();

    const turma = {
        nome: nomeTurma,
        dataInicio: dataInicio,
        dataConclusao: dataConclusao,
    };

    console.log(turma);

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(turma),
    };

    console.log(config);

    fetch(`http://localhost:3000/turma/cadastrarTurma/${idCurso}`, config)
        .then((res) => res.json())
        .then((data) => {
            let message = data.message
            alert(message.toUpperCase())
            window.location.href = `../turmas/index.html?idCurso=${idCurso}`
        });    
}


const showModal = (idCurso, nomeCurso) => {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".modal-add-membros").style.display = "none";
    document.querySelector(".modal-add-membros-turma-criada").style.display = "none";

    document.getElementById('input-curso').value = nomeCurso

    document.getElementById('button_cadastrar_turma').addEventListener('click', () => {
        let nomeTurma = document.getElementById('input-nome-turma').value
        let dataInicio = document.getElementById('input-data-inicio').value
        let dataConclusao = document.getElementById('input-data-conclusao').value
        
        if(nomeTurma != '' && dataInicio != '' && dataConclusao !=''){
            cadastrarTurma(nomeTurma, idCurso, dataInicio, dataConclusao)
        } else{
            const message = document.createElement("p")
            message.innerHTML = 'PREENCHA TODOS OS CAMPOS'
            message.style.textAlign = 'center'
            message.style.color = '#b70606'
            document.getElementById('modal_cadastro_turma').appendChild(message)
            window.reload(forcedReload)
        }

    })
}

function exitModal() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

let qtdCursos = 0;

const exibirDadosGrupos = (grupos) => {
    
    const container = document.getElementById("li_grupos");
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    if(grupos.length == 0 || grupos == null){
        document.getElementById('p_nenhuma_turma').innerHTML = 'Nenhum grupo cadastrado'
    } else{
        document.getElementById('p_nenhuma_turma').innerHTML = ''
    }
    
    for (let g = 0; g < grupos.length; g++) {
        const grupo = document.createElement("li");
        grupo.classList = "list-group-item li";
        
        if(grupos[g].nomeProjeto == null) {
            grupos[g].nomeProjeto = 'sem nome*'
        }
        
        grupo.innerHTML += `
        <div class="grupo">
        <a href="./vizualizacao_grupo/index.html?idGrupo=${grupos[g].idGrupo}"><span class="iconify" data-icon="healthicons:group-discussion-meetingx3" style="color: #05244d;"data-width="130" data-height="130"></span></a>
        <p class="numero">Grupo ${grupos[g].numeracao}</p>
        <p class="tema">${grupos[g].nomeProjeto}</p>
        </div>
        `;
        
        container.appendChild(grupo);
    }

}


const showModalGrupos = async (idTurma) => {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-grupos").style.display = "flex";
    document.querySelector(".modal-add-membros").style.display = "none";

    const url = `http://localhost:3000/grupo/listarGrupos/${idTurma}`
    
    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    let grupos = await dados.json();
    exibirDadosGrupos(grupos.grupos)
}



function exitModalGrupos() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalExcluir(idTurma) {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";

    document.getElementById('button_excluir_turma').addEventListener('click', () => {
        fetch(`http://localhost:3000/turma/deletarTurma/${idTurma}`, { method: "DELETE",})
        .then((res) => res.json())
        .then(() => (window.location.href = `../turmas/index.html?idCurso=${idCurso}`));
    })
}

function exitModalExcluir() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-excluir").style.display = "none";
}

function exitModalTurma() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalAddMembros() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "flex";
}

function exitModalAddMembros() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-add-membro").style.display = "none";
}

function showModalAddMembrosTurmaCriada() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-membros").style.display = "none";
    document.querySelector(".modal-add-membros-turma-criada").style.display =
        "flex";
}

function exitModalAddMembrosTurmaCriada() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-add-membros-turma-criada").style.display =
        "none";
}

function showModalEditar() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
}

function exitModalEditar() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-editar").style.display = "none";
}

function showModalMembros() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-membros").style.display = "flex";
    document.querySelector(".modal-add-membros-turma-criada").style.display = "none";
}

function showModalEditar(idTurma) {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";

    console.log(idTurma)
}

function resetForm() {
    document.querySelector(".form-modal-turma").reset();
}



async function showModalTurma(idTurma, nomeCurso) {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "flex";
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".modal-membros").style.display = "none";

    const url = `http://localhost:3000/turma/listarTurma/${idTurma}`

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    let turma = await dados.json();
    
    document.getElementById('input-nome-turma').value = turma[0].nome
    document.getElementById('input-nome-curso').value = nomeCurso
    document.getElementById('input-data-inicio').value = turma[0].dataInicio
    document.getElementById('input-data-conclusao').value = turma[0].dataConclusao
    document.getElementById('input-data-numero-alunos').value = turma[0].numeroDeAlunos
}




const exibirDados = (turmas) => {
    const container = document.getElementById("turma-container");

    if(turmas.length == 0){
        const sem_turmas = document.createElement("p")
        sem_turmas.innerHTML = 'NENHUMA TURMA CADASTRADA'
        sem_turmas.style.textAlign = 'center'
        container.appendChild(sem_turmas)
    } else{
        for (var i = 0; i < turmas.length; i++) {
            const turma = document.createElement("li");
            turma.classList = "list-group-item li";
    
            turma.innerHTML += `
                    <div class="turma">
                        <p class="turma">Turma:</p>
                        <img class="book" src="./img/icone_turma.svg" alt="book">
                        <p class="nome">${turmas[i].nome}</p>
                    </div>
                    <div class="button">
                        <button onclick="showModalTurma(${turmas[i].idTurma})" class="terceiro_botao">SOBRE A TURMA</button>
                        <button onclick="showModalGrupos(${turmas[i].idTurma})" class="primeiro_botao">GRUPOS DE TCC</button>
                        <button onclick="showModalExcluir(${turmas[i].idTurma})" class="quarto_botao">EXCLUIR</button>
                    </div>
            `;
    
            container.appendChild(turma);
    
            const linha = document.createElement('img')
            linha.src = './img/linha.svg'
            
            container.appendChild(linha)
        }
    }
    
}



async function getArrayTurmas(){
    if(idCurso == '' || idCurso == undefined){
        window.location.href = '../index.html'
    } else{
        const url = `http://localhost:3000/turma/listarTurmasCurso/${idCurso}`
    
        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        let turmas = await dados.json();
        exibirDados(turmas.turma)
    }
}



const logout = () => {
    localStorage.removeItem('user')
    window.location.href = '../home'
}

const checkLogin = () => {
    if(localStorage.user != undefined){
        localStorageUser = JSON.parse(localStorage.user)
        if(localStorageUser.tipo == 'instituição'){    
            getArrayTurmas()
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