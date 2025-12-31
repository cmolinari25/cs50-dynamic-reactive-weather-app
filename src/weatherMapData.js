// getting the open weather map API to sync to the app was not easy, and figuring out how to
// package the data into a usable format took a long time to set up, it was very exciting
// the first time the data showed up

// Recommended: store your key in a .env file as REACT_APP_OPENWEATHER_API_KEY
// const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

// Temporary fallback (works, but do not commit secrets to a public repo)
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (query, units = "metric") => {
  // Support either:
  // - query = "Los Angeles"
  // - query = { lat: 34.05, lon: -118.24 }
  const params =
    typeof query === "string"
      ? { q: query, units, appid: API_KEY }
      : { lat: query.lat, lon: query.lon, units, appid: API_KEY };

  const url = `https://api.openweathermap.org/data/2.5/weather?${new URLSearchParams(
    params
  ).toString()}`;

  const res = await fetch(url);
  const data = await res.json();

  // Guard against API errors or unexpected responses
  if (!res.ok) {
    const message = data?.message || "Failed to fetch weather data.";
    throw new Error(message);
  }

  if (!data.weather || !data.main) {
    throw new Error("Unexpected API response format.");
  }

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getFormattedWeatherData };
