//scoping

// function loadData(satuts){
//     if(satuts){
//         let message = "Sucesss";
//         console.log("Inner" +message);
//     }
//     console.log("Outer" +message);
// }

// loadData(true);

let a = this;
console.log(a);

this.name = "Mahe";
console.log(window.name)