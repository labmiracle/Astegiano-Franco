const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
    ];


    function golfScore(par, strokes) {
        switch(strokes){
            case 1:
                console.log(names[0]);
                break;
            case par-2:
                console.log(names[1]);
                break
            case par-1:
                console.log(names[2]);
                break
            case par:
                console.log(names[3]);
                break
            case par+1:
                console.log(names[4]);
                break
            case par+2:
                console.log(names[5]);
                break
            default:
                console.log(names[6]);
                break
        }
        
    }

golfScore(10, 20);

