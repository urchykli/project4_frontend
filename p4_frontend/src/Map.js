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
	// 	  latitude: '',
	// 	  longitude: ''
	//   }
    //   marker: {
    //     latitude: null,
    //     longitude: null
	//   },
	//   breweries: []
    };
  }
//   Iterate over realBrewery's latitude and longitude 
// push each lat long combo into an array of arrays

//   setMarker(){
// 	  let latLong = []
// 	  let lat = this.props.realBrewery.latitude
// 	  let long = this.props.realBrewery.longitude
// 	  Object.entries(this.props.realBrewery).forEach(entry => {
// 		let key = entry[0];
// 		let value = entry[1];
// 		console.log(key, value)
// 	  })
// 	//   for (let [key, value] of Object.entries(this.props.realBrewery)){
// 	// 	  console.log(key, value)
// 	//   }
//   }
// setMarker(){
// 	Object.values(this.props.realBrewery).map(brewery => {
// 		let latitude = brewery[9];
// 		let longitude = brewery[8];
// 		return (
// 			<Marker
// 			latitude={latitude}
// 			longitude={longitude}
// 			offsetLeft={-20}
// 			offsetTop={-10}
// 			>
// 				  <Link to={brewery._id}>
// 					  <img src={icon} width="15" height="50" />
// 				  </Link>
// 			  </Marker>
// 		  );
// 	  });
// }
componentDidUpdate(){
	console.log(this.props.realBrewery)
	console.log(this.props.latitude)
}
  render() {
	  console.log(this.props.realBrewery)
	  console.log(this.props.latitude)
	//   let markers = this.props.realBrewery.map((comment, index) => {
	// 	<Comment message={comment} key={index}/>
	//   })
	  let markers = Object.values(this.props.realBrewery).map(brewery => {
		let latitude = Number(brewery[9]);
		let longitude = Number(brewery[8]);
		return (
			<Marker
			latitude={latitude}
			longitude={longitude}
			offsetLeft={-20}
			offsetTop={-10}
			>
				  {/* <Link to={brewery._id}> */}
					  <img src={icon} width="15" height="50" />
				  {/* </Link> */}
			  </Marker>
		  );
		});
		console.log(markers)

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
	  {/* {this.setMarker} */}
        {this.markers}
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
