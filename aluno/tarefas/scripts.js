"use strict";

let localStorageUser = [];

let tiposTarefa = document.querySelectorAll(".header ul li");
const tarefaIndividual = document.getElementById('tarefa-individual');
const tarefaGeral = document.getElementById('tarefa-geral');
const divTarefaIndividual = document.querySelector('.container-geral');
const divTarefaGeral = document.querySelector('.container-geral-tarefas-gerais');

tiposTarefa.forEach((tipoTarefa) => {
    tipoTarefa.addEventListener("click", () => {
        tiposTarefa.forEach((tipoTarefa) => {
            tipoTarefa.classList.remove("ativo");
        });
        tipoTarefa.classList.add("ativo");
    });
});

tarefaIndividual.addEventListener('click', function(){

    divTarefaGeral.style.display = 'none';
    divTarefaIndividual.style.display = 'flex';
})

tarefaGeral.addEventListener('click', function(){
    console.log('a')
    divTarefaIndividual.style.display = 'none';
    divTarefaGeral.style.display = 'flex';
    
})



const showModalCriarTopico = () => document.querySelector('.modal-add-topico').style.display = 'flex';
const exitModalCriarTopico = () => document.querySelector('.modal-add-topico').style.display = 'none';

const criarTopicoIndividual = async () => {
    event.preventDefault();

    const topico = { "nome": document.getElementById('inputNomeTopicoIndividual').value }

    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(topico),
    };
    
    fetch(`http://localhost:3000/tarefas/cadastrarTopicoAluno/${localStorageUser.idTipo}`, config).then(() => location.reload());
}
const excluirTopico = async (idTopico) => {
    event.preventDefault();

    var config = {
        method: 'DELETE',
        redirect: 'follow'
    };
              
    fetch(`http://localhost:3000/tarefas/deletarTopicoAluno/${idTopico}`, config).then(() => location.reload());
}


const modalCriarTarefa = (modal) => modal.style.display = 'flex'
const exitModalCriarTarefa = (modal) => {
    event.preventDefault();
    modal.style.display = 'none'
}



const showModalInfosTarefa = (idTarefa, status, prioridade, nome, dataInicio, dataConclusao, idTopico, idCor, idAluno) => {
    document.querySelector('.bg').style.display = 'flex'
    document.getElementById('modalInfosTarefaIndividual').style.display = 'flex'

    document.getElementById('nome-tarefa-individual').value = nome
}

const exitModalInfosTarefa = () => {
    event.preventDefault()
    document.querySelector('.bg').style.display = 'none'
    document.getElementById('modalInfosTarefaIndividual').style.display = 'none'
}

const alterarStatusTarefaIndividual = (div, idTarefa) => {

    if(div.firstElementChild.style.height == '0px'){
        event.preventDefault();
        const status = { status: 'Em Andamento' };
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(status),
        }

        const url = `http://localhost:3000/tarefas/editarStatusTarefaIndividual/${idTarefa}`
        fetch(url, config).then(() => location.reload());

    } else if(div.firstElementChild.style.height == '12px') {
        event.preventDefault();
        const status = { status: 'Concluída' };
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(status),
        }
        const url = `http://localhost:3000/tarefas/editarStatusTarefaIndividual/${idTarefa}`
        fetch(url, config).then(() => location.reload());
    }
}




const showModalOpcoesTopico = (iconOpcoesTopico, modalOpcoesTopicos) => {

    if (iconOpcoesTopico.src == 'http://127.0.0.1:5500/aluno/tarefas/img/icon-options.svg') {
        iconOpcoesTopico.src = 'img/icon-x.svg';
    } else {
        iconOpcoesTopico.src = 'img/icon-options.svg';
    } 

    if (modalOpcoesTopicos.style.display == 'flex') {
        modalOpcoesTopicos.style.display = 'none';
    } else {
        modalOpcoesTopicos.style.display = 'flex';
    }

    if (document.getElementById('modalAlterarCorTopico1').style.display == 'flex') {
        document.getElementById('modalAlterarCorTopico1').style.display = 'none';
    }
};

