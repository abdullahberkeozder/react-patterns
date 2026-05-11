import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "./WeatherMap.css";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Helper component to handle map focus
function MapFocus({ cityCoordinates }) {
  const map = useMap();

  useEffect(() => {
    if (cityCoordinates) {
      // Fly to selected city with animation
      map.flyTo(
        [cityCoordinates.lat, cityCoordinates.lng],
        10,
        {
          duration: 2,
        },
      );
    }
  }, [cityCoordinates, map]);

  return null;
}

function WeatherMap({
  userLocation,
  cityCoordinates,
  cityName,
}) {
  // Default center (if no location)
  const defaultCenter = [39.9334, 32.8597]; // Ankara
  const center = userLocation
    ? [userLocation.lat, userLocation.lng]
    : defaultCenter;

  return (
    <div className="weather-map-container">
      <MapContainer
        center={center}
        zoom={6}
        className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Focus on selected city */}
        <MapFocus cityCoordinates={cityCoordinates} />

        {/* User's current location */}
        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lng]}>
            <Popup>
              <div>
                <strong>Your Location</strong>
                <p>Lat: {userLocation.lat.toFixed(4)}</p>
                <p>Lng: {userLocation.lng.toFixed(4)}</p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Selected city */}
        {cityCoordinates && (
          <Marker
            position={[
              cityCoordinates.lat,
              cityCoordinates.lng,
            ]}>
            <Popup>
              <div>
                <strong>{cityName}</strong>
                <p>Weather for this city</p>
                <p>Lat: {cityCoordinates.lat.toFixed(4)}</p>
                <p>Lng: {cityCoordinates.lng.toFixed(4)}</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default WeatherMap;
