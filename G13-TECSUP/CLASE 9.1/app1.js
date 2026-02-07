// console.log("FOR: ");

// for (let i = 0; i <= 5; i++) {
//     // instrucciones
//     console.log("Valor de i: " + i)
// }

// const lista = ["A", "B", "C", "D", "E"];
// // const lista2 = ["E", "D", "C", "B", "A"];
// console.log(lista.length)

// for (let i = lista.length -1; i >= 0; i--) {
//     // instrucciones
//     console.log("Elemento: " + lista[i])
// }

// for (let i = 0; i < 10; i += 5) {
//     // instrucciones
//     console.log(`Valor de i: ${i}`)
// }

// const bigData = [1, 8, 70, 88, 99, 123, 55, 65, 78, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990];

// Encontrar e imprimir en consola el numero 170

// console.log(bigData[40])

// for (let i = 0; i < bigData.length; i++) {
//     if (bigData[i] === 170) {
//         console.log(`Elemento ${bigData[i]} fue encontrado en el indice ${i}`)
//         break;
//     }
// }

// console.log("forEach: ");
// const ids = [1, 2, 3];
// const nombres = ["Pedro", "Juan", "Carlos"];

// ids.forEach((item, indice) => {
//     //instrucciones
//     console.log(`El Id ${item} se llama ${nombres[indice]}`)
// })

// const lista = ["Luis", "Pedro", "Carlos", "Juan", "Maria", "Jose"];

// lista.forEach((nombre, indice) => {
//     console.log(`${nombre} ${indice}`)
// })

// const bigData = [1, 8, 70, 88, 99, 123, 55, 65, 78, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960, 970, 980, 990];

// // encontrar e imprimir en consola el numero 540 y su indice

// bigData.forEach((item, ix) => {
//     if (item === 540) {
//         console.log(`${item} - ${ix}`)
//     }
//     else {
//         console.log("No encontre el valor buscado pero si el numero " + item + " y su indice es " + ix)
//     }
// })


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // impirmir en consola los numeros pares

// numeros.forEach((item) => {
//     if (item % 2 == 0) {
//         console.log(`El número ${item} es par.`)
//     }
// })

// const productos = [
//     {
//         id: 1,
//         nombre: "Laptop Gamer",
//         stock: 10,
//     },
//     {
//         id: 2,
//         nombre: "Teclado Inalambrico",
//         stock: 5,
//     }
// ]
// quiero aumentar el stock en 10 productos a cada producto
// quiero que el id 2 cambie el nombre a Teclado Gaming
// id 1 se coloque el precio de "S/. 5500" como un string 

// const arregloNuevo = productos.forEach((item) => {
//     item.stock = item.stock + 10;

//     if (item.id === 2) {
//         item.nombre = "Teclado Gaming"
//         item.precio = "S/. 350";
//     }

//     if (item.id === 1) {
//         item.precio = "S/. 5500"
//         item.color = "Plateado";
//     }
// })

// console.log(arregloNuevo)

// console.log(productos)

// console.log(".map: ");

// const productos = [
//     {
//         id: 1,
//         nombre: "Laptop Gamer",
//         stock: 10,
//     },
//     {
//         id: 2,
//         nombre: "Teclado Inalambrico",
//         stock: 5,
//     }
// ]

// const arregloNuevo = productos.map((item) => {
//     item.stock = item.stock + 10;

//     if (item.id === 2) {
//         item.nombre = "Teclado Gaming"
//         item.precio = "S/. 350";
//     }

//     if (item.id === 1) {
//         item.precio = "S/. 5500"
//         item.color = "Plateado";
//     }

//     return item
// })

// console.log("array nuevo con map", arregloNuevo)

// console.log(productos)

// const entradasConcierto = [
//     {
//         monto: 100,
//         descuento: true,
//     },
//     {
//         monto: 100,
//         descuento: false,
//     }
// ]

// // devolver un nuevo arreglo pero la entrada que tengan descuento en true quiero que su monto baje en un 20%

