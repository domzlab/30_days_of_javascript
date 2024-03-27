function map(arr: number[], fn: (n: number, i: number) => number): number[] {

    const result: number[] = new Array(arr.length);

    for(let i = 0; i < arr.length; i++){
        result[i] = fn(arr[i], i);
    }

    return result;
    
};