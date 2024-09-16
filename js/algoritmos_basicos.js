//1. Imprimir "Hola, mundo!".

function firstAlgoritm(){
    alert("Hola, mundo!");
}

//2. Preguntar un número y mostrarlo en pantalla.
function secondAlgoritm(){
    let number = Number(prompt("Ingresa un numero", "0"));

    while(isNaN(number)){
        alert("Solo es posible ingresar numeros");
        number = Number(prompt("Ingresa un numero"));
    }

    alert("El numero ingresado es: "+ number);
}

//3. Sumar números.
function thirdAlgoritm(){
    var option = Number(prompt("1. Sumar dos numeros \n 2. Suma personalizada"));

    switch(option){
        case 1:
            var numberOne = Number(prompt("Ingresa el primer numero"));
            var numberTwo = Number(prompt("Ingresa el primer numero"));

            while(isNaN(numberOne) || isNaN(numberTwo)){
                alert("Solo es posible ingresar numeros");
                numberOne = Number(prompt("Ingresa el primer numero"));
                numberTwo = Number(prompt("Ingresa el primer numero"));
            }

            let addition = numberOne + numberTwo;

            alert("La suma de los dos numeros ingresados es: " + addition);
        break;
        
        case 2:
            var amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));

            while(isNaN(amount)){
                alert("Solo es posible ingresar numeros");
                amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));
            }

            let customAddition = 0;

            for(let i = 0; i < amount; i++){
                let numbers = Number(prompt("Ingresa un numero"));
                while(isNaN(numbers)){
                    alert("Debes ingresar numeros");
                    numbers = Number(prompt("Ingresa un numero"));
                }

                customAddition = customAddition + numbers;
            }

            alert("La suma de los dos numeros es "+ customAddition);
        break;

        default:
            alert("Hubo error, intentalo nuevamente");
        break;
    }
}


// 4. Restar números.
function fourthAlgoritm(){
    var option = Number(prompt("1. Restar dos numeros \n 2. Resta personalizada"));

    switch(option){
        case 1:
            var numberOne = Number(prompt("Ingresa el primer numero"));
            var numberTwo = Number(prompt("Ingresa el primer numero"));

            while(isNaN(numberOne) || isNaN(numberTwo)){
                alert("Solo es posible ingresar numeros");
                numberOne = Number(prompt("Ingresa el primer numero"));
                numberTwo = Number(prompt("Ingresa el primer numero"));
            }

            let subtraction = numberOne - numberTwo;

            alert("La resta de los dos numeros ingresados es: " + subtraction);
        break;
        
        case 2:
            var amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));

            while(isNaN(amount)){
                alert("Solo es posible ingresar numeros");
                amount = Number(prompt("Ingresa la cantidad de numeros que deseas restar"));
            }

            let customSubtraction = Number(prompt("Ingresa el primer numero"));

            while(isNaN(customSubtraction)){
                alert("Solo es posible ingresar numeros");
                customSubtraction = Number(prompt("Ingresa el primer numero"));
            }


            for(let i = 1; i < amount; i++){
                let numbers = Number(prompt("Ingresa un numero"));
                while(isNaN(numbers)){
                    alert("Debes ingresar numeros");
                    numbers = Number(prompt("Ingresa un numero"));
                }

                customSubtraction = customSubtraction - numbers;
            }

            alert("La resta de los dos numeros ingresados es "+ customSubtraction);
        break;

        default:
            alert("Hubo error, intentalo nuevamente");
        break;
    }
}

//5. Multiplicar números.
function fifthAlgoritm(){
    var option = Number(prompt("1. Multiplicar dos numeros \n 2. Multiplicacion personalizada"));

    switch(option){
        case 1:
            var numberOne = Number(prompt("Ingresa el primer numero"));
            var numberTwo = Number(prompt("Ingresa el primer numero"));

            while(isNaN(numberOne) || isNaN(numberTwo)){
                alert("Solo es posible ingresar numeros");
                numberOne = Number(prompt("Ingresa el primer numero"));
                numberTwo = Number(prompt("Ingresa el primer numero"));
            }

            let multiplication = numberOne * numberTwo;

            alert("La multiplicacion de los dos numeros ingresados es: " + multiplication);
        break;
        
        case 2:
            var amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));

            while(isNaN(amount)){
                alert("Solo es posible ingresar numeros");
                amount = Number(prompt("Ingresa la cantidad de numeros que deseas restar"));
            }

            let customMultiplication = Number(prompt("Ingresa el primer numero"));

            while(isNaN(customMultiplication)){
                alert("Solo es posible ingresar numeros");
                customMultiplication = Number(prompt("Ingresa el primer numero"));
            }


            for(let i = 1; i < amount; i++){
                let numbers = Number(prompt("Ingresa un numero"));
                while(isNaN(numbers)){
                    alert("Debes ingresar numeros");
                    numbers = Number(prompt("Ingresa un numero"));
                }

                customMultiplication = customMultiplication * numbers;
            }

            alert("La multiplicacion de los dos numeros ingresados es "+ customMultiplication);
        break;

        default:
            alert("Hubo error, intentalo nuevamente");
        break;
    }
}

