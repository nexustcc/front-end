"use strict";

let localStorageUser = [];

async function editarProfessor() {
    event.preventDefault();

    const fotoProfessor = document.getElementById("inputFotoProfessor");
    const formData = new FormData();

    formData.append("nome", document.getElementById("nome_professor").value);
    formData.append("email", document.getElementById("input_email_professor").value);
    formData.append("senha", document.getElementById("senha_professor").value);

    if (fotoProfessor.files[0] != undefined) {
        formData.append("foto", fotoProfessor.files[0]);
    }

    axios
    .put(`http://localhost:3000/professor/editarProfessor/${localStorageUser.idTipo}`, formData, {
        headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
    })
    .then((response) => console.log(response)).then(() => (window.location.href = "../index.html"));;

    // const professor = {
    //     nome: document.getElementById("nome_professor").value,
    //     email: document.getElementById("input_email_professor").value,
    //     senha: document.getElementById("senha_professor").value,
    //     foto: fotoProfessor.files[0],
    // };

    // Object.entries(professor).map(([key, value]) => {
    //     formData.append(key, value);
    // });

    // const config = {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: formData,
    // };

    // fetch(
    //         `http://localhost:3000/professor/editarProfessor/${localStorageUser.idTipo}`,
    //         config
    //     )
    //     .then(() => {
    //         console.log("AAA");
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // .then(() => (window.location.href = "../../index.html"));
}

// const formData = new FormData();
// const imagefile = document.querySelector("#file");

// 'fileimage' é o campo que o 'multer' procura o arquivo de imagem.
// formData.append("fileimage", imagefile.files[0]);
// formData.append("cpf", "1234567890"); // cpf junto ao formData.

// axios
//     .post("http://localhost:3000/image-upload", formData, {
//         headers: {
//             "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
//         },
//     })
//     .then((response) => console.log(response));

function exibirDados(professor) {
    const divImgProfessor = document.getElementById("fotoPerfilProfessor");

    if (professor.foto == null || professor.foto == "uploads/fotopadrao.svg") {
        divImgProfessor.style.backgroundImage =
            "url(http://localhost:3000/uploads/fotopadrao.svg)";
    } else {
        divImgProfessor.style.backgroundImage = `url(http://localhost:3000/${professor.foto})`;
    }

    document.getElementById("input_email_professor").value =
        professor.usuario.email;
    document.getElementById("nome_professor").value = professor.usuario.nome;
    document.getElementById("senha_professor").value = professor.usuario.senha;
}

async function getInfoProfessor() {
    const url = `http://localhost:3000/professor/listarProfessor/${localStorageUser.idTipo}`;

    fetch(url).then((response) => response.json);
    const dados = await fetch(url);
    const professor = await dados.json();
    exibirDados(professor.professor[0]);
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "../../../home/login";
};

const checkLogin = () => {
    if (localStorage.user != undefined) {
        localStorageUser = JSON.parse(localStorage.user);
        if (localStorageUser.tipo == "professor") {
            getInfoProfessor();
            document.getElementById("nomeProfessor").innerHTML =
                localStorageUser.nome;
        } else {
            switch (localStorageUser.tipo) {
                case "instituição":
                    window.location.href = "../instituicao/";
                    break;

                case "aluno":
                    window.location.href = "../aluno/perfil/index.html";
                    break;

                case "avaliador":
                    window.location.href = "../home/index.html";
                    alert("O acesso dos Avaliadores a plataforma é feito pelo APP");
                    break;

                default:
                    window.location.href = "../home/index.html";
            }
        }
    } else {
        window.location.href = "../home/login/index.html";
    }
};

window.onload = checkLogin();