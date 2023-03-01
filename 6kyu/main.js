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

// In this kata we are going to mimic a software versioning system.

// You have to implement a vm function returning an object.

// It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

// This class should support the following methods, all of which should be chainable (except release):

// major() - increase MAJOR by 1, set MINOR and PATCH to 0
// minor() - increase MINOR by 1, set PATCH to 0
// patch() - increase PATCH by 1
// rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
// release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
// May the binary force be with you!


// //how to account for vm('1')
// //<FIX> More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!"

// //how to account for vm('1')
// //<FIX> More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!"

// class VersionManager{
//     constructor(intialVer = "0.0.1"){
//     this._initialVer = intialVer;
//     this._version = [this.formattInput()];
//   }
  
//   formattInput(){
//     //console.log(this._initialVer)
//     if(this._initialVer == ''|| this._initialVer == undefined){
//       return ['0','0','1'];
//     }
//     let numDecimals = this._initialVer.match(/[.]/g)
//     if(numDecimals== null){
//       this._initialVer += ".0.0";
//     }else if(numDecimals.length==1){
//       this._initialVer += ".0"
//     }
//     let versionArr = this._initialVer.split('.').splice(0,3);
//     //console.log(versionArr)
//     versionArr.forEach(value => {
//       if(Number.isNaN(Number(value))){
//         console.log("error")
//         throw "Error occured while parsing version!";
//       }
//     });
//     return versionArr;
//   }  
//   major(){
//     //console.log(this._version)
//     this._version.push([`${Number(this._version[this._version.length-1][0])+1}`,'0','0']);
//    // console.log(this._version)
//     return this;
//     }
//   minor(){
//     this._version.push([this._version[this._version.length-1][0],`${Number(this._version[this._version.length-1][1])+1}`,0]);
//     return this;
//     }
//   patch(){
//     this._version.push([this._version[this._version.length-1][0],this._version[this._version.length-1][1],`${Number(this._version[this._version.length-1][2])+1}`]);
//     return this;
//   }
  
//   rollback(){
//     console.log(this._version);
    
// //     try{
// //       this._version.pop();
// //       //return this;
// //     }
// //     catch(err){
// //       throw new Error("Cannot rollback!");
// //     }
// //     console.log(this._version)
//     if(this._version[0] == undefined){
//       throw new Error("Cannot rollback!")
//     }else if(this._version.length == 1){
//       throw new Error ("Cannot rollback!")
//     }else{
//       this._version.pop()
//       return this
//     }
//    }
  
//   release(){
//     console.log(this._version);
//     return this._version[this._version.length-1].join('.');
//   }
// }

// const vm =  (initial) => { return new VersionManager(initial);}

// class VersionManager{//this one worked finally instuctions on errors were bad and held me up
//     constructor(intialVer = "0.0.1"){
//     this._initialVer = intialVer;
//     this._version = [this.formattInput()];
//   }
  
//   formattInput(){
//     if(this._initialVer == ''|| this._initialVer == undefined){
//       return ['0','0','1'];
//     }
//     let numDecimals = this._initialVer.match(/[.]/g)
//     if(numDecimals== null){
//       this._initialVer += ".0.0";
//     }else if(numDecimals.length==1){
//       this._initialVer += ".0"
//     }
//     let versionArr = this._initialVer.split('.').splice(0,3);
//     //console.log(versionArr) testing for why errors not working. needed to throw new Error() not just exception
//     versionArr.forEach(value => {
//       if(Number.isNaN(Number(value))){
//         console.log("error")
//         throw new Error("Error occured while parsing version!");
//       }
//     });
//     return versionArr;
//   }  
//   major(){
//     this._version.push([`${Number(this._version[this._version.length-1][0])+1}`,'0','0']);
//     return this;
//     }
//   minor(){
//     this._version.push([this._version[this._version.length-1][0],`${Number(this._version[this._version.length-1][1])+1}`,0]);
//     return this;
//     }
//   patch(){
//     this._version.push([this._version[this._version.length-1][0],this._version[this._version.length-1][1],`${Number(this._version[this._version.length-1][2])+1}`]);
//     return this;
//   }
  
//   rollback(){
//     if(this._version[0] == undefined){
//       throw new Error("Cannot rollback!")
//     }else if(this._version.length == 1){
//       throw new Error ("Cannot rollback!")
//     }else{
//       this._version.pop()
//       return this
//     }
//    }
  
//   release(){
//     return this._version[this._version.length-1].join('.');
//   }
// }

// const vm =  (initial) => { return new VersionManager(initial);}

// class VersionManager{ //Figured out error handling and other issues
//     constructor(intialVer = "0.0.1"){
//     this._initialVer = intialVer;
//     this._version = [this.formattInput()];
//   }
  
