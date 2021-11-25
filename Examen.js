//Punto 1 del Examen
var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2){
    console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0){
    console.log("numero2 es positivo");
}
if(numero1 < 0 	|| numero1 != 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if(numero1 = numero1++){
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
}


// Punto 2 del Examen

let factorial = 5;
let temp = 1;
let inicio = 0

for(let i =1; i <= factorial; i++){
    temp *= i;
}
console.log(temp)

// Punto 3 del Examen

function espar(valor) {
    
if(valor % 2 == 1){
    console.log(valor + "es numero impar");
}
else{
    console.log(valor + "es numero par");
}
}
espar(17)

//punto 4 del examen

function esunpalindromo(str) {

    const len = cadena1.length;

    for (let i = 0; i < len / 2; i++) {

        if (cadena1[i] !== cadena1[len - 1 - i]) {
            return 'esto no es un palindromo';
        }
    }
    return 'Es un palindromo';
}

const cadena1 =  "La ruta nos aporto otro paso natural";

const Respuesta4 = esunpalindromo(cadena1);

console.log(Respuesta4);




//Respuesta punto 5)

// 1.
class Persona {
    nombre;
    edad;
//1.2
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
//1.1
    obtDetalles(){
        console.log(nombre, edad)
    }


}

//punto 2
class Estudiante extends Persona{
    calificacion;
    
    constructor(calificacion){
        this.calificacion = calificacion
    }

    obtDetalles(){
        super.obtDetalles()
        console.log(this.calificacion)
    }
}

//Punto 3
class Profesor extends Persona{
    asignatura
    nivel

    constructor(asignatura="JS",nivel="basico"){
        super(nombre,edad)
    this.asignatura = asignatura
    this.nivel = nivel

    }
}

//Punto 4
class Grupo {
    super.Profesor
    promedio
    estudiantes = []

    constructor(Profesor,estudiantes){
        this.Profesor = super.Profesor
        this.promedio = promedio
        this.estudiantes = estudiantes
    }

Calificar(){
    for(let k = 1; k < length.estudiantes; k++){
        
    }
}



}

// Punto 5
const profe1 = new Profesor(this())