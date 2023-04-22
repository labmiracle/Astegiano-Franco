const prompt = require("prompt-sync")({sigint:true});

var phrase = String(prompt("Please insert the phrase you want to camelize: "));

function camelize(c){

    c = c.toLowerCase();
    console.log(c);

    let words = c.split(" ");
    let result = words.slice(0,1);
    console.log(result);
    

    for(let i of words.slice(1,words.length)){
        result += upperCaseFirstLetter(i);
        console.log(result);
    }

    return result;

}

// Aux
function upperCaseFirstLetter(w){

    let firstLetter = w.charAt(0);

    let cap = firstLetter.toUpperCase();

    const remainingLetters = w.slice(1);

    return cap + remainingLetters;


}

// test
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');

console.log(camelize(phrase));