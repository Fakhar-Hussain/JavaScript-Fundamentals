
var array = [1,2,3,4,5,6,7,8,9,10];

// var map = array.map( (item, index) => {
//     return item > 5 ? item*2 : index+1
// })

// var filter = array.filter( (item, index) => {
//     return item > 5
// })

// var reduce = array.reduce( (pre, cur, i) => {
//     return pre +cur;
// },0)

// var forEachMethod = array.forEach( (val) => {
//     console.log(`This is ForEach ${val+3}`);
// });

console.log(array);

// console.log(map);
// console.log(filter);
// console.log(reduce);
// console.log(forEachMethod);
// console.log(array);


// Interview Questions

// const students = [
//     {name: "samar", rollNumber: 31, marks: 80 },
//     {name: "ahmar", rollNumber: 15, marks: 69 },
//     {name: "ashar", rollNumber: 16, marks: 35 },
//     {name: "fakhar", rollNumber: 7, marks: 55 },
// ]

// //return only names of students in capital letters.
// let mapMethod = students.map( (item, index) => item.name.toUpperCase())

// //return details of students who scored more than 60 marks and rollno is gratter than 15.
// let filterMethod = students.filter( (item, index) => item.marks > 60 && item.rollNumber > 15)

// //return sum of all students marks.
// let reduceMethod = students.reduce( (prev, cur) => prev + cur.marks ,0)

// //return only names of students who scored more than 60 marks.
// let stuNames = students.filter((item,index) => {
//    return item.marks > 60
// }).map( (item) => item.name)

// return total marks of students with marks grater than 60 
// after 20 marks added those who scored less than 60
// item.marks < 60 ? item.marks + 20 : item.marks
// let reduceMarks = totalMarks.reduce( (prev,cur) => prev + cur ,0) 

// let totalMarks = students.map( (item) => {
//     if (item.marks < 60) {
//         item.marks += 20
//     }
//     return item
// })
// .filter( (item) => item.marks > 60)
// .reduce( (prev, cur) => prev + cur.marks , 0)

// console.log(mapMethod);
// console.log(filterMethod);
// console.log(reduceMethod);
// console.log(stuNames);
// console.log(totalMarks);
// console.log(reduceMarks);



