const celsiusInput = document.querySelector('#celsius input');
const fahrenheitInput = document.querySelector('#fahrenheit input');
const kelvinInput = document.querySelector('#kelvin input');

// Add event listeners to the input elements
celsiusInput.addEventListener('input', convertFromCelsius);
fahrenheitInput.addEventListener('input', convertFromFahrenheit);
kelvinInput.addEventListener('input', convertFromKelvin);

// Function to convert from Celsius
function convertFromCelsius() {
    const celsiusValue = parseFloat(celsiusInput.value);
    
    // Convert to Fahrenheit
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
    
    // Convert to Kelvin
    const kelvinValue = celsiusValue + 273.15;
    kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
}

// Function to convert from Fahrenheit
function convertFromFahrenheit() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    
    // Convert to Celsius
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
    
    // Convert to Kelvin
    const kelvinValue = (fahrenheitValue - 32) * 5/9 + 273.15;
    kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
}

// Function to convert from Kelvin
function convertFromKelvin() {
    const kelvinValue = parseFloat(kelvinInput.value);
    
    // Convert to Celsius
    const celsiusValue = kelvinValue - 273.15;
    celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
    
    // Convert to Fahrenheit
    const fahrenheitValue = (kelvinValue - 273.15) * 9/5 + 32;
    fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
}