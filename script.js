
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}


function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}


function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}


function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}


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

    
    document.getElementById('outputTemp').value = outputTemp.toFixed(2);
});


document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('inputTemp').value = '';
    document.getElementById('outputTemp').value = '';
    document.getElementById('conversionType').value = 'c-f';
});
