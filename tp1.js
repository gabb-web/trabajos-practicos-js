//tp1 
//ejercicio 1
// alert("un mensaje");

//ejercicio 2
// document.write("Hello World");

//ejercicio 3
// document.write(3 + 5);

//ejercicio 4
// const nombre = prompt("¿Cómo te llamas?");
// document.write("Hola " + nombre);

//ejercicio 5
// const num1 = parseInt(prompt("Introduce el primer número:"), 10);
// const num2 = parseInt(prompt("Introduce el segundo número:"), 10);
// document.write("La suma es: " + (num1 + num2));

//ejercicio 6
// const a = parseInt(prompt("Número 1:"), 10);
// const b = parseInt(prompt("Número 2:"), 10);

// if (a > b) {
// document.write("El " + a + " es el número más grande");
// } else if (b > a) {
// document.write("El " + b + " es el número más grande");
// } else {
// document.write("Ambos números son iguales");
// }


//ejercicio 7
// const x = parseInt(prompt("Número 1:"), 10);
// const y = parseInt(prompt("Número 2:"), 10);
// const z = parseInt(prompt("Número 3:"), 10);

// let mayor = x;
// if (y > mayor) mayor = y;
// if (z > mayor) mayor = z;

// document.write("El " + mayor + " es el número más grande");

// ejercicio 8
// const n = parseInt(prompt("Introduce un número:"), 10);

// if (n % 2 === 0) {
// document.write("El " + n + " es divisible por 2.");
// } else {
// document.write("El " + n + " no es divisible por 2.");
// }

//ejercicio 9
// const frase = prompt("Introduce una frase:");
// let vocales = "";

// for (let i = 0; i < frase.length; i++) {
// const c = frase.charAt(i).toLowerCase();
// if ("aeiou".includes(c)) {
//     vocales += c;
// }
// }

// document.write("Vocales encontradas: " + vocales);


//ejercicio 10
// const m = parseInt(prompt("Introduce un número:"), 10);

// if (m % 2 === 0) {
//   document.write("El " + m + " es divisible por 2.");
// } else if (m % 3 === 0) {
//   document.write("El " + m + " es divisible por 3.");
// } else if (m % 5 === 0) {
//   document.write("El " + m + " es divisible por 5.");
// } else if (m % 7 === 0) {
//   document.write("El " + m + " es divisible por 7.");
// } else {
//   document.write("El " + m + " no es divisible por 2, 3, 5 ni 7.");
// }


//ejercicio 11
// const p = parseInt(prompt("Introduce un número:"), 10);
// const divisibles = [];

// if (p % 2 === 0) divisibles.push("2");
// if (p % 3 === 0) divisibles.push("3");
// if (p % 5 === 0) divisibles.push("5");
// if (p % 7 === 0) divisibles.push("7");

// if (divisibles.length === 0) {
// document.write("El " + p + " no es divisible por 2, 3, 5 ni 7.");
// } else if (divisibles.length === 1) {
// document.write("El " + p + " es divisible por " + divisibles[0] + ".");
// } else {
// const ult = divisibles.pop();
// document.write(
//     "El " +
//     p +
//     " es divisible por " +
//     divisibles.join(", ") +
//     " y por " +
//     ult +
//     "."
// );
// }
