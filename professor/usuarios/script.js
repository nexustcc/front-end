"use strict";

let localStorageUser = [];

let tiposUsuario = document.querySelectorAll(".tipo_usuario ul li");

tiposUsuario.forEach((tipoUsuario) => {
    tipoUsuario.addEventListener("click", () => {
        tiposUsuario.forEach((tipoUsuario) => {
            tipoUsuario.classList.remove("ativo");
        });
        tipoUsuario.classList.add("ativo");
    });
});

function showModal() {
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function changeModalEditar() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitChangeModalEditar() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-editar").style.display = "none";
}

function changeModalExcluir() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";
}

function exitchangeModalExcluir() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-excluir").style.display = "none";
}

function showModalTrocarTurma() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-trocar-turma").style.display = "flex";
    document.querySelector(".modal-membros").style.display = "none";
}

function exitModalTrocarTurma() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-trocar-turma").style.display = "none";
    document.querySelector(".modal-membros").style.display = "flex";
}

function showModalExcluirUsuario() {
    document.querySelector("#modalInfoUsuario").style.display = "none";
    document.querySelector(".modal-excluir-usuario").style.display = "flex";
}

function exitModalExcluirUsuario() {
    document.querySelector(".modal-excluir-usuario").style.display = "none";
    document.querySelector("#modalInfoUsuario").style.display = "flex";
}

function exitModalsUsuario() {
    document.querySelector(".modal-excluir-usuario").style.display = "none";
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector("#modalInfoUsuario").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

function showModalCriarUsuario() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-criar").style.display = "flex";
}

function exitModalCriarUsuario() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-criar").style.display = "none";
}

function deletarCampo() {
    if (document.getElementById("tipo-select-edit").value == "3") {
        document.querySelector("#turma").style.display = "flex";
        document.querySelector("#grupo").style.display = "flex";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#grupo-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "none";
        document.querySelector("#modal-editar").style.height = "55vh";
    } else if (document.getElementById("tipo-select-edit").value == "2") {
        document.querySelector("#turma-aluno").style.display = "flex";
        document.querySelector("#curso-aluno").style.display = "flex";
        document.querySelector("#grupo-aluno").style.display = "flex";
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#curso").style.display = "none";
        document.querySelector("#grupo").style.display = "none";
        document.querySelector("#modal-editar").style.height = "65vh";
    } else {
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#grupo").style.display = "none";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#grupo-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "none";
        document.querySelector("#modal-editar").style.height = "50vh";
    }
}

function alterarInputTipoUsuario() {
    if (document.getElementById("tipo-select-criar").value == "3") {
        document.querySelector("#turmaNovoUsuario").style.display = "flex";
        document.querySelector("#grupoNovoUsuario").style.display = "flex";
        document.querySelector("#turma-novo-aluno").style.display = "none";
        document.querySelector("#curso-novo-aluno").style.display = "none";
        document.querySelector("#grupo-novo-aluno").style.display = "none";
        document.querySelector("#cursoNovoUsuario").style.display = "none";
        document.querySelector("#salvarAluno").style.display = "none";
        document.querySelector("#salvarAvaliador").style.display = "flex";
        document.querySelector("#modal-criar").style.height = "55vh";
    } else if (document.getElementById("tipo-select-criar").value == "2") {
        document.querySelector("#turma-novo-aluno").style.display = "flex";
        document.querySelector("#curso-novo-aluno").style.display = "flex";
        document.querySelector("#grupo-novo-aluno").style.display = "flex";
        document.querySelector("#turmaNovoUsuario").style.display = "none";
        document.querySelector("#cursoNovoUsuario").style.display = "none";
        document.querySelector("#grupoNovoUsuario").style.display = "none";
        document.querySelector("#salvarAluno").style.display = "flex";
        document.querySelector("#salvarAvaliador").style.display = "none";
        document.querySelector("#modal-criar").style.height = "65vh";
    } else {
        document.querySelector("#turmaNovoUsuario").style.display = "none";
        document.querySelector("#grupoNovoUsuario").style.display = "none";
        document.querySelector("#turma-novo-aluno").style.display = "none";
        document.querySelector("#curso-novo-aluno").style.display = "none";
        document.querySelector("#grupo-novo-aluno").style.display = "none";
        document.querySelector("#cursoNovoUsuario").style.display = "none";
        document.querySelector("#salvarAvaliador").style.display = "none";
        document.querySelector("#salvarAluno").style.display = "none";
        document.querySelector("#modal-criar").style.height = "50vh";
    }
}

