"use client";

import React from 'react';
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
//import "./leaflet.css"
//import "leaflet-defaulticon-compatibility"
//import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap() {
  const position = [52.105, 109]
  const zoom = 0.5
  return (<MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Marker position={position}> */}
      {/* <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> */}
    {/* </Marker> */}
  </MapContainer>)
}