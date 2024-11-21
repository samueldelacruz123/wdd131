// Display current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
    // Formula for wind chill (metric)
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Static values for temperature and wind speed
const temperature = 10; // °C
const windSpeed = 5; // km/h

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
    document.getElementById('wind-chill').textContent = `${windChill}°C`;
} else {
    document.getElementById('wind-chill').textContent = "N/A";
}


