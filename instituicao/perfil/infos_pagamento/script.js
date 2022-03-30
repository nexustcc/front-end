"use strict";

async function getInfoCartao() {
    let idInstituicao = 1;

    const url = `http://localhost:3000/cartao/listarCartao/${idInstituicao}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const cartao = await dados.json();
    exibirDados(cartao.response[0]);
}

const converterData = (dataValidade) => {
    let dataValidadeSlipt = dataValidade.split(["T"]);
    let dataValidadeArray = dataValidadeSlipt[0];
    let dataValidadeArraySplit = dataValidadeArray.split(["-"]);
    let dataValidadeFinal =
        dataValidadeArraySplit[1] + "/" + dataValidadeArraySplit[0];
    return dataValidadeFinal;
};

function exibirDados(cartao) {
    document.getElementById("input_numero_do_cartao").value = cartao.numero;
    document.getElementById("input_nome_no_cartao").value = cartao.nomeNoCartao;
    document.getElementById("input_validade").value = converterData(
        cartao.dataValidade
    );
    document.getElementById("input_cvv").value = cartao.cvv;
}

window.onload = getInfoCartao();