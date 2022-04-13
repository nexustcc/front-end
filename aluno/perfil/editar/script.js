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


