

 function flatten(array: (number | number[])[]): number[] {
    const flattened: number[] =[];

     for (const element of array) {
         if (Array.isArray(element)) {
            element; // any[]
            flattened.push(...element);
        } else {
            element; // any
            flattened.push(element);
        }
     }

    return flattened;
 }






function flattenGeneral<T>( array: T[]) :T[]{
    const flattened: T[] =[];

     for (const element of array) {
         if (Array.isArray(element)) {
            element; // any[]
            flattened.push(...element);
        } else {
            element; // any
            flattened.push(element);
        }
     }

    return flattened;

}




const cadena: (string | string[])[] = ["Hola","este",["es", "un"],"mensaje"]
const flatCadena = flattenGeneral(cadena)


const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
const flattenedNumbers = flatten(numbers);
const flattenedNumbersGeneral = flattenGeneral(numbers);


let sum = flattenedNumbers.reduce((a,b) =>{
    return a+b;
}); 

let sumGeneral = 0;
for(let i of flattenedNumbersGeneral){
    if(typeof i === 'number'){
        sumGeneral +=i;
    };
}


let concat = flatCadena.join(" ");



console.assert(sum == 295, "Sum of items is not 295, flatten is not working");
console.assert(sumGeneral == 295, "Flatten general is not working for numbers.")
console.assert(concat == "Hola este es un mensaje","Flatten general is not working for strings.");
