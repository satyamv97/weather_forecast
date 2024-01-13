

export function CurrentWeather({  weatherData, unit }) {
    return (
        <div>
            {weatherData &&

                <div className="onfo">
                  
                    <div className="maincontainer"> 
                    
                        <div className="leftcontainer">
                            <h1>  Now</h1>
                            
                            <div className="degimage">
                                <div className="bigfont">
                                {unit === 'metric' ? Math.round(weatherData.main.temp - 273.15) : Math.round((weatherData.main.temp - 273.15) * 9 / 5 + 32)}&deg;
                                {unit === 'metric' ? 'C' : 'F'}
                                </div>
                                <div>
                                <img className="image" src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                                alt="Weather Icon"></img>
                                </div>
                            </div>
                            <h2>min : {unit === 'metric' ? Math.round(weatherData.main.temp_min - 273.15) : Math.round((weatherData.main.temp_min - 273.15) * 9 / 5 + 32)}&deg;
                                {unit === 'metric' ? 'C' : 'F'}</h2>
                            <h2>max : {unit === 'metric' ? Math.round(weatherData.main.temp_max - 273.15) : Math.round((weatherData.main.temp_max - 273.15) * 9 / 5 + 32)}&deg;
                                {unit === 'metric' ? 'C' : 'F'}</h2>
                            
                        </div>
                        <div className="rightcontainer">
                            <div><h3>{weatherData.weather[0].description}</h3></div>
                            <div >
                                <div>humidity : {weatherData.main.humidity}%</div>
                                <div> Wind : {weatherData.wind.speed} m/s</div>
                                <div>Dir: {weatherData.wind.deg}&deg;</div>
                            </div>
                        </div>
                        

                    </div>
                </div>}
        </div>
    );
}
