function convertTemperature() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultElement = document.getElementById("result");

    var fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5/9;
        resultElement.innerHTML = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
    } else {
        resultElement.innerHTML = "Please enter a valid temperature.";
    }
}
