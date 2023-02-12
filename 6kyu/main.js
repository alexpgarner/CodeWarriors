// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//     switch(names.length){
//         case 0:
//           return `no one likes this`;
//         case 1:
//           return `${names[0]} likes this`;
//         case 2:
//           return `${names[0]} and ${names[1]} like this`;
//         case 3:
//           return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//         default:
//           return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
//           break;
//     }
//   }
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string){
//     let wordArr = string.split(' ');
//     wordArr.forEach((val,index)=>{
//       console.log(val)
//       if(val.length>=5){
//         wordArr[index]=wordArr[index].split('').reverse().join('');
//       }
//     })
//     return wordArr.join(' ');
//   }

//clever answer I saw
// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }

// Instructions
// Output
// In this Kata, you have to design a simple routing class for a web framework.

// The router should accept bindings for a given url, http method and an action.

// Then, when a request with a bound url and method comes in, it should return the result of the action.

// Example usage:

// var router = new Router;
// router.bind('/hello', 'GET', function(){ return 'hello world'; });

// router.runRequest('/hello', 'GET') // returns 'hello world';
// When asked for a route that doesn't exist, router should return:

// 'Error 404: Not Found'
// The router should also handle modifying existing routes. See the example tests for more details.

// class Router{
//     constructor(){
//       this.database={};
//     }
    
//     bind(url,method,action){
//       if(this.database[url]==undefined){
//         this.database[url] = {[method]: action}
//       }else{
//         this.database[url][method]=action;
//       }
//     }
    
//     runRequest(url,method){
//       console.log(this.database)
//       //if url is invalid catch error of trying to access key of undefined object
//       try{
//         if(this.database[url][method] == undefined){
//          return 'Error 404: Not Found';
//         }else{
//           return this.database[url][method]();
//         }
//       } catch (err){
//         return 'Error 404: Not Found';
//       }
//     }
//Interesting solution below
//https://www.codewars.com/kata/reviews/588a10ed8dd474fbe6000014/groups/58c842bc79e358cbb6000013
//should have used a Map instead of Object even though it passed the tests.