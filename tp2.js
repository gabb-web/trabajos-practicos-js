//TP2

//Ejercicio 1 
//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.


// let edad = prompt("Introduce tu edad:");
// if (isNaN(edad)) {
// alert("Introduce un número válido");
// } else if (Number(edad) >= 18) {
// alert("Ya puedes conducir");
// }

//ejercicio 2
//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// let nota = prompt("Introduce una nota entre 0 y 10:");
// if (isNaN(nota)) {
//   alert("Introduce un número válido");
// } else {
//   nota = Number(nota);
//   if (nota < 0 || nota > 10) {
//     alert("Número erróneo");
//   } else if (nota <= 2) {
//     alert("Muy deficiente");
//   } else if (nota <= 4) {
//     alert("Insuficiente");
//   } else if (nota <= 6) {
//     alert("Suficiente");
//   } else if (nota === 7) {
//     alert("Bien");
//   } else if (nota <= 9) {
//     alert("Notable");
//   } else {
//     alert("Sobresaliente");
//   }
// }


//ejercicio 3
// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

// let resultado = "";
// do {
// let texto = prompt("Introduce una cadena de texto:");
// if (texto !== null) {
//     resultado += texto + "-";
// }
// } while (confirm("¿Deseas continuar?"));
// alert("Texto concatenado: " + resultado.slice(0, -1));


//ejercicio 4
// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
// let suma = 0;
// do {
//   let entrada = prompt("Introduce un número:");
//   if (entrada === null) break;
//   if (isNaN(entrada)) {
//     alert("No es un número válido");
//   } else {
//     suma += Number(entrada);
//   }
// } while (true);
// alert("Suma total: " + suma);


//ejercicio 5
// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// Ejemplo: 



// Input:  40773821 
// Output: ‘L’

// const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
// let dni;
// do {
//   dni = prompt("Introduce tu número de DNI:");
//   if (dni === null) break;
//   if (isNaN(dni) || dni < 0 || dni > 99999999) {
//     alert("Número inválido");
//   } else {
//     let letra = letras[dni % 23];
//     alert("La letra correspondiente es: " + letra);
//   }
// } while (true);



//ejercicio 6
//  Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

// for (let i = 1; i <= 30; i++) {
// console.log(String(i).repeat(i));
// }


//ejercicio 7
// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

// let num = prompt("Introduce un número (máximo 50):");
// if (!isNaN(num) && num <= 50) {
// num = Number(num);
// for (let i = num; i >= 1; i--) {
//     console.log(String(i).repeat(i));
// }
// }


//ejercicio 8
// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

// let n = prompt("Introduce un número (máximo 50):");
// n = Number(n);

// if (!isNaN(n) && n <= 50 && n > 0) {
//     for (let i = 1; i <= n; i++) {
//         let fila = "";
//         for (let j = 1; j <= i; j++) {
//             fila += j;
//         }
//         console.log(fila);
//     }
// } else {
//     console.log("Debes ingresar un número válido menor o igual a 50.");
// }


//ejercicio 9
// Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10



// for (let i = 1; i <= 500; i++) {
//   let mensaje = i;
//   if (i % 4 === 0) mensaje += " (Múltiplo de 4)";
//   if (i % 9 === 0) mensaje += " (Múltiplo de 9)";
//   console.log(mensaje);
//   if (i % 5 === 0) console.log("—————————————————————");
// }


//ejercicio 10
//Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

// Ejercicios con Math

// let filas = prompt("Número de filas:");
// let columnas = prompt("Número de columnas:");
// if (!isNaN(filas) && !isNaN(columnas)) {
//   filas = Number(filas);
//   columnas = Number(columnas);
//   let total = filas * columnas;
//   let tabla = "";
//   for (let i = 0; i < filas; i++) {
//     let fila = "";
//     for (let j = 0; j < columnas; j++) {
//       fila += (total--) + "\t";
//     }
//     tabla += fila + "\n";
//   }
//   console.log(tabla);
// }


//ejercicio 11 
// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
// let nombres = [], edades = [];
// for (let i = 0; i < 3; i++) {
//   nombres[i] = prompt("Nombre " + (i + 1));
//   edades[i] = Number(prompt("Edad de " + nombres[i]));
// }
// let mayor = Math.max(...edades);
// let indice = edades.indexOf(mayor);
// alert("El mayor es " + nombres[indice]);


//ejercicio 12 
//Realiza un script que genere un número aleatorio entre 1 y 99

// let aleatorio = Math.floor(Math.random() * 99) + 1;
// alert("Número aleatorio: " + aleatorio);


//ejercicio 13
//Realiza un script que pida un texto y lo muestre en mayúsculas.

// let texto = prompt("Introduce un texto:");
// alert(texto.toUpperCase());


//ejercicio 14 
//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// let cadena = prompt("Introduce una cadena:");
// let resultado = "";
// for (let i = 0; i < cadena.length; i++) {
//   resultado += cadena[i] + (i < cadena.length - 1 ? "-" : "");
// }
// alert(resultado);


//ejercicio 15
//Realiza un script que cuente el número de vocales que tiene un texto.

// let texto = prompt("Introduce un texto:");
// let contador = 0;
// for (let letra of texto.toLowerCase()) {
//   if ("aeiou".includes(letra)) contador++;
// }
// alert("Número de vocales: " + contador);


//ejercicio 16
//  Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
// let cadena = prompt("Introduce una cadena:");
// alert(cadena.split("").reverse().join(""));

//ejercicio 17
// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:



// Input: Hola mundo

// Output: la vocal ‘o’ está en la posición 1

// let texto = prompt("Introduce un texto:");
// let posicion = -1;
// for (let i = 0; i < texto.length; i++) {
//   if ("aeiouAEIOU".includes(texto[i])) {
//     posicion = i;
//     alert(`La vocal '${texto[i]}' está en la posición ${i}`);
//     break;
//   }
// }
// if (posicion === -1) alert("No se encontró ninguna vocal.");

