function ej8() {
    
    let sum = "";

    for (let i = 0; i < arguments.length; i++) {
      sum += String(arguments[i]);
    }
    console.log(sum);
  }


ej8(1,1,6,"Hola");