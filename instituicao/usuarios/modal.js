"use strict";

let tiposUsuario = document.querySelectorAll(".tipo_usuario ul li");

tiposUsuario.forEach((tipoUsuario) => {
    tipoUsuario.addEventListener("click", () => {
        tiposUsuario.forEach((tipoUsuario) => {
            tipoUsuario.classList.remove("ativo");
        });
        tipoUsuario.classList.add("ativo");
    });
});

function resetForm() {
    document.getElementById("modal-form").reset();
}

function showModal() {
    document.querySelector(".modal-cadastro").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";
}

function exitModal() {
    document.querySelector(".modal-cadastro").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}


function exitModalListagem() {
    document.querySelector(".modal-listagem").style.display = "none";
    document.querySelector(".bg").style.display = "none";
}

// const changeModalEditar = async (id, tipo) => {
//     document.querySelector(".modal-listagem").style.display = "none";
//     document.querySelector(".modal-editar").style.display = "flex";
//     document.querySelector(".bg").style.display = "flex";

//     let input_nome = document.getElementById('view_user_nome')
//     let input_email = document.getElementById('view_user_email')
//     let input_senha = document.getElementById('view_user_senha')
//     let input_tipo = document.getElementById('view_user_tipo')
//     let input_curso = document.getElementById('view_user_curso')
//     let input_turma = document.getElementById('view_user_turma')
//     let input_grupo = document.getElementById('view_user_grupo') 

//     if(tipo == 'PROFESSOR'){
//         const url = `http://localhost:3000/instituicao/membros/listarProfessor/${id}`

//         fetch(url).then((response) => response.json);
//         const dados = await fetch(url);
//         const professor = await dados.json();

//         input_nome.placeholder = ''
//         input_email.placeholder = ''
//         input_senha.placeholder = ''
//         input_tipo.placeholder = ''
//         input_curso.placeholder = ''
//         input_turma.placeholder = ''
//         input_grupo.placeholder = ''
        
//         input_nome.placeholder = professor.professor.nome
//         input_email.placeholder = professor.professor.email
//         input_senha.placeholder = professor.professor.senha
//         input_tipo.placeholder = tipo

//         for (let c = 0; c < professor.cursos.length; c++) {
//             if(professor.cursos.length == 0 || professor.cursos.length == null){
//                 input_curso.placeholder = 'Professor sem cursos'
//             }

//             input_curso.placeholder += professor.cursos[c].nome + " | "
//         }

//         for (let t = 0; t < professor.turmas.length; t++) {
//             if(professor.turmas.length == 0 || professor.turmas.length == null){
//                 input_turma.placeholder = 'Professor sem turmas'
//             }

//             input_turma.placeholder += professor.turmas[t].nome + " | "
//         }

//         for (let g = 0; g < professor.grupos.length; g++) {
//             if(professor.grupos.length == 0 || professor.grupos.length == null){
//                 input_grupo.placeholder = 'Professor sem grupos'
//             }

//             input_grupo.placeholder += professor.grupos[g].nomeProjeto + " | "
//         }

//     } else if (tipo == 'ALUNO'){
//         const url = `http://localhost:3000/instituicao/membros/listarAluno/${id}`

//         fetch(url).then((response) => response.json);
//         const dados = await fetch(url);
//         const aluno = await dados.json();

//         input_nome.placeholder = ''
//         input_email.placeholder = ''
//         input_senha.placeholder = ''
//         input_tipo.placeholder = ''
//         input_curso.placeholder = ''
//         input_turma.placeholder = ''
//         input_grupo.placeholder = ''
        
//         input_nome.placeholder = aluno.aluno.nome
//         input_email.placeholder = aluno.aluno.email
//         input_senha.placeholder = aluno.aluno.senha
//         input_tipo.placeholder = tipo
//         input_curso.placeholder = aluno.curso.nome
//         input_turma.placeholder = aluno.turma.nome
//         input_grupo.placeholder = aluno.grupo.nomeProjeto

//     } else{
//         const url = `http://localhost:3000/instituicao/membros/listarAvaliador/${id}`