let cursos = [];
let dropdownCursos = document.getElementById("cursoNovoAlunoModal");

async function getArrayCursosAluno() {
    const urlIdInstituicao = `http://localhost:3000/professor/pegarInstituicao/${localStorageUser.idTipo}`;

    fetch(urlIdInstituicao).then((response) => response.json);
    const dadosInstituicao = await fetch(urlIdInstituicao);
    let idInstituicao = await dadosInstituicao.json();

    const url = `http://localhost:3000/curso/listarCursos/${idInstituicao.idInstituicao}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    cursos = await dados.json();

    dropdownCursos.length = 0;

    let defaultOption = document.createElement("option");
    defaultOption.text = "SELECIONE UM CURSO";
    defaultOption.disabled = true;
    defaultOption.value = "";

    dropdownCursos.add(defaultOption);
    dropdownCursos.selectedIndex = 0;

    let option;
    for (let i = 0; i < cursos.cursos.length; i++) {
        option = document.createElement("option");
        option.text = cursos.cursos[i].nome;
        option.value = cursos.cursos[i].idCurso;
        dropdownCursos.add(option);
    }
}

let turmas = [];
let dropdownTurmas = document.getElementById("turmaNovoAlunoModal");

async function getArrayTurmasAluno() {
    if (dropdownCursos.options[dropdownCursos.selectedIndex].value != "") {
        console.log(dropdownCursos.value);

        let idCurso = dropdownCursos.value;
        const url = `http://localhost:3000/turma/listarTurmasCurso/${idCurso}`;

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        turmas = await dados.json();

        if (dropdownTurmas.length == 1) {
            let option;
            for (let i = 0; i < turmas.turma.length; i++) {
                option = document.createElement("option");
                option.text = turmas.turma[i].nome;
                option.value = turmas.turma[i].idTurma;
                dropdownTurmas.add(option);
            }
        }

        dropdownCursos.addEventListener("change", () => {
            dropdownTurmas.length = 0;

            let defaultOption = document.createElement("option");
            defaultOption.text = "SELECIONE UMA TURMA";
            defaultOption.disabled = true;
            defaultOption.value = "";

            dropdownTurmas.add(defaultOption);
            dropdownTurmas.selectedIndex = 0;
        });
    }
}

let turmasAvaliador = [];
let dropdownTurmasAvaliador = document.getElementById("turmaNovoUsuarioModal");

async function getArrayTurmasAvaliador() {
    const urlIdInstituicao = `http://localhost:3000/professor/pegarInstituicao/${localStorageUser.idTipo}`;

    fetch(urlIdInstituicao).then((response) => response.json);
    const dadosInstituicao = await fetch(urlIdInstituicao);
    let idInstituicao = await dadosInstituicao.json();

    const url = `http://localhost:3000/turma/listarTurmas/${idInstituicao.idInstituicao}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    turmas = await dados.json();

    dropdownTurmasAvaliador.length = 0;

    dropdownTurmasAvaliador.selectedIndex = 0;

    let option;
    for (let i = 0; i < turmas.turma.length; i++) {
        option = document.createElement("option");
        option.text = turmas.turma[i].nome;
        option.value = turmas.turma[i].idTurma;
        dropdownTurmasAvaliador.add(option);
    }
}

let grupos = [];
let dropdownGrupos = document.getElementById("grupoNovoAlunoModal");

async function getArrayGruposAluno() {
    if (dropdownTurmas.options[dropdownTurmas.selectedIndex].value != "") {
        console.log(dropdownTurmas.value);

        let idTurma = dropdownTurmas.value;
        const url = `http://localhost:3000/grupo/listarGrupos/${idTurma}`;

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        grupos = await dados.json();

        console.log(grupos);

        if (dropdownGrupos.length == 1) {
            let option;
            for (let i = 0; i < grupos.grupos.length; i++) {
                option = document.createElement("option");
                option.text = "Grupo " + grupos.grupos[i].numeracao;
                option.value = grupos.grupos[i].idGrupo;
                console.log(grupos.grupos[i].idGrupo);
                dropdownGrupos.add(option);
            }
        }

        dropdownCursos.addEventListener("change", () => {
            dropdownGrupos.length = 0;

            let defaultOption = document.createElement("option");
            defaultOption.text = "SELECIONE UM GRUPO";
            defaultOption.disabled = true;
            defaultOption.value = "";

            dropdownGrupos.add(defaultOption);
            dropdownGrupos.selectedIndex = 0;
        });

        dropdownTurmas.addEventListener("change", () => {
            dropdownGrupos.length = 0;

            let defaultOption = document.createElement("option");
            defaultOption.text = "SELECIONE UM GRUPO";
            defaultOption.disabled = true;
            defaultOption.value = "";

            dropdownGrupos.add(defaultOption);
            dropdownGrupos.selectedIndex = 0;
        });
    }
}

