import "./DayCard.css";

function DayCard({ day }) {
  return (
    <div className="day-card">
      <h3>{day.date}</h3>
      <div className="temp-section">
        <div>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${day.icon_afternoon}@2x.png`}
            alt={day.weather_afternoon}
          />
        </div>
        <div className="temp-info">
          <p className="temp-day">
            <span className="temp-label">Day:</span>
            <span className="temp-value">
              {day.max_temp}°C
            </span>
          </p>
          <p className="temp-night">
            <span className="temp-label">Night:</span>
            <span className="temp-value">
              {day.min_temp}°C
            </span>
          </p>
        </div>
        <p className="weather-condition">
          {day.weather_afternoon}
        </p>
      </div>
    </div>
  );
}

export default DayCard;
