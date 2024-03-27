type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {

    return {

        toBe(toBeVal: any): boolean {

            if(toBeVal !== val){
                throw Error("Not Equal");
            }

            return true;
        },

        notToBe(notToBeVal: any): boolean {

            if(notToBeVal !== val){
                return true;
            }

            throw Error("Equal");

        }
    }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */