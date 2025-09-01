//ejercicio 1 
// const auto = {
//   color: "Rojo",
//   marca: "Toyota",
//   modelo: "Corolla",
//   encendido: false,
//   encender() {
//     this.encendido = true;
//     console.log("Auto encendido");
//   },
//   apagar() {
//     this.encendido = false;
//     console.log("El auto se apagó");
//   }
// };

// // Ejemplo de uso
// auto.encender();
// auto.apagar();


//ejercicio 2
// const cuenta = {
//   titular: "Alex",
//   saldo: 0,
//   ingresar(cantidad) {
//     this.saldo += cantidad;
//   },
//   extraer(cantidad) {
//     if (cantidad <= this.saldo) {
//       this.saldo -= cantidad;
//     } else {
//       console.log("Fondos insuficientes");
//     }
//   },
//   informar() {
//     return `Titular: ${this.titular}, Saldo: $${this.saldo}`;
//   }
// };

// // Ejemplo de uso
// console.log(cuenta.informar());
// cuenta.ingresar(500);
// cuenta.extraer(200);
// console.log(cuenta.informar());


//ejercicio 3
// class Rectangulo {
//   constructor(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }

//   modificar(alto, ancho) {
//     this.alto = alto;
//     this.ancho = ancho;
//   }

//   mostrar() {
//     console.log(`Alto: ${this.alto}, Ancho: ${this.ancho}`);
//   }

//   calcularPerimetro() {
//     return 2 * (this.alto + this.ancho);
//   }

//   calcularArea() {
//     return this.alto * this.ancho;
//   }
// }

// // Ejemplo
// const r1 = new Rectangulo(10, 5);
// r1.mostrar();
// console.log("Perímetro:", r1.calcularPerimetro());
// console.log("Área:", r1.calcularArea());

//ejercicio 4

// class Producto {
//   constructor(codigo, nombre, precio) {
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.precio = precio;
//   }

//   imprimeDatos() {
//     console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: $${this.precio}`);
//   }
// }

// const productos = [
//   new Producto("A001", "Mouse", 1500),
//   new Producto("A002", "Teclado", 3000),
//   new Producto("A003", "Monitor", 25000)
// ];

// productos.forEach(p => p.imprimeDatos());

//ejercicio 5
// class Persona {
//   constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.dni = dni;
//     this.sexo = sexo;
//     this.peso = peso;
//     this.altura = altura;
//     this.nacimiento = nacimiento;
//   }

//   mostrarGeneracion() {
//     const gen = this.nacimiento;
//     if (gen >= 1994 && gen <= 2010) {
//       console.log("Generación Z - Irreverencia");
//     } else if (gen >= 1981 && gen <= 1993) {
//       console.log("Generación Y (Millennials) - Frustración");
//     } else if (gen >= 1969 && gen <= 1980) {
//       console.log("Generación X - Obsesión por el éxito");
//     } else if (gen >= 1949 && gen <= 1968) {
//       console.log("Baby Boom - Ambición");
//     } else if (gen >= 1930 && gen <= 1948) {
//       console.log("Silent Generation - Austeridad");
//     } else {
//       console.log("Generación no identificada");
//     }
//   }

//   esMayorDeEdad() {
//     console.log(this.edad >= 18 ? "Es mayor de edad" : "Es menor de edad");
//   }

//   mostrarDatos() {
//     console.log(this);
//   }

//   generaDNI() {
//     this.dni = Math.floor(10000000 + Math.random() * 90000000);
//   }
// }

// // Ejemplo
// const persona1 = new Persona("Lucía", 25, null, "M", 60, 1.65, 1998);
// persona1.generaDNI();
// persona1.mostrarGeneracion();
// persona1.esMayorDeEdad();
// persona1.mostrarDatos();

//ejercicio 6
// class Libro {
//   constructor(isbn, titulo, autor, paginas) {
//     this.isbn = isbn;
//     this.titulo = titulo;
//     this.autor = autor;
//     this.paginas = paginas;
//   }

//   get getPaginas() {
//     return this.paginas;
//   }

//   mostrarLibro() {
//     console.log(`El libro "${this.titulo}" con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.paginas} páginas`);
//   }
// }

// const libro1 = new Libro("123456789", "El Principito", "Antoine de Saint-Exupéry", 96);
// const libro2 = new Libro("987654321", "Cien años de soledad", "Gabriel García Márquez", 417);

// libro1.mostrarLibro();
// libro2.mostrarLibro();

