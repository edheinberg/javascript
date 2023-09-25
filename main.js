// // PRIMER ENTREGABLE

// alert('¡Bienvenido a TocandoLaGuitarra! \n\n El sitio de música más iteractivo que hay');

// let nombre = prompt('¿Cómo es tu nombre?');
// let apellido = prompt('¿Cómo es tu apellido?');
// let edad = parseInt(prompt('Y, ¿Cuál es tu edad?'));

// const ESPACIO = ' ';

// if (nombre == '' || apellido == '' || edad == 0) {
//     alert('Los datos ingresados son incorrectos, intenta nuevamente')
// } else {
//     alert('Gracias por visitarnos ' + nombre + ESPACIO + apellido);
// }

// alert('Te invitamos a responder unas preguntas para saber cuanto sabes de música')
// alert('Por cada respuesta correcta obtenés 3 puntos de lo contrario no sumarás ninguno')
// alert('Si lográs 9 puntos obtené un IMPORTANTE DESCUENTO en nuestro catálogo!!')

// let puntuacion = 0;

// for (let i = 1; i <= 3; i += 3) {
//     const respuesta1 = parseInt(prompt('¿Cuánto tiempo vale la nota NEGRA?'));

//     if (respuesta1 === 1) {
//         alert("¡Correcto! Ganaste 3 puntos.");
//         puntuacion += 3;
//     } else {
//         alert("Incorrecto. El valor de la nota es 1");
//         puntuacion += 0;
//     }

//     const respuesta2 = parseInt(prompt('¿Cuánto tiempo vale la nota REDONDA?'));

//     if (respuesta2 === 4) {
//         alert("¡Correcto! Ganaste 3 puntos.");
//         puntuacion += 3;
//     } else {
//         alert("Incorrecto. El valor de la nota es 4");
//         puntuacion += 0;
//     }

//     const respuesta3 = parseInt(prompt('¿Cuánto tiempo vale la nota BLANCA?: '));

//     if (respuesta3 === 2) {
//         alert("¡Correcto! Ganaste 3 puntos.");
//         puntuacion += 3;
//     } else {
//         alert("Incorrecto. El valor de la nota es 2");
//         puntuacion += 0;
//     }
// }

// if (puntuacion === 9) {
//     alert('¡¡FELICITACIONES!!. Tu puntuación final es: ' + puntuacion + '\n Disfruta un 25% de descuentos en todos nuestros servicios!!');
//     alert('Te invitamos a que veas nuestro catálogo y aproveches tu beneficio!');
// } else {
//     alert('Fin del juego. Tu puntuación final es: ' + puntuacion);
//     alert('Te invitamos a que veas nuestro catálogo de productos y servicios!');
// }



// const comprarProductos = () => {
//     let producto = '';
//     let cantidad = 0;
//     let cantidadTotal = 0;
//     let precio = 0;
//     let subtotal = 0;
//     let seguirComprando = true;

//     do {
//         catalogo = prompt('¿Te gustaría comprar una GUITARRA, CURSOS o ACCESORIOS?').toUpperCase();

//         if (catalogo == 'GUITARRA') {
//             producto = prompt('¿Querés una CRIOLLA, ACUSTICA o ELECTRICA?').toUpperCase();
//         } else if (catalogo == 'CURSOS') {
//             producto = prompt('¿Modalidad VIRTUAL, PRESENCIAL o TUTORIALES?').toUpperCase();
//         } else if (catalogo == 'ACCESORIOS') {
//             producto = prompt('¿Buscas cuerdas, puas o fundas?').toUpperCase();
//         } else {
//             alert('Alguna de las opciones ingresadas no es correcta, por favor intenta nuevamente')
//         }

//         cantidad = Number(prompt('¿Cuantos/as querés comprar?'));

//         console.log(producto);
//         console.log(cantidad);

//         switch (producto) {
//             case 'CRIOLLA':
//                 precio = 50000;
//                 break;
//             case 'ACUSTICA':
//                 precio = 65000;
//                 break;
//             case 'ELECTRICA':
//                 precio = 8000;
//                 break;
//             case 'VIRTUAL':
//                 precio = 4000;
//                 break;
//             case 'PRESENCIAL':
//                 precio = 5000;
//                 break;
//             case 'TUTORIALES':
//                 precio = 2500;
//                 break;
//             case 'CUERDAS':
//                 precio = 1500;
//                 break;
//             case 'PUAS':
//                 precio = 500;
//                 break;
//             case 'FUNDAS':
//                 precio = 8000;
//                 break;
//             default:
//                 alert('Alguno de los datos ingresados no es correcto')
//                 precio = 0;
//                 cantidad = 0;
//         }

