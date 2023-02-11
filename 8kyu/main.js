// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     let sum = 0;
//     arr.forEach(val=>{
//       if(val>0){
//         sum+=val;
//       }
    
//     })
//     return sum;
//   }

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]
// function maps(x){
//     return x.map(x=>2*x)
//   }

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//     return `${num}`;
//   }

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){
//     let strArr = str.split('');
//     for(let i =0;i<str.length/2;i++){
//       let temp = strArr[i];
//       strArr[i] = strArr[str.length-1-i]
//       strArr[str.length-1-i] = temp;
//     }
//     return strArr.join('');
//   }

// function solution(str){
//     let reverse ='';
//     for(let i=str.length-1;i>=0;i--){
//       reverse += str[i];
//     }
//     return reverse;
//   }