import WeatherHeader from "./WeatherHeader";
import WeatherGrid from "./WeatherGrid";
import WeatherMap from "./WeatherMap";
import "./Main.css";
import Loading from "./Loading";

function Main({ weather, loading, userLocation }) {
  console.log("loading", loading);

  if (loading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  const cityCoordinates = weather?.city?.coord
    ? {
        lat: weather.city.coord.lat,
        lng: weather.city.coord.lon,
      }
    : null;

  return (
    <div className="main-container">
      <WeatherHeader city={weather?.city} />
      <WeatherMap
        userLocation={userLocation}
        cityCoordinates={cityCoordinates}
        cityName={weather?.city?.name}
      />
      <WeatherGrid dailyData={weather?.dailyData} />
    </div>
  );
}
export default Main;
