// PRIMER ENTREGABLE

// alert('¡Bienvenido a TocandoLaGuitarra! \n\n El sitio de música más iteractivo que hay');

// let nombre = prompt('¿Cómo es tu nombre?');
// let apellido = prompt('¿Cómo es tu apellido?');
// let edad = parseInt(prompt('Y ¿Cuál es tu edad?'));

// const ESPACIO = ' ';

// if (nombre == '' || apellido == '' || edad == 0) {
//     alert('Los datos ingresados son incorrectos, intenta nuevamente')
// } else {
//     alert('Gracias por visitarnos ' + nombre + ESPACIO + apellido);
// }

alert('Te invitamos a responder unas preguntas para saber cuanto sabes de música')
alert('Por cada respuesta correcta obtenés 3 puntos de lo contrario no sumarás ninguno')
alert('Si lográs 9 puntos obtené un IMPORTANTE DESCUENTO en nuestro catálogo!!')

let puntuacion = 0;

for (let i = 1; i <= 3; i += 3) {
    const respuesta1 = parseInt(prompt('¿Cuánto tiempo vale la nota NEGRA?'));

    if (respuesta1 === 1) {
        alert("¡Correcto! Ganaste 3 puntos.");
        puntuacion += 3;
    } else {
        alert("Incorrecto. El valor de la nota es 1");
        puntuacion += 0;
    }

    const respuesta2 = parseInt(prompt('¿Cuánto tiempo vale la nota REDONDA?'));

    if (respuesta2 === 4) {
        alert("¡Correcto! Ganaste 3 puntos.");
        puntuacion += 3;
    } else {
        alert("Incorrecto. El valor de la nota es 4");
        puntuacion += 0;
    }

    const respuesta3 = parseInt(prompt('¿Cuánto tiempo vale la nota BLANCA?: '));

    if (respuesta3 === 2) {
        alert("¡Correcto! Ganaste 3 puntos.");
        puntuacion += 3;
    } else {
        alert("Incorrecto. El valor de la nota es 2");
        puntuacion += 0;
    }
}

if (puntuacion < 12) {
    alert('¡¡FELICITACIONES!!. Tu puntuación final es: ' + puntuacion + '\n Disfruta un 20% de descuentos en todos nuestros servivios!!');
} else {
    alert('Fin del juego. Tu puntuación final es: ' + puntuacion);
}



// const comprarProductos = () => {
//     let producto = '';
//     let cantidad = 0;
//     // let cantidadTotal = 0;
//     let precio = 0;
//     let subtotal = 0;
//     let seguirComprando = true;

//     do {
//         producto = prompt('¿Querés comprar shampoo, acondicionador o ambos?');
//         cantidad = Number(prompt('¿Cuantos querés comprar?'));

//         // console.log(producto);
//         // console.log(cantidad);


//         switch (producto) {
//             case 'shampoo':
//                 precio = 500;
//                 break;
//             case 'acondicionador':
//                 precio = 1000;
//                 break;
//             case 'ambos':
//                 precio = 1500;
//                 break;
//             default:
//                 alert('Alguno de los datos ingresados no es correcto')
//                 precio = 0;
//                 cantidad = 0;
//         }

//         subtotal += precio * cantidad;
//         console.log(subtotal)
//         // cantidadTotal += cantidad;

//         seguirComprando = confirm('¿Desea seguir comprando?');
//     } while (seguirComprando);

//     return subtotal;
// }

// const aplicarDescuento = (subtotal) => {
//     const descuento = 0.80; //Descuento del 20%

//     if (subtotal >= 6000) {
//         return subtotal * descuento;
//     } else {
//         return subtotal;
//     }

//     const mostarDetalleDeCompra = (precioFinal) => {
//         alert('El precio total de su compra es: $' + precioFinal);
//     }
// }

// const subtotal = comprarProductos();

// const precioFinal = aplicarDescuento(subtotal);

// mostarDetalleDeCompra(precioFinal);