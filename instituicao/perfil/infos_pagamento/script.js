"use strict";

let localStorageUser = [];

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
    let dataValidadeFinal = dataValidadeArraySplit[1] + "/" + dataValidadeArraySplit[0];
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
                    window.location.href = '../professor/perfil/index.html'
                  break;
      
                case 'aluno':
                    window.location.href = '../aluno/perfil/index.html'
                  break;
      
                case 'avaliador':
                    window.location.href = '../home/index.html'
                    alert('O acesso dos Avaliadores a plataforma é feito pelo APP')
                  break;
      
                default:
                    window.location.href = '../home/index.html'
              }
        }
    } else{
        window.location.href = '../home/login/index.html'
    }
}

window.onload = checkLogin();