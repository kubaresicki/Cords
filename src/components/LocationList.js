import React from "react";

const LocationList = (props) =>{
    return props.locations.map(location => {
        return <div><h1 style={locName}>{location.name}</h1>
        <p style={latLon}>Latitude: {location.lat} Longitude: {location.lon} </p>
        <p style={code}>Country code: {location.c}</p>
        </div>
        

    })
}
const locName ={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginTop: '15px',
    borderRadius: "5px"
}
const latLon ={
    background: '#99cccc',
    textAlign: 'center',
    borderRadius: "5px"
}
const code ={
    background: '#99cc99',
    textAlign: 'center',
    borderRadius: "5px"
}
export default LocationList;