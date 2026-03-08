const search = document.getElementById("search");
let apend=document.getElementById("apend")





const apiKey = "c6cd7810d37316568a9b104b1adcfaf7";
// const city = "Rawalpindi";
function Search() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search.value.trim()}&appid=${apiKey}&units=metric`,
  )
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data);
     



        let divv=document.createElement("div")
        divv.setAttribute("class","cardData")


    divv.innerHTML = `
   <h2 class="city">City: ${data.name} </h2>
    <h3 class="temperature">Temperature: ${data.main.temp} °C </h3>
   <p class="desc"> Weather: ${data.weather[0].description} </p>
     <p class="humidty"> Humidity: ${data.main.humidity} % </p>
    `;
 
    apend.appendChild(divv)

    
  })
}