"use strict";

const inputDataValidadeCartao = document.getElementById('input_validate');
const inputNumeroCartao = document.getElementById('input_numero_do_cartao');

$(document).ready(function(){        
    $(inputDataValidadeCartao).mask('99/99');
});

inputNumeroCartao.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

const isInputNumber = (evt) =>{
    let char = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(char))) {
        evt.preventDefault();
    }
}

async function getInfoCartao() {
    let idInstituicao = 1;

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
    console.log(inputValue)
    let splitedDate = inputValue.split(['/'])
    console.log(splitedDate)
    let dateString = '01/' + splitedDate[0] + '/' + splitedDate[1];
    console.log(dateString)
    let splitedDateString = dateString.split(['/']);
    console.log(splitedDateString)
    let data = splitedDateString[2]+'-'+splitedDateString[1]+'-'+splitedDateString[0];
    console.log(data)
    return data;
}

async function editarInstituicao(nome, dataValidade, cvv, numero){
    event.preventDefault();

    let idInstituicao = 1;

    // const cartao = {
    //     "nomeNoCartao": "teste",
    //     "dataValidade": "2023-01-01",
    //     "cvv": 999,
    //     "numero": "teste"  
    // }

    const cartao = {
        "nomeNoCartao": nome.toString(),
        "dataValidade": dataValidade.toString(),
        "cvv": parseInt(cvv),
        "numero": numero.toString()
    }

    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartao)
    }

    console.log(cartao)
    
    fetch(`http://localhost:3000/cartao/editarCartao/${idInstituicao}`, config)
        .then(() => window.location.href = "../index.html")
}

const validacao = () => {
    event.preventDefault()
    
    editarInstituicao(
        document.getElementById("input_nome_no_cartao").value,
        converterDataBanco(document.getElementById("input_validade").value),
        document.getElementById("input_cvv").value,
        document.getElementById("input_numero_do_cartao").value
    )
}



window.onload = getInfoCartao();