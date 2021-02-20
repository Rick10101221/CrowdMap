/* global google */
import React from 'react';
import { GoogleMap, LoadScript, HeatmapLayer } from '@react-google-maps/api';

const libs = ["visualization"];
export default function Home() {

  const [map, setMap] = React.useState(null)
  const [heat, setHeat] = React.useState(null)
  const [points, setPoints] = React.useState([]);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    setMap(map);
    console.log(map);
  }, [])

  const onHeat = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    setHeat(map);
    console.log(map);
    console.log(google);

    setPoints([
      new window.google.maps.LatLng(33.2987, -117.147, 5),
      new window.google.maps.LatLng(33.3987, -117.247, 5),
      new window.google.maps.LatLng(33.9987, -117.347, 5),
      new window.google.maps.LatLng(33.5987, -117.447, 5),
      new window.google.maps.LatLng(33.6987, -117.547, 5),
      new window.google.maps.LatLng(33.7987, -117.647, 5),
      new window.google.maps.LatLng(33.8987, -117.747, 5),
      new window.google.maps.LatLng(33.9987, -117.847, 5),
      new window.google.maps.LatLng(34.9987, -117.947, 5),
      new window.google.maps.LatLng(34.2987, -116.947, 5),
      new window.google.maps.LatLng(34.3987, -116.947, 5),
      new window.google.maps.LatLng(34.4987, -116.947, 5),
      new window.google.maps.LatLng(34.5987, -116.947, 5),
      new window.google.maps.LatLng(34.6987, -116.947, 5),
      new window.google.maps.LatLng(34.7987, -116.947, 5),
      new window.google.maps.LatLng(34.8987, -116.947, 5),
      new window.google.maps.LatLng(34.9987, -116.947, 5),
      new window.google.maps.LatLng(34.9987, -118.947, 5),
      new window.google.maps.LatLng(34.9987, -118.947, 5),
      new window.google.maps.LatLng(32.9987, -118.947, 5),
      new window.google.maps.LatLng(32.9987, -118.947, 5),
      new window.google.maps.LatLng(32.9987, -118.947, 5),
      new window.google.maps.LatLng(32.9987, -118.947, 5),
      new window.google.maps.LatLng(32.9987, -118.947, 5),
      new window.google.maps.LatLng(32.9987, -118.947, 5),
      new window.google.maps.LatLng(32.9987, -118.947, 5)
    ]);

    // console.log(window.google);

  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
    setHeat(null);
  }, [])

  let center = {
    lat: 33.9987,
    lng: -117.9470
  };

  return (
      <LoadScript googleMapsApiKey="AIzaSyAxVB1V2B-yeVM9OkUqJJM5Z2LrVc8gj0c" libraries={libs}>
        <GoogleMap
          mapContainerStyle={{"width": "100vw", "height": "100vh"}}
          center={center}
          zoom={17}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <HeatmapLayer
            // optional
            onLoad={onHeat}
            // optional
            onUnmount={onUnmount}
            // required
            data={points}
          />
        </GoogleMap>
      </LoadScript>
      
  );
}