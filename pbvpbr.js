//pass by value

var name  = "Givitha";
function passByValue(newName){
    console.log(newName);
    newName = "Givitha SaravanaMuthu";
    console.log(newName);
}

passByValue(name);
console.log(name);

//pass by reference

function passByReference(refName){
    console.log(refName.name);
    refName.name = "GV";
    console.log(refName.name);
}
var person = {name:"GV GV"};
passByReference(person);
console.log(person.name);

//var,let,const

function useOfVarKeyword(){
    var name = "Giivtha";
    console.log(name);
}
useOfVarKeyword();
console.log(name);

// function useOfLetKeyword(){
//     let food = "pizza";
//     console.log(food);
// }
// useOfLetKeyword();
// console.log(food);

// function useOfConstKeyword(){
//     const item = "dress";
//     console.log(item);
//     item = "coffee";
//     console.log(item);
// }
// useOfConstKeyword();
// console.log(item);