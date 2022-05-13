/* 
TODO: Preciso finalizar a listagem de Membros da Turma (Está funcionando, mas está repetindo e aparece "Não há professores cadastrados" mesmo quando ha.) 
TODO: O Mateus conseguiu listar os membros, mas eu não consegui reutilizar seu código.
TODO: Também preciso fazer o cadastro de Grupos (O back está feito, mas a integração está com erros)
*/

"use strict";

let localStorageUser = [];

let idCurso;

let urlSplit = window.location.href.split(["?"]);

if (urlSplit[1] == "" || urlSplit[1] == undefined) {
    window.location.href = "../index.html";

    console.log(urlSplit);
} else {
    idCurso = urlSplit[1].split(["="])[1];

    console.log(idCurso);
}

let nomeCurso;

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

///////////////////////////////////////////////////////////
//Preciso Finalizar
const exibirGrupos = (grupos) => {
    const container = document.getElementById("li_grupos");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    if (grupos.length == 0 || grupos == null) {
        document.getElementById("p_nenhuma_turma").innerHTML =
            "Nenhum grupo cadastrado";
    } else {
        document.getElementById("p_nenhuma_turma").innerHTML = "";
    }

    for (let g = 0; g < grupos.length; g++) {
        const grupo = document.createElement("li");
        grupo.classList = "list-group-item li";

        if (grupos[g].nomeProjeto == null) {
            grupos[g].nomeProjeto = "sem nome*";
        }

        grupo.innerHTML += `
        <div class="grupo">
        <button class="btnExcluirGrupo" onclick="showModalExcluirGrupo(${grupos[g].idGrupo})"><i class='bx bx-trash'></i></button>
        <a href="./grupo/index.html?idGrupo=${grupos[g].idGrupo}"><span class="iconify" data-icon="healthicons:group-discussion-meetingx3" style="color: #05244d;"data-width="130" data-height="130"></span></a>
        <p class="numero">Grupo ${grupos[g].numeracao}</p>
        <p class="tema">${grupos[g].nomeProjeto}</p>
        </div>
        `;

        container.appendChild(grupo);
    }
};
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Preciso Finalizar
async function showModalGrupos(idTurma) {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-grupos").style.display = "flex";

    const url = `http://localhost:3000/grupo/listarGrupos/${idTurma}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    let grupos = await dados.json();
    exibirGrupos(grupos.grupos);

    console.log(grupos.grupos);
    console.log("Oi");
}
///////////////////////////////////////////////////////////

function exitModalGrupos() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "none";
}

////////////////////////////////////////////////////////////////////////
// Preciso Finalizar
async function showModalTurma(idTurma) {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "flex";
    document.querySelector(".modal-membros").style.display = "none";

    if (idTurma != undefined) {
        const url = `http://localhost:3000/turma/listarTurma/${idTurma}`;

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        let turma = await dados.json();

        document
            .getElementById("membrosTurmaModal")
            .addEventListener("click", () => {
                showModalMembros(turma.turma[0].idTurma);
            });
    }
}
////////////////////////////////////////////////////////////////////////

function exitModalTurma() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
}

////////////////////////////////////////////////////////////////////////
// Preciso Finalizar
async function showModalMembros(idTurma) {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-membros").style.display = "flex";

    const url = `http://localhost:3000/turma/membros/listarMembros/${idTurma}`;
    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    let membros = await dados.json();

    exibirDadosProfessores(membros.professores);
    exibirDadosAlunos(membros.alunos);

    console.log(idTurma);
}
////////////////////////////////////////////////////////////////////////

function resetForm() {
    document.getElementById("modal").reset();
}

const showModalCriarGrupo = () => {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-criar-grupo").style.display = "flex";
    document.querySelector(".modal-membros").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "none";
};

const exitModalCriarGrupo = () => {
    document.querySelector(".modal-criar-grupo").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "flex";
};

async function showModalExcluirGrupo(idGrupo) {
    document.querySelector(".modal-grupos").style.display = "none";
    document.querySelector(".modal-excluir-grupo").style.display = "flex";

    const buttonConfirmarExclusao = document.getElementById(
        "btnConfirmarExclusao"
    );
    var buttonConfirmarExclusaoClone = buttonConfirmarExclusao.cloneNode(true);

    buttonConfirmarExclusao.addEventListener("click", () => {
        buttonConfirmarExclusao.parentNode.replaceChild(
            buttonConfirmarExclusaoClone,
            buttonConfirmarExclusao
        );
        fetch(`http://localhost:3000/grupo/deletarGrupo/${idGrupo}`, {
            method: "DELETE",
        }).then((res) => res.json());
    });
}

function exitModalExcluirGrupo() {
    document.querySelector(".modal-excluir-grupo").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "flex";
}

const excluirGrupo = (idGrupo) => {
    console.log("excluir grupo");
};

const isInputNumber = (evt) => {
    let char = String.fromCharCode(evt.which);
    if (!/[0-9]/.test(char)) {
        evt.preventDefault();
    }
};

