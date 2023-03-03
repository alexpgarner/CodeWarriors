// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// function moveZeros(arr) {
//     console.log(arr)
//     let zeros = [];
//     let zeroRemove = arr.filter(element=>{
//       if(element === 0){//need "===" because 0 is falsy
//         zeros.push(0);
//         return false;
//       }else{
//         return true;
//       }
//     });
//     return zeroRemove.concat(zeros);
//   }

// saw a clever answer using filter and then comparing array lengths to add zeros

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// function humanReadable (seconds) {
//     let hrs = (""+Math.floor(seconds/3600)).length<2 ? "0"+Math.floor(seconds/3600) : ""+Math.floor(seconds/3600) ;
//     let min = (""+Math.floor(seconds%3600/60)).length<2 ? "0"+Math.floor(seconds%3600/60) : ""+Math.floor(seconds%3600/60);
//     let sec = (""+Math.floor(seconds%3600%60)).length<2 ? "0"+Math.floor(seconds%3600%60) : ""+Math.floor(seconds%3600%60);
//     return `${hrs}:${min}:${sec}`
//   }