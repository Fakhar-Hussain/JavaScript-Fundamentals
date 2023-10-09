let Students = [
    {name: "Piyush", rollNo: 31, marks: 80},
    {name: "Jenny", rollNo: 15, marks: 59},
    {name: "Fakhar", rollNo: 16, marks: 100},
    {name: "Adil", rollNo: 7, marks: 55}
]

// let Data = Students.map((item) => {
//     return (item.name).toUpperCase();
// })

// console.log(Data);

// let Data = Students.filter((item) => item.marks > 80 && item.rollNo > 15 )
// console.log(Data);


let Data = Students.reduce((prev, curr) =>  prev + curr.marks, 0)
console.log(Data);