function sum(arr, n) { 
    
    switch(true){

        case n===1:
            return arr[0];

        case n<1:
            console.log("n should be higher than 0");
            break;

        case n>1:
            return arr[n-1] + sum(arr,n-1);
    }

}


let ar = [1,2,3,4,5,6,7];
console.log(sum(ar, 4))