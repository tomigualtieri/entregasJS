//Control de llegada para trabajadores de una peluqueria.

const Trabajador = function(nombre,entrada,puesto,){
    this.nombre = nombre;
    this.entrada = entrada;
    this.puesto = puesto;
}

const hoy = new Date()
let llegada = hoy.toTimeString() 

let trabajador1 = new Trabajador("Carlos",llegada, "limpieza")
let trabajador2 = new Trabajador("Maria", llegada, "atencion al publico")
let trabajador3 = new Trabajador("Jose", llegada, "peluquero")
let trabajador4 = new Trabajador("Juan", llegada, "peluquero")
let trabajador5 = new Trabajador("Zoe", llegada, "encargada")

let lista = [trabajador1,trabajador2,trabajador3,trabajador4,trabajador5]

function listaDeTrabajadores(){
    let persona = prompt("Nombre del trabajador...").toUpperCase().trim()
    let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(persona))

    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("No figura en el sistema")
    }
    
}

listaDeTrabajadores()