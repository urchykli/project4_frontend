import React, { Component } from 'react';
import axios from "axios";
import Map from './Map'


class Home extends Component {


	render() {
		return (
			<div>
			{/* <h1>Lat & Long {this.props.match.params.zip}</h1> */}
			{/* <div className="price">{this.props.price}</div> */}
			<Map />
			</div>
		);
	}
}

export default Home;