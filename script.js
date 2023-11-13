function convert() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerText = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
}

function convertKelvin() {
    var kelvin = parseFloat(document.getElementById("celsiusInput").value);
    var celsius = kelvin + 273.15;
    document.getElementById("result").innerText = kelvin + " Kelvin is equal to " + celsius.toFixed(2) + " Celsius.";
}
