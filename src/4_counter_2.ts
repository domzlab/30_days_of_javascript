type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    const initVal = init;
    return {
        increment() {
            return ++init;
        },
        decrement(){
            return --init;
        },
        reset(){
            init = initVal;
            return init;
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */