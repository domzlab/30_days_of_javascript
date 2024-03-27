type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {

    // a map used to record previously used arguments
    const previousArgs = new Map<string, number>();
    
    return function(...args) {
        const key = args.join(',');
        if(!previousArgs.has(key)) {
            previousArgs.set(key, fn(...args));
        } 

        return previousArgs.get(key);
    }
}


/**
Had to specify lib version to es2015/es6 or greater to get function to run:

$ npx tsc src/11_memoize.ts --lib es6 --outDir dist/ && node dist/11_memoize.js

Without specify lib, you get this error:

$ npx tsc src/11_memoize.ts --outDir dist/ && node dist/11_memoize.ts
src/11_memoize.ts:6:30 - error TS2583: Cannot find name 'Map'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.

6     const previousArgs = new Map<string, number>();
                               ~~~


Found 1 error in src/11_memoize.ts:6

*/