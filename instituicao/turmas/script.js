"use strict"

function showModal() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function exitModal() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalGrupos() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-grupos").style.display = "flex";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function exitModalGrupos() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-grupos").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalExcluir() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";
}

function exitModalExcluir() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-excluir").style.display = "none";
}

function exibirDados(turma) {
    const container = document.getElementById("ul_container");

    for (var i = 0; i < turma.length; i++) {
        var turmaJson = {
            idturma: turma[i].idCurso,
            nome: turma[i].nome,
        };

        console.log(turmaJson);

        const curso = document.createElement("li");
        curso.classList = "list-group-item li";
        curso.id = "li";

        curso.innerHTML += `
        <li id="li" class="list-group-item li">
                    <div id="turma">
                        <p class="curso">Curso:</p>
                        <img id="book" src="./img/icone_turma.svg" alt="book">
                        <p class="nome">${turma[i].nome}</p>
                    </div>
                    <div class="button">
                        <button onclick="showModalTurma(${turma[i].idturma})" class="terceiro_botao">SOBRE A TURMA</button>
                        <button onclick="showModalGrupos(${turma[i].idturma})" class="primeiro_botao">GRUPOS DE TCC</button>
                        <button onclick="showModalExcluir(${turma[i].idturma})" class="quarto_botao">EXCLUIR</button>
                    </div>
                </li>

                <img src="./img/Line.svg" alt="">
        `;

        container.appendChild(turma);
    }
}

function showModalTurma() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "flex";
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".modal-membros").style.display = "none";
}

function exitModalTurma() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalAddMembros() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "flex";
}

function exitModalAddMembros() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-add-membros").style.display = "none";
}

function showModalEditar() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
}

function exitModalEditar() {
    document.querySelector(".bg").style.display = "none";
    document.querySelector(".modal-editar").style.display = "none";
}


function showModalMembros() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-membros").style.display = "flex";
}

function showModalEditar() {
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-turma").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
}

function resetForm() {
    document.getElementById("modal").reset();
}