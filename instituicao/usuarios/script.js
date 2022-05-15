let localStorageUser;


const changeModalEditar = async(id, tipo) => {
    document.querySelector(".modal-listagem").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";


    if (tipo == 'PROFESSOR') {
        console.log(id, tipo)
    }

    // let input_nome = document.getElementById('view_user_nome')
    // let input_email = document.getElementById('view_user_email')
    // let input_senha = document.getElementById('view_user_senha')
    // let input_tipo = document.getElementById('view_user_tipo')
    // let input_curso = document.getElementById('view_user_curso')
    // let input_turma = document.getElementById('view_user_turma')
    // let input_grupo = document.getElementById('view_user_grupo') 

    // if(tipo == 'PROFESSOR'){
    //     const url = `http://localhost:3000/instituicao/membros/listarProfessor/${id}`

    //     fetch(url).then((response) => response.json);
    //     const dados = await fetch(url);
    //     const professor = await dados.json();

    //     input_nome.placeholder = ''
    //     input_email.placeholder = ''
    //     input_senha.placeholder = ''
    //     input_tipo.placeholder = ''
    //     input_curso.placeholder = ''
    //     input_turma.placeholder = ''
    //     input_grupo.placeholder = ''

    //     input_nome.placeholder = professor.professor.nome
    //     input_email.placeholder = professor.professor.email
    //     input_senha.placeholder = professor.professor.senha
    //     input_tipo.placeholder = tipo

    //     for (let c = 0; c < professor.cursos.length; c++) {
    //         if(professor.cursos.length == 0 || professor.cursos.length == null){
    //             input_curso.placeholder = 'Professor sem cursos'
    //         }

    //         input_curso.placeholder += professor.cursos[c].nome + " | "
    //     }

    //     for (let t = 0; t < professor.turmas.length; t++) {
    //         if(professor.turmas.length == 0 || professor.turmas.length == null){
    //             input_turma.placeholder = 'Professor sem turmas'
    //         }

    //         input_turma.placeholder += professor.turmas[t].nome + " | "
    //     }

    //     for (let g = 0; g < professor.grupos.length; g++) {
    //         if(professor.grupos.length == 0 || professor.grupos.length == null){
    //             input_grupo.placeholder = 'Professor sem grupos'
    //         }

    //         input_grupo.placeholder += professor.grupos[g].nomeProjeto + " | "
    //     }

    // } else if (tipo == 'ALUNO'){
    //     const url = `http://localhost:3000/instituicao/membros/listarAluno/${id}`

    //     fetch(url).then((response) => response.json);
    //     const dados = await fetch(url);
    //     const aluno = await dados.json();

    //     input_nome.placeholder = ''
    //     input_email.placeholder = ''
    //     input_senha.placeholder = ''
    //     input_tipo.placeholder = ''
    //     input_curso.placeholder = ''
    //     input_turma.placeholder = ''
    //     input_grupo.placeholder = ''

    //     input_nome.placeholder = aluno.aluno.nome
    //     input_email.placeholder = aluno.aluno.email
    //     input_senha.placeholder = aluno.aluno.senha
    //     input_tipo.placeholder = tipo
    //     input_curso.placeholder = aluno.curso.nome
    //     input_turma.placeholder = aluno.turma.nome
    //     input_grupo.placeholder = aluno.grupo.nomeProjeto

    // } else{
    //     const url = `http://localhost:3000/instituicao/membros/listarAvaliador/${id}`

    //     fetch(url).then((response) => response.json);
    //     const dados = await fetch(url);
    //     const avaliador = await dados.json();

    //     input_nome.placeholder = ''
    //     input_email.placeholder = ''
    //     input_senha.placeholder = ''
    //     input_tipo.placeholder = ''
    //     input_curso.placeholder = ''
    //     input_turma.placeholder = ''
    //     input_grupo.placeholder = ''

    //     input_nome.placeholder = avaliador.avaliador.nome
    //     input_email.placeholder = avaliador.avaliador.email
    //     input_senha.placeholder = avaliador.avaliador.senha
    //     input_tipo.placeholder = tipo
    //     input_curso.placeholder = avaliador.curso.nome
    //     input_turma.placeholder = avaliador.turma.nome

    //     for (let g = 0; g < avaliador.grupos.length; g++) {
    //         if(avaliador.grupos.length == 0 || avaliador.grupos.length == null){
    //             input_grupo.placeholder = 'Avalidor sem grupos'
    //         }

    //         input_grupo.placeholder += avaliador.grupos[g] + " | "
    //     }
    // }
}


