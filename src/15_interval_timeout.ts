type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {

    // immediate call to function
    fn.apply(null, args);

    let intervalTimeout;

    // after t, run fn
    // then create another setTiemout
    const myFunction = () => {
        fn.apply(null, args);
        intervalTimeout = setTimeout(myFunction, t);
    };

    intervalTimeout = setTimeout(myFunction, t);


    // then create a function that will cancel the setTimeout
    const cancel = () => {
        clearTimeout(intervalTimeout);
    }

    // return that cancel function
    return cancel;
    
};