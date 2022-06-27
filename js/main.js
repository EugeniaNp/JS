
// carrito de compra en una seccion "Paquete" landing page de viajes


let nombre = prompt("Ingresa tu nombre para continuar: ").toUpperCase();

let paquete = "";
let precio = 0;
let dias = 0;
let total = 0;
let totalIva = 0 ;
let subIva = 0;
let mundo = false;


do{
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

let descuento =50;

const suma = (a, b) => a + b ;
const resta = (a, b) => a - b;

const iva = x => x * 1.21;

let precioFinal = resta (suma (subIva, iva( subIva)),subIva );


alert(`
¡Bienvenido a bordo ${nombre}!

El total a pagar por tu vuelo es de $${precioFinal}`

);







