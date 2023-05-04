const mix = () => {
    console.log("Mix the ingredients for the cake");
};

const bake = (callback) => {
    console.log("Baking in progress");
    setTimeout(() => {
        console.log("cake is ready!!!");
        callback();
    },6000);
};

const callback = () => {
    alert("baking done");
};

const coffee = () => {
    console.log("coffee time");
};

mix();
bake(callback);
coffee();


  

  