let gruposAvaliador = [];
let dropdownGruposAvaliador = document.getElementById("grupoNovoUsuarioModal");

document.getElementById("turmaNovoUsuarioModal").onchange = async function () {
    dropdownGruposAvaliador.length = 0;
    var selected = [];
    for (var option of document.getElementById("turmaNovoUsuarioModal").options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }

    if (
        dropdownTurmasAvaliador.options[dropdownTurmasAvaliador.selectedIndex]
        .value != ""
    ) {
        console.log(selected);

        gruposAvaliador = [];

        for (var i = 0; i < selected.length; i++) {
            let idTurma = selected[i];

            const url = `http://localhost:3000/grupo/listarGrupos/${idTurma}`;

            fetch(url).then((response) => response.json);
            const dados = await fetch(url);
            gruposAvaliador.push(await dados.json());

            console.log(gruposAvaliador);
        }

        let option;
        for (let i = 0; i < gruposAvaliador.length; i++) {
            for (var t = 0; t < gruposAvaliador[i].grupos.length; t++) {
                option = document.createElement("option");
                option.text = "Grupo " + gruposAvaliador[i].grupos[t].numeracao;
                option.value = gruposAvaliador[i].grupos[t].idGrupo;
                console.log(option.value);
                dropdownGruposAvaliador.add(option);
            }
        }
    }
};

async function cadastrarAvaliador() {
    event.preventDefault();

    var select = document.getElementById("grupoNovoUsuarioModal");
    var selectedGrupos = [...select.selectedOptions].map(
        (option) => option.value
    );
    console.log(selectedGrupos);

    const urlCatchIdInstituicao = `http://localhost:3000/professor/pegarInstituicao/${localStorageUser.idTipo}`;

    fetch(urlCatchIdInstituicao).then((res) => res.json);
    const dadosInstituicao = await fetch(urlCatchIdInstituicao);
    let idInstituicao = await dadosInstituicao.json();

    const cadastrarAvaliador = {
        nome: document.getElementById("inputNomeNovoUsuarioModal").value.toString(),
        email: document
            .getElementById("inputEmailNovoUsuarioModal")
            .value.toString(),
        idGrupos: selectedGrupos,
    };

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastrarAvaliador),
    };

    const urlCadastrarAvaliador = `http://localhost:3000/avaliador/cadastrarAvaliador/${idInstituicao.idInstituicao}`;

    fetch(urlCadastrarAvaliador, config)
        .then(async (response) => {
            response.json();
        })
        .then(() => (window.location.href = "index.html"));
}

async function cadastrarAluno(nome, email, turma, grupo) {
    event.preventDefault();

    const cadastrarAluno = {
        nome: document.getElementById("inputNomeNovoUsuarioModal").value.toString(),
        email: document
            .getElementById("inputEmailNovoUsuarioModal")
            .value.toString(),
        idGrupo: dropdownGrupos.value,
        idTurma: dropdownTurmas.value,
    };

    console.log(dropdownGrupos.value);
    console.log(dropdownTurmas.value);

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastrarAluno),
    };

    fetch(`http://localhost:3000/aluno/cadastrarAluno`, config)
        .then((res) => res.json())
        .then(() => (window.location.href = "index.html"));
}






// LISTAGEM

// const changeModalEditar = async (id, tipo) => {
//     document.querySelector(".modal-listagem").style.display = "none";
//     document.querySelector(".modal-editar").style.display = "flex";
//     document.querySelector(".bg").style.display = "flex";

