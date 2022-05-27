let localStorageUser;

const changeModalEditar = async (id, tipo) => {

    let urlCursosInstituição = `http://localhost:3000/instituicao/listarCursos/${localStorageUser.idTipo}`
    const dados = await fetch(urlCursosInstituição);
    let cursosInstituição = await dados.json();

    console.log(tipo)

    document.querySelector(".modal-listagem").style.display = "none";
    document.querySelector(".modal-editar").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";

    let input_nome = document.getElementById('edit_user_nome')
    let input_email = document.getElementById('edit_user_email')
    let input_senha = document.getElementById('edit_user_senha')
    let input_tipo = document.getElementById('edit_user_tipo')
    let input_curso = document.getElementById('edit_user_curso')
    let input_turma = document.getElementById('edit_user_turma')
    let input_grupo = document.getElementById('edit_user_grupo')

    input_nome.value = ''
    input_email.value = ''
    input_senha.value = ''
    input_tipo.placeholder = ''
    input_curso.value = ''
    input_turma.value = ''
    input_grupo.value = ''

    if(tipo == 'PROFESSOR'){


        
        input_nome.value = professor.professor.nome
        input_email.value = professor.professor.email
        input_senha.value = professor.professor.senha
        input_tipo.placeholder = 'PROFESSOR'

        console.log(professor.cursos)
        console.log(professor.turmas)
        console.log(professor.grupos)

        const selectCurso = document.getElementById('edit_user_curso')
        for (let c = 0; c < professor.cursos.length; c++) {
            var option = document.createElement('option');
            option.value = professor.curso[c].nome;
            option.innerHTML = i;
            selectCurso.appendChild(option);
        }

        // for (let t = 0; t < professor.turmas.length; t++) {
        //     if(professor.turmas.length == 0 || professor.turmas.length == null){
        //         input_turma.value = 'Professor sem turmas'
        //     }

        //     input_turma.value += professor.turmas[t].nome + " | "
        // }

        // for (let g = 0; g < professor.grupos.length; g++) {
        //     if(professor.grupos.length == 0 || professor.grupos.length == null){
        //         input_grupo.value = 'Professor sem grupos'
        //     }

        //     input_grupo.value += professor.grupos[g].nomeProjeto + " | "
        // }

    } 
    // else if (tipo == 'ALUNO'){
    //     const url = `http://localhost:3000/membros/listarAluno/${id}`

    //     fetch(url).then((response) => response.json);
    //     const dados = await fetch(url);
    //     const aluno = await dados.json();

    //     console.log(aluno)

    //     input_nome.value = ''
    //     input_email.value = ''
    //     input_senha.value = ''
    //     input_tipo.placeholder = ''
    //     input_curso.value = ''
    //     input_turma.value = ''
    //     input_grupo.value = ''
        
    //     input_nome.value = aluno.aluno.nome
    //     input_email.value = aluno.aluno.email
    //     input_senha.value = aluno.aluno.senha
    //     input_tipo.placeholder = 'ALUNO'
    //     input_curso.value = aluno.curso.nome
    //     input_turma.value = aluno.turma.nome
    //     input_grupo.value = aluno.grupo.nomeProjeto

    // } else{
    //     const url = `http://localhost:3000/membros/listarAvaliador/${id}`

    //     fetch(url).then((response) => response.json);
    //     const dados = await fetch(url);
    //     const avaliador = await dados.json();

    //     input_nome.value = ''
    //     input_email.value = ''
    //     input_senha.value = ''
    //     input_tipo.placeholder = ''
    //     input_curso.value = ''
    //     input_turma.value = ''
    //     input_grupo.value = ''
        
    //     input_nome.value = avaliador.avaliador.nome
    //     input_email.value = avaliador.avaliador.email
    //     input_senha.value = avaliador.avaliador.senha
    //     input_tipo.placeholder = 'AVALIADOR'
    //     input_curso.value = avaliador.curso.nome
    //     input_turma.value = avaliador.turma.nome
        
    //     for (let g = 0; g < avaliador.grupos.length; g++) {
    //         if(avaliador.grupos.length == 0 || avaliador.grupos.length == null){
    //             input_grupo.placeholder = 'Avalidor sem grupos'
    //         }

    //         input_grupo.placeholder += avaliador.grupos[g] + " | "
    //     }
    // }

    document.getElementById('btn-cancelar-editar').addEventListener('click', () => {
        document.querySelector(".bg").style.display = "none";
        document.querySelector(".modal-editar").style.display = "none";
        showModalListagem(id, tipo)
    })
}

