type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): Promise<number> {

    return new Promise((resolve, reject) => {
        Promise.all([promise1, promise2])
            .then((values) => {
               resolve(values.reduce((acc, curr) => acc + curr, 0));
            })
            .catch((err) => {
                reject(err);
            });
    });
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log)
    .catch(err => console.log(err))