import "./WeatherHeader.css";

function WeatherHeader({ city }) {
  return (
    <div className="weather-header">
      <h2>
        📍 {city?.name}, {city?.country}
      </h2>
    </div>
  );
}

export default WeatherHeader;
