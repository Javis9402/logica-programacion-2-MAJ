let temperaturaCelsius;

while (true) {
    temperaturaCelsius = prompt("Ingresa la temperatura en grados Celsius:");

    // Verificar que el usuario haya ingresado un número
    if (temperaturaCelsius !== null && temperaturaCelsius.trim() !== "" && !isNaN(temperaturaCelsius)) {
        temperaturaCelsius = Number(temperaturaCelsius);
        break;
    }

    console.error("Error: debes ingresar un valor numérico.");
}

// Convertir Celsius a Kelvin
let temperaturaKelvin = temperaturaCelsius + 273.15;

// Convertir Celsius a Fahrenheit
let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

// Imprimir resultados en consola
console.log("Grados Kelvin: " + temperaturaKelvin);
console.log("Grados Fahrenheit: " + temperaturaFahrenheit);