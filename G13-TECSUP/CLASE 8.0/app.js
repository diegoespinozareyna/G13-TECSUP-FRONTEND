const imagenAbsolute = document.getElementById("imagenAbsolute");

const contenedor = document.getElementById("contenedor");

contenedor.addEventListener("mouseenter", () => {
    imagenAbsolute.classList.remove("opacity-0");
    imagenAbsolute.classList.add("opacity-100");
})

contenedor.addEventListener("mouseleave", () => {
    imagenAbsolute.classList.remove("opacity-100")
    imagenAbsolute.classList.add("opacity-0");
})