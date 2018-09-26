//Given a sorted array find unique values;
//Can be solved using frequency Counter
//trying to solve via pointer approach

function noOfUniqueValues(arr){
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[j]!==arr[i]){
            i++;
            arr[i]=arr[j]
        }
    } 
    return i+1;
}

console.log(noOfUniqueValues([1,1,2,2,3]))