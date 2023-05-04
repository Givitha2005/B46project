//promise obj with producing code
//resolve
let promiseObj = new Promise((resolve,reject) => {
    console.log("Api fetched");
    setTimeout(() => {
        resolve("API return value");
    },1000)
});

console.log(promiseObj);

//reject
let promiseObj1 = new Promise((resolve,reject) => {
    console.log("Getting API");
    setTimeout(() => {
        resolve("API return value");
        reject(new Error("Error Occured!!!"));
    },1000);
});

console.log(promiseObj1);

//promise with consumer code
promiseObj1.then(
    (val) => {
        console.log(`Value received from promise ${val}`);
    },
    (err) => {
        console.log(`Error occured from promise ${err}`);
    }
);