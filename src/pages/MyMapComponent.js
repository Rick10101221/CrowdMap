import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDPON_EGHAeo4wDPdXLGSV2c_GIwWOwcCY&v=3.exp&libraries=geometry,drawing,places,visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
<div>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 33.998470127751006, lng: -117.94746979872437 }}
  />
    <HeatmapLayer id='poop'
        data={[
            maps.LatLng({ lat: 33.998470127751006, lng: -117.94746979872437 })
            // { lat: 34.998470127751006, lng: -118.94746979872437 },
            // { lat: 34.998470127751006, lng: -118.94746979872437 },
            // { lat: 34.998470127751006, lng: -118.94746979872437 },
            // { lat: 34.998470127751006, lng: -118.94746979872437 },
        ]}
        options={
            {radius: 2000, opacity: 1, gradient: ["rgba(0, 255, 255, 0)",
                                                    "rgba(0, 255, 255, 1)",
                                                    "rgba(0, 191, 255, 1)",
                                                    "rgba(0, 127, 255, 1)",
                                                    "rgba(0, 63, 255, 1)",
                                                    "rgba(0, 0, 255, 1)",
                                                    "rgba(0, 0, 223, 1)",
                                                    "rgba(0, 0, 191, 1)",
                                                    "rgba(0, 0, 159, 1)",
                                                    "rgba(0, 0, 127, 1)",
                                                    "rgba(63, 0, 91, 1)",
                                                    "rgba(127, 0, 63, 1)",
                                                    "rgba(191, 0, 31, 1)",
                                                    "rgba(255, 0, 0, 1)"]
            }
        }
    />
    </div>
);

class HeatLayer extends React.PureComponent {
  render() {
    return (
      <MyMapComponent/>
    )
  }
}

export default HeatLayer
