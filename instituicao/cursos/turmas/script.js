"use strict";

let localStorageUser = [];

function showModal() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".modal-add-membros").style.display = "none";
    document.querySelector(".modal-add-membros-turma-criada").style.display =
        "none";
}

function exitModal() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalGrupos() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-grupos").style.display = "flex";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function exitModalGrupos() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalExcluir() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";
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

function showModalEditar() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
}

function resetForm() {
    document.getElementById("modal").reset();
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
                    <button onclick="showModalExcluir({turmas[i].idcurso})" class="quarto_botao">EXCLUIR</button>
                </div>
        `;

        container.appendChild(turma);

        const linha = document.createElement('img')
        linha.src = './img/linha.svg'
        
        container.appendChild(linha)
    }
}



async function getArrayTurmas(){
    let idCurso = window.location.href.split(["?"])[1].split(["="])[1]

    const url = `http://localhost:3000/turma/listarTurmasCurso/${idCurso}`

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    let turmas = await dados.json();
    exibirDados(turmas.turma)
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