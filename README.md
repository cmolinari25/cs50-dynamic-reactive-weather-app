# CS50 Dynamic & Reactive Weather App

## Video Demo

(Add your 2–3 minute demo video link here)

---

## Description

This project is a dynamic and responsive weather application built using React and the OpenWeatherMap API. The application displays real-time weather data for cities around the world, combining clean visual design with interactive features that respond to both user input and environmental data.

On initial load, the app attempts to determine the user’s location using the browser’s Geolocation API and automatically displays local weather conditions. If geolocation is unavailable or permission is denied, the app gracefully falls back to a default city, ensuring it remains functional in all cases. Users may also manually search for any city and toggle between metric and imperial units at any time.

The interface is both **dynamic** and **responsive**: background imagery changes based on temperature ranges, and the layout adapts fluidly across desktop, tablet, and mobile screen sizes.

---

## Features

### Real-Time Weather Data

- Fetches live data from the OpenWeatherMap API
- Displays current temperature, city, and country
- Shows an API-provided weather icon and textual description (e.g., “clear sky,” “broken clouds”)

### Geolocation with Graceful Fallback

- Attempts to detect the user’s location on initial load
- Uses latitude and longitude when available
- Falls back to a default city if geolocation cannot be resolved
- Displays a clear, user-friendly message when fallback behavior occurs
- Manual city searches override geolocation

### Dynamic Backgrounds

- Background images change based on temperature ranges:
  - Cold (freezing conditions)
  - Cool / moderate
  - Hot
- Temperature thresholds automatically adapt for metric and imperial units
- Visual cues reinforce weather conditions without relying solely on text

### Unit Toggle with API Re-Fetch

- °C / °F toggle does **not** perform client-side conversion
- Re-fetches weather data from the API using the appropriate unit system
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
- Distinct from the API-provided weather condition icon, which reflects current sky conditions

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

- City input is sanitized by trimming leading and trailing whitespace to prevent empty or invalid searches
- API and geolocation errors are handled gracefully without crashing the application
- User-facing messages are clear and descriptive, avoiding technical jargon
- Defensive programming techniques are used to ensure application stability

---

## Design Decisions

- Geolocation is used on initial load to provide immediate, location-relevant data
- A fallback city ensures the app remains usable regardless of browser permissions
- Backgrounds change based on perceived temperature ranges rather than strict meteorological definitions, prioritizing user experience
- Weather unit toggling is handled through API re-fetching to preserve data accuracy
- Static UI icons are separated from API-driven condition icons to clearly distinguish fixed metrics from dynamic conditions

---

## Future Improvements

- Persisting user preferences such as last searched city and unit selection
- Multi-day forecasts
- Accessibility enhancements
- Additional weather visualizations

---

## Acknowledgments and Academic Honesty

This project is based on an earlier weather application originally developed as part of prior coursework. For the CS50 final project, the application was significantly extended and redesigned beyond the original simple app, including the addition of geolocation support, improved error handling, dynamic temperature-based backgrounds, responsive layout behavior, clearer user experience messaging, and a mildly amusing README file.

AI tools, including ChatGPT, were used during development to assist with debugging, refactoring, and improving code clarity. All design decisions, implementation choices, and final code integration were reviewed, understood, and authored by the student.

---

## Notes

API keys are managed through environment variables and are not committed to the repository. Background images are original photography or appropriately licensed assets.
