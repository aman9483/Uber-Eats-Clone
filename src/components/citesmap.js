
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css'

const citesmap = () => {

    const position = [51.505, -0.09];
  return (
    <div>

        <h1 id='his'>Cities near me</h1>
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A sample marker on the map!
        </Popup>
      </Marker>
    </MapContainer>
      
    </div>
  )
}

export default citesmap
