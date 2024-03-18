// PRIMER ENTREGABLE

alert('¡Bienvenido a TocandoLaGuitarra! \n\n El sitio de música más iteractivo que hay');

let nombre;
let apellido;
let edad;
const ESPACIO = ' ';

do {
    nombre = prompt('¿Cómo es tu nombre?');
    apellido = prompt('¿Cómo es tu apellido?');
    edad = parseInt(prompt('Y, ¿Cuál es tu edad?'));

    if (nombre === '' || apellido === '' || isNaN(edad) || edad === 0) {
        alert('Los datos ingresados son incorrectos, intenta nuevamente')
    }       
} while (nombre === '' || apellido === '' || isNaN(edad) || edad === 0);

alert('Gracias por visitarnos ' + nombre + ESPACIO + apellido);

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

if (puntuacion === 9) {
    alert('¡¡FELICITACIONES!!. Tu puntuación final es: ' + puntuacion + '\n Disfruta un 25% de descuentos en todos nuestros servicios!!');
    alert('Te invitamos a que veas nuestro catálogo y aproveches tu beneficio!');
} else {
    alert('Fin del juego. Tu puntuación final es: ' + puntuacion);
    alert('Te invitamos a que veas nuestro catálogo de productos y servicios!');
}

const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let cantidadTotal = 0;
    let precio = 0;
    let subtotal = 0;
    let seguirComprando = true;

    do {
        do {
            catalogo = prompt('¿Te gustaría comprar una GUITARRA, CURSOS o ACCESORIOS?').toUpperCase();

            if (catalogo !== 'GUITARRA' && catalogo !== 'CURSOS' && catalogo !== 'ACCESORIOS') {
                alert('La opción ingresada no es correcta, por favor intenta nuevamente');
            }
        } while (catalogo !== 'GUITARRA' && catalogo !== 'CURSOS' && catalogo !== 'ACCESORIOS');

        if (catalogo == 'GUITARRA') {
            do {
                producto = prompt('¿Querés una CRIOLLA, ACUSTICA o ELECTRICA?').toUpperCase();
                if (producto !== 'CRIOLLA' && producto !== 'ACUSTICA' && producto !== 'ELECTRICA') {
                    alert('La opción ingresada no es correcta, por favor intenta nuevamente');
                }
            } while (producto !== 'CRIOLLA' && producto !== 'ACUSTICA' && producto !== 'ELECTRICA');
        } else if (catalogo == 'CURSOS') {
            do {
                producto = prompt('¿Modalidad VIRTUAL, PRESENCIAL o TUTORIALES?').toUpperCase();
                if (producto !== 'VIRTUAL' && producto !== 'PRESENCIAL' && producto !== 'TUTORIALES') {
                    alert('La opción ingresada no es correcta, por favor intenta nuevamente');
                }
            } while (producto !== 'VIRTUAL' && producto !== 'PRESENCIAL' && producto !== 'TUTORIALES');
        } else if (catalogo == 'ACCESORIOS') {
            do {
                producto = prompt('¿Buscas cuerdas, puas o fundas?').toUpperCase();
                if (producto !== 'CUERDAS' && producto !== 'PUAS' && producto !== 'FUNDAS') {
                    alert('La opción ingresada no es correcta, por favor intenta nuevamente');
                }
            } while (producto !== 'CUERDAS' && producto !== 'PUAS' && producto !== 'FUNDAS');
        }

        do {
            cantidad = Number(prompt('¿Cuantos/as querés comprar?'));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert('La cantidad ingresada no es válida, por favor intenta nuevamente');
            }
        } while (isNaN(cantidad) || cantidad <= 0);

        switch (producto) {
            case 'CRIOLLA':
                precio = 50000;
                break;
            case 'ACUSTICA':
                precio = 65000;
                break;
            case 'ELECTRICA':
                precio = 8000;
                break;
            case 'VIRTUAL':
                precio = 4000;
                break;
            case 'PRESENCIAL':
                precio = 5000;
                break;
            case 'TUTORIALES':
                precio = 2500;
                break;
            case 'CUERDAS':
                precio = 1500;
                break;
            case 'PUAS':
                precio = 500;
                break;
            case 'FUNDAS':
                precio = 8000;
                break;
            default:
                alert('Alguno de los datos ingresados no es correcto')
                precio = 0;
                cantidad = 0;
        }

        subtotal += precio * cantidad;
        console.log(subtotal)
        cantidadTotal += cantidad;
        console.log(cantidadTotal)

        seguirComprando = confirm('¿Desea seguir comprando?');
    } while (seguirComprando);

    return subtotal;
}

const aplicarDescuento = (subtotal) => {
    const descuento = 0.75;

    if (puntuacion === 9) {
        return subtotal * descuento;
    } else {
        return subtotal;
    }
}

const mostarDetalleDeCompra = (precioFinal) => {
    alert('El precio total de su compra es: $' + precioFinal);
}

const subtotal = comprarProductos();

const precioFinal = aplicarDescuento(subtotal);

mostarDetalleDeCompra(precioFinal);

if (precioFinal != 0) {
    alert('Ahora te derivamos para que elijas la opción de pago que te guste y completes los datos');
    alert('Agradecemos mucho por tu compra ' + nombre);
    alert('Esperamos que regreses pronto');
} else {
    alert('Agradecemos mucho por tu visita ' + nombre);
    alert('Esperamos que regreses pronto');
}