var addTwoPromises = async function(promise1, promise2) {
    return new Promise((res, rej) => {
        promise1.then( (val1) => {
            promise2.then((val2) => {
                res(val1 + val2)
            })
        })
    });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
.then((x) => console.log(x)); // 4
// .then( (result) => {
//     let sum = result.reduce( (prev , curr) => prev + curr)
//     console.log(typeof sum);
//     return sum;
// })
// .then( ([result1,result2]) => {
//     var sum = result1 + result2;
//     console.log(sum);
//     return sum;
// })
