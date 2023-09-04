// Ejemplo desafio entregable

alert('¡Bienvenido a TocandoLaGuitarra! \n\n El sitio de música más iteractivo que hay');

let nombre = prompt('¿Cómo es tu nombre?');
let apellido = prompt('¿Cómo es tu apellido?');
let edad = parseInt(prompt('Y ¿Cuál es tu edad?'));

const ESPACIO = ' ';

if (nombre == '' || apellido == '' || edad == 0) {
    alert('Los datos ingresados son incorrectos, intenta nuevamente')
} else {
    alert('Gracias por visitarnos ' + nombre + ESPACIO + apellido);
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