//     let input_nome = document.getElementById('edit_user_nome')
//     let input_email = document.getElementById('edit_user_email')
//     let input_senha = document.getElementById('edit_user_senha')
//     let input_tipo = document.getElementById('edit_user_tipo')
//     let input_curso = document.getElementById('edit_user_curso')
//     let input_turma = document.getElementById('edit_user_turma')
//     let input_grupo = document.getElementById('edit_user_grupo')

//     console.log(input_nome)

//     if (tipo == 'ALUNO'){
//         const url = `http://localhost:3000/membros/listarAluno/${id}`

//         fetch(url).then((response) => response.json);
//         const dados = await fetch(url);
//         const aluno = await dados.json();

//         console.log(aluno)

//         input_nome.value = ''
//         input_email.value = ''
//         input_senha.value = ''
//         input_tipo.placeholder = ''
//         input_curso.value = ''
//         input_turma.value = ''
//         input_grupo.value = ''
        
//         input_nome.value = aluno.aluno.nome
//         input_email.value = aluno.aluno.email
//         input_senha.value = aluno.aluno.senha
//         input_tipo.placeholder = 'ALUNO'
//         input_curso.value = aluno.curso.nome
//         input_turma.value = aluno.turma.nome
//         input_grupo.value = aluno.grupo.nomeProjeto

//     } else{
//         const url = `http://localhost:3000/membros/listarAvaliador/${id}`

//         fetch(url).then((response) => response.json);
//         const dados = await fetch(url);
//         const avaliador = await dados.json();

//         input_nome.value = ''
//         input_email.value = ''
//         input_senha.value = ''
//         input_tipo.placeholder = ''
//         input_curso.value = ''
//         input_turma.value = ''
//         input_grupo.value = ''
        
//         input_nome.value = avaliador.avaliador.nome
//         input_email.value = avaliador.avaliador.email
//         input_senha.value = avaliador.avaliador.senha
//         input_tipo.placeholder = 'AVALIADOR'
//         input_curso.value = avaliador.curso.nome
//         input_turma.value = avaliador.turma.nome
        
//         for (let g = 0; g < avaliador.grupos.length; g++) {
//             if(avaliador.grupos.length == 0 || avaliador.grupos.length == null){
//                 input_grupo.placeholder = 'Avalidor sem grupos'
//             }

//             input_grupo.placeholder += avaliador.grupos[g] + " | "
//         }
//     }

//     document.getElementById('btn-cancelar-editar').addEventListener('click', () => {
//         document.querySelector(".bg").style.display = "none";
//         document.querySelector(".modal-editar").style.display = "none";
//         showModalListagem(id, tipo)
//     })
// }

// const changeModalExcluir = async (id, tipo) => {
//     document.querySelector(".modal-listagem").style.display = "none";
//     document.querySelector(".bg").style.display = "flex";
//     document.querySelector(".modal-excluir").style.display = "flex";
    
//     document.getElementById('btn-editar-usuario').addEventListener('click', () => {
        
//         if(tipo == 'ALUNO'){
//             const url = `http://localhost:3000/aluno/deletarAluno/${id}`

//             var requestOptions = {
//                 method: 'DELETE',
//                 redirect: 'follow'
//             };
              
//             fetch(url, requestOptions)
//                 .then(response => response.text())
//                 .then(result => alert(result))
//                 .then(() => window.location.href = './index.html')

//         } else{
//             const url = `http://localhost:3000/avaliador/deletarAvaliador/${id}`

//             var requestOptions = {
//                 method: 'DELETE',
//                 redirect: 'follow'
//             };
              
//             fetch(url, requestOptions)
//                 .then(response => response.text())
//                 .then(result => alert(result))
//                 .then(() => window.location.href = './index.html')
//         }
//     })
// }


