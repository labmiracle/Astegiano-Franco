function mergeArrays(arr1, arr2){
    const res = [...arr1, ...arr2];
    return res;
}


console.log(mergeArrays([1,2,3],[3,2,1]));