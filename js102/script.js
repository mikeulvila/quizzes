
console.log("is this thing working?");
function outputFruit(element, index, array) {
  console.log('array[' + index + '] = ' + element);
}

var fruits = ["apple", "banana", "cherry"];
fruits.forEach(outputFruit);

// Write a JavaScript function that accepts an array as an argument, 
//and returns a new array that is sorted. 
Array.sort();

//Write a JavaScript function that accepts an array, 
//and returns a new array that contains elements in 
//the array you passed in that are larger than 25.
var monkeys = ["asdjfksdlf", "asdjkflk", "alvnansdvlasdjlaskdjfasdflasdf"];
var monkeys25 = monkeys.filter(function(element, index, array) {
	if(element.length > 25){
		return element;
	}
});
console.log(monkeys25);
// function filterIt(element, index, array) {
//   if (element.length === 5) {
//     return element;
//   }
// }

// var fruits = ["apple", "banana", "cherry"];
// var filteredFruits = fruits.filter(filterIt);
// console.log(filteredFruits);