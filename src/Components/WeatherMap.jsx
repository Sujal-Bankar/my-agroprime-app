import React, { useEffect } from "react";
import { MapContainer, TileLayer, LayersControl, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { Overlay } = LayersControl;

const MapUpdater = ({ lat = 20.5937, lon = 78.9629 }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lon) {
      map.setView([lat, lon]);
    }
  }, [lat, lon, map]);
  return null;
};

const WeatherMap = ({ lat = 20.5937, lon = 78.9629 }) => {
  return (
    <MapContainer center={[lat, lon]} zoom={4} style={{ height: "500px", width: "100%" }}>
      <MapUpdater lat={lat} lon={lon} />
      <LayersControl position="topright">
        {/* Base Map */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Weather Overlays */}
        <Overlay checked name="Precipitation">
          <TileLayer
            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=6c8c88855641946f7898249e98556f05`}
            attribution="&copy; OpenWeather"
          />
        </Overlay>

        <Overlay name="Clouds">
          <TileLayer
            url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=6c8c88855641946f7898249e98556f05`}
            attribution="&copy; OpenWeather"
          />
        </Overlay>

        <Overlay name="Temperature">
          <TileLayer
            url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=6c8c88855641946f7898249e98556f05`}
            attribution="&copy; OpenWeather"
          />
        </Overlay>

        <Overlay name="Wind Speed">
          <TileLayer
            url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=6c8c88855641946f7898249e98556f05`}
            attribution="&copy; OpenWeather"
          />
        </Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default WeatherMap;
