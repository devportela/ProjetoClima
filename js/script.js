document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault()

    let input = document.querySelector('#searchInput').value
    if (input !== "") {
        showWarning("Carregando...")

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=23d1745cde2f7c1859bf3b9430c2442d&units=metric&lang=pt_br`);

        let json = await result.json();

        if (json.cod == 200) {
            showInfo({
    name: json.name,
    country: json.sys.country,
    temp: json.main.temp,
    tempIcon: json.weather[0].icon,
    windSpeed: json.wind.speed,
    windAngle: json.wind.deg
});

        } else {
            showWarning("Não encontramos essa localização....")
        }

    } else {
        showWarning("Digite uma localização...")
    }
})

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}

function showInfo(json){
showWarning("")
    document.querySelector('.resultado').style.display = 'block'
    document.querySelector('.titulo').innerHTML = `${json.name},${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>°C</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} Km/h`

document.querySelector('.temp img').setAttribute('src',`http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
document.querySelector('.ventoPonto').style.tranform = `rotate(${json.windAngle-90}deg)`
    
    

    
}
