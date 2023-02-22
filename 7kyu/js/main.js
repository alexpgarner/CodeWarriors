// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     const vowels = /[aeiou]/ig
//     const matched = str.match(vowels)
//     console.log(matched)
//     return matched == null ? 0:matched.length;
//   }

  // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {  
//     numbers.sort((a,b)=> a-b)
//     return numbers[0]+numbers[1];
//   }

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// function createPhoneNumber(numbers){
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
// 	let sum=0
//   for(let i=0;i<n;i++){
//     sum+=n*(n-1)+1+2*i;
//   }
//   return sum;
// }

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//   return str.replaceAll(/[aeiou]/ig,'');
// }

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// function getMiddle(s)
// {
//   if(s.length%2==0){
//     return `${s[s.length/2-1]}${s[s.length/2]}`
//   }else{
//     return `${s[Math.floor(s.length/2)]}`
//   }
// }

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
// Array Mappings
// Oh no, the map method for arrays has been disabled. Can you fix it?

// In case you haven't come across the map method for arrays, here is how it works:

// [1,2,3].map(x => x ** 2) === [1,4,9]
// [1,2,3].map(x => 2 * x) === [2,4,6]
// [1,2,3].map(x => 2 ** x) === [2,4,8]
// [1,2,3].map(x => x.toString()) === ["1","2","3"]
// ["1","2","3"].map(x => parseInt(x)) === [1,2,3]
// ["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]

// Array.prototype.map = function(callback){
//   let newArr = [];
//   this.forEach((value) => newArr.push(callback(value)));
//   return newArr;
// }

// DESCRIPTION:
// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

// function numObj(s){
//   return s.map(value=>{return {[value]: String.fromCharCode(value)}});
// }
// Write a function that returns the number of occurrences of an element in an array.

// This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).

// Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences(3) === 1;

// Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
//   value : function numberOfOccurrences(element) {
//     let occurs = 0;
//     this.forEach(value => value == element ? ++occurs:0);
//     return occurs;
//     }
// });

//clever solution I saw with filter() and arrow functions.
//uses filter with a callback that returns true an element in array === search. that shallow copy array length is number of occurences.
// Array.prototype.numberOfOccurrences = function(search) {
//   return this.filter( function(num){ return search === num } ).length;
// }

// Note to Kata translators: Please carefully consider the suitability of your chosen language with regards to implementing the idea proposed by this Kata before authoring and submitting a translation. "Inappropriate" language translations (such as Python which has already been proven to be a poor candidate for this Kata) will be rejected by the author of this Kata even if it is well-written (i.e. contains suitable Kata Description edits, plenty of fixed and random tests, etc.).

// Strings, strings, strings (Easy)
// Background
// Oh no, there were some problems with your computer and now you cannot convert any data type to strings!

// Task
// The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.

// I. Booleans
// For booleans:

// true should be converted to "true"
// false should be converted to "false"
// II. Numbers
// For numbers, conversion should be as follows:

// // e.g.
// (3).toString() === "3"
// (3.14).toString() === "3.14"
// (-78).toString() === "-78"
// Math.PI.toString() === "3.141592653589793"
// III. Arrays
// For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. However, on top of fixing it, we would also like to improve it as well. We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code. For example:

// // e.g.
// [].toString() === "[]"
// [1].toString() === "[1]"
// [2,4,8,17].toString() === "[2, 4, 8, 17]"
// [Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"
// As you may have noticed in the examples above, when the array has more than one element, some of the strings have spaces as well as commas separating each item but some strings do not. For the purposes of this Kata whether there are whitespaces or not does not matter for stringified arrays - before conducting the tests your input is stripped of all whitespace.

// Final Note - IMPORTANT
// Your recovered toString() methods should only return the stringified version of the input - it should NOT alter the original value. Test cases have been created to confirm this.

// Kata in this Series

//Haven't solved yet.
// Recover toString() here :)
Object.prototype.toString =function(){
  console.log(typeof this.value)
  switch(typeof this.value){
      case 'boolean':
        return(`${this.value}`);
      case 'string':
        return(`${this.value}`);
      case 'object':
        return (`[${this.value}]`);
      default:
        console.log(typeof this.value + ` ${this.value}`)
        return "HELLO IM BROKEN";
        break;
  } 
}

console.log([1,12,3].toString())