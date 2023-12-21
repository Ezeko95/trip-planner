"use client";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  LayersControl,
} from "react-leaflet";
import { Icon } from "leaflet"; // Import Icon from leaflet

const Map: React.FC<{}> = () => {
  const [markers, setMarkers] = useState<
    { id: number; position: [number, number] }[]
  >([]);

  const customIcon = new Icon({
    iconUrl: "/pin.png",
    iconSize: [50, 50],
  });

  const AddMarkerToClickLocation = () => {
    const map = useMapEvents({
      click(event: any) {
        const { lat, lng } = event.latlng;
        const newMarker = {
          id: markers.length + 1,
          position: [lat, lng] as [number, number],
        };
        setMarkers([...markers, newMarker]);
      },
    });
    return null;
  };

  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <AddMarkerToClickLocation />
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Street Map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Satellite">
          <TileLayer
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            id="mapbox/satellite-v9"
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