//   formattInput(){
//     if(this._initialVer == ''|| this._initialVer == undefined){
//       return ['0','0','1'];
//     }
//     let numDecimals = this._initialVer.match(/[.]/g)
//     if(numDecimals== null){
//       this._initialVer += ".0.0";
//     }else if(numDecimals.length==1){
//       this._initialVer += ".0"
//     }
//     let versionArr = this._initialVer.split('.').splice(0,3);
//     //console.log(versionArr) testing for why errors not working. needed to throw new Error() not just exception
//     versionArr.forEach(value => {
//       if(Number.isNaN(Number(value))){
//         console.log("error")
//         throw new Error("Error occured while parsing version!");
//       }
//     });
//     return versionArr;
//   }  
//   major(){
//     this._version.push([`${Number(this._version[this._version.length-1][0])+1}`,'0','0']);
//     return this;
//     }
//   minor(){
//     this._version.push([this._version[this._version.length-1][0],`${Number(this._version[this._version.length-1][1])+1}`,0]);
//     return this;
//     }
//   patch(){
//     this._version.push([this._version[this._version.length-1][0],this._version[this._version.length-1][1],`${Number(this._version[this._version.length-1][2])+1}`]);
//     return this;
//   }
  
//   rollback(){
//     if(this._version[0] == undefined){
//       throw new Error("Cannot rollback!")
//     }else if(this._version.length == 1){
//       throw new Error ("Cannot rollback!")
//     }else{
//       this._version.pop()
//       return this
//     }
//    }
  
//   release(){
//     return this._version[this._version.length-1].join('.');
//   }
// }

// const vm =  (initial) => { return new VersionManager(initial);}



// Karan's company makes software that provides different features based on the version of operating system of the user.

// For finding which version is more recent, Karan uses the following method:

// function compareVersions (version1, version2) {
//   return parseFloat(version1) >= parseFloat(version2);
// }
// While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

// Karan's function fails for the new version:

// compareVersions ("10.9", "10.10");       // returns true, while it should return false
// Karan now wants to spend some time to write a more robust version comparison function that works for any future version/sub-version updates.

// Help Karan write this function. Here are a few sample cases:

// compareVersions("11", "10");                    // returns true
// compareVersions("11", "11");                    // returns true
// compareVersions("10.4.6", "10.4");              // returns true
// compareVersions("10.4", "11");                  // returns false
// compareVersions("10.4", "10.10");               // returns false
// compareVersions("10.4.9", "10.5");              // returns false
// It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.

// /function compareVersions (version1, version2) {
//   let version1Arr = version1.split('.');
//   let version2Arr = version2.split('.');
//   let longer = version1Arr.length >= version2Arr.length ? version1Arr.length:version2Arr.length;
//     console.log(version1Arr +" " + version2Arr + ` longer=${longer}`)
//   for(let i = 0;i<longer;i++){
//       console.log(version1Arr[i] + " " +version2Arr[i])
//       if(Number(version1Arr[i])>Number(version2Arr[i])){
//         return true;
//       }else if(Number(version1Arr[i])<Number(version2Arr[i])){
//         return false;
//       }else if(Number(version1Arr[i])==Number(version2Arr[i]) && ( i == longer-1)){
//         console.log(i)
//         return  true;
//       }else if(version1Arr[i] == undefined){
//         return false;
//       }else if(version2Arr[i] == undefined){
//         return true;
//       }
//   }
// }

///clever answer I found. undefined is falsy? 
// const compareVersions = (v1, v2) => {
//   const a1 = v1.split('.').map(Number);
//   const a2 = v2.split('.').map(Number);
//   for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
//     let n1 = a1[i] || 0, n2 = a2[i] || 0;
//     if (n1 === n2) continue;
//     return (n1 > n2) ? true : false;
//   }
//   return true;
// };

//ANOTHER answer I like even better. Need to review falsy stuff
// function compareVersions (version1, version2) {
//   version1 = version1.split('.')
//   version2 = version2.split('.')

//   while (version1.length && version2.length) {
//     const ver1 = Number(version1.shift())
//     const ver2 = Number(version2.shift())
    
//     if (ver1 !== ver2) {
//       return ver1 > ver2
//     }
//   }
  
//   return version2.length === 0
// }

// You certainly can tell which is the larger number between 210 and 215.

// But what about, say, 210 and 310? You know this one too.

// Things tend to get a bit more complicated with both different bases and exponents: which is larger between 39 and 56?

// Well, by now you have surely guessed that you have to build a function to compare powers, returning -1 if the first member is larger, 0 if they are equal, 1 otherwise; powers to compare will be provided in the [base, exponent] format:

// comparePowers([2,10],[2,15])===1
// comparePowers([2,10],[3,10])===1
// comparePowers([2,10],[2,10])===0
// comparePowers([3,9],[5,6])===-1
// comparePowers([7,7],[5,8])===-1
// Only positive integers will be tested, including bigger numbers - you are warned now, so be diligent try to implement an efficient solution not to drain too much on CW resources ;)!


