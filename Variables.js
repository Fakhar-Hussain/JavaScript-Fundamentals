
// Global Scope: 
// Variables declared with var in the global scope are accessible throughout the 
// entire JavaScript program.

// Function Scope: 
// Variables declared with var inside a function are accessible within that function 
// and any nested functions (child functions) declared within it.

// Block Scope: 
// Variables declared with var inside a block (e.g., within a loop or conditional statement) 
// do not have block scope. They are scoped to the nearest enclosing function or the global 
// scope if not inside a function.




// re-initialization
// var a = 5
// a = 10; // Supported

// let b = 5
// b = 10; // Supported

// const c = 5
// c = 10; // Not-Supported

// console.log(a);
// console.log(b);
// console.log(c);




// Hoisting
// console.log(a);
// let a = 10;
// const count = "200";


// functions
// var a = 5;

// (function () {
//     var b = 10;
//     (function () {
//         var c = 15;
//         console.log(a+b+c);
//     })()
// })()

// console.log(a+b+c);



// var a = ["0"];
// var b = "0";


// console.log(typeof a);
// console.log(typeof b);
// console.log(a == b && "This statement is " + true);
// console.log(a === b ? true : false);

// document.getElementById("abc").innerHTML = "Hello Fakhar";
// var a = x.innerHTML = "ABC"


// console.log(a);