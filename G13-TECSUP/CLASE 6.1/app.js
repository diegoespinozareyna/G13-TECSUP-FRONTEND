const elTitulo = document.getElementById("tituloPrueba");

const elBoton = document.getElementById("buttonTitleChange");

console.log(elTitulo.textContent)

elBoton.addEventListener("click", () => {

    elTitulo.innerText = "Cambié el Título"

    elTitulo.style.color = "green"

    return console.log(elTitulo.textContent)
})
