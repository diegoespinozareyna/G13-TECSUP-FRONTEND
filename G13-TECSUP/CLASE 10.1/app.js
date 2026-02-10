const contenedor = document.getElementById("app");

const titulo = document.createElement("h1");

titulo.innerText = "Clase de react";

titulo.classList.add("text-center");
titulo.classList.add("text-6xl");
titulo.classList.add("text-red-500");

contenedor.appendChild(titulo);

const parrafo = document.createElement("p")

parrafo.innerText = "Este es un parrafo de prueba";

parrafo.classList.add("text-2xl");
parrafo.classList.add("text-blue-500");

contenedor.appendChild(parrafo);