const changeModalExcluir = async (id, tipo) => {
    document.querySelector(".modal-listagem").style.display = "none";
    document.querySelector(".bg").style.display = "flex";
    document.querySelector(".modal-excluir").style.display = "flex";
    
    document.getElementById('btn-excluir-usuario').addEventListener('click', () => {
        
        if(tipo == 'PROFESSOR'){
            const url = `http://localhost:3000/professor/deletarProfessor/${id}` 

            var requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
            };
              
            fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => alert(result))
                .then(() => window.location.href = './index.html')

        } else if(tipo == 'ALUNO'){
            const url = `http://localhost:3000/aluno/deletarAluno/${id}`

            var requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
            };
              
            fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => alert(result))
                .then(() => window.location.href = './index.html')

        } else{
            const url = `http://localhost:3000/avaliador/deletarAvaliador/${id}`

            var requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
            };
              
            fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => alert(result))
                .then(() => window.location.href = './index.html')
        }
    })
}


const showModalListagem = async (id, tipo) => {
    document.querySelector(".modal-editar").style.display = "none";
    document.querySelector(".modal-listagem").style.display = "flex";
    document.querySelector(".bg").style.display = "flex";

    let input_nome = document.getElementById('view_user_nome')
    let input_email = document.getElementById('view_user_email')
    let input_senha = document.getElementById('view_user_senha')
    let input_tipo = document.getElementById('view_user_tipo')
    let input_curso = document.getElementById('view_user_curso')
    let input_turma = document.getElementById('view_user_turma')
    let input_grupo = document.getElementById('view_user_grupo') 

    if(tipo == 'PROFESSOR'){
        const url = `http://localhost:3000/membros/listarProfessor/${id}`

        fetch(url).then((response) => response.json);
        const dados = await fetch(url);
        const professor = await dados.json();

        input_nome.placeholder = ''
        input_email.placeholder = ''
        input_senha.value = ''
        input_senha.placeholder = ''
        input_tipo.placeholder = ''
        input_curso.placeholder = ''
        input_turma.placeholder = ''
        input_grupo.placeholder = ''
        
        input_nome.placeholder = professor.professor.nome
        input_email.placeholder = professor.professor.email
        input_senha.value = professor.professor.senha
        input_tipo.placeholder = tipo

        if(professor.cursos.length == 0 || professor.cursos.length == null){
            input_curso.placeholder = '* sem cursos'
        } else{
            for (let c = 0; c < professor.cursos.length; c++) {
                input_curso.placeholder += professor.cursos[c].nome + " | "
            }
        }

        if(professor.turmas.length == 0 || professor.turmas.length == null){
            input_turma.placeholder = '* sem turmas'
        } else{
            for (let t = 0; t < professor.turmas.length; t++) {
                input_turma.placeholder += professor.turmas[t].nome + " | "
            }
        }

        if(professor.grupos.length == 0 || professor.grupos.length == null){
            input_grupo.placeholder = '* sem grupos'
        } else{
            for (let g = 0; g < professor.grupos.length; g++) {
                input_grupo.placeholder += professor.grupos[g].nomeProjeto + " | "
            }
        }

        const button_div = document.getElementById('div-btn-user-options');
        
        button_div.innerHTML = ''

        button_div.innerHTML = `
            <div class="col-md-3">
                <button class="primeiro_botao" type="button" onclick="exitModalListagem()"> CANCELAR </button>
            </div>

            <div class="col-md-3">
                <button id class="terceiro_botao" type="button" onclick="changeModalExcluir(${id}, 'PROFESSOR')"> EXCLUIR </button>
            </div>

            <div class="col-md-6">
                <button class="segundo_botao" type="button" onclick="changeModalEditar(${id}, 'PROFESSOR')"> EDITAR </button>
            </div>
        `;

    } else if (tipo == 'ALUNO'){
        const url = `http://localhost:3000/membros/listarAluno/${id}`

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

        const button_div = document.getElementById('div-btn-user-options');
        
        button_div.innerHTML = ''
        
        button_div.innerHTML += `
            <div class="col-md-3">
                <button class="primeiro_botao" type="button" onclick="exitModalListagem()"> CANCELAR </button>
            </div>

            <div class="col-md-3">
                <button id class="terceiro_botao" type="button" onclick="changeModalExcluir(${id}, 'ALUNO')"> EXCLUIR </button>
            </div>

            <div class="col-md-6">
                <button class="segundo_botao" type="button" onclick="changeModalEditar(${id}, 'ALUNO')"> EDITAR </button>
            </div>
        `;
        
        container_usuario.appendChild(button_div);

    } else{
        const url = `http://localhost:3000/membros/listarAvaliador/${id}`

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
        
        if(avaliador.grupos.length == 0 || avaliador.grupos.length == null){
            input_grupo.placeholder = '* sem grupos'
        } else{
            for (let g = 0; g < avaliador.grupos.length; g++) {
                input_grupo.placeholder += avaliador.grupos[g] + " | "
            }
        }

        const button_div = document.getElementById('div-btn-user-options');
        
        button_div.innerHTML = ''
        
        button_div.innerHTML += `
            <div class="col-md-3">
                <button class="primeiro_botao" type="button" onclick="exitModalListagem()"> CANCELAR </button>
            </div>

            <div class="col-md-3">
                <button id class="terceiro_botao" type="button" onclick="changeModalExcluir(${id}, 'AVALIADOR')"> EXCLUIR </button>
            </div>

            <div class="col-md-6">
                <button class="segundo_botao" type="button" onclick="changeModalEditar(${id}, 'AVALIADOR')"> EDITAR </button>
            </div>
        `;
        
        container_usuario.appendChild(button_div);
    }
}


