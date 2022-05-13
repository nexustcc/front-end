"use strict";

let localStorageUser = [];

let nomeCurso;

async function turmasCurso(idCurso) {
    window.location.href = `turmas/index.html?idCurso=${idCurso}`;
}

function exibirDados(cursos) {
    const container = document.getElementById("ul_container");

    for (var i = 0; i < cursos.length; i++) {
        const curso = document.createElement("li");
        curso.classList = "list-group-item li";

        nomeCurso = cursos[i].nome;

        curso.innerHTML += `
            <div class="curso">
                <p class="curso">Curso:</p>
                <img class="book" src="./img/icone_curso.svg" alt="book" />
                <p class="nome" id="nomeCurso">${cursos[i].nome}</p>
            </div>
            <div class="button">
                <a>
                    <button class="terceiro_botao" class="btnEntrarCurso" onclick="turmasCurso(${cursos[i].idCurso})">
                        TURMAS EXISTENTES
                    </button>
                </a>
            </div>
        `;

        container.appendChild(curso);

        console.log(cursos[i].idCurso);
    }
}

const exibirDadosPesquisa = (cursos) => {
    const htmlString = cursos
        .map((cursos) => {
            return `
        <li class="list-group-item li">
            <div class="curso">
                <p class="curso">Curso:</p>
                <img class="book" src="./img/icone_curso.svg" alt="book" />
                <p class="nome" id="nomeCurso">${cursos.nome}</p>
            </div>
            <div class="button">
                <a href="turmas/index.html">
                    <button class="terceiro_botao" class="btnEntrarCurso" onclick="turmasCurso(${cursos.idCurso})">
                        TURMAS EXISTENTES
                    </button>
                </a>
            </div>
        </li>`;
        })
        .join("");
    document.getElementById("ul_container").innerHTML = htmlString;
};

const searchBar = document.getElementById("inputBuscarCurso");

let cursos = [];
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();

    const cursosFiltrados = cursos.cursos.filter((curso) => {
        return curso.nome.toLowerCase().includes(searchString);
    });
    exibirDadosPesquisa(cursosFiltrados);
});

async function getArrayCursos() {
    const url = `http://localhost:3000/professor/listarCursos/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    cursos = await dados.json();
    exibirDados(cursos.cursos);
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "professor") {
            getArrayCursos();
            document.getElementById("nomeProfessor").innerHTML =
                localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "instituição":
                    window.location.href = "../../instituicao/";
                    break;

                case "aluno":
                    window.location.href = "../../aluno/perfil/";
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