const showModalListagem = async(id, tipo) => {
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".modal-listagem").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";

    const container_usuario = document.getElementById('container_usuario')
    const button_div = document.createElement("div");

    button_div.classList = "buttons";

    button_div.innerHTML += `
        <div class="col-md-3">
            <button class="primeiro_botao" type="button" onclick="exitModalListagem()"> CANCELAR </button>
        </div>

        <div class="col-md-3">
            <button id class="terceiro_botao" type="button" onclick="changeModalExcluir(${id, tipo})"> EXCLUIR </button>
        </div>

        <div class="col-md-6">
            <button class="segundo_botao" type="button" onclick="changeModalEditar(${id, tipo})"> EDITAR </button>
        </div>
    `;

    container_usuario.appendChild(button_div);


    let input_nome = document.getElementById('view_user_nome')
    let input_email = document.getElementById('view_user_email')
    let input_senha = document.getElementById('view_user_senha')
    let input_tipo = document.getElementById('view_user_tipo')
    let input_curso = document.getElementById('view_user_curso')
    let input_turma = document.getElementById('view_user_turma')
    let input_grupo = document.getElementById('view_user_grupo')

    if (tipo == 'PROFESSOR') {
        const url = `http://localhost:3000/instituicao/membros/listarProfessor/${id}`

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        const professor = await dados.json();

        input_nome.placeholder = ''
        input_email.placeholder = ''
        input_senha.placeholder = ''
        input_tipo.placeholder = ''
        input_curso.placeholder = ''
        input_turma.placeholder = ''
        input_grupo.placeholder = ''

        input_nome.placeholder = professor.professor.nome
        input_email.placeholder = professor.professor.email
        input_senha.placeholder = professor.professor.senha
        input_tipo.placeholder = tipo

        for (let c = 0; c < professor.cursos.length; c++) {
            if (professor.cursos.length == 0 || professor.cursos.length == null) {
                input_curso.placeholder = 'Professor sem cursos'
            }

            input_curso.placeholder += professor.cursos[c].nome + " | "
        }

        for (let t = 0; t < professor.turmas.length; t++) {
            if (professor.turmas.length == 0 || professor.turmas.length == null) {
                input_turma.placeholder = 'Professor sem turmas'
            }

            input_turma.placeholder += professor.turmas[t].nome + " | "
        }

        for (let g = 0; g < professor.grupos.length; g++) {
            if (professor.grupos.length == 0 || professor.grupos.length == null) {
                input_grupo.placeholder = 'Professor sem grupos'
            }

            input_grupo.placeholder += professor.grupos[g].nomeProjeto + " | "
        }

    } else if (tipo == 'ALUNO') {
        const url = `http://localhost:3000/instituicao/membros/listarAluno/${id}`

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        const aluno = await dados.json();

        input_nome.placeholder = ''
        input_email.placeholder = ''
        input_senha.placeholder = ''
        input_tipo.placeholder = ''
        input_curso.placeholder = ''
        input_turma.placeholder = ''
        input_grupo.placeholder = ''

        input_nome.placeholder = aluno.aluno.nome
        input_email.placeholder = aluno.aluno.email
        input_senha.placeholder = aluno.aluno.senha
        input_tipo.placeholder = tipo
        input_curso.placeholder = aluno.curso.nome
        input_turma.placeholder = aluno.turma.nome
        input_grupo.placeholder = aluno.grupo.nomeProjeto

    } else {
        const url = `http://localhost:3000/instituicao/membros/listarAvaliador/${id}`

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        const avaliador = await dados.json();

        input_nome.placeholder = ''
        input_email.placeholder = ''
        input_senha.placeholder = ''
        input_tipo.placeholder = ''
        input_curso.placeholder = ''
        input_turma.placeholder = ''
        input_grupo.placeholder = ''

        input_nome.placeholder = avaliador.avaliador.nome
        input_email.placeholder = avaliador.avaliador.email
        input_senha.placeholder = avaliador.avaliador.senha
        input_tipo.placeholder = tipo
        input_curso.placeholder = avaliador.curso.nome
        input_turma.placeholder = avaliador.turma.nome

        for (let g = 0; g < avaliador.grupos.length; g++) {
            if (avaliador.grupos.length == 0 || avaliador.grupos.length == null) {
                input_grupo.placeholder = 'Avalidor sem grupos'
            }

            input_grupo.placeholder += avaliador.grupos[g] + " | "
        }
    }
}


