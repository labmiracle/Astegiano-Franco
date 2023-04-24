const prompt = require("prompt-sync")({sigint:true});



// Main

function play(first_match = true){

    if (first_match){
        console.log("Welcome again :)\nThis time the game consists of guessing the number im thinking of.\n");
        console.log("Don't worry, its just between 0 and 10, ready?\n");
    }


    let dif = parseInt(prompt("Okay now, select the level of difficulty between 1 (easy), 2 (hard), 3 (very hard!): "));
    dif = difficultyVal(dif);


    console.log("Difficulty set to: "+dif+"\n");
    console.log("Perfect, now let me think of a number...\n");
    

    

    let res = true //boolean for result. 
    let rnd = 0

    let unzip = guess(getRandomNumber(), dif);

    res = unzip.result;
    rnd = unzip.random_number;
    

    if (res){
        console.log("Well done, that was my number("+rnd+")\n")
    } else {
        console.log("Sorry, you failed :(, my number was "+ rnd+"\n");
    }


    let play_again = String(prompt("Want to try again?? Y/N: ")).toUpperCase();
    if (play_again === "Y"){
        play(false);
    }

}

play();



// Aux


function guess(random_number, dif){

    let user_number = parseInt(prompt("So? what number am I thinkinf of?? "));

    let count = 1
    let result = true

    switch(dif){
        case 3:
            
            while(!validate(user_number) ){

                user_number = parseInt(prompt("Try again with a number between 0 and 10: "));
                
            }
            if (user_number !== random_number){
                result = false;
            }
            return {result , random_number}; 

        case 2:
            
            while(user_number !== random_number && count<2){
                
                if(validate(user_number)){
                    recommed(random_number,user_number);
                    count ++;} 
                else { 
                    console.log("Number should be between 0 and 10.\n")
                }

                user_number = parseInt(prompt("Try again: "));
            }
            if (user_number !== random_number){
                result = false;
            }
            
            return {result , random_number}; 

        case 1:
            
            while(user_number !== random_number){
                
                if(validate(user_number)){
                    recommed(random_number,user_number);

                } else{
                    console.log("Number should be between 0 and 10.\n")
                    
                }
                
                user_number = parseInt(prompt("Try again: "));
                
                
            }
            return {result , random_number}; 
        }

    


}



function difficultyVal(d){
    
    let valid_dif = [1,2,3]
    while(valid_dif.indexOf(d) <0 ){
        
        d = parseInt(prompt("Really.. ?? Please select between 1,2,3: "));
    }

    return d;
}


function validate(n){
    if (n>10 || n<0){
        return false; 
    } else {
        return true; 
    }
}


function getRandomNumber(){
    let rnd = Math.floor(Math.random() * 11);
    return rnd
}


function recommed(rnd_nmb, usr_nmb){


    if(rnd_nmb>usr_nmb){
        console.log("Try a bigger number!")

    } else {
        console.log("Try a smaller number!")
    }

}
