// console.log("TEORIA DE OBJETOS:");




// console.log(miAutoDeLujo)

// console.log(`Mi auto es de la marca ${miAutoDeLujo.marca}`)

// console.log("Mi auto tiene el precio de $." + miAutoDeLujo.precio)

// console.log("Mi auto es del año " + miAutoDeLujo.anio)

const texoObjeto = document.getElementById("texoObjeto")

// texoObjeto.innerHTML = `Mi auto es de la marca ${miAutoDeLujo.marca}`

const pedido = {
    id: 888,
    producto: "Monitor Gamer",
    ubicacion: {
        pais: "Peru",
        ciudad: "Lima",
        direccion: {
            calle: "Av. Larco",
            numero: 123
        }
    }
};

const { id, producto } = pedido;

// console.log(`Mi pedido tiene un ID de ${id} y mi producto es ${producto}`)

// console.log(`La dirección de mi pedido es : ${pedido.ubicacion.direccion.calle} ${pedido.ubicacion.direccion.numero}, ${pedido.ubicacion.ciudad}, ${pedido.ubicacion.pais}`)

const pelicula = {
    titulo: "Inception",
    director: "Christopher Nolan",
    anio: 2010,
}

const { titulo, director, anio } = pelicula;

// console.log("El titulo de la pelicula es: " + titulo)
// console.log("El director de la pelicula es: " + director)
// console.log("La pelicula es del año : " + anio)

const miAutoDeLujo = {
    marca: "Mercedes Benz",
    color: "plateado",
    precio: 45000,
    motor: true,
    anio: 2026,
}

const { color: coloDeMiAuto, precio: precioDeMiAuto } = miAutoDeLujo

const moto = {
    color: "negra",
}

const { color: colorDeMiMoto } = moto

// console.log(`El color de mi moto es ${colorDeMiMoto}`)
// console.log(`El color de mi auto es ${coloDeMiAuto}`)
// console.log(`El precio de mi auto es $.${precioDeMiAuto}`)

console.log("TEORIA DE ARRAYS:");

const arrayListaDeCompras = [
    "pan",
    "huevos",
    "leche",
    "carne",
];

// console.log(arrayListaDeCompras);

// console.log("Solo compré " + arrayListaDeCompras[3])

const arrayNotas = [
    10,
    16,
    13,
    18,
];

// console.log(arrayNotas);
// console.log(arrayNotas.length)

arrayNotas[0] = 11;

// console.log(arrayNotas);

arrayNotas.push(19)

// console.log(arrayNotas);

// console.log(arrayNotas.length)

arrayNotas.pop()

// console.log(arrayNotas);

const posteos = [
    {
        id: 1,
        titulo: "CodeMaster",
        likes: 1000000,
    },
    {
        id: 2,
        titulo: "DevFullStack",
        likes: 5000000,
    },
    {
        id: 3,
        titulo: "React",
        likes: 10000000,
    },
]

console.log(posteos)

// console.log(posteos[2])

posteos.push("React Native")

console.log(posteos)

posteos.pop();

posteos.push({
    id: 4,
    titulo: "NodeJS",
    likes: 100000000,
})

console.log(posteos)