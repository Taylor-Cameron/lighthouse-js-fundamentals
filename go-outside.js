// logs a specific answer based on the variables boolean outcome
var raining = true;
var cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//logs a specific outcome based on the value of the temperature variable
var temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//logs outcome if both criteria are met
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//logs outcome if one or the other criteria is met
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//logs outcome if criteria is equal to "not true"
if (!raining) {
  console.log("Leave your umbrella at home!");
}
