//quickSort test
arr = [5,4,1,3,2];

function quickSort(arr){
    let pivot = arr[0];
    let sml = [];
    let big = [];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            sml.push(arr[i]);
            sml = quickSort(sml);
        }
        else{
            big.push(arr[i]);
            big = quickSort(big);
        }
    }
    returnValue = [];
    for(let i=0;i<sml.length;i++){
        returnValue.push(sml[i]);
    }
    returnValue.push(pivot);
    for(let i=0;i<big.length;i++){
        returnValue.push(big[i]);
    }
    return returnValue;
}

console.log(quickSort(arr));