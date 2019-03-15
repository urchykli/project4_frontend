import React, { Component } from 'react';
import axios from 'axios'
import './Show.css'

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
			<div className='brewery-info brewPage'>
			<div className='container'>
				<h1>{this.props.brewery.name}</h1>
				<h3>p. {this.props.brewery.phone}</h3>
				<h3>check it: <a href={this.props.brewery.website_url}>{this.props.brewery.website_url}</a></h3>
				{/* <ul>{features}</ul> */}
				<h3> don't drink and drive... </h3>
				<h3> {this.props.brewery.street}</h3>
				<h3> {this.props.brewery.city}, {this.props.brewery.state}, {this.props.brewery.postal_code} </h3>
				</div>
			</div>
		);
	}
}

export default Show;

