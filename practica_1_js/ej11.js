function addOnlyUNiq() {

    let res = ""
    for(let i of arguments){
        if(!repeats(arguments, i)){
            res += i
        }

    }

    return res;    

}


console.log(addOnlyUNiq(1,1,6,"Hola","dd",6,"hola",8));


function repeats(arr, val){

    let count = 0;

    for(let i of arr){
       if(i === val){
        count++
       }
    }

    if (count>1){
        return true;
    }

    return false;


}