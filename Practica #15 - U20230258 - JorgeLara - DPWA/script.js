// Definición de la función esVocal que verifica si un carácter es una vocal (mayúscula o minúscula)
function esVocal(caracter) {
    // UTILIZA UNA EXPRESION REGULAR PARA VERIFICAR SI EL CARACTER ES UNA VOCAL
    return /^[aeiouAEIOU]$/.test(caracter);
}

// FUNCION QUE SE LLAMA AL HACER CLICK EN EL BOTON PARA VERIFICAR SI UN CARACTER ES UNA VOCAL
// checkVowel ES UNA FUNCION QUE COORDINA LA OBTENCION DEL CARACTER INGRESADO,
// LA VERIFICACION DE SI ES UNA VOCAL Y LA PRESENTACION DEL RESULTADO EN LA INTERFAZ DE USUARIO.//
function checkVowel() {
    // OBTENER EL ELEMENTO DE INPUT DONDE SE INGRESA EL CARACTER
    const characterInput = document.getElementById('character');

    // OBTENER EL VALOR DEL INPUT (EL CARACTER INGRESADO)
    const character = characterInput.value;

    // OBTENER EL ELEMENTO DONDE SE MOSTRARA EL RESULTADO
    const resultElement = document.getElementById('result');

    // VERIFICAR SI EL CARACTER ES UNA VOCAL Y MOSTRAR EL RESULTADO CORRESPONDIENTE
    if (esVocal(character)) {
        resultElement.textContent = `El carácter '${character}' es una vocal.`;
    } else {
        resultElement.textContent = `El carácter '${character}' no es una vocal.`;
    }
}