const exibirDados = (turmas) => {
    const container = document.getElementById("ul_container");

    for (var i = 0; i < turmas.length; i++) {
        const turma = document.createElement("li");
        turma.classList = "list-group-item li";

        turma.innerHTML += `
            <div class="turma">
                <p class="turma">Turma:</p>
                <img class="book" src="./img/icone_turma.svg" alt="book">
                <p class="nome" id="nomeTurmaPrincipal">${turmas[i].nome}</p>
            </div>
            <div class="button">
                <button onclick="showModalTurma(${turmas[i].idTurma}), exibirDadosInfoTurma(${turmas[i].idTurma})" class="terceiro_botao" id="modalSobreATurma">SOBRE A
                    TURMA</button>
                <button onclick="showModalGrupos(${turmas[i].idTurma}), exibirDadosGrupo(${turmas[i].idTurma})" class="primeiro_botao" id="modalGruposTccTurma">GRUPOS DE
                    TCC</button>
            </div>
        `;
        container.appendChild(turma);
    }
};

let professores = [];
let gruposProfessor = [];
let dropdownGruposProfessor = document.getElementById("selectProfessoresNovoGrupo");

async function exibirDadosGrupo(idTurma) {
    console.log({
        idTurma,
    });
    const url = `http://localhost:3000/turma/listarTurma/${idTurma}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    let turma = await dados.json();

    const buttonCriarNovoGrupo = document.getElementById("buttonCriarNovoGrupo");
    var buttonCriarNovoGrupoClone = buttonCriarNovoGrupo.cloneNode(true);

    const urlProfessor = `http://localhost:3000/professor/listarProfessorTurma/${turma.turma[0].idTurma}`;

    fetch(urlProfessor).then((response) => response.json);
    const dadosProfessor = await fetch(urlProfessor);
    professores = await dadosProfessor.json();

    buttonCriarNovoGrupo.addEventListener("click", () => {
        buttonCriarNovoGrupo.parentNode.replaceChild(
            buttonCriarNovoGrupoClone,
            buttonCriarNovoGrupo
        );

        dropdownGruposProfessor.length = 0;
        dropdownGruposProfessor.selectedIndex = 0;

        let option;
        for (let i = 0; i < professores.professores.length; i++) {
            option = document.createElement("option");
            option.text = professores.professores[i].nome;
            option.value = professores.professores[i].idProfessor;
            dropdownGruposProfessor.add(option);

            console.log("IdProfessor: " + professores.professores[i].idProfessor)
        }
        
    });

    const buttonCadastrarGrupo = document.getElementById("membrosTurmaModalCriar");
    var buttonCadastrarGrupoClone = buttonCadastrarGrupo.cloneNode(true);

    // buttonCriarNovoGrupo.addEventListener("click", () => {
    //     buttonCriarNovoGrupo.parentNode.replaceChild(
    //         buttonCriarNovoGrupoClone,
    //         buttonCriarNovoGrupo
    //     );

    //     cadastrarGrupo(turma.turma[0].idTurma);
        
    // });

    //buttonCadastrarGrupo.addEventListener("click", cadastrarGrupo(turma.turma[0].idTurma))

    //buttonCadastrarGrupo.addEventListener("click", console.log("A"))


    buttonCadastrarGrupo.addEventListener("click", () => {
        buttonCadastrarGrupo.parentNode.replaceChild(
            buttonCadastrarGrupoClone,
            buttonCadastrarGrupo
        );

        console.log("A" + idCurso);

        cadastrarGrupo(turma.turma[0].idTurma);
        
    });
}