// const libroMasLargo = libro1.getPaginas > libro2.getPaginas ? libro1.titulo : libro2.titulo;
// console.log(`El libro con más páginas es: ${libroMasLargo}`);


//ejercicio 7
// class Contacto {
//   constructor(nombre, telefono) {
//     this.nombre = nombre;
//     this.telefono = telefono;
//   }
// }

// class Agenda {
//   constructor(tamano = 10) {
//     this.tamano = tamano;
//     this.contactos = [];
//   }

//   aniadirContacto(contacto) {
//     if (this.agendaLlena()) {
//       console.log("La agenda está llena. No se puede añadir más contactos.");
//       alert("La agenda está llena.");
//       return;
//     }
//     if (this.existeContacto(contacto)) {
//       console.log("El contacto ya existe.");
//       alert("El contacto ya existe.");
//       return;
//     }
//     this.contactos.push(contacto);
//     console.log("Contacto añadido:", contacto);
//     alert(`Contacto añadido: ${contacto.nombre}`);
//   }

//   existeContacto(contacto) {
//     return this.contactos.some(c => c.nombre.toLowerCase() === contacto.nombre.toLowerCase());
//   }

//   listarContactos() {
//     console.log("Lista de contactos:");
//     this.contactos.forEach((c, i) => {
//       console.log(`${i + 1}. ${c.nombre} - ${c.telefono}`);
//     });
//     alert(this.contactos.map(c => `${c.nombre}: ${c.telefono}`).join("\n"));
//   }

//   buscarContacto(nombre) {
//     const encontrado = this.contactos.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
//     if (encontrado) {
//       console.log(`Teléfono de ${nombre}: ${encontrado.telefono}`);
//       alert(`Teléfono de ${nombre}: ${encontrado.telefono}`);
//     } else {
//       console.log("Contacto no encontrado.");
//       alert("Contacto no encontrado.");
//     }
//   }

//   eliminarContacto(contacto) {
//     const index = this.contactos.findIndex(c => c.nombre.toLowerCase() === contacto.nombre.toLowerCase());
//     if (index !== -1) {
//       this.contactos.splice(index, 1);
//       console.log("Contacto eliminado.");
//       alert("Contacto eliminado.");
//     } else {
//       console.log("Contacto no encontrado.");
//       alert("Contacto no encontrado.");
//     }
//   }

//   agendaLlena() {
//     return this.contactos.length >= this.tamano;
//   }

//   huecosLibres() {
//     const libres = this.tamano - this.contactos.length;
//     console.log(`Huecos libres: ${libres}`);
//     alert(`Huecos libres: ${libres}`);
//   }
// }

// // Menú interactivo
// const agenda = new Agenda(); // Puedes pasar un tamaño personalizado si querés

// function mostrarMenu() {
//   let opcion;
//   do {
//     opcion = prompt(
//       "Agenda Telefónica\n" +
//       "1. Añadir contacto\n" +
//       "2. Buscar contacto\n" +
//       "3. Eliminar contacto\n" +
//       "4. Listar contactos\n" +
//       "5. Ver si la agenda está llena\n" +
//       "6. Ver huecos libres\n" +
//       "7. Salir\n" +
//       "Seleccione una opción:"
//     );

//     switch (opcion) {
//       case "1":
//         const nombreNuevo = prompt("Ingrese el nombre del contacto:");
//         const telefonoNuevo = prompt("Ingrese el teléfono:");
//         const nuevoContacto = new Contacto(nombreNuevo, telefonoNuevo);
//         agenda.aniadirContacto(nuevoContacto);
//         break;
//       case "2":
//         const nombreBuscar = prompt("Ingrese el nombre a buscar:");
//         agenda.buscarContacto(nombreBuscar);
//         break;
//       case "3":
//         const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
//         const contactoEliminar = new Contacto(nombreEliminar, "");
//         agenda.eliminarContacto(contactoEliminar);
//         break;
//       case "4":
//         agenda.listarContactos();
//         break;
//       case "5":
//         const llena = agenda.agendaLlena();
//         alert(llena ? "La agenda está llena." : "La agenda tiene espacio.");
//         break;
//       case "6":
//         agenda.huecosLibres();
//         break;
//       case "7":
//         alert("Saliendo de la agenda...");
//         break;
//       default:
//         alert("Opción inválida.");
//     }
//   } while (opcion !== "7");
// }

// mostrarMenu();