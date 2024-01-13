export function Input({ setInput,city, setCity, handleUnitToggle, unit }) {
    function clickHandler(){
        let cityentered= {city}
        setInput(cityentered)
    }
    return (
        <div className="inputdata">
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={clickHandler}>Search</button>
            <button onClick={handleUnitToggle}>
                ({unit === "metric" ? "Fahrenheit" : "Celsius"})
            </button>
        </div>
    );
}
