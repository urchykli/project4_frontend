import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import icon from "./location.svg";

class Markers extends Component {
	render() {
		return (
			<div>
				<Marker
			latitude={this.props.realBrewery.latitude}
			longitude={this.props.realBrewery.longitude}
			offsetLeft={-20}
			offsetTop={-10}
			>
				  {/* <Link to={brewery._id}> */}
					  <img src={icon} width="15" height="50" />
				  {/* </Link> */}
			  </Marker>
			</div>
		);
	}
}

export default Markers;