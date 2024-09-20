function calculadora(){
    var option = Number(prompt("Selecciona una de las siguientes opciones: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir \n Ingresa cualquier otro valor para salir"));

    switch (option) {
        case 1:
            var optionTwo = Number(prompt("Selecciona una de las siguientes opciones: \n 1. Suma de dos numeros \n 2. Suma personalizada"));

            while(isNaN(optionTwo)){
                alert("Por favor, ingresa el numero de la opcion que deseas");
                optionTwo = Number(prompt("Selecciona una de las siguientes opciones: \n 1. Suma de dos numeros \n 2. Suma personalizada"));
            }

            switch(optionTwo){
                case 1:
                    var numberOne = Number(prompt("Ingresa el primer numero"));
                    var numberTwo = Number(prompt("Ingresa el segundo numero"));
        
                    while(isNaN(numberOne) || isNaN(numberTwo)){
                        alert("Solo es posible ingresar numeros");
                        numberOne = Number(prompt("Ingresa el primer numero"));
                        numberTwo = Number(prompt("Ingresa el segundo numero"));
                    }

                    var result = numberOne + numberTwo;

                    alert("El resultado de la suma es: " + result);
                break;

                case 2:
                    var amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));

                    while(isNaN(amount) || amount <= 0){
                        alert("Solo puedes ingresar un numero mayor a 0")
                        amount = Number(prompt("Ingresa la cantidad de numeros que deseas sumar"));
                    }

                    var result = 0;

                    for(let i = 0; i < amount; i++){
                        var numbers = Number(prompt("Ingresa un numero"));
                        result += numbers;
                    }

                    alert("El resultado de la suma personalizada es: " + result);
                break;
            }
        break;

        case 2:
            var optionTwo = Number(prompt("Selecciona una de las siguientes opciones: \n 1. Resta de dos numeros \n 2. Resta personalizada"));

            while(isNaN(optionTwo)){
                alert("Por favor, ingresa el numero de la opcion que deseas");
                optionTwo = Number(prompt("Selecciona una de las siguientes opciones: \n 1. Resta de dos numeros \n 2. Resta personalizada"));
            }

            switch(optionTwo){
                case 1:
                    var numberOne = Number(prompt("Ingresa el primer numero"));
                    var numberTwo = Number(prompt("Ingresa el segundo numero"));
        
                    while(isNaN(numberOne) || isNaN(numberTwo)){
                        alert("Solo es posible ingresar numeros");
                        numberOne = Number(prompt("Ingresa el primer numero"));
                        numberTwo = Number(prompt("Ingresa el segundo numero"));
                    }

                    var result = numberOne - numberTwo;

                    alert("El resultado de la resta es: " + result);
                break;

                case 2:
                    var amount = Number(prompt("Ingresa la cantidad de numeros que deseas restar"));

                    while(isNaN(amount) || amount <= 0){
                        alert("Solo puedes ingresar un numero mayor a 0")
                        amount = Number(prompt("Ingresa la cantidad de numeros que deseas restar"));
                    }

                    var customSubstraction = Number(prompt("Ingresa el primer numero"));

                    while(isNaN(customSubstraction)){
                        alert("Solo puedes ingresar un numero")
                        customSubstraction = Number(prompt("Ingresa el primer numero"));
                    }

                    for(let i = 1; i < amount; i++){
                        var numbers = Number(prompt("Ingresa un numero"));
                        customSubstraction = customSubstraction - numbers;
                    }

                    alert("El resultado de la resta personalizada es: " + customSubstraction);
                break;
            }
        break;

        case 3:
            var optionTwo = Number(prompt("Selecciona una de las siguientes opciones: \n 1. Multiplicacion de dos numeros \n 2. Multiplicacion personalizada"));

            while(isNaN(optionTwo)){
                alert("Por favor, ingresa el numero de la opcion que deseas");
                optionTwo = Number(prompt("Selecciona una de las siguientes opciones: \n 1. Multiplicacion de dos numeros \n 2. Multiplicacion personalizada"));
            }

            switch(optionTwo){
                case 1:
                    var numberOne = Number(prompt("Ingresa el primer numero"));
                    var numberTwo = Number(prompt("Ingresa el segundo numero"));
        
                    while(isNaN(numberOne) || isNaN(numberTwo)){
                        alert("Solo es posible ingresar numeros");
                        numberOne = Number(prompt("Ingresa el primer numero"));
                        numberTwo = Number(prompt("Ingresa el segundo numero"));
                    }

                    var result = numberOne * numberTwo;

                    alert("El resultado de la multiplicacion es: " + result);
                break;

                case 2:
                    var amount = Number(prompt("Ingresa la cantidad de numeros que deseas multiplicar"));

                    while(isNaN(amount) || amount <= 0){
                        alert("Solo puedes ingresar un numero mayor a 0")
                        amount = Number(prompt("Ingresa la cantidad de numeros que deseas multiplicar"));
                    }

                    var customMultiplication = Number(prompt("Ingresa el primer numero"));

                    while(isNaN(customMultiplication)){
                        alert("Solo puedes ingresar un numero")
                        customMultiplication = Number(prompt("Ingresa el primer numero"));
                    }

                    for(let i = 1; i < amount; i++){
                        var numbers = Number(prompt("Ingresa un numero"));
                        customMultiplication = customMultiplication * numbers;
                    }

                    alert("El resultado de la multiplicacion personalizada es: " + customMultiplication);
                break;
            }
        break;

        case 4:
            var optionTwo = Number(prompt("Selecciona una de las siguientes opciones: \n 1. Division de dos numeros \n 2. Division personalizada"));

            while(isNaN(optionTwo)){
                alert("Por favor, ingresa el numero de la opcion que deseas");
                optionTwo = Number(prompt("Selecciona una de las siguientes opciones: \n 1. Division de dos numeros \n 2. Division personalizada"));
            }

            switch(optionTwo){
                case 1:
                    var numberOne = Number(prompt("Ingresa el primer numero"));
                    var numberTwo = Number(prompt("Ingresa el segundo numero"));
        
                    while(isNaN(numberOne) || isNaN(numberTwo)){
                        alert("Solo es posible ingresar numeros");
                        numberOne = Number(prompt("Ingresa el primer numero"));
                        numberTwo = Number(prompt("Ingresa el segundo numero"));
                    }

                    while(numberTwo === 0){
                        alert("No es posible dividir entre 0, intentalo nuevamente");
                        numberOne = Number(prompt("Ingresa el primer numero"));
                        numberTwo = Number(prompt("Ingresa el segundo numero"));
                    }

                    var result = numberOne / numberTwo;

                    alert("El resultado de la division es: " + result);
                break;

                case 2:
                    var amount = Number(prompt("Ingresa la cantidad de numeros que deseas dividir"));

                    while(isNaN(amount) || amount <= 0){
                        alert("Solo puedes ingresar un numero mayor a 0")
                        amount = Number(prompt("Ingresa la cantidad de numeros que deseas dividir"));
                    }

                    var customDivision = Number(prompt("Ingresa el primer numero"));

                    while(isNaN(customDivision)){
                        alert("Solo puedes ingresar un numero")
                        customDivision = Number(prompt("Ingresa el primer numero"));
                    }

                    for(let i = 1; i < amount; i++){
                        var numbers = Number(prompt("Ingresa un numero"));
                        customDivision = customDivision / numbers;
                    }

                    alert("El resultado de la division personalizada es: " + customDivision);
                break;
            }
        break;

        default:
            alert("Hasta pronto");
        break;
    }
}