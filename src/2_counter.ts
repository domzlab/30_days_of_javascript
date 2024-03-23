function createCounter(n: number): () => number {
    
    let count;
    
    if(n !== undefined || n !== null) count = n;

    return function() {
        return count++;
    }
    
}



const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter())// 11
console.log(counter()) // 12


// Reviewed the solution
// This looks neater
// var createCounter = function (n: number) {
//    return () => n++;
//}