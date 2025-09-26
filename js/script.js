document.querySelector('.busca').addEventListener('submit',(event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value
    if(input !== ""){
        showWarning("Carregando...")

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=23d1745cde2f7c1859bf3b9430c2442d&units=metrics&lang=pt_br`
        let result = await fetch(url)
    
    }else{

    }


})
function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}