//         subtotal += precio * cantidad;
//         console.log(subtotal)
//         cantidadTotal += cantidad;
//         console.log(cantidadTotal)

//         seguirComprando = confirm('¿Desea seguir comprando?');
//     } while (seguirComprando);

//     return subtotal;
// }

// const aplicarDescuento = (subtotal) => {
//     const descuento = 0.75;

//     if (puntuacion === 9) {
//         return subtotal * descuento;
//     } else {
//         return subtotal;
//     }
// }

// const mostarDetalleDeCompra = (precioFinal) => {
//     alert('El precio total de su compra es: $' + precioFinal);
// }

// const subtotal = comprarProductos();

// const precioFinal = aplicarDescuento(subtotal);

// mostarDetalleDeCompra(precioFinal);

// if (precioFinal != 0) {
//     alert('Ahora te derivamos para que elijas la opción de pago que te guste y completes los datos');
//     alert('Agradecemos mucho por tu compra ' + nombre);
//     alert('Esperamos que regreses pronto');
// } else {
//     alert('Agradecemos mucho por tu visita ' + nombre);
//     alert('Esperamos que regreses pronto');
// }




// function nombreCompleto(nombre) {
//     console.log('Hola capo! ' + nombre);
// }

// nombreCompleto(prompt('Ingrese su nombre: '));

// const nombreCompleto = (nombreApellido) => {
//     console.log('Hola ' + nombreApellido)
// }

// nombreCompleto(prompt('Ingrese su nombre y apellido: '))


// const clasesGuitarra = {
//     precio: 8000,
//     modalidad: 'Presencial',
//     dias: 4,
//     pago: 'Tarjeta'
// }

// console.log(clasesGuitarra)


// *****************SEGUNDA ENTREGA*****************//


// alert('¡Bienvenido a TocandoLaGuitarra! \n\n El sitio de música más discruptivo que hay...');

// alert('A continuación te pediremos unos datos para que puedas acceder a nuestros productos y servicios con importantes beneficios!!');

// let nombre = prompt('¿Cómo es tu nombre?');
// let apellido = prompt('¿Cómo es tu apellido?');
// let edad = parseInt(prompt('Y, ¿Cuál es tu edad?'));
// let mail = prompt('Ingrese su correo electrónico: ')

// if (nombre == '' || apellido == '' || edad == 0 || mail == '') {
//     alert('Los datos ingresados son incorrectos, intenta nuevamente')
// } else {
//     alert('Gracias por visitarnos ' + nombre + ESPACIO + apellido);
// }

// class DatosIngreso {
//     constructor(nombre, apellido, edad, mail) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.mail = mail;
//     }
// }

// const alumno1 = new DatosIngreso(nombre, apellido, edad, mail);
// console.log(alumno1)

alert('A continuación te mostraremos los productos y servicios que puedes acceder!!')

const carrito = [];

const conStockAccesorios = () => {
    const accesoriosStock = accesorios.filter((accesorios) => accesorios.stock === "Si");
    console.log(accesoriosStock)
}

const conStockGuitarras = () => {
    const guitarrasStock = guitarras.filter((guitarras) => guitarras.stock === "Si");
    console.log(guitarrasStock)
}

const comprar = () => {
    const productosEnStock = confirm('¿Desea que le mostremos solo los productos con stock?');

    if (productosEnStock) {
        conStockAccesorios();
        conStockGuitarras();
        alert('Podrás visualizar los productos que tenemos con disponibilidad')
    } else {
        alert('Podrás visualizar todos los productos que ofrecemos');
    }
}

const mostrarProductos = () => {
    const listaGuitarras = guitarras.map(guitarras => {
        return '- ' + guitarras.nombre + ' $' + guitarras.precio
    });

    alert('Lista de precios:' + '\n\n' + listaGuitarras.join('\n'));
    mostrarProductos(listaGuitarras)
}


comprar();

