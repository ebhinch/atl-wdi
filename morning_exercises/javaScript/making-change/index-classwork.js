
// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

//THIS IS CLASSWORK METHOD FOR SOLVING - 9.8.17

var makeChange = function(price, payment) {
  // given price and payment amount
  // calculate change
  // if price > payment return array of 0 like [0, 0, 0, 0]

  let change = payment - price; 
  console.log(change);
  if (change <= 0) {
      return [0, 0, 0, 0];
  }
  else {
      // convert change values to a penny value not portion of value
    change *= 100;
      // return array like [quarters, dimes, nickles, pennies]
      // calculate quarters
      // Math.floor rounds down this change/25
      const quarters = Math.floor(change / 25);
      //reset value of "change" after we've given out as many quarters as we can
      change = change % 25;

      // calculate dimes
      const dimes = Math.floor(change / 10);
      change = change % 10;
      
      // calculate nickles
      const nickles = Math.floor(change/5);
      change = change % 5;

      // calculte pennies and use Math.floor to round down to penny unit
      const pennies = Math.floor(change);

      return quarters;
  }

// more concise / cleaner way to write same code
else {
    const givenChange =[];
    [25, 10, 5, 1].forEach((coin) => {
        const numberOfCoins = Math.floor(change/coin);
    }

)

}




};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};