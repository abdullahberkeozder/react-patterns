import DayCard from "./DayCard";
import "./WeatherGrid.css";

function WeatherGrid({ dailyData }) {
  return (
    <div className="weather-grid">
      {dailyData.map((day, index) => (
        <DayCard
          key={index}
          day={day}
        />
      ))}
    </div>
  );
}

export default WeatherGrid;
