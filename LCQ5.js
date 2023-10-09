// Given an integer array arr and a mapping function fn, 
// return a new array with a transformation applied to each element.

// The returned array should be created such that 
// returnedArray[i] = fn(arr[i], i).

// Please solve it without the built -in Array.map method.

let arr = [1, 2, 3];

let fn = function (n, i) {
    return n + i;
};


var map = function (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i)
    }
    return arr;
};

const newArray = map(arr, fn);
