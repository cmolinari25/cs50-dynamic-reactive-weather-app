import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";
import coolBg from "./assets/cool.jpg";
import Details from "./components/Details";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherMapData";

function App() {
  const [bg, setBg] = useState(hotBg);
  const [coords, setCoords] = useState(null);
  const [geoError, setGeoError] = useState("");
  const [city, setCity] = useState("Big Bear Lake"); // sets default city if geolocation fails
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  // Try to get user's location once on initial load
  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeoError("");
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      () => {
        setGeoError("Location permission denied, using default city.");
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 }
    );
  }, []);

  // Fetch weather whenever units, city, or coords changes
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = coords
          ? await getFormattedWeatherData(
              { lat: coords.lat, lon: coords.lon },
              units
            )
          : await getFormattedWeatherData(city, units);

        setWeather(data);

        // Dynamic background based on 3 temperature ranges
        const coldThreshold = units === "metric" ? 0 : 32; // freezing
        const coolThreshold = units === "metric" ? 21 : 70; // cool to moderate upper bound

        if (data.temp <= coldThreshold) {
          setBg(coldBg);
        } else if (data.temp <= coolThreshold) {
          setBg(coolBg);
        } else {
          setBg(hotBg);
        }
      } catch (err) {
        setGeoError(
          "Location could not be determined. Showing default city weather."
        );
        setCoords(null); // fall back to city mode
      }
    };

    fetchWeatherData();
  }, [units, city, coords]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      const value = e.currentTarget.value.trim();
      if (!value) return;

      setGeoError(""); // clear the message
      setCity(value);
      setCoords(null); // manual search overrides geolocation
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
              />
              <button onClick={handleUnitsClick}>°F</button>

              {geoError && (
                <p style={{ marginTop: "8px", fontSize: "0.9rem" }}>
                  {geoError}
                </p>
              )}
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>

              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${
                  units === "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>

            {/* bottom */}
            <Details weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
