/*Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
First argument is an array of numbers and the second is the divisor.
*/

function divisibleBy(numbers, divisor){
let divisible = [];
numbers.forEach(function(element){
if((element % divisor) === 0){
  divisible.push(element)
}
})
return divisible;
}

// use filter

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));