// function comparePowers(n1,n2){
//     let bigger = (n1[1]>n2[1]) ? n1[1] : n2[1];
//     num1 = Math.pow(n1[0],n1[1]/bigger)
//     num2 = Math.pow(n2[0],n2[1]/bigger)
//     if(num1 > num2){
//       return -1;
//     }else if(num1 <num2){
//       return 1;
//     }else{
//       return 0;
//     }
//   }
// Clever solution because I don't remember math. putting arrays in parameters with variables didn't know about that .
// function comparePowers([b1, e1], [b2, e2]) {
//     let d = Math.log(b2) * e2 - Math.log(b1) * e1;
//     return (d > 0) - (d < 0);
//   }
// We are storing numbers in the nodes of a binary tree. The tree starts at the root node. The root has two child nodes, its leftchild and rightchild. Each of those nodes also has two child nodes, and so on, until we reach the leaf nodes, nodes that have no children. Each node stores one nonnegative integer. The value at every non-leaf node is supposed to be the sum of its two children. But the value at one node is incorrect. Find this node.

// Example: Consider the tree below. Note that 13 is the sum of 6 and 7, but the value 15 is incorrect, because 15 != 5 + 9 and 27 != 13 + 15. Clearly the 15 should be changed to 14.

//            27
//          /    \
//         13    15
//        /  \   / \
//       6   7  5   9
// The tree will always be full (all non-leaf nodes have exactly 2 children) and perfect (all leaves are on the bottom level). If we consider the root as level 1, its children as level 2, their children as level 3, and so on, the tree will contain at least 3 levels (and no more than 10). If the incorrect value occurs on the leaf level, then the right child will always be the incorrect one.

// The tree is provided as a list or array (as appropriate to the language), with the nodes in breath-first order. This means the root is element 0, the root's leftchild is element 1, the root's rightchild is element 2, the root's leftchild's leftchild is element 3 and its rightchild is element 4, the root's rightchild's leftchild is element 5 and its rightchild is element 6, and so on.

// Your function should return the index of the incorrect node and the value that it should be changed to. In a language that doesn't allow multiple values to be returned, return them in an array of two integers.

// Examples:

// If the tree is [27, 13, 15, 6, 7, 5, 9], the function should return 2,14.

// If the tree is [21, 9, 10, 4, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4], the function should return 0,19.

// If the tree is [29, 13, 16, 5, 8, 9, 1], the function should return 6,7. (This is because of the condition "if the incorrect value occurs on the leaf level, then the right child will always be the incorrect one." Since 9 + 1 != 16, the 1 must be changed to 7, rather than changing the 9 to 15.)

// SOURCE: Programming Competition at the Midwest Instructional Computing Symposium, 2018.

// If you like this kata, check out the harder binary tree problems, like Complete Binary Tree and Sort binary tree by levels .
// function findIncorrectValue(tree) {
//     for(let index=0;index<tree.length;index++){
//       let leftChildIndex=1+2*index;
//       let rightChildIndex=2+2*index;
//       //console.log(`${tree} ${tree[index]} ${tree[leftChildIndex]} ${tree[rightChildIndex]}`)
//       if(!checkChildren(tree[index],tree[leftChildIndex],tree[rightChildIndex])){
//         //check if children are leafs and then check left child then right child. if both pass then root must be changed.
//         if(childIsLeaf(rightChildIndex,tree)){
//           return [rightChildIndex,tree[index]-tree[leftChildIndex]];
//         }else if(!checkChildren(tree[leftChildIndex],tree[1+2*leftChildIndex],tree[2+2*leftChildIndex])){
//           return [leftChildIndex,tree[index]-tree[rightChildIndex]];
//         }else if(!checkChildren(tree[rightChildIndex],tree[1+2*rightChildIndex],tree[2+2*rightChildIndex])){
//           return [rightChildIndex,tree[index]-tree[leftChildIndex]];
//         }else{
//           return [index,tree[leftChildIndex]+tree[rightChildIndex]];
//         }
//       }
//     }
//     return "No wrong nodes....or broken code";//Wow I had this in my for loop....
//   }
  
//   function checkChildren(parent,left,right){
//     if((left+right)==parent){
//       return true;
//     }else{
//       return false;
//     }
//   }
  
//   function childIsLeaf(leafIndex,tree){
//       console.log(tree[leafIndex] +" "+tree[2+2*leafIndex])
//       if(tree[2+2*leafIndex]==undefined){
//         return true;
//       }else{
//         return false;
//       }
//   }

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// function narcissistic(value) {
//     let numStr = `${value}`;
//     let numNarc = 0;
//     for(let i=0;i<numStr.length;i++){
//       numNarc += Math.pow(Number(numStr[i]),numStr.length)
//     }
//     return numNarc == value ? true:false;
// }


//clever answer that I was thinking of but didn't do.
// function narcissistic( value ) {
//     return ('' + value).split('').reduce(function(p, c){
//       return p + Math.pow(c, ('' + value).length)
//       }, 0) == value;
//   }