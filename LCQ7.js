// Given an integer array nums, 
// a reducer function fn, and an initial value 
// init, return a reduced array.

// A reduced array is created by applying 
// the following operation: 
// val = fn(init, nums[0]), 
// val = fn(val, nums[1]), 
// val = fn(val, nums[2]), 
// ... until every element in the array has been 
// processed. The final value of val is returned.

// If the length of the array is 0, 
// it should return init.

// Please solve it without using 
// the built-in Array.reduce method.


let nums = [10, 20, 30, 40];
let fn = function (prev, curr) {
    return (prev + curr);
}
let init = 0;

const reduce = function (nums, fn, init) {


    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i])
    }
    return init;

}

reduce(nums, fn, init);






// if(nums.length !== 0){
    //     let val = init;
    //     val = fn(init, nums[0]);
    //     val = fn(val, nums[1]);
    //     val = fn(val, nums[2]);
    //     val = fn(val, nums[3]);
    //     return val;
    // }else{
    //     return init;
    // }

    // if (nums.length == 0) {
    //     return init;
    // } else {
    //     for (let i = 0; i < nums.length; i++) {
    //         init = fn(init, nums[i])
    //     }
    //     return init;
    // }