async function exibirDadosInfoTurma(idTurma) {
    const url = `http://localhost:3000/turma/listarTurma/${idTurma}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const turma = await dados.json();

    document.getElementById("inputNomeTurmaModal").value = turma.turma[0].nome;
    document.getElementById("inputNumeroEstudantesModal").value =
        turma.turma[0].numeroDeAlunos;
    document.getElementById("inputDataInicioAulasModal").value =
        turma.turma[0].dataInicio;
    document.getElementById("inputDataTerminoAulasModal").value =
        turma.turma[0].dataConclusao;
    document.getElementById("nomeCursoModalProfessor").innerHTML =
        turma.turma[0].nomeCurso;
}

const exibirDadosProfessores = (professores) => {
    let professor_container = document.getElementById("professor-container");

    if (professores.length == 0) {
        const professor_view = document.createElement("li");
        professor_view.classList = "list-group-item li";
        professor_view.innerHTML += ` <li class="list-group-item li"> <p>Nenhum Professor Cadastrado</p> </li> `;
        professor_container.appendChild(professor_view);
    }

    for (let p = 0; p < professores.length; p++) {
        if (professores[p].foto == null) {
            professores[p].foto = "uploads/fotopadrao.svg";
        }

        const professor_view = document.createElement("li");
        professor_view.classList = "list-group-item li";

        professor_view.innerHTML += `
            <li class="list-group-item li">
                <div class="membro">
                    <img class="iconify" src="http://localhost:3000/${professores[p].foto}" style="color: #05204a;" width="100" height="100">
                    <div class="nome"> <p>${professores[p].nome}</p> </div>
                </div>
            </li>
        `;

        professor_container.appendChild(professor_view);

        const linha = document.createElement("img");
        linha.src = "./img/linha.svg";

        professor_container.appendChild(linha);
    }
};

const exibirDadosAlunos = (alunos) => {
    let aluno_container = document.getElementById("aluno-container");

    if (alunos.length == 0) {
        const aluno_view = document.createElement("li");
        aluno_view.classList = "list-group-item li";
        aluno_view.innerHTML += ` <li class="list-group-item li"> <p>Nenhum Aluno Cadastrado</p> </li> `;
        aluno_container.appendChild(aluno_view);
    }

    for (let p = 0; p < alunos.length; p++) {
        if (alunos[p].foto == null) {
            alunos[p].foto = "uploads/fotopadrao.svg";
        }

        const aluno_view = document.createElement("li");
        aluno_view.classList = "list-group-item li";

        aluno_view.innerHTML += `
            <li class="list-group-item li">
                <div class="membro">
                    <img class="iconify" src="http://localhost:3000/${alunos[p].foto}" style="color: #05204a;" width="100" height="100">
                    <div class="nome"> <p>${alunos[p].nome}</p> </div>
                </div>
            </li>
        `;

        aluno_container.appendChild(aluno_view);

        const linha = document.createElement("img");
        linha.src = "./img/linha.svg";

        aluno_container.appendChild(linha);
    }
};

const exibirDadosPesquisa = (turmas) => {
    const htmlString = turmas
        .map((turmas) => {
            return `
        <li class="list-group-item li">
            <div class="turma">
                <p class="turma">Turma:</p>
                <img class="book" src="./img/icone_turma.svg" alt="book">
                <p class="nome" id="nomeTurmaPrincipal">${turmas.nome}</p>
            </div>
            <div class="button">
                <button onclick="showModalTurma(${turmas[i].idTurma}), exibirDadosInfoTurma(${turmas[i].idTurma})" class="terceiro_botao" id="modalSobreATurma">SOBRE A
                    TURMA</button>
                <button onclick="showModalGrupos(${turmas[i].idTurma}), exibirDadosGrupo(${turmas[i].idTurma})" class="primeiro_botao" id="modalGruposTccTurma">GRUPOS DE
                    TCC</button>
            </div>
        </li>`;
        })
        .join("");
    document.getElementById("ul_container").innerHTML = htmlString;
};

const searchBar = document.getElementById("inputBuscarTurmas");

let turmas = [];
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    const turmasFiltradas = turmas.turmas.filter((turma) => {
        return turma.nome.toLowerCase().includes(searchString);
    });
    exibirDadosPesquisa(turmasFiltradas);
});

///////////////////////////////////////////////////////////
// Preciso Finalizar
async function getArrayTurmas() {
    if (idCurso == "" || idCurso == undefined) {
        window.location.href = `./index.html?idCurso=${idCurso}`;
    } 
    else {
        const url = `http://localhost:3000/turma/listarTurmasCurso/${idCurso}`;

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        let turmas = await dados.json();
        exibirDados(turmas.turma);
    }
}
///////////////////////////////////////////////////////////

let professoresGrupo = [];
let dropdownProfessoresGrupo = document.getElementById(
    "selectProfessoresNovoGrupo"
);

async function getArrayProfessoresGrupo(idTurma) {
    const urlIdInstituicao = `http://localhost:3000/membros/listarMembros/${idTurma}`;
}

async function cadastrarGrupo(idTurma) {
    event.preventDefault();

    var select = document.getElementById("selectProfessoresNovoGrupo");
    var selectedProfessores = [...select.selectedOptions].map(
        (option) => option.value
    );
    console.log(selectedProfessores);

    const cadastrarGrupo = {
        nomeGrupo: document.getElementById("inputNomeNovoGrupoModal").value.toString(),
        numeracao: document
            .getElementById("inputNumeracaoNovoGrupoModal")
            .value.toString(),
        idProfessores: selectedProfessores
    };

    console.log(selectedProfessores);

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastrarGrupo),
    };

    console.log("Config: " + config.body);

    const urlCadastrarGrupo = `http://localhost:3000/grupo/cadastrarGrupo/${idTurma}`;

    fetch(urlCadastrarGrupo, config)
        .then((response) => {
            console.log(response.json());
        })
        .then(() => (window.location.href = `./index.html?idCurso=${idCurso}`));
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "professor") {
            getArrayTurmas();
            document.getElementById("nomeProfessor").innerHTML =
                localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "instituição":
                    window.location.href = "../../../instituicao/";
                    break;

                case "aluno":
                    window.location.href = "../../../aluno/perfil/";
                    break;

                case "avaliador":
                    window.location.href = "../../../home/";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../../../home/";
            }
        }
    } else {
        window.location.href = "../../../home/login/index.html";
    }
};

window.onload = checkLogin();