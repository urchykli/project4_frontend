import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Map.css";
import axios from "axios";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import icon from "./location.svg";
import Markers from "./Markers";
import Show from "./Show";

const TOKEN =
    "pk.eyJ1IjoidXJjaHlrbGkiLCJhIjoiY2p0Mzk3d2c2MGtnNDN5bHNqaDByOTh0cyJ9.w36OVXzFUTpeyqf0vcvjDA";
const navStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "10px"
};
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 37.785164,
                longitude: -100,
                zoom: 3.5,
                bearing: 0,
                pitch: 0,
                width: 900,
                height: 500
            },
            popupInfo: []
        };
    }

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
    // setMarker(){
    // 	for (let i = 0; i < this.props.latitude.length; i++){
    // 		return (
    // 			<Marker
    // 			latitude={this.props.latitude[i]}
    // 			longitude={this.props.longitude[i]}
    // 			offsetLeft={-20}
    // 			offsetTop={-10}
    // 			>
    // 				  {/* <Link to={brewery._id}> */}
    // 					  <img src={icon} width="15" height="50" />
    // 				  {/* </Link> */}
    // 			  </Marker>
    // 		  );
    // 	}

    // }
// from https://github.com/uber/react-map-gl/blob/4.0-release/examples/controls/src/app.js
    _updateViewport = viewport => {
        this.setState({ viewport });
    };
    render() {
        let markers = this.props.realBrewery.map((brewery, index) => {
            return (
                <Marker
                    latitude={Number(brewery.latitude)}
                    longitude={Number(brewery.longitude)}
                    offsetLeft={-20}
                    offsetTop={-10}
                    key={`marker-${index}`}
                >
                    {/* <Link to={brewery._id}> */}
                    <img
                        src={icon}
                        width="15"
                        height="50"
                        onClick={() =>
                            this.setState(prevState => ({
                                popupInfo: [...prevState.popupInfo, brewery]
                            }))
                        }
                    />
                    {/* </Link> */}
                </Marker>
            );
        });
        let pop = this.state.popupInfo.map((info, index) => {
            return (
                info && (
                    <Popup
                        tipSize={5}
                        anchor="top"
                        longitude={Number(info.longitude)}
                        latitude={Number(info.latitude)}
                        closeOnClick={false}
                        onClose={() => this.setState({ popupInfo: [] })}
                    >
                        <div>
						<Link to={"/"+ info.id} onClick={() => this.setBrewery({brewery: info})}>{info.name}</Link>
						</div>
                        {/* <CityInfo info={popupInfo} /> */}
                    </Popup>
                )
            );
        });
        // console.log(id)
        console.log(this.props.brewery);
        console.log(this.state.popupInfo);
        console.log(this.props.realBrewery);

        const { viewport } = this.state;

        return (
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/urchykli/cjt4cqf1x1kpt1frx7xj7g3yq"
                onViewportChange={this._updateViewport}
            >
                <div className="nav" style={navStyle}>
                    <NavigationControl
                        onViewportChange={this._updateViewport}
                    />
                </div>
                {markers}
                {pop}
            </ReactMapGL>
        );
    }
}

export default Map;