const showModalOpcoesTarefa = (iconOpcoesTarefa, modalOpcoesTarefa) => {
    if (iconOpcoesTarefa.src == 'http://127.0.0.1:5500/aluno/tarefas/img/icon-options.svg') {
        iconOpcoesTarefa.src = 'img/icon-x.svg';
    } else {
        iconOpcoesTarefa.src = 'img/icon-options.svg';
    } 

    if (modalOpcoesTarefa.style.display == 'flex') {
        modalOpcoesTarefa.style.display = 'none';
    } else {
        modalOpcoesTarefa.style.display = 'flex';
    }    

    if (document.getElementById('modalAlterarCorTarefa1').style.display == 'flex') {
        document.getElementById('modalAlterarCorTarefa1').style.display = 'none';
    }
}



const showModalAlterarCorTopico = (modal, idCor, idTopico) => {
    if (modal.style.display == 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }

    console.log(`li-amarelo${'TopicoIndividual' + idTopico}`)

    document.getElementById(`li-amarelo${'TopicoIndividual' + idTopico}`).style.backgroundColor = ''
    document.getElementById(`li-azul${'TopicoIndividual' + idTopico}`).style.backgroundColor = ''
    document.getElementById(`li-verde${'TopicoIndividual' + idTopico}`).style.backgroundColor = ''
    document.getElementById(`li-vermelho${'TopicoIndividual' + idTopico}`).style.backgroundColor = ''
    document.getElementById(`li-laranja${'TopicoIndividual' + idTopico}`).style.backgroundColor = ''
    document.getElementById(`li-roxo${'TopicoIndividual' + idTopico}`).style.backgroundColor = ''
    document.getElementById(`li-rosa${'TopicoIndividual' + idTopico}`).style.backgroundColor = ''
    document.getElementById(`li-preto${'TopicoIndividual' + idTopico}`).style.backgroundColor = ''

    switch (idCor) {
        case 1: document.getElementById(`li-amarelo${'TopicoIndividual' + idTopico}`).style.backgroundColor = '#dedede'
        break;

        case 2: document.getElementById(`li-azul${'TopicoIndividual' + idTopico}`).style.backgroundColor = '#dedede'
        break;

        case 3: document.getElementById(`li-verde${'TopicoIndividual' + idTopico}`).style.backgroundColor = '#dedede'
        break;

        case 4: document.getElementById(`li-vermelho${'TopicoIndividual' + idTopico}`).style.backgroundColor = '#dedede'
        break;

        case 5: document.getElementById(`li-laranja${'TopicoIndividual' + idTopico}`).style.backgroundColor = '#dedede'
        break;

        case 6: document.getElementById(`li-roxo${'TopicoIndividual' + idTopico}`).style.backgroundColor = '#dedede'
        break;

        case 7: document.getElementById(`li-rosa${'TopicoIndividual' + idTopico}`).style.backgroundColor = '#dedede'
        break;

        case 8: document.getElementById(`li-preto${'TopicoIndividual' + idTopico}`).style.backgroundColor = '#dedede'
        break;
    }
}
const alterarCorTopico = (idCor, idTopico) => {
    event.preventDefault();

    const topico = {
        // "nome": "",
        "idCor": idCor
    }

    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(topico),
    };

    const url = `http://localhost:3000/tarefas/editarTopicoAluno/${idTopico}`

    fetch(url, config).then(() => location.reload());
}
const hexColorTopico = (idCor) => {
    switch (idCor) {
        case 1: return '#f8c71a'      
        case 2: return '#06376a'
        case 3: return '#3d963b'           
        case 4: return '#dd1313'
        case 5: return '#f98418'       
        case 6: return '#9c4eda'
        case 7: return '#ea5eed'         
        case 8: return '#000000'
    }
}