const showModalListagem = async (id, tipo) => {
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".modal-listagem").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";

    let input_nome = document.getElementById('view_user_nome')
    let input_email = document.getElementById('view_user_email')
    let input_senha = document.getElementById('view_user_senha')
    let input_tipo = document.getElementById('view_user_tipo')
    let input_curso = document.getElementById('view_user_curso')
    let input_turma = document.getElementById('view_user_turma')
    let input_grupo = document.getElementById('view_user_grupo') 

    if (tipo == 'ALUNO'){
        const url = `http://localhost:3000/membros/listarAluno/${id}`

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        const aluno = await dados.json();

        input_nome.placeholder = ''
        input_email.placeholder = ''
        input_senha.placeholder = ''
        input_tipo.placeholder = ''
        input_curso.placeholder = ''
        input_turma.placeholder = ''
        input_grupo.placeholder = ''
        
        input_nome.placeholder = aluno.aluno.nome
        input_email.placeholder = aluno.aluno.email
        input_senha.placeholder = aluno.aluno.senha
        input_tipo.placeholder = tipo
        input_curso.placeholder = aluno.curso.nome
        input_turma.placeholder = aluno.turma.nome
        input_grupo.placeholder = aluno.grupo.nomeProjeto

        const button_div = document.getElementById('div-btn-user-options');
        
        button_div.innerHTML = ''
        
        button_div.innerHTML += `
            <div class="col-md-3">
                <button class="primeiro_botao" type="button" onclick="exitModalListagem()"> CANCELAR </button>
            </div>

            <div class="col-md-3">
                <button id class="terceiro_botao" type="button" onclick="changeModalExcluir(${id}, 'ALUNO')"> EXCLUIR </button>
            </div>

            <div class="col-md-6">
                <button class="segundo_botao" type="button" onclick="changeModalEditar(${id}, 'ALUNO')"> EDITAR </button>
            </div>
        `;
        
        container_usuario.appendChild(button_div);

    } else{
        const url = `http://localhost:3000/membros/listarAvaliador/${id}`

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        const avaliador = await dados.json();

        input_nome.placeholder = ''
        input_email.placeholder = ''
        input_senha.placeholder = ''
        input_tipo.placeholder = ''
        input_curso.placeholder = ''
        input_turma.placeholder = ''
        input_grupo.placeholder = ''
        
        input_nome.placeholder = avaliador.avaliador.nome
        input_email.placeholder = avaliador.avaliador.email
        input_senha.placeholder = avaliador.avaliador.senha
        input_tipo.placeholder = tipo
        input_curso.placeholder = avaliador.curso.nome
        input_turma.placeholder = avaliador.turma.nome
        
        if(avaliador.grupos.length == 0 || avaliador.grupos.length == null){
            input_grupo.placeholder = '* sem grupos'
        } else{
            for (let g = 0; g < avaliador.grupos.length; g++) {
                input_grupo.placeholder += avaliador.grupos[g] + " | "
            }
        }

        const button_div = document.getElementById('div-btn-user-options');
        
        button_div.innerHTML = ''
        
        button_div.innerHTML += `
            <div class="col-md-3">
                <button class="primeiro_botao" type="button" onclick="exitModalListagem()"> CANCELAR </button>
            </div>

            <div class="col-md-3">
                <button id class="terceiro_botao" type="button" onclick="changeModalExcluir(${id}, 'AVALIADOR')"> EXCLUIR </button>
            </div>

            <div class="col-md-6">
                <button class="segundo_botao" type="button" onclick="changeModalEditar(${id}, 'AVALIADOR')"> EDITAR </button>
            </div>
        `;
        
        container_usuario.appendChild(button_div);
    }
}


