const button = document.getElementById("get-weather-btn");
const cidade = document.getElementById("cidade");


//busca informação do clima
button.addEventListener("click", async function(){

    const cidadeEscolhida = cidade.value;

    if (cidadeEscolhida === "") {
        return;
    }

    await showWeather(cidadeEscolhida);
});

//responsável por buscar os dados da API de clima
async function getWeather(cidade) {

try{
const url = `https://weather-proxy.freecodecamp.rocks/api/city/${cidade}`

// faz a requisição para a API
const response = await fetch(url);

// Converte a resposta da API para JSON
const data = await response.json();
return data;

} catch (error){
    console.log(error);
}

}

//mostra as informações do clima
async function showWeather(cidade) {

    // Busca os dados com a API
    const dados = await getWeather(cidade);

    // será exibido o nome da cidade
    const location = document.getElementById("location");

    //Mostra o nome da cidade retornado pela API
    location.textContent = dados.name;

    //Exibe a temperatura
    const mainTemperature = document.getElementById("main-temperature");

    // Mostra a temperatura retornada pela API
    mainTemperature.textContent = `${dados.main.temp} °C `;

    // Exibe a sensação térmica
    const feelsLike = document.getElementById("feels-like");
     feelsLike.textContent = `${dados.main.feels_like}°C`;

     //Exibe a umidade do ar
     const humidity = document.getElementById("humidity");
     humidity.textContent = `${dados.main.humidity}%`;

     //Exibe a velocidade do vento
     const wind = document.getElementById("wind");
     wind.textContent = `${dados.wind.speed} m/s`;
    
     //Exibe a rajada de vento
     const windGust = document.getElementById("wind-gust");
    windGust.textContent = `${dados.wind.gust} m/s`;

    //Exibe o tipo do clima
    const weatherMain = document.getElementById("weather-main");
    weatherMain.textContent = dados.weather[0].main;

    //Exibe o ícone do clima
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.src = dados.weather[0].icon;


}
