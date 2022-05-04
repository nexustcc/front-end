"use strict";

let localStorageUser = [];

function updateList() {
    var input = document.getElementById("file");
    var output = document.getElementById("fileList");

    output.innerHTML = "<ul>";
    for (var i = 0; i < input.files.length; ++i) {
        output.innerHTML += "<li>" + input.files.item(i).name + "</li>";
    }
    output.innerHTML += "</ul>";
}

const editarGrupo = () => {
    const url = `http://localhost:3000/grupo/editarGrupoAluno/${localStorageUser.idTipo}`

    event.preventDefault();

    const grupo = {
        temaProjeto: document.getElementById('p_tema_projeto').value,
        descricao: document.getElementById('p_descricao_projeto').value
    };

    console.log(grupo);

    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(grupo),
    };

    fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
            alert(data.message);
            document.location.reload(true);
        });
}


const exibirDadosProjeto = (projeto, andamento) => {
    if(projeto.temaProjeto == '' || projeto.temaProjeto == undefined || projeto.temaProjeto == null) {
        document.getElementById('p_tema_projeto').placeholder = 'Insira o tema do seu Projeto' 
    }

    if(projeto.tema == '' || projeto.tema == undefined || projeto.tema == null) {
        document.getElementById('p_descricao_projeto').placeholder = 'Insira uma breve descrição do seu Projeto'
    }

    document.getElementById('p_tema_projeto').value = projeto.temaProjeto
    document.getElementById('p_descricao_projeto').value = projeto.descricao

    let progess_bar = document.getElementById('progress-bar')

    if(andamento == 'Nenhuma tarefa criada'){
        progess_bar.style.width = 0
        document.getElementById('empty_progress_bar').style.display = 'flex'
    } else{
        progess_bar.style.width = 100
        progess_bar.innerHTML = andamento + '%'
    }
}

const exibirDadosAlunos = (alunos) => {
    const container = document.getElementById("ul_integrantes");

    for (var i = 0; i < alunos.length; i++) {
        const li_professor = document.createElement("li");
        li_professor.classList = "list-group-item li-integrantes";

        li_professor.innerHTML += `
            <div class="integrantes">
                <span class="iconify icon" data-icon="carbon:user-avatar-filled-alt" style="color: #05204a;"data-width="80" data-height="80"></span>
            </div>
            <p>${alunos[i]}</p>
        `;

        container.appendChild(li_professor);
    }
}

const exibirDadosProfessores = (professores) => {
    const container = document.getElementById("ul_professores");

    for (var i = 0; i < professores.length; i++) {
        const li_professor = document.createElement("li");
        li_professor.classList = "list-group-item li-integrantes";

        li_professor.innerHTML += `
            <div class="integrantes">
                <span class="iconify icon" data-icon="carbon:user-avatar-filled-alt" style="color: #05204a;"data-width="80" data-height="80"></span>
            </div>
            <p>${professores[i]}</p>
        `;

        container.appendChild(li_professor);
    }
}


const getInfoProjeto = async () => {
    const url = `http://localhost:3000/aluno/informacoesGrupo/${localStorageUser.idTipo}`

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const informacoes = await dados.json();
    exibirDadosProjeto(informacoes.grupo[0], informacoes.andamento)
    exibirDadosAlunos(informacoes.alunos)
    exibirDadosProfessores(informacoes.professores)
}

const logout = () => {
    localStorage.removeItem('user')
    window.location.href = '../../home/login'
}

const checkLogin = () => {
    if(localStorage.user != undefined){
        localStorageUser = JSON.parse(localStorage.user)
        if(localStorageUser.tipo == 'aluno'){    
            getInfoProjeto()
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