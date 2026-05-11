import "./App.css";
import { useEffect, useContext } from "react";
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Loading from "./components/Loading";
import {
  WeatherContext,
  WeatherProvider,
} from "./contexts/WeatherContext";
import "leaflet/dist/leaflet.css";

const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

function AppContent() {
  const { state, dispatch } = useContext(WeatherContext);
  const { weather, city, loading, error, userLocation } =
    state;

  // Get user's geolocation on mount
  useEffect(
    function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            dispatch({
              type: "SET_USER_LOCATION",
              payload: { lat: latitude, lng: longitude },
            });
          },
          (error) => {
            console.warn(
              "Geolocation error:",
              error.message,
            );
          },
        );
      }
    },
    [dispatch],
  );

  useEffect(
    function () {
      async function getWeather() {
        dispatch({ type: "FETCH_START" });
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`,
          );
          const data = await res.json();
          const afternoonData = data.list.filter((item) =>
            item.dt_txt.includes("15:00:00"),
          );

          const nightData = data.list.filter((item) =>
            item.dt_txt.includes("03:00:00"),
          );
          const dailyData = afternoonData.map(
            (afternoon, index) => ({
              date: new Date(
                afternoon.dt_txt,
              ).toLocaleString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              }),
              max_temp: Math.round(afternoon.main.temp_max),
              min_temp: nightData[index]
                ? Math.round(nightData[index].main.temp_min)
                : Math.round(afternoon.main.temp_min),
              weather_afternoon: afternoon.weather[0].main,
              icon_afternoon: afternoon.weather[0].icon,
              weather_night:
                nightData[index]?.weather[0].main || "N/A",
              icon_night:
                nightData[index]?.weather[0].icon || "01n",
            }),
          );

          const processedData = {
            city: data.city,
            dailyData: dailyData,
            list: data.list,
          };

          dispatch({
            type: "FETCH_SUCCESS",
            payload: processedData,
          });
          console.log(processedData);
        } catch (err) {
          dispatch({
            type: "FETCH_ERROR",
            payload: err.message,
          });
          console.error(err);
        }
      }
      if (city) getWeather();
    },
    [city, dispatch],
  );

  return (
    <div className="App">
      <h1>🌤️ Weather</h1>
      <SearchBar
        city={city}
        setCity={(newCity) =>
          dispatch({ type: "SET_CITY", payload: newCity })
        }
      />
      {loading && <Loading />}
      {error && (
        <p style={{ color: "red" }}>Error: {error}</p>
      )}
      <Main
        weather={weather}
        loading={loading}
        userLocation={userLocation}
      />
    </div>
  );
}

function App() {
  return (
    <WeatherProvider>
      <AppContent />
    </WeatherProvider>
  );
}

export default App;