const exibirDadosGeral = (membros) => {
    const membros_container = document.getElementById('ul_membros')

    if(membros.length == 0){
        const no_members_view = document.createElement("li");
        no_members_view.classList = "list-group-item li";

        no_members_view.innerHTML += `
            <li class="list-group-item li"">
                <p>Nenhum usuário cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
        membros_container.innerHTML = ''
    
        for (let m = 0; m < membros.alunos.length; m++) {
            if (membros.alunos[m].foto == null || membros.alunos[m].foto == undefined) {
                membros.alunos[m].foto = "uploads/fotopadrao.svg";
            }
    
            const professor_view = document.createElement("li");
            professor_view.classList = "list-group-item li";
    
            professor_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${membros.alunos[m].idAluno} , 'ALUNO')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${membros.alunos[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${membros.alunos[m].nome}</p>
                    </div>
                    <h2>ALUNO</h2>
                </li>
            `;
    
            membros_container.appendChild(professor_view);
    
            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";
    
            membros_container.appendChild(linha);
        }
    
        for (let m = 0; m < membros.avaliadores.length; m++) {
            if (membros.avaliadores[m].foto == null || membros.avaliadores[m].foto == undefined) {
                membros.avaliadores[m].foto = "uploads/fotopadrao.svg";
            }
    
            const professor_view = document.createElement("li");
            professor_view.classList = "list-group-item li";
    
            professor_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${membros.avaliadores[m].idAvaliador}, 'AVALIADOR')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${membros.avaliadores[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${membros.avaliadores[m].nome}</p>
                    </div>
                    <h2>AVALIADOR</h2>
                </li>
            `;
    
            membros_container.appendChild(professor_view);
    
            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";
    
            membros_container.appendChild(linha);
        }
    }
}

const exibirDadosAlunos = (alunos) => {
    const membros_container = document.getElementById('ul_membros')

    membros_container.innerHTML = ''

    if(alunos.length == 0){
        const no_members_view = document.createElement("li");
        no_members_view.display = 'flex'
        no_members_view.style.alignItems = 'center'
        no_members_view.style.justifyContent = 'center'
        no_members_view.style.width = '100%'

        no_members_view.innerHTML += `
            <li>
                <p style='margin-top: 1rem'>Nenhum Aluno cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
        for (let m = 0; m < alunos.length; m++) {
            if (alunos[m].foto == null || alunos[m].foto == undefined) {
                alunos[m].foto = "uploads/fotopadrao.svg";
            }
    
            const aluno_view = document.createElement("li");
            aluno_view.classList = "list-group-item li";
    
            aluno_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${alunos[m].idAluno}, 'ALUNO')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${alunos[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${alunos[m].nome}</p>
                    </div>
                    <h2>ALUNO</h2>
                </li>
            `;
    
            membros_container.appendChild(aluno_view);
    
            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";
    
            membros_container.appendChild(linha);
        }
    }
}

const exibirDadosAvaliadores = (avaliadores) => {
    const membros_container = document.getElementById('ul_membros')

    membros_container.innerHTML = ''

    if(avaliadores.length == 0){
        const no_members_view = document.createElement("li");
        no_members_view.display = 'flex'
        no_members_view.style.alignItems = 'center'
        no_members_view.style.justifyContent = 'center'
        no_members_view.style.width = '100%'

        no_members_view.innerHTML += `
            <li>
                <p style='margin-top: 1rem'>Nenhum Avaliador cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
        for (let m = 0; m < avaliadores.length; m++) {
            if (avaliadores[m].foto == null || avaliadores[m].foto == undefined) {
                avaliadores[m].foto = "uploads/fotopadrao.svg";
            }
    
            const avaliador_view = document.createElement("li");
            avaliador_view.classList = "list-group-item li";
    
            avaliador_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${avaliadores[m].idAvaliador}, 'AVALIADOR')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${avaliadores[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${avaliadores[m].nome}</p>
                    </div>
                    <h2>AVALIADOR</h2>
                </li>
            `;
    
            membros_container.appendChild(avaliador_view);
    
            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";
    
            membros_container.appendChild(linha);
        }
    }
}

const getMembrosProfessor = async () => {
    const url = `http://localhost:3000/instituicao/listarMembros/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const membros = await dados.json();

    exibirDadosGeral(membros)

    tiposUsuario.forEach((tipoUsuario) => {
        tipoUsuario.addEventListener("click", () => {
            tiposUsuario.forEach((tipoUsuario) => {
                tipoUsuario.classList.remove("ativo");
            });
            tipoUsuario.classList.add("ativo");
            
            if (tipoUsuario.id == 'li_todos') {
                exibirDadosGeral(membros)
            } else if(tipoUsuario.id == 'li_alunos'){
                exibirDadosAlunos(membros.alunos)
            } else {
                exibirDadosAvaliadores(membros.avaliadores)
            }
        });
    });
}





const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "professor") {
            getArrayCursosAluno();
            getMembrosProfessor()
            document.getElementById("nomeProfessor").innerHTML =
                localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "instituição":
                    window.location.href = "../../instituicao/";
                    break;

                case "aluno":
                    window.location.href = "../../aluno/perfil";
                    break;

                case "avaliador":
                    window.location.href = "../../home/";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../../home/";
            }
        }
    } else {
        window.location.href = "../../home/login/index.html";
    }
};

window.onload = checkLogin();