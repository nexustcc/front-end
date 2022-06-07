"use strict";

let localStorageUser = [];

const exibirDados = (avaliacao) => {
    for (var i = 0; i < avaliacao.length; i++) {
        const avaliador = document.getElementById("listAvaliador");

        avaliador.innerHTML += ` <li class='${i == 0 ? "ativo" : ""}' id='avaliacao-${avaliacao[i].idAvaliacao}' onclick="exibirDadosAvaliacao(${avaliacao[i].idAvaliacao})">AVALIAÇÃO ${i + 1}</li>`

        let teste = [];
        teste += document.getElementById("observacoes").value = avaliacao[i].observacoes;
    }
}

const exibirDadosAvaliacao = (idAvaliacao) => {
    const dadosAvaliacao = avaliacao.avaliacoes.find( (avaliacao) => avaliacao.idAvaliacao == idAvaliacao );
    const formCamposInputs = document.querySelectorAll(".formCampos input[type='radio']");

    formCamposInputs.forEach((input) => {
        const container = input.parentElement.parentElement;
        const nomeCampo = container.querySelector("p").id;
        const resultado = Object.entries(dadosAvaliacao).find( ([campo, valor]) => campo == nomeCampo );

        container.querySelector(`input[type='radio']#${resultado[1]}`).checked = true;
    });
    document.getElementById("observacoes").value = dadosAvaliacao.observacoes;
}

let avaliacao = [];

const getArrayAvaliacao = async () =>  {
    const url = `http://localhost:3000/aluno/listarAvaliacao/${localStorageUser.idTipo}`;

    const dados = await fetch(url);
    avaliacao = await dados.json();

    const container = document.querySelector('.container')

    if (avaliacao.avaliacoes.length == 0) {
        container.innerHTML = 
        '<h1 style="font-size: 65px; color: #E3E3E3; font-weight: 900; text-align: center">O RELATÓRIO DO SEU PROJETO AINDA NÃO ESTÁ DISPONÍVEL</h1>'

    } else {
        container.innerHTML = 
        `
            <div class="coninerCentralizado">
                <div class="tipo_avaliador">
                    <ul id="listAvaliador"></ul>
                </div>

                <form class="form">
                    <div class="criterios">
                        <h1 class="criterioText">CRITÉRIOS</h1>
                        <h1 class="ruim">RUIM</h1>
                        <h1 class="regular">REGULAR</h1>
                        <h1 class="otimo">ÓTIMO</h1>
                    </div>
                    <div class="criteriosText">
                        <div class="clareza">
                            <form class="formCampos" action=""></form>
                        </div>
                        <div class="clareza">
                            <form class="formCampos" action="">
                                <p id="clareza">CLAREZA</p>
                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="objetividade">
                            <form class="formCampos" action="">
                                <p id="objetividade">OBJETIVIDADE</p>
                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="fluencia">
                            <form class="formCampos" action="">
                                <p id="fluenciaExposicaoIdeias">
                                    FLUÊNCIA NA EXPOSIÇÃO DE IDEIAS
                                </p>
                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="dominio">
                            <form class="formCampos" action="">
                                <p id="dominioConteudo">DOMÍNIO DO CONTEÚDO</p>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="capacidadeComunicar">
                            <form class="formCampos" action="">
                                <p id="capacidadeComunicacao">CAPACIDADE DE COMUNICAÇÃO</p>
                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="argumentacao">
                            <form class="formCampos" action="">
                                <p id="argumentacao">ARGUMENTAÇÃO</p>
                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="organizacao">
                            <form class="formCampos" action="">
                                <p id="organizacao">ORGANIZAÇÃO DA APRESENTAÇÃO</p>
                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="recursosUtilizados">
                            <form class="formCampos" action="">
                                <p id="aproveitamentoRecursos">APROVEITAMENTO DOS RECURSOS</p>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="posturaIntegrantes">
                            <form action="" class="formCampos">
                                <p id="posturaIntegrantes">POSTURA DOS INTEGRANTES</p>
                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="usoDoTempo">
                            <form class="formCampos" action="">
                                <p id="usoTempo">USO DO TEMPO</p>
                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="RUIM" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="REGULAR" />
                                </label>

                                <label class="form-control">
                                    <input type="radio" disabled name="radio" id="ÓTIMO" />
                                </label>
                            </form>
                        </div>

                        <div class="obsExtras">
                            <form action="">
                                <p>OBSERVAÇÕES</p>
                                <input type="text" name="observacoes" id="observacoes" />
                            </form>
                        </div>
                    </div>
                </form>

            </div>
        `
        exibirDados(avaliacao.avaliacoes);
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

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../../../home/login";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "aluno") {
            getArrayAvaliacao()
            document.getElementById("nomeGrupoAluno").innerHTML = localStorageUser.nome;
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