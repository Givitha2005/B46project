function display(){
console.log("Maheeeeeeeeeeeeeeeeeee");
}

//arrow function
const add = (a,b)=>{
return a+b;
}
console.log("The result is"+add(10,20));

//callback function

// function disp(result){
//     console.log("The subraction result is : " +result);
// }

const disp = (result)=>{
    console.log("The subraction result is : " +result);
}

const sub = (a,b,val)=>{
   let sum = a-b;
   disp(sum); 
   return a-b;
}

console.log("The result is"+sub(20,10,disp));