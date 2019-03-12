import React, { Component } from 'react';
import axios from "axios";
import Map from './Map'


class Home extends Component {
	constructor() {
		super()
	
		this.state = {
			city: null,
			state: null,
			breweries: []
		}
	}
	handleCityInput(e) {
		this.setState({
		  city: e.target.value
		})
	  }
	
	  handleStateInput(e) {
		this.setState({
		  state: e.target.value
		})
	  }
	  handleSearchSubmit(e) {
		e.preventDefault()
		const url = `https://api.openbrewerydb.org/breweries?by_city=${this.state.city}&by_state=${this.state.state}`
		console.log(url)
		axios.get(url)
		.then(res => {
			this.setState({
				breweries: res.data
			})
			console.log(this.state.breweries)
		})
		.catch((err) => {
		  console.log(err)
		})
	  }

	// componentDidMount() {
		// const zip = this.props.match.params.postalCode;
		// const hardCity = 'Alexandria';
		// const hardState = 'virginia'

		// const latLong = `https://api.mapbox.com/geocoding/v5/mapbox.places/${zip}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1552333204825&autocomplete=true&types=postcode`
		// const url = `${coindeskURL}${currency}.json`
		// axios.get(latLong)
		// .then(res => {
		// })
		// .then()
		// .catch(err => {
		// 	console.error(err)
		// })
	// }
	// componentDidUpdate() {

	// 	// const url = `https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${this.state.coordinates[0]}&lng=${this.state.coordinates[1]}&key=0c157ba02d36883acc99becbb6b30e30`

	// }

	render() {

		return (
			<div className="search">
				<form className="search-form" onSubmit={(e) => this.handleSearchSubmit(e)}>
				<h3>Enter a city and state to find breweries near you!</h3>
				<p>
				<label>City:</label>
				<textarea onChange={(e) => this.handleCityInput(e)}></textarea>
				</p>
				<p>
				<label>State: </label>
				<textarea onChange={(e) => this.handleStateInput(e)}>
				</textarea>
				</p>
				<input type="submit" value="Submit"/>
			</form>
			<Map />
			</div>
		);
	}
}

export default Home;