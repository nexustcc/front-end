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
        document.querySelector("#modal-criar").style.height = "55vh";
    } else if (document.getElementById("tipo-select-criar").value == "2") {
        document.querySelector("#turma-novo-aluno").style.display = "flex";
        document.querySelector("#curso-novo-aluno").style.display = "flex";
        document.querySelector("#grupo-novo-aluno").style.display = "flex";
        document.querySelector("#turmaNovoUsuario").style.display = "none";
        document.querySelector("#cursoNovoUsuario").style.display = "none";
        document.querySelector("#grupoNovoUsuario").style.display = "none";
        document.querySelector("#modal-criar").style.height = "65vh";
    } else {
        document.querySelector("#turmaNovoUsuario").style.display = "none";
        document.querySelector("#grupoNovoUsuario").style.display = "none";
        document.querySelector("#turma-novo-aluno").style.display = "none";
        document.querySelector("#curso-novo-aluno").style.display = "none";
        document.querySelector("#grupo-novo-aluno").style.display = "none";
        document.querySelector("#cursoNovoUsuario").style.display = "none";
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

async function cadastrarAvaliador(nome, email, idGrupos){
    event.preventDefault();

    const cadastrarAvaliador = {
        nome: document.getElementById("inputNomeNovoUsuarioModal").value.toString(),
        email: document
            .getElementById("inputEmailNovoUsuarioModal")
            .value.toString(),
        idGrupos: selectedGrupos
    };

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastrarAvaliador),
    };

    fetch(`http://localhost:3000/avaliador/cadastrarAvaliador/${localStorageUser.idTipo}`, config).then((res) =>
        res.json()
    );

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

    fetch(`http://localhost:3000/aluno/cadastrarAluno`, config).then((res) =>
        res.json()
    );
}

document.getElementById('saveUser').onclick = function() {
    var select = document.getElementById('grupoNovoUsuarioModal');
    var selectedGrupos = [...select.selectedOptions]
                    .map(option => option.value);
    console.log(selectedGrupos);
}

if (document.getElementById("tipo-select-edit").value == "3") {
    document.getElementById('saveUser').onclick = cadastrarAvaliador()
} else {
    document.getElementById('saveUser').onclick = cadastrarAluno()
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "professor") {
            getArrayCursosAluno();
            document.getElementById("nomeProfessor").innerHTML =
                localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "instituição":
                    window.location.href = "../instituicao/";
                    break;

                case "aluno":
                    window.location.href = "../aluno/perfil/index.html";
                    break;

                case "avaliador":
                    window.location.href = "../home/index.html";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../home/index.html";
            }
        }
    } else {
        window.location.href = "../home/login/index.html";
    }
};

window.onload = checkLogin();