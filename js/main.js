
// carrito de compra en una seccion "Paquete" landing page de viajes


let nombre = prompt("Ingresa tu nombre para continuar: ").toUpperCase();

let paquete = "";
let precio = 0;
let dias = 0;
let total = 0;
let mundo = false;

do{
    PAQUETE = prompt(` 
    ¡${nombre}! ¿A donde queres viajar? 
    
    CANCUN
    JAPON  

    `).toUpperCase();

    dias = Number(prompt(`
    ¡${nombre}!, elegiste ${PAQUETE}, ¿cuantos dias?`));
    

    switch (PAQUETE) {
        case "CANCUN":
            precio = 100;
            break;

        case "JAPON":
            precio = 100;
            break;

        default:
            alert(`oh no!  No esta disponible ${PAQUETE}`);
            precio = 0;
            dias = 0;
            break;
    }
   
    Total += precio * dias;
    agregar = confirm("dispones de assist card?");

} while (mundo);

alert(`
¡Bienvenido a bordo ${nombre}!`);