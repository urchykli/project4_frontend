import React, { Component } from 'react';
import axios from 'axios'

const url = 'https://api.openbrewerydb.org/breweries/5494'
class Show extends Component {
	componentDidMount() {
		// const currency = this.props.match.params.scorpion;
		// const url = `${coindeskURL}${currency}.json`
	
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
		let features = this.props.brewery.tag_list.map((feature, index) => {
			return <li>{feature}</li>
			// <Comment message={comment} key={index}/>
		})
		return (
			<div>
				<h1>{this.props.brewery.name}</h1>
				<ul>{features}</ul>
				<h3>{this.props.brewery.street},{this.props.brewery.city}, {this.props.brewery.state}, {this.props.brewery.postal_code} </h3>
				<h3>{this.props.brewery.phone}</h3>

			</div>
		);
	}
}

export default Show;

// id: 5494,
// name: "MadTree Brewing",
// brewery_type: "regional",
// street: "3301 Madison Rd",
// city: "Cincinnati",
// state: "Ohio",
// postal_code: "45209-1132",
// country: "United States",
// longitude: "-84.4239715",
// latitude: "39.1563725",
// phone: "5138368733",
// website_url: "http://www.madtreebrewing.com",
// updated_at: "2018-08-24T15:44:22.281Z",
// tag_list: [
//   "patio"
// ]