const exibirDadosGeral = (membros) => {
    const membros_container = document.getElementById('ul_membros')

    if(membros.length == 0){
        const no_members_view = document.createElement("li");
        no_members_view.classList = "list-group-item li";

        no_members_view.innerHTML += `
            <li class="list-group-item li"">
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

    membros_container.innerHTML = ''

    if(professores.length == 0){
        const no_members_view = document.createElement("li");
        no_members_view.display = 'flex'
        no_members_view.style.alignItems = 'center'
        no_members_view.style.justifyContent = 'center'
        no_members_view.style.width = '100%'

        no_members_view.innerHTML += `
            <li>
                <p style='margin-top: 1rem'>Nenhum Professor cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
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

    membros_container.innerHTML = ''

    if(alunos.length == 0){
        const no_members_view = document.createElement("li");
        no_members_view.display = 'flex'
        no_members_view.style.alignItems = 'center'
        no_members_view.style.justifyContent = 'center'
        no_members_view.style.width = '100%'

        no_members_view.innerHTML += `
            <li>
                <p style='margin-top: 1rem'>Nenhum Aluno cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
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

    membros_container.innerHTML = ''

    if(avaliadores.length == 0){
        const no_members_view = document.createElement("li");
        no_members_view.display = 'flex'
        no_members_view.style.alignItems = 'center'
        no_members_view.style.justifyContent = 'center'
        no_members_view.style.width = '100%'

        no_members_view.innerHTML += `
            <li>
                <p style='margin-top: 1rem'>Nenhum Avaliador cadastrado</p>
            </li>
        `;

        membros_container.appendChild(no_members_view);
    } else {
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


const getMembrosInstituicao = async () => {
    const url = `http://localhost:3000/instituicao/listarMembros/${localStorageUser.idTipo}`;

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
            } else if(tipoUsuario.id == 'li_professores'){
                exibirDadosProfessores(membros.professores)
            } else if(tipoUsuario.id == 'li_alunos'){
                exibirDadosAlunos(membros.alunos)
            } else {
                exibirDadosAvaliadores(membros.avaliadores)
            }
        });
    });
}

