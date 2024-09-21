
// 1.	Implementar una función para calcular el máximo común divisor (MCD).
function firstIntermediateAlgoritm(){
    var numberOne = Number(prompt("Ingresa el primer numero"));
    var numberTwo = Number(prompt("Ingresa el segundo numero"));

    while(isNaN(numberOne) || isNaN(numberTwo)){
        alert("Solo es posible ingresar numeros");
        numberOne = Number(prompt("Ingresa el primer numero"));
        numberTwo = Number(prompt("Ingresa el segundo numero"));
    }

    while(numberTwo === 0){
        alert("La division entre ceros no es posible, intenta de nuevo");
        numberOne = Number(prompt("Ingresa el primer numero"));
        numberTwo = Number(prompt("Ingresa el segundo numero"));
    }

    while(numberTwo !== 0){
        let resto = numberOne % numberTwo;

        numberOne = numberTwo;

        numberTwo = resto;
    }

    alert("El maximo comun divisior (MCD) de los numeros ingresados es: " + numberOne);
}


// 2.	Implementar una función para calcular el mínimo común múltiplo (MCM).
function secondIntermediateAlgoritm(){
    alert("hola mundo");
}


// 3.	Implementar una función para ordenar un arreglo utilizando el método de burbuja.
function thirdIntermediateAlgoritm(){
    alert("hola mundo");
}


// 4.	Implementar una función para ordenar un arreglo utilizando el método de inserción.
function fourthIntermediateAlgoritm(){
    alert("hola mundo");
}


// 5.	Implementar una función para buscar un elemento en un arreglo ordenado utilizando búsqueda binaria.
function fifthIntermediateAlgoritm(){
    alert("hola mundo");
}


// 6.	Implementar una pila utilizando un arreglo.
function sixthIntermediateAlgoritm(){
    alert("hola mundo");
}


// 7.	Implementar una cola utilizando un arreglo.
function seventhIntermediateAlgoritm(){
    alert("hola mundo");
}


// 8.	Implementar una lista enlazada simple.
function eighthIntermediateAlgoritm(){
    alert("hola mundo");
}


// 9.	Implementar un árbol binario.
function ninthIntermediateAlgoritm(){
    alert("hola mundo");
}


// 10.	Resolver la torre de Hanoi.
function tenthIntermediateAlgoritm(){
    alert("hola mundo");
}