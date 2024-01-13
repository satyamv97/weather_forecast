import { useEffect, useState } from "react";
import axios from "axios";
import { CurrentWeather } from "./CurrentWeather";
import { Forecast } from "./Forecast";
import { Input } from "./Input";

function WeatherApp(){

    // let api_key = "5a0d91aa2eb889bc8ed1ce44f7aac4c2";
    const[city,setCity] = useState('')
    const[input,setInput] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [unit,setUnit] = useState("metric")
    const [forecastData, setForecastData] = useState(null)

    const API_KEY = "5a0d91aa2eb889bc8ed1ce44f7aac4c2"
    useEffect(() => { 
        
            if(city)
            {               
                axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
                )
                
                .then((response) => {
                    setWeatherData(response.data)
                    }) 
                    
                .catch((error) => {
                    console.error('Error fetching', error)
                });
                
                axios
                .get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
                )
                
                .then((response) => {
                    setForecastData(response.data.list)
                    }) 
                    
                .catch((error) => {
                    console.error('Error fetching', error)
                });
             } // eslint-disable-next-line
    },[input]);
   
    function handleUnitToggle(){
        setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : "metric"));
    }

    return(
        <>
        <Input city={city} setInput={setInput} input={input} setCity={setCity} handleUnitToggle = {handleUnitToggle} unit={unit}/>
        
        <CurrentWeather input={input} city={city} weatherData ={weatherData} unit = {unit} />
        
        <Forecast city={city} forecastData={forecastData} unit={unit} weatherData = {weatherData}/>
        </>   
    )
}

export default WeatherApp;


