
const prompt = require("prompt-sync")({sigint:true});


var h = parseInt(prompt("Please insert desired height: "));
var growthSpeed = parseInt(prompt("Please insert growth rate [m/day]: "));
var DecreaseSpeed = parseInt(prompt("Please insert decrease rate [m/day]: "));


while (growthSpeed <= DecreaseSpeed){
    console.log("Growth rate should be higher than decrease rate, please insert the values again.")
    var growthSpeed = parseInt(prompt("Please insert growth rate [m/day]: "));
    var DecreaseSpeed = parseInt(prompt("Please insert decrease rate [m/day]: "));

}

function days(grate,drate,height){
    netGrowth = grate-drate;
    
    return Math.floor(height/netGrowth);

}

console.log(days(growthSpeed,DecreaseSpeed,h) + " days are needed to grow up to: " + h);


