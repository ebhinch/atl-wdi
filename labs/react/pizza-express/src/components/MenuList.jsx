import React, { Component } from 'react'

import pizzaData from '../pizzaData.js'
import MenuItem from './MenuItem.jsx'

class MenuList extends Component {
    render() {
        
        const menuItem = pizzaData.map((pizza, index) => {
                return <MenuItem
                name={pizza.name}
                price={pizza.price}
                description={pizza.description}
                image={pizza.image} 
                key={index}
                index={index}
                />
            })
        
       return(
           <div className="menu" id="menu">
           <h1>Menu</h1>
           <div className="menu-container">
            {menuItem}
            </div>  

     </div>
       )
        

    }
}


export default MenuList