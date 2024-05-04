function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);
        span.onclick = function () {
            x.className = "";
            span.remove();
        }
    } else {
        x.className = "";
    }
}
const links = document.querySelectorAll("#nav a");
for (i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        var x = document.getElementById("nav");
        x.className = "";
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var toggleMenuBtn = document.getElementById("toggle-menu-btn");
    var contenidoMenu = document.querySelector(".contenido-menu");

    if (toggleMenuBtn && contenidoMenu) {
        toggleMenuBtn.addEventListener("click", function () {
            contenidoMenu.classList.toggle("visible");
        });
    }
});
function toggleMenu() {
    var listaMenu = document.getElementById("lista-menu");
    if (listaMenu.style.display === "block") {
        listaMenu.style.display = "none";
    } else {
        listaMenu.style.display = "block";
    }
}


