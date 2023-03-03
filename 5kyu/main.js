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