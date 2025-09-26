document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault()

    let input = document.querySelector('#searchInput').value
    if (input !== "") {
        showWarning("Carregando...")

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=23d1745cde2f7c1859bf3b9430c2442d&units=metric&lang=pt_br`);

        let json = await result.json();

        if (json.cod == 200) {
            console.log(json)
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
