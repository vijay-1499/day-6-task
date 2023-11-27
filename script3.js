//4.write a class to calculate the uber price.
function calculateUberPrice(distanceInKilometers, timeInMinutes) {
  var baseRatePerKilometer = 1.5;
  var ratePerMinute = 0.2; 
  var bookingFee = 5;

  var distanceCost = baseRatePerKilometer * distanceInKilometers;
  var timeCost = ratePerMinute * timeInMinutes;
  var totalCost = distanceCost + timeCost + bookingFee;

  return totalCost.toFixed(2);
}


var distance = 10;
var time = 20; 
var price = calculateUberPrice(distance, time);

console.log(`The Uber price is ${price}`);