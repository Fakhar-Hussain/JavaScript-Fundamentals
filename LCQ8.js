// Given an array of functions 
// [f1, f2, f3, ..., fn], return a new function 
// fn that is the function composition of the 
// array of functions.

// The function composition of [f(x), g(x), h(x)] 
// is fn(x) = f(g(h(x))).

// The function composition of an empty list of 
// functions is the identity function f(x) = x.

// You may assume each function in the array
// accepts one integer as input and returns 
// one integer as output.


// Case #1

// function Add (x) {
//     return x + 1;
// }

// function Multiply (y) {
//     return 2 * y;
// }

// var compose = function(functions) {
//     return function(z) {
//         for (let i = 0; i < functions.length; i++) {
//             const element = functions[i];
            
//         }
//         let addRes = functions[0](z);
//         let multiplyRes = functions[1](addRes);

//         console.log(multiplyRes);
//     }

// };

// const fn = compose([x => x + 1 , x => 2 * x])
// fn(4)

// Case #2

var compose = function(functions) {
    const fn = (acc , f) => f(acc);
    return function(x) {
        let fnAns = functions.reduceRight(fn, x)
        console.log(fn);
        return fnAns;
    }

};

const fn = compose([x => x + 1 , x => 2 * x])
fn(4)

