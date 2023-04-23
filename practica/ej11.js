function addOnlyUNiq() {

    let uniq = new Set(arguments);
    let res = Array.from(uniq);
    return res;    

}


console.log(addOnlyUNiq(1,1,6,"Hola","dd",6,"hola"));