import React from 'react';
import { GoogleMap, LoadScript, HeatmapLayer } from '@react-google-maps/api';

const libs = ["visualization"];
export default function Home() {

  const [map, setMap] = React.useState(null)
  const [heat, setHeat] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    setMap(map);
    console.log(map);
  }, [])

  const onHeat = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    setHeat(map);
    console.log(map);
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
      <LoadScript googleMapsApiKey="KEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEYKEY" libraries={libs}>
        <GoogleMap
          mapContainerStyle={{"width": "100vw", "height": "100vh"}}
          center={center}
          zoom={15}
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
            data={[
              new window.google.maps.LatLng(37.782, -122.447),
              new window.google.maps.LatLng(37.782, -122.445),
              new window.google.maps.LatLng(37.782, -122.443),
              new window.google.maps.LatLng(37.782, -122.441),
              new window.google.maps.LatLng(37.782, -122.439),
              new window.google.maps.LatLng(37.782, -122.437),
              new window.google.maps.LatLng(37.782, -122.435),
              new window.google.maps.LatLng(37.785, -122.447),
              new window.google.maps.LatLng(37.785, -122.445),
              new window.google.maps.LatLng(37.785, -122.443),
              new window.google.maps.LatLng(37.785, -122.441),
              new window.google.maps.LatLng(37.785, -122.439),
              new window.google.maps.LatLng(37.785, -122.437),
              new window.google.maps.LatLng(37.785, -122.435)
            ]}
          />
        </GoogleMap>
      </LoadScript>
      
  );
}