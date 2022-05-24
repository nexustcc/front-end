"use strict";

let localStorageUser = [];

function exibirDados(avaliacao) {
    const container = document.getElementById("tipo_avaliador");

    for (var i = 0; i < avaliacao.length; i++) {
        const avaliador = document.getElementById("listAvaliador");

        avaliador.innerHTML += `
            <li class='${i == 0 ? "ativo" : ""}' id='avaliacao-${
      avaliacao[i].idAvaliacao
    }' onclick="exibirDadosAvaliacao(${avaliacao[i].idAvaliacao})">AVALIAÇÃO ${
      i + 1
    }</li>
            `;

        // container.appendChild(avaliador);

        console.log(avaliador);

        let teste = [];
        teste += document.getElementById("observacoes").value =
            avaliacao[i].observacoes;

        console.log(teste);
    }
}

function exibirDadosAvaliacao(idAvaliacao) {
    const dadosAvaliacao = avaliacao.avaliacoes.find(
        (avaliacao) => avaliacao.idAvaliacao == idAvaliacao
    );
    const formCamposInputs = document.querySelectorAll(
        ".formCampos input[type='radio']"
    );

    formCamposInputs.forEach((input) => {
        const container = input.parentElement.parentElement;
        const nomeCampo = container.querySelector("p").id;
        const resultado = Object.entries(dadosAvaliacao).find(
            ([campo, valor]) => campo == nomeCampo
        );
        console.log(resultado[1]);

        container.querySelector(
            `input[type='radio']#${resultado[1]}`
        ).checked = true;
    });
    document.getElementById("observacoes").value = dadosAvaliacao.observacoes;
}

let avaliacao = [];
async function getArrayAvaliacao() {
    const url = `http://localhost:3000/aluno/listarAvaliacao/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    avaliacao = await dados.json();

    console.log(avaliacao.avaliacoes.length);
    exibirDados(avaliacao.avaliacoes);

    if (avaliacao.avaliacoes.length == 0) {
        window.location.href = "../indisponivel/index.html";
    } else {
        window.onload = exibirDadosAvaliacao(avaliacao.avaliacoes[0].idAvaliacao);
    }

    let tiposPlano = document.querySelectorAll(".tipo_avaliador ul li");

    tiposPlano.forEach((tipoAvaliador) => {
        tipoAvaliador.addEventListener("click", () => {
            tiposPlano.forEach((tipoAvaliador) => {
                tipoAvaliador.classList.remove("ativo");
            });
            tipoAvaliador.classList.add("ativo");
        });
    });
}

let grupo = [];
async function getArrayGrupo() {
    const url = `http://localhost:3000/aluno/grupoAluno/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    grupo = await dados.json();

    document.getElementById("nomeGrupoAluno").innerHTML =
        grupo.grupo[0].nomeGrupo;
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../../../home/login";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "aluno") {
            getArrayAvaliacao(), getArrayGrupo();
            document.getElementById("nomeGrupoAluno").innerHTML =
                localStorageUser.idGrupo;
            console.log(JSON.stringify(localStorageUser));
        } else {
            switch (localStorageUser.tipo) {
                case "professor":
                    window.location.href = "../../../../professor/perfil/index.html";
                    break;

                case "instituição":
                    window.location.href = "../../../../instituicao/index.html";
                    break;

                case "avaliador":
                    window.location.href = "../../../../home/index.html";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../../../../home/index.html";
            }
        }
    } else {
        window.location.href = "../../../../home/login/index.html";
    }
};

window.onload = checkLogin();