let cursosProfessor = [];
let dropdownCursosProfessor = document.getElementById("cursoNovoUsuarioModal");

async function getArrayCursosProfessor() {
    const url = `http://localhost:3000/curso/listarCursos/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    cursos = await dados.json();

    console.log("cursos " + cursos);

    for (let key in cursos) {
        console.log(key + ":", cursos[key]);
    }

    dropdownCursosProfessor.length = 0;

    dropdownCursosProfessor.selectedIndex = 0;

    let option;
    for (let i = 0; i < cursos.cursos.length; i++) {
        option = document.createElement("option");
        option.text = cursos.cursos[i].nome;
        option.value = cursos.cursos[i].idCurso;
        dropdownCursosProfessor.add(option);

        console.log(option.value);
    }
}

let turmasProfessor = [];
let dropdownTurmasProfessor = document.getElementById("turmaNovoUsuarioModal");
let turmas;

document.getElementById("cursoNovoUsuarioModal").onchange = async function () {
    dropdownTurmasProfessor.length = 0;
    var selected = [];
    for (var option of document.getElementById("cursoNovoUsuarioModal").options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }

    if (
        dropdownCursosProfessor.options[dropdownCursosProfessor.selectedIndex]
        .value != ""
    ) {
        turmasProfessor = [];

        for (var i = 0; i < selected.length; i++) {
            let idCurso = selected[i];

            const url = `http://localhost:3000/turma/listarTurmasCurso/${idCurso}`;

            fetch(url).then((response) => response.json);
            const dados = await fetch(url);
            turmasProfessor.push(await dados.json());

            turmas = turmasProfessor.map(({
                turma
            }) => turma);

            console.log(turmas[0][0]);
        }

        let option;
        for (let i = 0; i < turmas.length; i++) {
            for (var t = 0; t < turmas[i].length; t++) {
                option = document.createElement("option");
                option.text = turmas[i][t].nome;
                option.value = turmas[i][t].idTurma;
                dropdownTurmasProfessor.add(option);

                console.log(option.value);
            }
        }
    }
};

async function cadastrarProfessor() {
    event.preventDefault();

    var selectCurso = document.getElementById("cursoNovoUsuarioModal");
    var selectedCursos = [...selectCurso.selectedOptions].map(
        (option) => option.value
    );
    console.log(selectedCursos);

    var selectTurma = document.getElementById("turmaNovoUsuarioModal");
    var selectedTurmas = [...selectTurma.selectedOptions].map(
        (option) => option.value
    );
    console.log(selectedTurmas);

    const cadastrarProfessor = {
        nome: document.getElementById("inputNomeNovoUsuarioModal").value.toString(),
        email: document
            .getElementById("inputEmailNovoUsuarioModal")
            .value.toString(),
        cursos: selectedCursos,
        turmas: selectedTurmas,
    };

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastrarProfessor),
    };

    const urlCadastrarProfessor = `http://localhost:3000/professor/cadastrarProfessor/${localStorageUser.idTipo}`;

    fetch(urlCadastrarProfessor, config)
        .then(async (response) => {
            response.json();
        })
        .then(() => (window.location.href = "index.html"));
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../home/login/";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "instituição") {
            getMembrosInstituicao();
            document.getElementById("nomeInstituicao").innerHTML =
                localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "professor":
                    window.location.href = "../../professor/perfil/";
                    break;

                case "aluno":
                    window.location.href = "../../aluno/perfil/";
                    break;

                case "avaliador":
                    window.location.href = "../../home/";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../../home/";
            }
        }
    } else {
        window.location.href = "../home/login/index.html";
    }
};

window.onload = checkLogin();