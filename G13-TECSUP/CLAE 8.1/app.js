const imagesSlider = document.querySelectorAll(".slider")
const botonIzquierda = document.getElementById("boton-left")
const botonDerecha = document.getElementById("boton-right")
const textSlider = document.getElementById("text-slider")

// const arrayImagenes = ["imagen1", "imagen2", "imagen3"]

let indiceActual = 0;
let totalImagenes = imagesSlider.length // totalImagenes = 3

function monstrarImagenes() {
    imagesSlider.forEach((img, index) => {

        if (index == indiceActual) {
            img.classList.remove("opacity-0")
            img.classList.add("opacity-100")
        }
        else {
            img.classList.remove("opacity-100")
            img.classList.add("opacity-0")
        }
    })

    textSlider.innerText = `Imagen ${indiceActual + 1} de ${totalImagenes}`
}

botonDerecha.addEventListener("click", () => {
    indiceActual = indiceActual + 1 // primer click indice es igual a 1

    if (indiceActual >= totalImagenes) {
        indiceActual = 0
    }

    monstrarImagenes()
})


botonIzquierda.addEventListener("click", () => {
    indiceActual = indiceActual - 1 // primer click indice es igual a 1

    if (indiceActual < 0) {
        indiceActual = totalImagenes - 1;
    }

    monstrarImagenes()
})