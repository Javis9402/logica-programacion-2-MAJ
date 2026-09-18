/**
 *! Requerimentos
 ** Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
 ** Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
 ** Debe imprimir ambos resultados por consola o por el DOM.
 ** Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
 */

let temperaturaCelsius;
let datoValido = true;

while (datoValido) {
    temperaturaCelsius =Number(prompt("Ingresa la temperatura en grados Celsius:", 40));
    console.log(temperaturaCelsius);

    // Verificar que el usuario haya ingresado un número
    if (!isNaN(temperaturaCelsius)) {
        datoValido = false;
    } else {
        alert("\nXXXXXXXXXXXXX\nERROR\nXXXXXXXXXXXXX\nSOLO SE ACEPTAN NUMEROS\nXXXXXXXXXXXXX");
    }
}

// Convertir Celsius a Kelvin
let temperaturaKelvin = temperaturaCelsius + 273.15;

// Convertir Celsius a Fahrenheit
let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

// Imprimir resultados en consola
console.log("Grados Kelvin: " + temperaturaKelvin);
console.log("Grados Fahrenheit: " + temperaturaFahrenheit);