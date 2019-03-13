import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Map.css";
import axios from "axios";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import icon from "./location.svg";

const TOKEN =
  "pk.eyJ1IjoidXJjaHlrbGkiLCJhIjoiY2p0Mzk3d2c2MGtnNDN5bHNqaDByOTh0cyJ9.w36OVXzFUTpeyqf0vcvjDA";
// const navStyle = {
// 	position: 'absolute',
// 	top: 0,
// 	left: 0,
// 	padding: '10px'
// };
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 31.954862,
        longitude: -70.365569,
        zoom: 3,
        bearing: 0,
        pitch: 0,
        width: 900,
        height: 500
      },
    //   marker: {
    //     latitude: null,
    //     longitude: null
	//   },
	  breweries: []
    };
  }

  render() {
    const { viewport } = this.state;

    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/urchykli/cjt4cqf1x1kpt1frx7xj7g3yq"
        onViewportChange={viewport => {
          const { width, height, latitude, longitude, zoom } = viewport;
          // Optionally call `setState` and use the state to update the map.
        }} 
      >
        {/* {...breweries} */}
      </ReactMapGL>
      // <MapGL
      // 	{...viewport}
      // 	mapStyle="mapbox://styles/urchykli/cjt4cqf1x1kpt1frx7xj7g3yq"
      // 	mapboxApiAccessToken={TOKEN}>
      // 	<div className="nav" style={navStyle}>
      // 	{/* <NavigationControl/> */}
      // 	</div>
      // </MapGL>
    );
  }
}

export default Map;
