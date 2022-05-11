"use strict";

Array.prototype.forEach.call(
    document.querySelectorAll(".btn_upload_foto"),
    function (button) {
        const hiddenInput = button.parentElement.querySelector(".input_foto");
        let imgAluno = document.querySelector("#fotoPerfilAluno");
        let uploadedImage = "";

        button.addEventListener("click", function () {
            hiddenInput.click();
        });

        hiddenInput.addEventListener("change", function () {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                uploadedImage = reader.result;
                imgAluno.style.backgroundImage = `url(${uploadedImage})`;
            });
            reader.readAsDataURL(this.files[0]);
        });
    }
);