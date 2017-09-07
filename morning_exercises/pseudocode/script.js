//*************************
// Problem 1:
// Barrels O' RUM
// Captain Henry Morgan hosts an annual shindig. For his party, he ordered 2 small barrels of rum and 5 large barrels of rum, which cost 825 dubloons. The party was going so well, he managed to buy 1 more small barrel of rum, which cost a total of 60 dubloons.
// Write a barrel function that calculates and returns the price of a large barrel of rum as an integer. barrel takes in 3 arguments: the number of small barrels, the number of large barrels, and the total price. Unit of currency is negligible.


var barrels = function(small, large, total){

  // set smallPrice total to $60
   const smallPrice = 60;

  // calculate large price
  const largePrice = ((total - (small * smallPrice)) / large);

  // return price of large barrel
  return largePrice;
};

// run function
barrels(2, 3, 825);

//*************************
// Problem 2:
// Sailing the Seas

//How much would it cost to sail straight around the earth's circumference, assuming the Earth is rotating at 1000 mph, and assuming the eco-friendly ship's fuel costs $3 per gallon, and the ship gets 12 miles to the gallon.

//Write a shipFuelCost function that calculates and returns the total cost as a number. shipFuelCost takes in 2 arguments: the cost of fuel per gallon, miles per gallon. Unit of currency is negligible.

var shipFuelCost = function(fuelPrice, milesPerGallon){
  // Find the distance of the earth circumference in miles
  const earthCircumference = 24901;

  // Calculate the # of gallons used to travel around the earth - circumference / MPG (miles per gallon)
  const gallonsUSed = 24901 / milesPerGallon;

  // Calculate the cost: total gallons used * cost of fuel
  const cost = gallonsUSed * fuelPrice;

  return cost;
};

shipFuelCost(3, 12);

//*************************
// Problem 3:
// GROG
// Blackbeard's famous slog recipe of 3 gallons of Costco's fruit punch and 2 gallons of Kirkland fruit punch. Costco's fruit punch contains 20% pure fruit juice and Kirkland's fruit punch contains 55% pure fruit juice. What percent of slog is pure fruit juice?
// Write a calcFruitJuice function that calculates and returns the total percentage of pure fruit juice as a decimal. calcFruitJuice takes in 4 arguments:


var calcFruitJuice = function(costcoGallons, costcoPurePercent, kirklandGallons, kirklandPurePercent){

 // Find the total amount of pure fruit juice (gal)
 
  // Total of Costco pure fruit juice: percentage pure fruit juice * number of gallons
  const costcoPureTotal = (costcoPurePercent/100) * costcoGallons;


  // Total of Kirkland pure fruit juice: percentage pure fruit juice * number of gallons
  const kirklandPureTotal = (kirklandPurePercent/100) * kirklandGallons;

  // Add Costco pure fruit juice total + Kirkland pure fruit juice total
  const totalPure = costcoPureTotal + kirklandPureTotal;

// Find the total amount of juice (gal): Total of Costco juice + Total of Kirkland Juice
  const totalGallons = costcoGallons + kirklandGallons;

// Calculate (total pure fruit juice) / (total juice)
  const totalPureGallons = (totalPure / totalGallons);

  return totalPureGallons;

};

calcFruitJuice(3, 20, 2, 55);



//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
