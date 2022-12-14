const number = [1,2,3,4,5,6,7,8,9];

function myFilter(arr, cb){
    if(typeof cb !== 'function'){
        return false;
    }
    const result = [];
    for(let i =0; i< arr.length; i++){
        if(cb(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}

function soChan(n){
    return n%2 === 0;
}

console.log(myFilter(number, (n) => n % 2 !== 0))