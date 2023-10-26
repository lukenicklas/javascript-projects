// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceMars = 225000000;
let distanceMoon = 348400;
const milesKilo = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof milesKilo);
// Calculate a space mission below
let milesMars = distanceMars * milesKilo;
// Print the results of the space mission calculations below
let hoursToMars = milesMars / shuttleSpeed;
// Calculate a trip to the moon below
let daysToMars = hoursToMars / 24;

let milesMoon = distanceMoon * milesKilo;
let hoursToMoon = milesMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(shuttleName  + ' will take '  + daysToMars +  ' days to reach Mars'); //Mars
console.log(shuttleName + ' will take ' + daysToMoon + ' days to reach the Moon ')// Moon