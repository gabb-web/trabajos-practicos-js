//ejercicio 1

// const meses = [
//   'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
//   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
// ];

// meses.forEach((mes, index) => {
//   console.log(`${index + 1}. ${mes}`);
// });


//ejercicio 2

// let ciudades = [];
// let entrada;

// while (true) {
//   entrada = prompt("Ingrese el nombre de una ciudad:");
//   if (entrada === null) break;
//   ciudades.push(entrada);
// }

// console.log("Ciudades ingresadas:", ciudades);
// console.log("Longitud del arreglo:", ciudades.length);

// // Mostrar primera, tercera y última ciudad
// document.write(`<p>Primera ciudad: ${ciudades[0]}</p>`);
// document.write(`<p>Tercera ciudad: ${ciudades[2]}</p>`);
// document.write(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`);

// // Añadir París
// ciudades.push("París");

// // Mostrar segunda ciudad
// console.log("Segunda ciudad:", ciudades[1]);

// // Sustituir segunda ciudad por Barcelona
// ciudades[1] = "Barcelona";
// console.log("Nueva segunda ciudad:", ciudades[1]);


//ejercicio 3

// const apariciones = Array(13).fill(0); // Índices del 2 al 12

// for (let i = 0; i < 50; i++) {
//   const dado1 = Math.floor(Math.random() * 6) + 1;
//   const dado2 = Math.floor(Math.random() * 6) + 1;
//   const suma = dado1 + dado2;
//   apariciones[suma]++;
// }

// for (let i = 2; i <= 12; i++) {
//   console.log(`Suma ${i}: ${apariciones[i]} apariciones`);
// }
