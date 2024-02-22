// document.write('Hola a todos');
// document.write('Adios a todos');

// VARIABLES
var Nombre; //declaracion de variable
Nombre='Aleks'; //inicializacion de variable


let Saludo=' Hola'; //declaracion e inicializacion de variable


//TIPOS DE DATOS
let nombre='Ivan'; //tipo string
let apellido='Velazquez';
let cantidad=42; //tipo int
let precio=13.45; //tipo float
let esVerdadero= true; //tipo bool
let esNulo= null; //tipo null
let persona= {nombre: 'Aleks', edad:20}; //tipo objeto
    //tipado de variables dinamico
document.write(nombre);
document.write('<br>');
document.write(cantidad);
document.write('<br>');
document.write(precio);
document.write('<br>');
document.write(esVerdadero);
document.write('<br>');
document.write(esNulo);
document.write('<br>');
document.write(persona.nombre);
document.write('<br>');

//CONCATENACION DE DATOS
document.write(nombre+' '+apellido);
document.write('<br>');
document.write('Nombre: '+nombre+' '+'Apellido: '+apellido);
document.write('<br>');

let saludo=nombre.concat(apellido);
document.write(saludo)
document.write('<br>');
document.write('===================<br>');
document.write(nombre,' ', apellido);
document.write('<br>');
document.write('<br>');
/* para comentar multiples lineas / bloques de codigo */


document.write('==========CAPTURA DE DATOS=========<br>');
// let NOMBRE, EDAD, DIRECCION, TELEFONO;

// NOMBRE = prompt('Ingrese su nombre...');
// EDAD = prompt('Ingrese su edad...');
// DIRECCION = prompt('Ingrese su direccion...');
// TELEFONO = prompt('Ingrese un numero de telefono...');

// document.write('Nombre: ',NOMBRE);
// document.write('<br>');
// document.write('Edad: ',EDAD);
// document.write('<br>');
// document.write('Direccion: ',DIRECCION);
// document.write('<br>');
// document.write('Telefono: ',TELEFONO);
document.write('<br>');
document.write('<br>');


document.write('==========CONSTANTES=========<br>');
const PRECIO = 200;

document.write('Precio constante: ',PRECIO);
