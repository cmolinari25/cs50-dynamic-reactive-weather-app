# CS50 Dynamic & Reactive Weather App

## Video Demo

[Video Demo](https://www.youtube.com/watch?v=G7tBk5AZIUI)

---

## Description

My final CS50 project is a dynamic and responsive weather application built using React and the OpenWeatherMap API. The application displays real-time weather data for cities around the world, combining a clean visual layout and design with interactive features that respond to both user input and environmental data. I fully expect this app will change the world, as per project requirements.

On initial load, the app attempts to determine the user’s location using the browser’s Geolocation API and automatically displays local weather conditions based on the user’s current location. If geolocation is unavailable or permission is denied, the app automatically falls back to a default city, Big Bear City, CA, ensuring it remains functional in all locations. (For demo purposes, I did not use Los Angeles as the default, so viewers can clearly see that the app is providing location-specific information based on geolocation rather than the fallback city.) Users may also manually search for any city and toggle between metric and imperial units at any time.

The interface is both **dynamic** and **responsive**: background imagery changes based on three temperature ranges, Cold (below freezing), Cool (above freezing up to 70°F), and Hot (everything else). The layout also adapts fluidly across desktop, tablet, and mobile screen sizes.

---

## App Features

### Real-Time Weather Data

- Fetches live data from the OpenWeatherMap API for any city in the world
- Displays current temperature, city, and country
- Shows an API-provided weather icon and textual description (e.g., “clear sky,” “broken clouds”)

### Geolocation with Automatic Fallback

- Attempts to detect the user’s location on initial load
- Uses latitude and longitude when available
- Falls back to a default city if geolocation cannot be resolved
- Displays a clear, user-friendly message when fallback behavior occurs, alerting the user that data is being shown for the default city
- Manual city searches override geolocation

### Dynamic Backgrounds

- Background images change based on temperature ranges:
  - **Cold (freezing conditions):** Icicles hanging from a snow-covered cabin in Big Bear
  - **Cool / moderate (32–70°F):** A cool, partly cloudy spring afternoon in lower Manhattan, photographed while sailing on the Hudson River
  - **Hot (above 70°F):** A summer sunset over Culver City, CA
- Temperature thresholds automatically adapt for metric and imperial units
- Visual cues reinforce weather conditions without relying solely on text

### Dedicated Toggle Switch with API Re-Fetch

- °C / °F toggle does **not** perform client-side conversion
- Re-fetches weather data from the API using the appropriate unit system (temperatures appear to change instantly, but are actually retrieved fresh from the API)
- Ensures consistency across current temperature, high/low values, and “feels like” temperature

### Icon-Driven Weather Metrics

- Uses `react-icons` to display visual indicators for:
  - High temperature
  - Low temperature
  - “Feels like” temperature
  - Humidity
  - Wind speed
  - Barometric pressure
- Icons update numerically in real time as data changes
- Distinct from the API-provided weather condition icon, which reflects current conditions such as cloudy, sunny, or light snow

### Responsive Layout

- Desktop and laptop screens display weather details in two rows of three cards
- Tablet and mobile screens automatically reflow to three rows of two cards
- Layout remains centered and readable at all screen sizes
- Responsiveness can be demonstrated by resizing the browser window

---

## Technologies Used

- React (Create React App)
- JavaScript (ES6)
- HTML5 / CSS3
- OpenWeatherMap API
- react-icons
- Browser Geolocation API

---

## Project Structure

- `src/App.js`  
  Manages global state, API calls, geolocation logic, unit toggling, and dynamic backgrounds.

- `src/components/Details.jsx`  
  Displays detailed weather metrics using icon-based cards.

- `src/assets/`  
  Contains background images used for dynamic temperature-based visuals.

- `src/weatherMapData.js`  
  Handles API requests and formats OpenWeatherMap responses into a usable data structure.

---

## Input Handling and Error Management

- User input is sanitized by trimming leading and trailing whitespace to
