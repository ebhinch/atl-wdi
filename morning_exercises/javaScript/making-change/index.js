// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

//make function and set price and payment as paramaters
var makeChange = function(price, payment) {
  //set each coin value in terms of pennies
  const quarterValue = 25;
  const dimeValue = 10;
  const nickleValue = 5;
  const pennyValue = 1;

//set if statement for when no change needs to be paid
  if (price >= payment) {
 
    
    // set variables representing quanity of each coin to be paid back
    let quarters = 0;
    let dimes = 0;
    let nickles = 0;
    let pennies = 0; 

    let coinArray = [quarters, dimes, nickles, pennies];

    // return coinArray
    return coinArray;
  }
  
  //set if statement to run when change does need to be paid
  else { 
      //set variable and calculate what change is owed
      let changeOwed = Math.round((payment*100) - (price * 100));



    return coinArray;
  };

  
    // set variable for quantity of each coin;
    let quarters = 0;
    let dimes = 0;
    let nickles = 0;
    let pennies = 0;     
      
    //retrn an array of zeros when given a "denominations array" as an optional argument
    let coinArray = [quarters, dimes, nickles, pennies];
    
    //calculate how to best return change
  
  }
    
  }





 
};

makeChange(9.3, 11);
console.log(coinArray);

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
