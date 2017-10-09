import React, { Component } from 'react'
import '../index.css'

class Location extends Component {
    render() {
        return (
            
            <div className="location">
                <p>{this.props.name} </p>
            <strong>Address: </strong>
            <p>{this.props.address}</p>
            <strong>Phone: </strong>
            <p>{this.props.phone}</p>
            </div>
        )
    }
}



export default Location