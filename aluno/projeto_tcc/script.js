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




const exibirDadosProjeto = (projeto) => {
    if(projeto.temaProjeto == '' || projeto.temaProjeto == undefined || projeto.temaProjeto == null) { document.getElementById('p_tema_projeto').innerHTML = '' }
    if(projeto.tema == '' || projeto.tema == undefined || projeto.tema == null) { document.getElementById('p_descricao_projeto').innerHTML = '' }
    document.getElementById('p_tema_projeto').innerHTML = projeto.temaProjeto
    document.getElementById('p_descricao_projeto').innerHTML = projeto.descricao
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

// const exibirDadosProfessores = (professores) => {
//     const container = document.getElementById("ul_professores");

//     for (var i = 0; i < professores.length; i++) {
//         const li_professor = document.createElement("li");
//         li_professor.classList = "list-group-item li-integrantes";

//         li_professor.innerHTML += `
//             <div class="integrantes">
//                 <span class="iconify icon" data-icon="carbon:user-avatar-filled-alt" style="color: #05204a;"data-width="80" data-height="80"></span>
//             </div>
//             <p>${professores[i]}</p>
//         `;

//         container.appendChild(li_professor);
//     }
// }


const getInfoProjeto = async () => {
    const url = `http://localhost:3000/aluno/informacoesGrupo/${localStorageUser.idTipo}`

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const informacoes = await dados.json();
    exibirDadosProjeto(informacoes.grupo[0])
    exibirDadosAlunos(informacoes.alunos)
    // exibirDadosProfessores(informacoes.professores)
}

const logout = () => {
    localStorage.removeItem('user')
    window.location.href = '../home/login'
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