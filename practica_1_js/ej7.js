
const prompt = require("prompt-sync")({sigint:true});

const valid_cards = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];


var card = ""
var count = 0;
var decision = ""




function play(){

    console.log("Welcome to counting cards. Press X to exit.")
    console.log("Valid cards are the following: ");
    console.log(valid_cards);
   
    
    while (card !== "X"){
        card = newCard();
        cc(card);

    }

}


play();










function newCard(){
    let c = String(prompt("Card that was played: ")).toUpperCase();

    if(c === "X"){return c};

    while ((valid_cards.indexOf(c)<0)){
        console.log("Invalid card, please try again:")
        c = String(prompt("Insert a valid card: ")).toUpperCase();
    
    }

    return c

}



function cc(card) {

    switch(true){
        
        case (card === "10" || card === "J" || card === "Q" || card === "K" || card === "A"):
            count -= 1;
            break;

        case parseInt(card)<=6:
            count += 1;
            break;
        case card === "X":
            console.log("Game Over")
            return
    }



    if (count>0){
        decision = "Bet"} 
    else {
        decision ="Hold"
    }

    console.log(count + " " + decision)
    
}

/*

cc(2); // count =1 BET
cc(3); // count = 2 BET
cc(7); // count = 2 BET 
cc("K"); // count = 1 BET
cc("A"); // count = 0 HOLD

*/
