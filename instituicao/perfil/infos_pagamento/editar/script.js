"use strict";

async function getInfoCartao() {
    const idInstituicao = 11;

    const url = `http://localhost:3000/cartao/listarCartao/${idInstituicao}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const cartao = await dados.json();
    exibirDados(cartao.response[0]);
}

const converterData = (dataValidade) => {
    let dataValidadeSlipt = dataValidade.split(['T'])
    let dataValidadeArray = dataValidadeSlipt[0]
    let dataValidadeArraySplit = dataValidadeArray.split(['-'])
    let dataValidadeFinal = dataValidadeArraySplit[1] + '/' + dataValidadeArraySplit[0]
    return dataValidadeFinal
}

function exibirDados(cartao) {
    document.getElementById("input_numero_do_cartao").value = cartao.numero;
    document.getElementById("input_nome_no_cartao").value = cartao.nomeNoCartao;
    document.getElementById("input_validade").value = converterData(cartao.dataValidade);
    document.getElementById("input_cvv").value = cartao.cvv;
}

const converterDataBanco = (inputValue) => {
    let splitedDate = inputValue.split(['/'])
    let dateString = '01/' + splitedDate[0] + '/20' + splitedDate[1];
    let splitedDateString = dateString.split(['/']);
    let data = splitedDateString[2]+'-'+splitedDateString[1]+'-'+splitedDateString[0];
    return data;
}

async function editarInstituicao(){
    event.preventDefault();

    const idInstituicao = 11;

    const cartao = {
        "nomeNoCartao": document.getElementById("input_nome_no_cartao").value,
        "dataValidade": converterDataBanco(document.getElementById("input_validade").value),
        "cvv": document.getElementById("input_cvv").value,
        "numero": document.getElementById("input_numero_do_cartao").value  
    }

    console.log(cartao)

    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartao)
    }
    
    fetch(`http://localhost:3000/cartao/editarCartao/${idInstituicao}`, config)
        .then(() => window.location.href = "../index.html")
}



window.onload = getInfoCartao();