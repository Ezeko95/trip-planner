"use client";
import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const AnyReactComponent = ({
  text,
  lat,
  lng,
}: {
  text: string;
  lat: number;
  lng: number;
}) => (
  <div>
    <h1>{text}</h1>
  </div>
);

const SimpleMap: React.FC = () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const defaultProps = {
    center: {
      lat: 52.04212930250919,
      lng: -2.184102102306775,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${apiKey}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
