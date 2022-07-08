/* 
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

class Usuario {
    constructor (nombre, dias, precioFinal){
        this.nombre = nombre
        this.dias = dias
        this.dias = precioFinal
        
    }
}


/* const usuario = []

usuario.push (new Usuario(nombre, dias))
console.log(usuario);
 */


/* const alquilerAuto = [
    {
        id: 1,
        marca: "Audi",
        precio: 1000,

    },

    {
        id: 2,
        marca: "BMW",
        precio: 2000,
    },

];
  */

//ejemplo 

//DOM

/* 
let elemento = document.getElementById ("hola") ;
let parrafo = document.getElementById ("hola1")

console.log(elemento.innerHTML);
console.log(parrafo.innerHTML);
 */

/* let div = document.getElementsByClassName ("cvp") ;
let p = document.getElementsByClassName ("card-text-1") ;

console.log(div[0].innerHTML);
console.log(p[0].innerHTML); */


let paquetes = [
    {
        id: 1,
        destino: "Cancun",
        desc: "El paraiso",
        precio: 500,
        cantidad: 1,
        img: './img/cancun.jpg',
    },
    {
        id: 2,
        destino: "Japon",
        desc: "Oxidente bello",
        precio: 400,
        cantidad: 1,
        img: './img/japon.jpg',
    },

];

const paquetesDisponibles = () => {
    const contenedor = document.getElementById("paquetesDisponibles")


    paquetes.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = ` <div class="cardImg" > <img src = ${producto.img}></div>
        `

        contenedor.appendChild(div);

    });

};

paquetesDisponibles(); 


//EVENTOS

const boton = document.getElementById ("button");

boton.addEventListener ("click", respuestaClick);

function respuestaClick (){
    console.log("Hola Hola HOLAAAA!");
}

const formulario = document.getElementById ("contactoFormulario");

formulario.addEventListener ("submit", validarFormulario);

function validarFormulario (event){
    event.preventDefault();
console.log("hello");
}