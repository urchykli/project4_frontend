import React, { Component } from 'react';
import axios from 'axios'


const breweryURL = 'https://api.openbrewerydb.org/breweries/'
class Show extends Component {
	
	componentDidMount() {
		const breweryId = this.props.match.params.id;
		const url = `${breweryURL}${breweryId}`
	console.log(breweryId)
		axios.get(url)
		.then(res => {
		  let newBrewery = res.data;
		  this.props.setBrewery(newBrewery)
		})
		.catch(err => {
		  console.error(err)
		})
	  }
	render() {
		return (
			<div>
				<h1>{this.props.brewery.name}</h1>
				<h3>{this.props.brewery.phone}</h3>
				<h3><a href={this.props.brewery.website_url}>{this.props.brewery.website_url}</a></h3>
				{/* <ul>{features}</ul> */}
				<h3>{this.props.brewery.street},{this.props.brewery.city}, {this.props.brewery.state}, {this.props.brewery.postal_code} </h3>

			</div>
		);
	}
}

export default Show;

