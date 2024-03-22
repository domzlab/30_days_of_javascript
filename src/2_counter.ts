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
