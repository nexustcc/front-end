"use strict";

Array.prototype.forEach.call(
    document.querySelectorAll(".btn_upload_foto"),
    function (button) {
        const hiddenInput = button.parentElement.querySelector(".input_foto");
        let imgProfessor = document.querySelector("#fotoPerfilProfessor");
        let uploadedImage = "";

        button.addEventListener("click", function () {
            hiddenInput.click();
        });

        hiddenInput.addEventListener("change", function () {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                uploadedImage = reader.result;
                imgProfessor.style.backgroundImage = `url(${uploadedImage})`;
            });
            reader.readAsDataURL(this.files[0]);
        });
    }
);