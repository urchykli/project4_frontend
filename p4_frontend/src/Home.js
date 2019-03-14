import React, { Component } from "react";
import axios from "axios";
import Map from "./Map";
import { Link } from "react-router-dom";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import icon from "./location.svg";

class Home extends Component {
    constructor(props) {
        super(props);

    //     this.state = {
    //         city: null,
    //         state: null,
    //         breweries: [],
    //         marker: {
    //             latitude: null,
    //             longitude: null
    //         },
    //         realBrewery: [],
    //         name: false
    //     };
    this.handleCityInput = this.handleCityInput.bind(this)
    this.handleStateInput = this.handleStateInput.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }

    handleCityInput(e) {
        this.props.onCityInput(e.target.value);
    }

    handleStateInput(e) {
        this.props.onStateInput(e.target.value);
    }
    handleSearchSubmit(e) {
        e.preventDefault();
        this.props.onSearchSubmit(e.target.value);
        console.log(this.props.city)
        console.log(this.props.state)
        console.log(this.props.realBrewery)
    }

    // componentDidMount() {
    // const zip = this.props.match.params.postalCode;
    // const hardCity = 'Alexandria';
    // const hardState = 'virginia'

    // const latLong = `https://api.mapbox.com/geocoding/v5/mapbox.places/${zip}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1552333204825&autocomplete=true&types=postcode`
    // axios.get(latLong)
    // .then(res => {
    // })
    // .then()
    // .catch(err => {
    // 	console.error(err)
    // })
    // }
// componentDidUpdate() {
//     this.state.realBrewery = []
//     if(!this.state.name) {
//     for (let i = 0; i < this.state.breweries.length; i++) {
//         if (this.state.breweries[i].longitude !== null) {
//                 this.state.realBrewery.push(this.state.breweries[i])
//                 this.state.name = true
//         }
//         console.log(this.state.realBrewery);
//     }
//     }
// }

    render() {
        // let markers = this.props.realBrewery.map(brewery => {
        //     if (brewery.latitude != null) {
        //     return (
        //         <Marker
        //             latitude={brewery.latitude}
        //             longitude={brewery.longitude}
        //             offsetLeft={-20}
        //             offsetTop={-10}
        //         >
        //             <Link to={brewery._id}>
        //                 <img src={icon} width="15" height="50" />
        //             </Link>
        //         </Marker>
        //     );
        //     }
        // });
        return (
            <div className="search">
                <form
                    className="search-form"
                    onSubmit={e => this.handleSearchSubmit(e)}
                >
                    <h3>Enter a city and state to find breweries near you!</h3>
                    <p>
                        <label>City: </label>
                        <input type="text" placeholder="City..." value={this.props.city} onChange={this.handleCityInput} />
                        {/* <textarea onChange={e => this.handleCityInput(e)} /> */}
                    </p>
                    <p>
                        <label>State: </label>
                        <input type="text" placeholder="State..." value={this.props.state} onChange={this.handleStateInput} />
                        {/* <textarea onChange={e => this.handleStateInput(e)} /> */}
                    </p>
                    <input type="submit" value="Submit" />
                </form>
                {/* <Map realBrewery={this.props.realBrewery}/> */}
            </div>
        );
    }
}

export default Home;
