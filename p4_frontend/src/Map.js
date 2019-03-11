import React, { Component } from "react";
// import "./Map.css";
import axios from "axios";

class Map extends Component {
	constructor() {
		super()
	
		this.state = {
		coordinates: []
		}
	}
		
	componentDidMount() {
		// const zip = this.props.match.params.postalCode;
		const zip = 22314;
		const latLong = `https://api.mapbox.com/geocoding/v5/mapbox.places/${zip}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1552333204825&autocomplete=true&types=postcode`
		// const url = `${coindeskURL}${currency}.json`
		// const url = `https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${long}&key=0c157ba02d36883acc99becbb6b30e30`
	
		axios.get(latLong)
		// .then(response => {
		//   let coordinates = response.data.features.center[coordinates];
		//   console.log(coordinates)
		//   this.props.setState(coordinates)
		// })
		.then(res => {
			this.setState({
			  coordinates: res.data.features[0].center
			})
			// console.log(coordinates)
		  })
		.catch(err => {
		  console.error(err)
		})
	  }
  render() {
	  console.log(this.state.coordinates)
	// <h1>Lat & Long {this.state.coordinates}</h1>
    // mapboxgl.accessToken =
    //   "pk.eyJ1IjoidXJjaHlrbGkiLCJhIjoiY2p0Mzk3d2c2MGtnNDN5bHNqaDByOTh0cyJ9.w36OVXzFUTpeyqf0vcvjDA";
    // const map = new mapboxgl.Map({
    //   container: "map",
    //   style: "mapbox://styles/urchykli/cjt4cqf1x1kpt1frx7xj7g3yq",
    //   center: [coordinates],
    //   zoom: 1.39
    // });
    return <div />;
  }
}

export default Map;
