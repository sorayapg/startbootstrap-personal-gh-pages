/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "assets/Soraya PovedanoCV.pdf"; // Ruta del PDF
        link.download = "Soraya PovedanoCV.pdf"; // Nombre del archivo al descargar
        link.click();
    });
});