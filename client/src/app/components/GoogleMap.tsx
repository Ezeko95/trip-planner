"use client";
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const SimpleMap: React.FC = () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      });
      console.log(navigator.geolocation);
    }
  }, []);
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 11,
  };
  const mapStyles: React.CSSProperties = {
    position: "fixed",
    width: "100%",
    height: "90%",
  };

  return (
    <div style={mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${apiKey}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
