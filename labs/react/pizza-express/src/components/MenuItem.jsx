import React, { Component } from 'react';
import '../index.css';
class MenuItem extends Component {
    render() {
        return (
                <div id="menu" className="menu-item">
                    <div className="menu-item-img">
                        <img src={this.props.image} alt={`${this.props.name}`} />
                    </div>
                    <div className="menu-item-name">
                        {this.props.name}
                        <div className="menu-item-price">
                           <strong> {this.props.price} </strong>
                            <div className="menu-item-description">
                                {this.props.description}

                            </div>
                        </div>
                    </div>
                </div>
          
        );
    }
}

export default MenuItem