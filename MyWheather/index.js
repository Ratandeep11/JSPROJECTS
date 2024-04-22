const weatherForm=document.querySelector(".weatherForm");
const cityInput=document.querySelector(".cityInput");
const card=document.querySelector(".card");
const apikey="c2910417e8e65b7efd6983dc36f83e74";

weatherForm.addEventListener("submit",async event=>{
    event.preventDefault();
  
const city=cityInput.value ;
if(city){
    const wheatherData=await getWheatherData(city);
    displayWeatherData(wheatherData);

}
else{
    console.error("Enter City Name");
}

});

async function getWheatherData(city){
const url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);

   return await url.json();
}

async function displayWeatherData(city){
    
    const {name:name,main:{temp:temp,humidity:humidity}}=city;
    console.log(name);
   const cityTemp= document.querySelector(".cityDisplay");
   cityTemp.textContent=name;
   const citytemp=document.querySelector(".tempDisplay");
   console.log(temp);
   const temp1=(temp-273.15).toFixed(1);
   console.log(temp1);
   citytemp.textContent=`Temprature :${temp1}C`;
   const cityhumi=document.querySelector(".humidityDisplay");
   cityhumi.textContent=`Humidity:${humidity}%f`;


}