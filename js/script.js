function convertSuhu(){
    var temp = Number(document.getElementById('temperature').value)
    var from = document.getElementById('from').value
    var to = document.getElementById('to').value
    var hasil

    if (from == 'celcius') {
        if (to == 'celcius') {
            hasil = temp
        } else if (to == 'fahrenheit') {
            hasil = (temp * 1.8) + 32
        } else if (to == 'kelvin') {
            hasil = temp + 273.15
        }
    } else if (from == 'fahrenheit') {
        if (to == 'celcius') {
            hasil = (temp - 32) / 1.8
        } else if (to == 'fahrenheit') {
            hasil = temp
        } else if (to == 'kelvin') {
            hasil = (temp + 459.67) / 1.8
        }
    } else if (from == 'kelvin') {
        if (to == 'celcius') {
            hasil = temp - 273.15 
        } else if (to == 'fahrenheit') {
            hasil = temp * 1.8 - 459.67 
        } else if (to == 'kelvin') {
            hasil = temp
        }
    }

    document.getElementById('resultLabel').removeAttribute('hidden')
    document.getElementById('result').removeAttribute('hidden')
    document.getElementById('result').value = hasil
}