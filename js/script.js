function convertSuhu(){
    var temp = Number(document.getElementById('temp').value)
    var fromCelcius = document.getElementById('fromCelcius')
    var fromFahrenheit = document.getElementById('fromFahrenheit')
    var fromKelvin = document.getElementById('fromKelvin')
    var toCelcius = document.getElementById('toCelcius')
    var toFahrenheit = document.getElementById('toFahrenheit')
    var toKelvin = document.getElementById('toKelvin')
    var hasil

    if (fromCelcius.checked) {
        if (toCelcius.checked) {
            hasil = temp
        }
        else if (toFahrenheit.checked) {
            hasil = (temp * 1.8) + 32
        }
        else {
            hasil = temp + 273.15
        }
    }
    else if (fromFahrenheit.checked) {
        if (toCelcius.checked) {
            hasil = (temp - 32) / 1.8
        }
        else if (toFahrenheit.checked) {
            hasil = temp
        }
        else {
            hasil = (temp + 459.67) / 1.8
        }        
    }
    else {
        if (toCelcius.checked) {
            hasil = temp - 273.15 
        }
        else if (toFahrenheit.checked) {
            hasil = temp * 1.8 - 459.67 
        }
        else {
            hasil = temp
        }
    }

    document.getElementById('result').value = hasil
}