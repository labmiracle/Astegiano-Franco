
const prompt = require("prompt-sync")({sigint:true});

var cad = (String(prompt("Please write a short phrase: "))).toLowerCase();

function LargestWord(c){

    let words = c.split(" ");
    
    return words.sort(function(a, b){return a.length-b.length})[words.length - 1];
}

console.log(LargestWord(cad));