//6. Dividir números (considerando la división por cero).

function sixthAlgoritm(){
    var option = Number(prompt("1. Dividir dos numeros \n 2. Division personalizada"));

    switch(option){
        case 1:
            var numberOne = Number(prompt("Ingresa el primer numero"));
            var numberTwo = Number(prompt("Ingresa el primer numero"));

            while(isNaN(numberOne) || isNaN(numberTwo) || numberOne <= 0 || numberTwo <= 0){
                alert("Solo es posible ingresar numeros mayores a 0");
                numberOne = Number(prompt("Ingresa el primer numero"));
                numberTwo = Number(prompt("Ingresa el primer numero"));
            }

            let division = numberOne / numberTwo;

            alert("La division de los dos numeros ingresados es: " + division);
        break;
        
        case 2:
            var amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));

            while(isNaN(amount) || amount <= 0){
                alert("Solo es posible ingresar numeros mayores a 0");
                amount = Number(prompt("Ingresa la cantidad de numeros que deseas restar"));
            }

            let customDivision = Number(prompt("Ingresa el primer numero"));

            while(isNaN(customDivision) || customDivision <= 0){
                alert("Solo es posible ingresar numeros mayores a 0");
                customDivision = Number(prompt("Ingresa el primer numero"));
            }


            for(let i = 1; i < amount; i++){
                let numbers = Number(prompt("Ingresa un numero"));
                while(isNaN(numbers) || numbers <= 0){
                    alert("Solo es posible ingresar numeros mayores a 0");
                    numbers = Number(prompt("Ingresa un numero"));
                }

                customDivision = customDivision / numbers;
            }

            alert("La division de los dos numeros ingresados es "+ customDivision);
        break;

        default:
            alert("Hubo error, intentalo nuevamente");
        break;
    }
}

//7. Calcular el área de un rectángulo.
function seventhAlgoritm(){
    var base = Number(prompt("Ingresa la medida de la base del rectangulo en centimetros"));
    var height = Number(prompt("Ingresa la medida de la altura del rectangulo en centimetros"));

    while(isNaN(base) || isNaN(height) || base <= 0 || height <= 0){
        alert("Las medidas de base y altura deben ser mayores a 0");
        base = Number(prompt("Ingresa la medida de la base del rectangulo en centimetros"));
        height = Number(prompt("Ingresa la medida de la altura del rectangulo centimetros"));
    }

    var area = base * height;

    var option = confirm("¿Desea visualizar la longitud del area del rectangulo en metros tambien?");

    if(option == true){
        areaMeter = area / 100;
        alert("El area del rectangulo es de "+ areaMeter + "m");
    } else{
        alert("El area del rectangulo es de "+ area + "cm");
    }
}

// 8. Calcular el perímetro de un cuadrado.
function eighthAlgoritm(){
    var side = Number(prompt("Ingrese una de las medidas del lado del cuadrado en centimetros"));

    while(isNaN(side) || side <= 0){
        alert("La medida debe ser mayor a 0");
        side = Number(prompt("Ingrese una de las medidas del lado del cuadrado en centimetros"));
    }

    side = side * 4;

    var option = confirm("¿Desea visualizar la longitud del area del rectangulo en metros tambien?");

    if(option == true){
        sideMeter = side / 100;
        alert("El perimetro del cuadrado es de "+ sideMeter + "m");
    } else{
        alert("El perimetro del cuadrado es de "+ side + "cm");
    }
}

//9. Determinar si un número es par o impar.
function ninthAlgoritm(){

    var number = Number(prompt("Ingresa un numero"));

    while(isNaN(number)){
        alert("Solo se pueden ingresar numeros");
        number = Number(prompt("Ingresa un numero"));
    }

    if(number % 2 == 0){
        alert("El numero " + number + " es un numero par");
    } else {
        alert("El numero " + number + " es un numero impar");
    }
}

//10. Convertir de Celsius a Fahrenheit.
function tenthAlgoritm(){
    var celsius = Number(prompt("Ingrese la cantidad de grados Celsius a convertir en grados Fahrenheit"));

    while(isNaN(celsius)){
        alert("Solo se pueden ingresar numeros");
        celsius = Number(prompt("Ingrese la cantidad de grados Celsius a convertir en Fahrenheit"));
    }

    var fahrenheit = (celsius * 9 / 5) + 32

    alert(celsius+"°C en grados Fahrenheit son "+ fahrenheit+"°F");
}