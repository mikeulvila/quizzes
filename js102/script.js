
console.log("test");
function outputFruit(element, index, array) {
  console.log('array[' + index + '] = ' + element);
}
var fruits = ["apple", "banana", "cherry"];
fruits.forEach(outputFruit);

// Write a JavaScript function that accepts an array as an argument, 
//and returns a new array that is sorted. 
//  Array.sort();

//Write a JavaScript function that accepts an array, 
//and returns a new array that contains elements in 
//the array you passed in that are larger than 25.
var monkeys = ["asdjfksdlf", "asdjkflk", "alvnansdvlasdjlaskdjfasdflasdf"];
var monkeys25 = monkeys.filter(function(element) {
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

// In your HTML, create one input field of type text and one <button> element.
// Attach an event handler to the button click with jQuery.
// Type in a comma-delimited list of integers into that input field (e.g. 10,3,5,67,22).
// When the button is clicked retrieve the value of the input field.
var inputText = document.getElementById("input-text");
var inputButton = document.getElementById("input-button");
var inputNumbers = [];
var integers = [];
$( "#input-button" ).click(function() {
   inputNumbers = inputText.value.split(",");
console.log("number array", inputNumbers);
inputNumbers.map(function(element) {
	integers.push(parseInt(element));
})
console.log(numbers);
});
// Convert that string of comma-delimited numbers into an array.
// Pass that array into the function that finds numbers higher than 25. Remember how to convert strings to numbers?
// The array that is the result of that, pass it into the function that sorts the array.
// Loop over the sorted array and create a DOM string that wraps a
// element around each number (e.g. output += something).
// Give each <div> a class of "number".
// Write a CSS class that changes the font color of the even elements to red.
// Write a CSS class that changes the background color of the odd elements to azure.
// Push all of your code to Github.
// Send the link to your Github project to your assigned TA.