const campoTexto = document.getElementById("campoTexto");
const contador = document.getElementById("contador");
const vistaPrevia = document.getElementById("vistaPrevia");

const LIMITE = 10;

function replicarTextoAndColor() {
    const textCapturado = campoTexto.value;
    console.log("El texto capturado es: ", textCapturado);

    const cantidadCaracteres = textCapturado.length
    console.log("La cantidad de caracteres es: ", cantidadCaracteres);

    vistaPrevia.innerHTML = textCapturado;

    contador.innerHTML = `${cantidadCaracteres} / ${LIMITE}`;

    if(cantidadCaracteres == 0) {
        vistaPrevia.innerHTML = "Escribe algo arriba...";
        vistaPrevia.classList.remove("text-black")
        vistaPrevia.classList.add("text-gray-500")

        contador.classList.remove("text-red-500");
        contador.classList.add("text-gray-500");

        campoTexto.classList.remove("text-red-500");
        campoTexto.classList.add("text-gray-500");

        campoTexto.classList.remove("focus:ring-red-500")
        campoTexto.classList.add("focus:ring-blue-200")
    }
    else if (cantidadCaracteres > LIMITE) {
        contador.classList.remove("text-gray-500");
        contador.classList.add("text-red-500");

        campoTexto.classList.add("text-red-500");
        campoTexto.classList.remove("focus:ring-blue-200")
        campoTexto.classList.add("focus:ring-red-500")
    }
    else if (cantidadCaracteres > 0) {
        vistaPrevia.classList.remove("text-gray-500")
        vistaPrevia.classList.add("text-black")

        contador.classList.remove("text-red-500");
        contador.classList.add("text-gray-500");

        campoTexto.classList.remove("text-red-500");
        campoTexto.classList.add("text-gray-500");

        campoTexto.classList.remove("focus:ring-red-500")
        campoTexto.classList.add("focus:ring-blue-200")
    }
    
}

campoTexto.addEventListener("input", replicarTextoAndColor);