let namePromise = new Promise((resolve,reject) => {
    console.log();
    setTimeout(() => {
        resolve("API return value");
    },1000)
});

const getName = async() => {
    try {
        let name = await namePromise;
        console.log(`Name received from the db =${name}`);
    } catch (err){
        console.log("Ikj" +err);
    }
}