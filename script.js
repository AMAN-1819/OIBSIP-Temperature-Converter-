// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

// Main conversion logic
document.getElementById('convert').addEventListener('click', function () {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const conversionType = document.getElementById('conversionType').value;
    let outputTemp;

    if (isNaN(inputTemp)) {
        alert('Please enter a valid temperature');
        return;
    }

    switch (conversionType) {
        case 'c-f':
            outputTemp = celsiusToFahrenheit(inputTemp);
            break;
        case 'f-c':
            outputTemp = fahrenheitToCelsius(inputTemp);
            break;
        case 'c-k':
            outputTemp = celsiusToKelvin(inputTemp);
            break;
        case 'k-c':
            outputTemp = kelvinToCelsius(inputTemp);
            break;
        case 'f-k':
            outputTemp = fahrenheitToKelvin(inputTemp);
            break;
        case 'k-f':
            outputTemp = kelvinToFahrenheit(inputTemp);
            break;
        default:
            alert('Please select a valid conversion type');
            return;
    }

    // Display the output temperature
    document.getElementById('outputTemp').value = outputTemp.toFixed(2);
});

// Reset functionality
document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('inputTemp').value = '';
    document.getElementById('outputTemp').value = '';
    document.getElementById('conversionType').value = 'c-f';
});
