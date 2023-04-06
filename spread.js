let arrayOne = [5,15];
let arrayTwo = [10,20];
let arrayThree = [...arrayOne,...arrayTwo];

let spreadSubraction = function(a,b){
    return b-a;
}
console.log(spreadSubraction(...arrayOne));
console.log(...arrayThree);