//         fetch(url).then((response) => response.json);
//         const dados = await fetch(url);
//         const avaliador = await dados.json();

//         input_nome.placeholder = ''
//         input_email.placeholder = ''
//         input_senha.placeholder = ''
//         input_tipo.placeholder = ''
//         input_curso.placeholder = ''
//         input_turma.placeholder = ''
//         input_grupo.placeholder = ''
        
//         input_nome.placeholder = avaliador.avaliador.nome
//         input_email.placeholder = avaliador.avaliador.email
//         input_senha.placeholder = avaliador.avaliador.senha
//         input_tipo.placeholder = tipo
//         input_curso.placeholder = avaliador.curso.nome
//         input_turma.placeholder = avaliador.turma.nome
        
//         for (let g = 0; g < avaliador.grupos.length; g++) {
//             if(avaliador.grupos.length == 0 || avaliador.grupos.length == null){
//                 input_grupo.placeholder = 'Avalidor sem grupos'
//             }

//             input_grupo.placeholder += avaliador.grupos[g] + " | "
//         }
//     }
// }

function exitChangeModalEditar() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-editar").style.display = "none";
}

function changeModalExcluir() {
    document.querySelector(".modal-listagem").style.display = "none";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";
}

function exitchangeModalExcluir() {
    document.querySelector(".modal-listagem").style.display = "none";
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

function deletarCampo() {
    if (document.getElementById("tipo-select-edit").value == "3") {
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#grupo").style.display = "flex";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "flex";
    } else if (document.getElementById("tipo-select-edit").value == "2") {
        document.querySelector("#turma-aluno").style.display = "flex";
        document.querySelector("#curso-aluno").style.display = "flex";
        document.querySelector("#turma").style.display = "none";
        document.querySelector("#curso").style.display = "none";
        document.querySelector("#grupo").style.display = "none";
    } else {
        document.querySelector("#turma").style.display = "flex";
        document.querySelector("#grupo").style.display = "none";
        document.querySelector("#turma-aluno").style.display = "none";
        document.querySelector("#curso-aluno").style.display = "none";
        document.querySelector("#curso").style.display = "flex";
    }
}

function deletarCampoCadastro() {
    if (document.getElementById("tipo-select-criar").value == "3") {
        document.querySelector("#turma-aluno-cadastro").style.display = "none";
        document.querySelector("#curso-aluno-cadastro").style.display = "none";
        document.querySelector("#grupo-aluno-cadastro").style.display = "none";
        document.querySelector("#turma-cadastro").style.display = "none";
        document.querySelector("#grupo-cadastro").style.display = "flex";
        document.querySelector("#curso-cadastro").style.display = "flex";
    } else if (document.getElementById("tipo-select-criar").value == "2") {
        document.querySelector("#turma-aluno-cadastro").style.display = "flex";
        document.querySelector("#curso-aluno-cadastro").style.display = "flex";        
        document.querySelector("#grupo-aluno-cadastro").style.display = "flex";
        document.querySelector("#turma-cadastro").style.display = "none";
        document.querySelector("#curso-cadastro").style.display = "none";
        document.querySelector("#grupo-cadastro").style.display = "none";
    } else if (document.getElementById("tipo-select-criar").value == "1") {
        document.querySelector("#turma-cadastro").style.display = "flex";
        document.querySelector("#grupo-cadastro").style.display = "none";
        document.querySelector("#turma-aluno-cadastro").style.display = "none";
        document.querySelector("#curso-aluno-cadastro").style.display = "none";
        document.querySelector("#grupo-aluno-cadastro").style.display = "none";
        document.querySelector("#curso-cadastro").style.display = "flex";
    } else {
        document.querySelector("#turma").style.display = "flex";
        document.querySelector("#grupo").style.display = "flex";
    }
}

function disableSelected() {
    if (document.getElementById("tipo-select-criar").value == "selected") {
        document.getElementById("input-curso").disabled = true;
        document.getElementById("input-turma").disabled = true;
    } else {
        document.getElementById("input-curso").disabled = false;
        document.getElementById("input-turma").disabled = false;
    }
}

const form = document.getElementById('modal-form');
const salvar = document.getElementById('button_salvar')