const exibirDadosGeral = (membros) => {
    const membros_container = document.getElementById('ul_membros')

    if (membros.length == 0) {
        const no_members_view = document.createElement("li");
        no_members_view.classList = "list-group-item li";

        no_members_view.innerHTML += `
            <li class="list-group-item li" onclick="showModalListagem(${membros.professores[m].idProfessor})">
                <p>Nenhum usuário cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
        membros_container.innerHTML = ''


        for (let m = 0; m < membros.professores.length; m++) {
            if (membros.professores[m].foto == null || membros.professores[m].foto == undefined) {
                membros.professores[m].foto = "uploads/fotopadrao.svg";
            }

            const professor_view = document.createElement("li");
            professor_view.classList = "list-group-item li";

            professor_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${membros.professores[m].idProfessor}, 'PROFESSOR')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${membros.professores[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${membros.professores[m].nome}</p>
                    </div>
                    <h2>PROFESSOR</h2>
                </li>
            `;

            membros_container.appendChild(professor_view);

            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";

            membros_container.appendChild(linha);
        }

        for (let m = 0; m < membros.alunos.length; m++) {
            if (membros.alunos[m].foto == null || membros.alunos[m].foto == undefined) {
                membros.alunos[m].foto = "uploads/fotopadrao.svg";
            }

            const professor_view = document.createElement("li");
            professor_view.classList = "list-group-item li";

            professor_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${membros.alunos[m].idAluno} , 'ALUNO')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${membros.alunos[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${membros.alunos[m].nome}</p>
                    </div>
                    <h2>ALUNO</h2>
                </li>
            `;

            membros_container.appendChild(professor_view);

            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";

            membros_container.appendChild(linha);
        }

        for (let m = 0; m < membros.avaliadores.length; m++) {
            if (membros.avaliadores[m].foto == null || membros.avaliadores[m].foto == undefined) {
                membros.avaliadores[m].foto = "uploads/fotopadrao.svg";
            }

            const professor_view = document.createElement("li");
            professor_view.classList = "list-group-item li";

            professor_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${membros.avaliadores[m].idAvaliador}, 'AVALIADOR')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${membros.avaliadores[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${membros.avaliadores[m].nome}</p>
                    </div>
                    <h2>AVALIADOR</h2>
                </li>
            `;

            membros_container.appendChild(professor_view);

            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";

            membros_container.appendChild(linha);
        }
    }
}

const exibirDadosProfessores = (professores) => {
    const membros_container = document.getElementById('ul_membros')

    if (professores.length == 0) {
        const no_members_view = document.createElement("li");
        no_members_view.classList = "list-group-item li";

        no_members_view.innerHTML += `
            <li class="list-group-item li")">
                <p>Nenhum Professor cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
        membros_container.innerHTML = ''

        for (let m = 0; m < professores.length; m++) {
            if (professores[m].foto == null || professores[m].foto == undefined) {
                professores[m].foto = "uploads/fotopadrao.svg";
            }

            const professor_view = document.createElement("li");
            professor_view.classList = "list-group-item li";

            professor_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${professores[m].idProfessor}, 'PROFESSOR')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${professores[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${professores[m].nome}</p>
                    </div>
                    <h2>PROFESSOR</h2>
                </li>
            `;

            membros_container.appendChild(professor_view);

            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";

            membros_container.appendChild(linha);
        }
    }

}

