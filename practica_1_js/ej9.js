function addOnlyNums() {
    
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      if(typeof(arguments[i]) === 'number' && isFinite(arguments[i])){
        sum += arguments[i];

      }
     
    }
    console.log(sum);
  }


addOnlyNums(1,1,6,"Hola",NaN,Infinity);