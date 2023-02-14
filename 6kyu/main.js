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

class VersionManager{ //Figured out error handling and other issues
    constructor(intialVer = "0.0.1"){
    this._initialVer = intialVer;
    this._version = [this.formattInput()];
  }
  
  formattInput(){
    if(this._initialVer == ''|| this._initialVer == undefined){
      return ['0','0','1'];
    }
    let numDecimals = this._initialVer.match(/[.]/g)
    if(numDecimals== null){
      this._initialVer += ".0.0";
    }else if(numDecimals.length==1){
      this._initialVer += ".0"
    }
    let versionArr = this._initialVer.split('.').splice(0,3);
    //console.log(versionArr) testing for why errors not working. needed to throw new Error() not just exception
    versionArr.forEach(value => {
      if(Number.isNaN(Number(value))){
        console.log("error")
        throw new Error("Error occured while parsing version!");
      }
    });
    return versionArr;
  }  
  major(){
    this._version.push([`${Number(this._version[this._version.length-1][0])+1}`,'0','0']);
    return this;
    }
  minor(){
    this._version.push([this._version[this._version.length-1][0],`${Number(this._version[this._version.length-1][1])+1}`,0]);
    return this;
    }
  patch(){
    this._version.push([this._version[this._version.length-1][0],this._version[this._version.length-1][1],`${Number(this._version[this._version.length-1][2])+1}`]);
    return this;
  }
  
  rollback(){
    if(this._version[0] == undefined){
      throw new Error("Cannot rollback!")
    }else if(this._version.length == 1){
      throw new Error ("Cannot rollback!")
    }else{
      this._version.pop()
      return this
    }
   }
  
  release(){
    return this._version[this._version.length-1].join('.');
  }
}

const vm =  (initial) => { return new VersionManager(initial);}
