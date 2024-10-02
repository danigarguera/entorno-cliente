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
let n1=12;
let n2=3;
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
let resta=(n1-n2);
let suma=(n1+n2);
let division=(n1/n2);
let producto=(n1*n2);
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

    }
    case("/"):{
        let resultado=(nu1/nu2);
        console.log("El resultado es: ", resultado);

    }
    case("+"):{
        let resultado=(nu1+nu2);
        console.log("El resultado es: ", resultado);

    }
    case("-"):{
        let resultado=(nu1-nu2);
        console.log("El resultado es: ", resultado);

    }
}