const exibirDadosAlunos = (alunos) => {
    const membros_container = document.getElementById('ul_membros')

    if (alunos.length == 0) {
        const no_members_view = document.createElement("li");
        no_members_view.classList = "list-group-item li";

        no_members_view.innerHTML += `
            <li class="list-group-item li")">
                <p>Nenhum Professor cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
        membros_container.innerHTML = ''

        for (let m = 0; m < alunos.length; m++) {
            if (alunos[m].foto == null || alunos[m].foto == undefined) {
                alunos[m].foto = "uploads/fotopadrao.svg";
            }

            const aluno_view = document.createElement("li");
            aluno_view.classList = "list-group-item li";

            aluno_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${alunos[m].idAluno}, 'ALUNO')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${alunos[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${alunos[m].nome}</p>
                    </div>
                    <h2>ALUNO</h2>
                </li>
            `;

            membros_container.appendChild(aluno_view);

            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";

            membros_container.appendChild(linha);
        }
    }
}

const exibirDadosAvaliadores = (avaliadores) => {
    const membros_container = document.getElementById('ul_membros')

    if (avaliadores.length == 0) {
        const no_members_view = document.createElement("li");
        no_members_view.classList = "list-group-item li";

        no_members_view.innerHTML += `
            <li class="list-group-item li")">
                <p>Nenhum Professor cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
        membros_container.innerHTML = ''

        for (let m = 0; m < avaliadores.length; m++) {
            if (avaliadores[m].foto == null || avaliadores[m].foto == undefined) {
                avaliadores[m].foto = "uploads/fotopadrao.svg";
            }

            const avaliador_view = document.createElement("li");
            avaliador_view.classList = "list-group-item li";

            avaliador_view.innerHTML += `
                <li class="list-group-item li" onclick="showModalListagem(${avaliadores[m].idAvaliador}, 'AVALIADOR')">
                    <div class="usuario">
                        <img class="iconify img" src="http://localhost:3000/${avaliadores[m].foto}" style="color: #05204a" width="100" height="100">
                        <p class="nome">${avaliadores[m].nome}</p>
                    </div>
                    <h2>AVALIADOR</h2>
                </li>
            `;

            membros_container.appendChild(avaliador_view);

            const linha = document.createElement("img");
            linha.src = "./img/Line.svg";

            membros_container.appendChild(linha);
        }
    }
}


const getMembrosInstituicao = async() => {
    const url = `http://localhost:3000/instituicao/membros/listarMembros/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const membros = await dados.json();

    exibirDadosGeral(membros)

    tiposUsuario.forEach((tipoUsuario) => {
        tipoUsuario.addEventListener("click", () => {
            tiposUsuario.forEach((tipoUsuario) => {
                tipoUsuario.classList.remove("ativo");
            });
            tipoUsuario.classList.add("ativo");

            if (tipoUsuario.id == 'li_todos') {
                exibirDadosGeral(membros)
            } else if (tipoUsuario.id == 'li_professores') {
                exibirDadosProfessores(membros.professores)
            } else if (tipoUsuario.id == 'li_alunos') {
                exibirDadosAlunos(membros.alunos)
            } else {
                exibirDadosAvaliadores(membros.avaliadores)
            }
        });
    });
}


const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login/";
};

// const checkLogin = () => {
//     if (localStorage.user != undefined) {
//         localStorageUser = JSON.parse(localStorage.user);
//         if (localStorageUser.tipo == "instituição") {
//             getMembrosInstituicao();
//             document.getElementById("nomeInstituicao").innerHTML =
//                 localStorageUser.nome;
//         } else {
//             switch (localStorageUser.tipo) {
//                 case "professor":
//                     window.location.href = "../../professor/perfil/";
//                     break;

//                 case "aluno":
//                     window.location.href = "../../aluno/perfil/";
//                     break;

//                 case "avaliador":
//                     window.location.href = "../../home/";
//                     alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
//                     break;

//                 default:
//                     window.location.href = "../../home/";
//             }
//         }
//     } else {
//         window.location.href = "../home/login/index.html";
//     }
// };

window.onload = checkLogin();