const cardContainer = document.getElementById("card");
const title = document.getElementById("titulo");

const boton = document.getElementById("buttonChange");

const parrafo = document.getElementById("parrafo");

let estadoActual = false; // variable booleana (true / false)

console.log("Estado actual es1: ", estadoActual)

boton.addEventListener("click", () => {

    estadoActual = !estadoActual;

    console.log("Estado actual es2: ", estadoActual)

    if (estadoActual == true) {
        // Encender
        cardContainer.classList.remove("bg-gray-300");
        cardContainer.classList.add("bg-green-200");

        title.innerHTML = "Encendido";
        title.classList.remove("text-red-700");
        title.classList.add("text-green-800");
    }
    else {
        // Apagar
        // cardContainer.classList.remove("bg-green-200");
        // cardContainer.classList.add("bg-gray-300");

        // title.innerHTML = "Desconectado";
        // title.classList.remove("text-green-800");
        // title.classList.add("text-red-700");
        window.location.reload();
    }
})