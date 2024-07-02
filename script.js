 const apikey="bb5ab38c1e805fd0475e7e662df3bdac";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchbox=document.querySelector(".serach input");
    const searchbtn=document.querySelector(".serach button");
    const iconimg=document.querySelector(".WeatherIcon");

    async function checkweather(city){
        const response= await fetch(apiurl+city+`&appid=${apikey}`);
        if(response.status == 404){
            document.querySelector(".error").style.display="block";
        }
        else{
        var data= await response.json();

        console.log(data);

        document.querySelector(".location").innerHTML=data.name;
        document.querySelector(".humidity1").innerHTML = (data.main.humidity)+"%";
        document.querySelector(".temp").innerHTML = data.main.temp+"°C"; 
        document.querySelector(".weath").innerHTML=data.weather[0].main;
        document.querySelector(".wind1").innerHTML=data.wind.speed+"km/h";

        if(data.weather[0].main=="Clouds"){
            iconimg.src="clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            iconimg.src="clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            iconimg.src="rain.png";
        }
        else if(data.weather[0].main=="Mist"){
            iconimg.src="mist.png";
        }
        else if(data.weather[0].main=="Haze"){
            iconimg.src="drizzle.png";
        }
        document.querySelector(".error").style.display="none";
       }
    }
    searchbtn.addEventListener("click",()=>{
        checkweather(searchbox.value); 
    })
   searchbox.addEventListener("keypress", (event) => {
if (event.key === "Enter") {
    checkweather(searchbox.value);
}
});
