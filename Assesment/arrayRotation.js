const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
  inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  const inputString = userInput.toString();
  const inputArray = inputString.split(',');
  console.log(inputArray);// array of given inputs
// your code goes here
  let n = inputArray.length;
  let min = inputArray[0],min_index = 0;
  for (let i = 0 ; i<n;i++){
    if(min > inputArray[i]){
      min = inputArray[i];
      min_index=i;
    }
  }
  return min_index;
});