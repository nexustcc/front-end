"use strict";

let localStorageUser = [];

const inputDataValidadeCartao = document.getElementById("input_validade");
const inputNumeroCartao = document.getElementById("input_numero_do_cartao");

$(document).ready(function () {
    $(inputDataValidadeCartao).mask("99/99");
});

inputNumeroCartao.addEventListener("input", function (e) {
    e.target.value = e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
});

const isInputNumber = (evt) => {
    let char = String.fromCharCode(evt.which);
    if (!/[0-9]/.test(char)) {
        evt.preventDefault();
    }
};

async function getInfoCartao() {
    const url = `http://localhost:3000/cartao/listarCartao/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const cartao = await dados.json();
    exibirDados(cartao.cartao[0]);
}

const converterData = (dataValidade) => {
    let dataValidadeSlipt = dataValidade.split(["T"]);
    let dataValidadeArray = dataValidadeSlipt[0];
    let dataValidadeArraySplit = dataValidadeArray.split(["-"]);
    let dataValidadeFinal =
        dataValidadeArraySplit[1] + "/" + dataValidadeArraySplit[0];
    let a = dataValidadeFinal.split(["/"]);
    let b = a[1].match(/.{1,2}/g);
    let c = a[0] + "/" + b[1];
    return c;
};

function exibirDados(cartao) {
    document.getElementById("input_numero_do_cartao").value = cartao.numero;
    document.getElementById("input_nome_do_cartao").value = cartao.nomeNoCartao;
    document.getElementById("input_validade").value = converterData(
        cartao.dataValidade
    );
    document.getElementById("input_cvv").value = cartao.cvv;
}

const converterDataBanco = (inputValue) => {
    let splitedDate = inputValue.split(["/"]);
    let dateString = "01/" + splitedDate[0] + "/" + "20" + splitedDate[1];
    let splitedDateString = dateString.split(["/"]);
    let data =
        splitedDateString[2] +
        "-" +
        splitedDateString[1] +
        "-" +
        splitedDateString[0];
    return data;
};

async function editarInstituicao(nome, dataValidade, cvv, numero) {
    event.preventDefault();

    const cartao = {
        nomeNoCartao: document
            .getElementById("input_nome_do_cartao")
            .value.toString(),
        dataValidade: converterDataBanco(
            document.getElementById("input_validade").value.toString()
        ),
        cvv: parseInt(document.getElementById("input_cvv").value),
        numero: document.getElementById("input_numero_do_cartao").value.toString(),
    };

    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartao),
    };

    fetch(
        `http://localhost:3000/cartao/editarCartao/${localStorageUser.idTipo}`,
        config
    ).then(() => (window.location.href = "../index.html"));
}

const validacao = () => {
    event.preventDefault();

    editarInstituicao(
        document.getElementById("input_nome_no_cartao").value,
        converterDataBanco(document.getElementById("input_validade").value),
        document.getElementById("input_cvv").value,
        document.getElementById("input_numero_do_cartao").value
    );
};

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../../../home/login/";
};

const checkLogin = () => {
    if(localStorage.user != undefined){
        localStorageUser = JSON.parse(localStorage.user)
        if(localStorageUser.tipo == 'instituição'){    
            getInfoCartao()
            document.getElementById('nomeInstituicao').innerHTML = localStorageUser.nome
        } 
        else{
            switch (localStorageUser.tipo) {
                case 'professor':
                    window.location.href = '../../../../professor/perfil/'
                  break;
      
                case 'aluno':
                    window.location.href = '../../../../aluno/perfil/'
                  break;
      
                case 'avaliador':
                    window.location.href = '../../../../home/'
                    alert('O acesso dos Avaliadores a plataforma é feito pelo APP')
                  break;
      
                default:
                    window.location.href = '../../../../home/'
            }
        }
    } else{
        window.location.href = '../home/login/index.html'
    }
}

window.onload = checkLogin();