const criarTarefaIndividual = async (idTopico) => {
    event.preventDefault();

    const tarefa = {
        "nome": document.getElementById(`input-nome-criar-tarefa-individualTopicoIndividual${idTopico}`).value,
        "dataConclusao": document.getElementById(`input-data-criar-tarefa-individualTopicoIndividual${idTopico}`).value,
        "idTopicoAluno": idTopico
    }

    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tarefa),
    };
    
    await fetch(`http://localhost:3000/tarefas/cadastrarTarefa/${localStorageUser.idTipo}`, config).then(() => location.reload());
}


const showModalAlterarCorTarefa = () => {
    let modalAlterarCorTarefa = document.getElementById('modalAlterarCorTarefa1');

    
    if (modalAlterarCorTarefa.style.display == 'flex') {
        modalAlterarCorTarefa.style.display = 'none';
    } else {
        modalAlterarCorTarefa.style.display = 'flex';
    }
}

const showCheckboxes = () => {
    let checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

const showModalInfosTarefaGeral = () => {

    let modalInfosTarefaGeral = document.getElementById('modalInfosTarefaGeral1');
    let background = document.querySelector('.bg');

    modalInfosTarefaGeral.style.display = 'flex';
    background.style.display = 'flex';
}

const converterData = (dataBanco) => {
    const dataSplit = dataBanco.split(['T'])[0]
    const dataFormatoEstrangeiro = dataSplit.split(['-'])
    return dataFormatoEstrangeiro[2] + '/' + dataFormatoEstrangeiro[1] + '/' + dataFormatoEstrangeiro[0]
}

const statusTarefaIndividual = (status) => {
    if(status == 'Não Iniciada'){
        return '0px'
    } else if(status == 'Em Andamento'){
        return '12px'
    } else {
        return '30px'
    }
}

const prioridadeTarefa = (prioridadeTarefa) => {
    switch (prioridadeTarefa) {
        case 'Baixa':
            return 'calendario.svg'

        case 'Média':
            return 'calendario.svg'

        case 'Importante':
            return 'alerta.svg'

        case 'Urgente':
            return 'urgente.svg'
    
        default:
            break;
    }
}

const duplicarTarefaIndividual = async (idTarefa) => {
    event.preventDefault();

    const tarefa = {
        "idTarefa": idTarefa
    }

    const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tarefa),
    };
    
    await fetch('http://localhost:3000/tarefas/duplicarTarefa/', config).then(() => location.reload());
}

const moverTarefaIndividual = async (idTarefa) => {
    const container = document.getElementById(`mover-tarefa-individual-${idTarefa}`)

    if(container.firstElementChild == null || container.firstElementChild == ''){

        container.style.display = 'flex'
    
        const url = `http://localhost:3000/tarefas/listarTopicoAluno/${localStorageUser.idTipo}`
        const dadosTopicos = await fetch(url);
        const dadosTopicosJson = await dadosTopicos.json();
    
        const containerUl = document.createElement('ul')
    
        for (let t = 0; t < dadosTopicosJson.topicos_aluno.length; t++) {
            const liTopico = document.createElement('li')
    
            liTopico.innerHTML +=
            `
                <img src="./img/icon-topico.svg" alt="topico" >
                ${dadosTopicosJson.topicos_aluno[t].nome}
            `
    
            containerUl.appendChild(liTopico)
        }
    
        container.appendChild(containerUl)
    } else {
        container.innerHTML = ''
        container.style.display = 'none'
    }

}

const excluirTarefaIndividual = async (idTarefa) => {
    const url = `http://localhost:3000/tarefas/deletarTarefa/${idTarefa}` 

    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
              
    fetch(url, requestOptions).then(() => location.reload());
}




