import React, { Component } from 'react'

import locationData from '../locationData.js'
import Location from './Location.jsx'

class LocationList extends Component{
    render() {
        const location = locationData.map((location, imdex) => {
            return <Location
            name={location.name}
            address={location.address}
            phone={location.phone}
            />
        })
       


        return(
        <div id="locations"> 
            <h1>Locations</h1> 
            <div className="locations">
            {location}
            </div>
        </div>
        )
    }
}


export default LocationList
