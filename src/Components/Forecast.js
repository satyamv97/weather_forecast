export function Forecast({ forecastData, unit, weatherData }) {
    return (
        <div>
            {forecastData && (
                <div>
                    <h1 className="center"> Every 3 Hour Forecast</h1>
                    <div className="fivedaymaindiv">
                        {forecastData.slice(0, 5).map((forecast) => (
                            <div key={forecast.dt} className="eachdaydiv">
                                <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                                    alt="Weather Icon"></img>
                                <p> {new Date(forecast.dt * 1000).toLocaleDateString()}</p>
                                <p> Avg :{unit === 'metric' ? Math.round(weatherData.main.temp - 273.15) : Math.round((weatherData.main.temp - 273.15) * 9 / 5 + 32)}&deg;
                                    {unit === 'metric' ? 'C' : 'F'}</p>
                                <p>  {forecast.weather[0].description}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}