const exibirTarefasIndividuais = async (tarefasIndividuais) => {
    const container = document.getElementById('container-tarefas')

    for (let t = 0; t < tarefasIndividuais.length; t++) {
        const topico = document.createElement('div')
        topico.classList = 'topico'
        topico.id = tarefasIndividuais[t].idTopico
        
        let corTopico = hexColorTopico(tarefasIndividuais[t].idCor)

        topico.innerHTML += `
            <div class="header-topico">
                <h2 id="nomeTopico">${tarefasIndividuais[t].nomeTopico}</h2>
                <img onclick="showModalOpcoesTopico(iconOpcoesTopico${'tarefaIndividual' + tarefasIndividuais[t].idTopico}, modalOpcoesTopico${'tarefaIndividual' + tarefasIndividuais[t].idTopico})" id="iconOpcoesTopico${'tarefaIndividual' + tarefasIndividuais[t].idTopico}" src="img/icon-options.svg" alt="opções">
            </div>

            <div class="modal-opcoes-topico" id="modalOpcoesTopico${'tarefaIndividual' + tarefasIndividuais[t].idTopico}">
                <ul>
                    <li onclick="showModalAlterarCorTopico(modalAlterarCorTopico${'TarefaIndividual' + tarefasIndividuais[t].idTopico}, ${tarefasIndividuais[t].idCor}, ${tarefasIndividuais[t].idTopico})"><img src="img/alterar-cor.svg" alt="cor">Definir cor padrão<img src="img/abrir.svg" alt="abrir"></li>
                    <div class="modal-alterar-cor-topico" id="modalAlterarCorTopico${'TarefaIndividual' + tarefasIndividuais[t].idTopico}">
                        <ul>
                            <li id='li-amarelo${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' onclick="alterarCorTopico(1, ${tarefasIndividuais[t].idTopico})"> <img src="./img/amarelo.svg" alt=""> Amarelo</li>
                            <li id='li-azul${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' onclick="alterarCorTopico(2, ${tarefasIndividuais[t].idTopico})"> <img src="./img/azul.svg" alt=""> Azul</li>
                            <li id='li-verde${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' onclick="alterarCorTopico(3, ${tarefasIndividuais[t].idTopico})"> <img src="./img/verde.svg" alt=""> Verde</li>
                            <li id='li-vermelho${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' onclick="alterarCorTopico(4, ${tarefasIndividuais[t].idTopico})"> <img src="./img/vermelho.svg" alt=""> Vermelho</li>
                            <li id='li-laranja${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' onclick="alterarCorTopico(5, ${tarefasIndividuais[t].idTopico})"> <img src="./img/laranja.svg" alt=""> Laranja</li>
                            <li id='li-roxo${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' onclick="alterarCorTopico(6, ${tarefasIndividuais[t].idTopico})"> <img src="./img/roxo.svg" alt=""> Roxo</li>
                            <li id='li-rosa${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' onclick="alterarCorTopico(7, ${tarefasIndividuais[t].idTopico})"> <img src="./img/rosa.svg" alt=""> Rosa</li>
                            <li id='li-preto${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' onclick="alterarCorTopico(8, ${tarefasIndividuais[t].idTopico})"> <img src="./img/preto.svg" alt=""> Preto</li>
                        </ul>
                    </div>

                    <li id="liExcluirTopico" onclick='excluirTopico(${tarefasIndividuais[t].idTopico})'><img src="img/excluir.svg" alt="excluir">Excluir</li>
                </ul>
            </div>


            <button class="botao-add-topico" onclick="modalCriarTarefa(modalCriarTarefa${'tarefaIndividual' + tarefasIndividuais[t].idTopico})"><img src="./img/mais.svg" alt="">ADICIONAR TAREFA</button>

            <form class="modal-add-tarefa" id='modalCriarTarefa${'tarefaIndividual' + tarefasIndividuais[t].idTopico}' onsubmit='criarTarefaIndividual(${tarefasIndividuais[t].idTopico})'>
                <input id='input-nome-criar-tarefa-individual${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' type="text" maxlength="255" placeholder="Insira o nome da tarefa" />
                <input id='input-data-criar-tarefa-individual${'TopicoIndividual' + tarefasIndividuais[t].idTopico}' type="date" placeholder="Insira uma data de conclusão"/>

                <div class="buttons-tarefa">
                    <button class="botao-cancelar-tarefa" onclick="exitModalCriarTarefa(modalCriarTarefa${'tarefaIndividual' + tarefasIndividuais[t].idTopico})">CANCELAR</button>
                    <button class="botao-criar-tarefa" type="submit">CRIAR</button>
                </div>
            </form>
        `
        
        container.appendChild(topico)

        for (let i = 0; i < tarefasIndividuais[t].tarefasDoTopico.length; i++) {
            const tarefa = document.createElement('div')
            tarefa.classList = 'tarefa'
            tarefa.id = `tarefaIndividual${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa}`

            tarefa.style.border = `3px solid ${corTopico}`

            tarefa.innerHTML += `
                <div class="header-tarefa">
                    <div class="progress" id="divStatusTarefaIndividual${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa}" onclick="alterarStatusTarefaIndividual(divStatusTarefaIndividual${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa}, ${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa})" style="border: 3px solid ${corTopico}">
                        <div class="progress-bar" id="imgStatusTarefaIndividual${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa}" style="height: ${statusTarefaIndividual(tarefasIndividuais[t].tarefasDoTopico[i].status)}; background-color: ${corTopico}"></div>
                    </div>

                    <p id="nomeTarefa" onclick="showModalInfosTarefa(${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa})">
                        ${tarefasIndividuais[t].tarefasDoTopico[i].nome}
                    </p>
                    
                    <img onclick="showModalOpcoesTarefa(iconOpcoesTarefaIndividual${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa}, modalOpcoesTarefaIndividual${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa})" id="iconOpcoesTarefaIndividual${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa}" src="img/icon-options.svg" alt="opções">
                </div>


                <div class="modal-opcoes-tarefa" id="modalOpcoesTarefaIndividual${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa}">
                    <ul>
                        <li onclick="duplicarTarefaIndividual(${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa})"> <img src="img/duplicar.svg" alt="duplicar"> Duplicar </li>
                        <li onclick="moverTarefaIndividual(${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa})"> <img src="img/mover.svg" alt="mover"> Mover para <img src="img/abrir.svg" alt="abrir"> </li>
                        <div class="modal-alterar-cor-topico mover-para" id="mover-tarefa-individual-${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa}"> </div>

                        <li onclick="excluirTarefaIndividual(${tarefasIndividuais[t].tarefasDoTopico[i].idTarefa})"> <img src="img/excluir.svg" alt="excluir"> Excluir </li>
                    </ul>
                </div>

                <div class="prioridade-tarefa">
                    <img src=./img/${prioridadeTarefa(tarefasIndividuais[t].tarefasDoTopico[i].prioridade)} alt="">
                    <p id="dataConclusaoTarefa">${converterData(tarefasIndividuais[t].tarefasDoTopico[i].dataConclusao)}</p>
                </div>
            `

            topico.appendChild(tarefa)
        }
    }
}

const getTarefas = async () => {
    const url = `http://localhost:3000/tarefas/listarTarefas/${localStorageUser.idTipo}`;
    const dadosTarefasIndividuais = await fetch(url);
    const tarefasIndividuais = await dadosTarefasIndividuais.json();
    exibirTarefasIndividuais(tarefasIndividuais);
};


const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "aluno") {
            getTarefas();
            document.getElementById("nomeAluno").innerHTML = localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "professor":
                    window.location.href = "../../professor/perfil/index.html";
                    break;

                case "instituição":
                    window.location.href = "../../instituicao/index.html";
                    break;

                case "avaliador":
                    window.location.href = "../../home/index.html";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../home/index.html";
            }
        }
    } else {
        window.location.href = "../../home/index.html";
    }
};

window.onload = checkLogin();