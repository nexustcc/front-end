'use strict'

Array.prototype.forEach.call(document.querySelectorAll('.btn_upload_foto'), function (button) {

    const hiddenInput = button.parentElement.querySelector('.input_foto');
    let imgProfessor = document.querySelector('#fotoPerfilProfessor');
    let uploadedImage = '';

    button.addEventListener('click', function () {
        hiddenInput.click();
    });

    hiddenInput.addEventListener('change', function() {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            uploadedImage = reader.result;
            imgProfessor.style.backgroundImage = `url(${uploadedImage})`;
        })
        reader.readAsDataURL(this.files[0]);
    })
});

function infoStatusNome() {
    document.querySelector(".info_preenchido_nome").style.display = "flex";
    document.querySelector(".info_vazado_nome").style.display = "none";
    document.querySelector(".alert_text_nome").style.display = "flex"
}

function resetStatusNome() {
    document.querySelector(".info_preenchido_nome").style.display = "none";
    document.querySelector(".info_vazado_nome").style.display = "flex";
    document.querySelector(".alert_text_nome").style.display = "none"
}

function infoStatusEmail() {
    document.querySelector(".info_preenchido_email").style.display = "flex";
    document.querySelector(".info_vazado_email").style.display = "none";
    document.querySelector(".alert_text_email").style.display = "flex"
}

function resetStatusEmail() {
    document.querySelector(".info_preenchido_email").style.display = "none";
    document.querySelector(".info_vazado_email").style.display = "flex";
    document.querySelector(".alert_text_email").style.display = "none"
}


