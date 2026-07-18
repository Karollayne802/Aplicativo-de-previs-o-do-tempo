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

    const dados = await getWeather(cidade);

    const location = document.getElementsById("location");
    
    
}
