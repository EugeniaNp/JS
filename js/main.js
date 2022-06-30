
// carrito de compra en una seccion "Paquete" landing page de viajes


let nombre = prompt("Ingresa tu nombre para continuar: ").toUpperCase();

let paquete = "";
let precio = 0;
let dias = 0;
let total = 0;
let totalIva = 0;
let subIva = 0;
let mundo = false;


do {
    paquete = prompt(` 
    ¡${nombre}! ¿A donde queres viajar? 
    
    CANCUN
    JAPON  

    `).toUpperCase();

    dias = Number(prompt(`
    ¡${nombre}!, elegiste ${paquete}, ¿cuantos dias?`));


    switch (paquete) {
        case "CANCUN":
            precio = 500;
            break;

        case "JAPON":
            precio = 100;
            break;

        default:
            alert(`oh no!  No esta disponible ${paquete}`);
            precio = 0;
            dias = 0;
            break;
    }

    subIva = dias * precio;

} while (mundo);



alert(`¡${nombre}! tenes disponible un 50% de descuento por ser el cliente N°100`);



const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const iva = x => x * 0.21;
const descuento = x => x * 0.50;

let precioFinal = suma(subIva, iva(subIva));
let precioDescuento = resta(precioFinal, descuento(precioFinal));


alert(`
¡Bienvenido a bordo ${nombre}!

El total a pagar por tu vuelo es de $${precioFinal} y al aplicar el descuento del 50% quedaria en $${precioDescuento} UNA LOCURA! `

);

//arrays //

const clientes = [100, 101];

for (let i = 0; i < clientes.length; i++) {
    alert(clientes[i]);
}

alert(`¡Promocion finalizada! gracias por celebrar con nosotros!`);

const alquilerAuto = [
    {
        id: 1,
        marca: "Audi",
    },

    {
        id: 2,
        marca: "BMW",
    },

];

console.log(alquilerAuto);
