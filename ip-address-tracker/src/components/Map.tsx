import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapProps } from "./utils/utils";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const Map: React.FC<MapProps> = ({ lat, lng }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat, lng }}
        zoom={8}
      >
        {/* Child components, like markers */}
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
