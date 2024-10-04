var readlineSync = require('readline-sync');
//we give values to the different variables
let nombre="Daniel";
const edad=35;
var megustaProgramar=true;
//we print the values of the variables
console.log("Nombre",nombre);
console.log("edad",edad);
console.log("Me gusta programar",megustaProgramar);
//we give values to the variables
let nun1=12;
let nun2=3;
//we make de addition
let res=(n1+n2);
//show the result
console.log(res);
//we give the value to the variables
let apellido="Guillén";
//print the two variables
console.log(nombre,apellido);
//we give the type of variable as a string
let numero="50";
//create a new variable giving the value to the value of the previous variable converting it to number usig Number()
let numero2=Number(numero);
//sow to the user the type of variable
console.log(typeof(numero2));
//make the different operations
let resta=(nun1-nun2);
let suma=(nun1+nun2);
let division=(nun1/nun2);
let producto=(nun1*nun2);
// show the results
console.log("suma",suma);
console.log("resta",resta);
console.log("division",division);
console.log("producto",producto);
//ask for the user to introduce a number
let number = readlineSync.question('introduce un numero: ');
//if the number is superior to 10 it will show to the user
if (number>10){
    console.log("el numero introducido es mayor de 10");
    //if is inferior to 10 will tell to the user 
}else if(number<10){
    console.log("el numero introducido es menor de 10");
//if the number is 10 the program will show it
}else if(number==10){
    console.log("el numero introducido es 10");

}
//we ask for the user to introduce a number
let poi = readlineSync.question('introduce un numero: ');
//if the remainder of dividing the number by 2 is 0 then the number is even
if(poi%2==0){
    console.log("el numero introducido es par");
// in another way the number is not even
}else{
    console.log("el numero introducido es impar");

}
//we use the for loop for show the numbers 1 to 10
for(let i=1; i<=10; i++){
    console.log(i);
}
//we ask the user for introduce a number
let fact = readlineSync.question('introduce un numero: ');
let rfac=1;
//with the while loop we decrease this number in one unit for iteration multiplying this number by the result variable previously inizialized in 1

while (fact>1){
    rfac=fact*rfac
    fact--;

}
//at the end of the loop we show the final result
console.log(rfac);

//we ask for the number to the user
let tabla = readlineSync.question('introduce un numero: ');
//with a for loop we show the table 
for(let i=1; i<=10; i++){
    console.log(tabla," x ", i, " = ", (tabla*i));
}

//We ask for the user to type a word
let palabra= readlineSync.question("Introduce tu palabra ");
//we inizialise a const with all kind of vowels and a counter
const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
    let contador = 0;
//the for loop comares the word with the vowels an add one unit with each vowel
    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    //we show the number of vowels to the user
console.log("la palabra ", palabra, " tiene ", contador," vocales");

//inicialize the array whit 3 names
let nombres =["Pedro", "juan", "Luis"];
//we use the for...of loop to print each name of the array separately
for(let nombr of nombres){
    console.log(nombr);
}

let nu1 = readlineSync.question('Primer numero: ');
let nu2 = readlineSync.question('Primer numero: ');
let operador = readlineSync.question('Introduzca operacion');
switch(operador){

    case("*"):{
        let resultado=(nu1*nu2);
        console.log("El resultado es: ", resultado);
        break;

    }
    case("/"):{
        let resultado=(nu1/nu2);
        console.log("El resultado es: ", resultado);
        break;


    }
    case("+"):{
        let resultado=(nu1+nu2);
        console.log("El resultado es: ", resultado);
        break;


    }
    case("-"):{
        let resultado=(nu1-nu2);
        console.log("El resultado es: ", resultado);
        break;


    }
}

// Ask for the phrase to the user
let frase = readlineSync.question('Introduce una frase: ');

// Use split to divide the phrase in separate words
let palabras = frase.trim().split(/\s+/); // trim() delete the spaces of the begining and the end \s+ split the phrase in different spaces

// Show the number of words
console.log("La frase tiene ", palabras.length , "palabras.");


// Ask for the phrase to the user
let frase2 = readlineSync.question('Introduce una frase: ');

// Use split to divide the phrase in separate words
let palabras2 = frase2.trim().split(/\s+/); // trim() delete the spaces of the begining and the end \s+ split the phrase in different spaces
//Run the array length backwards printing each word of the array
for (let i= palabras.length; i>=0;i--){
    console.log(palabras[i]);
}

// Ask for the to the numbres 
let n1 = Number(readlineSync.question('numero 1: ')); //use numbers to convert the variables to numbers
let n2 = Number(readlineSync.question('numero 2: '));
let n3 = Number(readlineSync.question('numero 3: '));
//make the conditions for the different events
if (n1<=n2 && n2<n3){
    console.log(n3," es el numero mayor")
} else if(n1>n2 && n2>=n3){
    console.log(n1," es el numero mayor")
} else if (n1<=n3 && n3<n2){
    console.log(n2," es el numero mayor")

} else if (n1==n2 && n2==n3){
    console.log("Todos los numeros tienen el mismo valor")

}else if (n1<n3 && n3==n2){
    console.log(n2," es el numero mayor")

}else if (n1==n3 && n3>n2){
    console.log(n1," es el numero mayor")

}else if (n1==n2 && n2>n3){
    console.log(n2," es el numero mayor")

}

//we ask the user for introduce a number
let np = readlineSync.question('introduce un numero: ');
//we use the Wilson Theoreme to calculate if the number is a prime number
let rp=1;
// we deduct 1 to the number that we want to know if is a prime number or not
let nnp=(np-1);
//calculate the factorial of this number
while (nnp>1){
    rp=nnp*rp
    nnp--;

}
//Add 1 to the result
rp=(rp+1);
//If the reminder of divide this number by the number that we want to figure out if is a prime number is 0 then is a prime number.
if(rp%np==0){
    console.log("El numero es primo")
}else{
    console.log("El numero no es primo")
}

class Circulo {
    constructor(radio) {
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * Math.pow(this.radio, 2);
    }
  }
  
let r = readlineSync.question("Introduce el radio");
  const miCirculo = new Circulo(r); // Radio de 5
  
  // Calcular y mostrar el área en la consola
  const area = miCirculo.calcularArea();
  console.log("El área del círculo con radio", r," es: ",area);
  
  let nota = readlineSync.question("Introduce la nota: ");
  if (nota>=60) {
    console.log("Aprobado");
  } else {
    console.log("Reprobado");
  }

