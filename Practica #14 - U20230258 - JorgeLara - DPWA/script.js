// FUNCION PARA SUMAR DOS NUMEROS
function sumar() {
    // OBTENER EL VALOR DEL PRIMER NUMERO DEL INPUT CON ID 'numero1'
    var num1 = parseFloat(document.getElementById('numero1').value);

    // OBTENER EL VALOR DEL SEGUNDO NUMERO DEL INPUT CON ID 'numero2'
    var num2 = parseFloat(document.getElementById('numero2').value);

    // REALIZAR LA OPERACION DE SUMA
    var resultado = num1 + num2;

    // LLAMAR A LA FUNCION mostrarResultado PARA MOSTRAR EL RESULTADO DE LA PAGINA
    mostrarResultado(resultado);
}

// FUNCION PARA RESTAR DOS NUMEROS
function resta() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    var resultado = num1 - num2;

    mostrarResultado(resultado);
}

// FUNCION PARA MULTIPLICAR DOS NUMEROS
function multiplicar() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    var resultado = num1 * num2;


    mostrarResultado(resultado);
}

// FUNCION PARA DIVIDIR DOS NUMEROS
function dividir() {

    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    if (num2 === 0) {
        // Si el divisor es cero, mostrar un mensaje de error
        mostrarResultado('No es posible dividir por cero')
    } else {
        // Realizar la operación de división
        var resultado = num1 / num2;

        // Llamar a la función mostrarResultado para mostrar el resultado en la página
        mostrarResultado(resultado);
    }
}

// FUNCION PARA MOSTRAR EL RESULTADO EN LA PAGINA
function mostrarResultado(resultado) {
    // ACTUALIZAR EL CONTENIDO DEL ELEMENTO CON ID 'resultado' CON EL RESULTADO FORMATEADO
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado.toFixed(2);
}