// const entradasArregloNuevo = entradasConcierto.map((item, indice) => {
//     if (item.descuento) {
//         item.monto = item.monto * 0.8;
//     }

//     return item
// })

// console.log(entradasArregloNuevo)

// console.log(".filter: ");

// const autos = [
//     { marca: "Toyota", anio: 2010, color: "Rojo" },
//     { marca: "Toyota", anio: 2018, color: "Negro" },
//     { marca: "Ford", anio: 2020, color: "Negro" },
//     { marca: "Toyota", anio: 2021, color: "Blanco" },
//     { marca: "Nissan", anio: 1998, color: "Negro" },
//     { marca: "Mazda", anio: 2016, color: "Negro" },
// ];

// // filtrar autos de color negro y año se > año 2015

// // const autosNegros = autos.filter((auto) => {
// //     return auto.color === "Negro";
// // })

// const autosNegros = autos.filter(auto => auto.color === "Negro" && auto.anio > 2015 && (auto.marca === "Ford" || auto.marca === "Toyota"))

// console.log(autosNegros)

// const datosSucios = [0, "Hola", undefined, null, "Mundo", "", false];
// //queremos solo datos que si esten definidos, excluir null, undefined, falsos y vacios

// const filtrados = datosSucios.filter(Boolean)
// // const filtrados = datosSucios.filter(item => item !== null && item !== undefined && item !== "" && item !== false && item !== 0)

// console.log(filtrados)

// const carrito = [
//     { precio: 10000, prod: "TV" },
//     { precio: 2000, prod: "Celular" },
//     { precio: 20, prod: "Cable" }
// ];

// // eliminar de mi carrito articulo de precio 10000

// const nuevoCarrito = carrito.filter(item => item.precio === 20)

// console.log(nuevoCarrito)


console.log(".find: ");

// const carrito2 = [
//     { precio: 10000, prod: "TV" },
//     { precio: 2000, prod: "Celular" },
//     { precio: 20, prod: "Cable" }
// ];

// // buscar el producto que tenga de precio 20

// const nuevoCarrito2 = carrito2.find(item => item.precio === 20)

// console.log(nuevoCarrito2)

// const menu = [
//     {
//         categoria: "Carne",
//         platos: ["Bistec", "Milanesa"]
//     },
//     {
//         categoria: "Vegano",
//         platos: ["Ensalada", "Tofu"],
//         precio: 100
// ];

// // Buscar la categoría que contiene "Tofu"

// const categoriaBuscada = menu.find(item => item.platos.includes("Tofu")).precio

// console.log(categoriaBuscada)

// const autos = [
//     { marca: "Toyota", año: 2010, color: "Rojo" },
//     { marca: "Ford", año: 2020, color: "Negro" },
//     { marca: "Toyota", año: 2021, color: "Blanco" },
//     { marca: "Mazda", año: 2026, color: "Blanco" },
// ];

// // filtrar el auto color blanco con find

// const autosBlancos = autos.find(item => item.color === "Blanco")

// console.log(autosBlancos)

// function PruebaVacia() {
//     console.log("Hola")
//     return "Hola DESDE RETURN"
// }

// const prueba = PruebaVacia()

// console.log(prueba)

// function PruebaVacia2() {



//     return 1000
// }

// const prueba2 = PruebaVacia2()

// console.log(prueba2)

// function FiltreDatos() {
//     const datos = [
//         { nombre: "Pedro", edad: 20 },
//         { nombre: "Juan", edad: 30 },
//         { nombre: "Carlos", edad: 40 },
//         { nombre: "Maria", edad: 50 },
//         { nombre: "Jose", edad: 60 },
//         { nombre: "Luis", edad: 70 },
//     ]

//     const filtrados = datos.filter(item => item.edad > 50)

//     return filtrados
// }

// const filtrados = FiltreDatos()

// console.log(filtrados)

function ConParametros(a = 5, b = 3) {

    const resultado = a + b

    return resultado

}

const funcionConPArametro = ConParametros(100)

console.log(funcionConPArametro)