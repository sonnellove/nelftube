
// // console.log('hey');
// ////-------------------------------------------------------------
// var a;
// var b = 2;
// console.log(a);
// a = 7;
// b = a;
// console.log(a);
// ////-------------------------------------------------------------
// // initialize the value
// var a = 5;
// var b = 10;
// var c ='i ma string'

// a = a + 1;
// b = b + 5;
// c = c + "i am string"
////-------------------------------------------------------------
// case_sensitive
////-------------------------------------------------------------
// var sum = 10 + 10;
// console.log(sum);
// ////-------------------------------------------------------------
// // increment
// var myVar = 87;
// myVar++;
// // or
// myVar = myVar + 1;
// ////-------------------------------------------------------------
// // decrement
// var myVar = 11;
// myVar = myVar - 1;
// // or
// myVar--;
// ////-------------------------------------------------------------
// // remainder
// var remainder;
// remainder = 11 % 3;
////-------------------------------------------------------------
// a = a + 12;
// b = 9 + b;
// c = c + 7;
// // or
// a += 12;
// b += 9;
// c += 7;
////-------------------------------------------------------------
// var myStr = "\"double qoute\""
// console.log(myStr);
// \n newline
// \r carriege return
// \b backspace
// \f form feed
////-------------------------------------------------------------
// var myStr = 'this is first ' + "this is second";
// console.log(myStr);

////-------------------------------------------------------------
// var ourStr = "I come first. ";
// ourStr += "I come second. ";
////-------------------------------------------------------------
// var ourName = "freeCodeCamp";
// var ourStr = "Hello, our name is " + ourName + ",how are you";
// console.log(ourStr);
////-------------------------------------------------------------
// var anAdjective = 'awesome! ';
// var ourStr = " freeCodeCamp ";
// ourStr += anAdjective;
// console.log(ourStr);

////-------------------------------------------------------------
// var firstnameLength = 0;
// var firstName = "Ada";
// firstnameLenght = firstName.length;
// console.log(firstnameLenght);

////-------------------------------------------------------------
// var firstLetterOfFirstname = "";
// var firstName = 'Ada'
// firstLetterOfFirstname = firstName[0];
// console.log(firstLetterOfFirstname);

////-------------------------------------------------------------
// var myStr = "jello world";
// myStr = "hello world";
////-------------------------------------------------------------

// var lastName = "Lovelace";
// var LastLetterOfLastName = lastName[lastName.length - 1];
// console.log(LastLetterOfLastName);

////-------------------------------------------------------------
// function wordBlanks(myNoun,myAdjective,myVerd,myAdverd){
//     var result = "";
//     result += "The "+ myAdjective + " " + myNoun +" "+ myVerd+ " to the store " + myAdverd;
//     return result;
// }
// console.log(wordBlanks("dog","big","ran","quickly"));
////-------------------------------------------------------------
// var ourArray = ["Jonh",23];
////-------------------------------------------------------------
// var myArray = [["Bulls",23],["White Sox",45]];
////-------------------------------------------------------------
// var myArray = [50,23,67];
// var myData = myArray[1];
// console.log(myData);
////-------------------------------------------------------------
// var myArray = [12,65,88];
// myArray[1] = 46;
// console.log(myArray);
////-------------------------------------------------------------
// var myArray = [[1,2,3],[5,6,4],[6,2,8],[[10,43,78],34,74]];
// var myData = myArray[3][0];
// console.log(myData);
////-------------------------------------------------------------
// var myArray = [["John,23"],["cat",2]];
// myArray.push(["PUSH",6]);
// console.log(myArray);
////-------------------------------------------------------------
// var myArray = [["John,23"],["cat",2]];
// var removedFromMyArray = myArray.pop();
// console.log(myArray);
////-------------------------------------------------------------
//  var myArray = [["John,23"],["cat",2]];
//  myArray.shift();
//  console.log(myArray);
//  myArray.unshift("Paul",35);
//  console.log(myArray);
////-------------------------------------------------------------
// var myList = [["cereal",3],["milk",2],["bananas",3]];
////-------------------------------------------------------------
// function ourReusableFunctions(){
//     console.log("Hey,world");
// }
// ourReusableFunctions();
////-------------------------------------------------------------
// function ourReusableFunctions(a, b) {
//     console.log(a - b);
// }
// ourReusableFunctions(10, 86);
// console.log(ourReusableFunctions);
////-------------------------------------------------------------
// var myGlobal = 10+"\n";
// function fun1(){
//     oopsGlobal = 5;
// }
// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += " myGlobal:  " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//         output += " oopsGlobal:  " + oopsGlobal;
//     }
//     console.log(output);
// }
// fun1();
// fun2();
////-------------------------------------------------------------
// function myLocalScope(){
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope();

////-------------------------------------------------------------
// var outerWear = "T-Shirt";
// function myOutfit(){

//     var outerWear ="swearter"
//     return outerWear;
// }
// console.log(myOutfit());
// console.log(outerWear);
////-------------------------------------------------------------
// function minusSeven(num){
//     return num - 7;
// }
// console.log(minusSeven(10));

// function timesFive(num){
//     return num * 5;
// }
// console.log(timesFive(5));

////-------------------------------------------------------------
// var sum = 0;
// function addThree(){
//     sum += 3;

// }
// console.log();
// undefined
////-------------------------------------------------------------
// var changed =0;
// function change(num){
//     return(num+5)/3;
// }
// changed = change(7);
// console.log(changed);


////-------------------------------------------------------------
// function nextInLine(arr,item){
//     arr.push(item);
//     return arr.shift();
// }
// var testArr = [1,2,3,4,5];
// console.log("Before: "+ JSON.stringify(testArr));
// console.log((nextInLine(testArr,6)));
// console.log("After: "+ JSON.stringify(testArr));

////-------------------------------------------------------------
// function ourTrueOrFalse(isItTrue){
//     if(isItTrue){
//         return "yes, it's true";
//     }
//     return "No, it's false";
// }
// console.log(ourTrueOrFalse(true));
////-------------------------------------------------------------
// function testEqual(val){
//     if(val == 12){
//         return "Equal";
//     }
//     return "Not Equal";
// }
// console.log(testEqual(12));
////-------------------------------------------------------------
// function testStrict(val){
//     if(val === 7){
//         return "Equal";
//     }
//     return "Not Equal";
// }
// var answer = testStrict(10);
// console.log(answer);
////-------------------------------------------------------------
// function testStrict(a,b){
//     if(a !== b){
//         return "Equal";
//     }
//     return "Not Equal";
// }
// var answer = testStrict(5,8);
// console.log(answer);
////-------------------------------------------------------------
// function testLogicalAnd(val){
// if (val <= 50 && val >= 25){
//     return "Yes";
// }
//     return "No";
// }
// console.log(testLogicalAnd(26));

////-------------------------------------------------------------
// function testElse(val){
//     if(val > 5){
//         result = "Bigger than 5";
//     }else{
//         result = "5 or Smaller";
//     }
//     return result;
// }
// console.log(testElse(7));

////-------------------------------------------------------------
// function testElseIf(val) {
//     if (val >= 90) {
//         return " Greater than 90";
//     } else if (val >= 80) {
//         return "Greater than 70";
//     } else if (val >=70 ) {
//         return "Smaller than 70";
//     } else {
//         return "Failure";
//     }
// }
// console.log(testElseIf(75));

////-------------------------------------------------------------
// var names = ["hole","eagle","birdie","par","bogey","double","go home"];
// function golfScore(par,stroke){
//     if(stroke == 1){
//         return names[0]
//     }else if(stroke <= par - 2){
//         return names[1]
//     }else if(stroke == par){
//         return names[2]
//     }else if(stroke == par + 1){
//         return names[3]
//     }else if(stroke == par + 1){
//         return names[4]
//     }else if(stroke == par + 2){
//         return names[5]
//     }else if(stroke >= par + 3){
//         return names[6]
//     }
// }
// console.log(golfScore(2,3));

////-------------------------------------------------------------
// function caseInSwitch(val) {
//     var answer = "";
//     switch (val) {
//         case 1:
//         case "alpha":
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             answer = "alpha";
//             break;
//         case "unkwon":
//             answer = "beta";
//             break;
//     }
//     return answer;
// }
// console.log(caseInSwitch("unkwon"));

////-------------------------------------------------------------
// function isLess(a,b){
//     return a < b;
// }
// console.log(isLess(10,5));

////-------------------------------------------------------------
// function abTest(a,b){
// if( a < 0 || b < 0 ){
//     return undefined;
// }

// return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
// }
// console.log(abTest(-1,0));

////-------------------------------------------------------------
// var count = 0;

// function cc(card) {
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }
//     var holdbet = 'Hold'
//     if (count > 0) {
//         holtbet = 'Bet'
//     }
//     return count + " " + holdbet;
// }
// cc(2);
// cc("K");
// cc(10);
// cc("K");
// cc('A');
// console.log(cc(4));

////-------------------------------------------------------------
// var ourDog = {
//     "name": "Camper",
//     "legs four": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };
// var nameValue = ourDog.name;
// var legsValue = ourDog["legs four"];
//  console.log(nameValue);
//  console.log(legsValue);

////-------------------------------------------------------------
// var testObj = {
//     12:"Namath",
//     16:"Montana"
// };
// var playerNumber = 16;
// var player = testObj[playerNumber];
// console.log(player);

////----------------------updating---------------------------------------
// var myDog = {
//     "name": "Camper",
//     "legs four": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };
// myDog.name = "Dave";
// console.log(myDog);
////------------------------Add New Properties-------------------------------------
// var myDog = {
//     "name": "Camper",
//     "legs four": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// myDog["Bark"]='woof!';
// console.log(myDog);
////----------------------------Dellete Properties From Object---------------------------------
// var myDog = {
//     "name": "Camper",
//     "legs four": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// delete myDog["legs four"];
// console.log(myDog);
////----------------------------------Using Object for Lookups---------------------------
// function phoneticLookup(val){
//     var result = "";

//     var lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie":"Chicago"
//     }
//     result = lookup[val];
//     return result;
// }
// console.log(phoneticLookup("charlie"));

////-----------------------------------------Testing OBject for Properties--------------------
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp) {
//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];

//     } else {
//         return 'Not found'
//     }
// }
// console.log(checkObj("gift"));

////---------------------------------Manipulating Complex Objects----------------------------
// var myMusic =[
//     {
//         "artist":"Billy joel",
//         "title":"Piano Man",
//         "release_year":1973,
//         "formats":[
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold":"True"
//     },
//     {
//         "artist":"James",
//         "title":"Composer",
//         "release_year":1973,
//         "formats":[
//             "writer",
//             "speaker",
//             "LP"
//         ],
//     }
// ]
// console.log(myMusic);

////--------------------------------------Accessing Nested Object-----------------------
// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

////--------------------------------------Accessing Nested Arrays-----------------------
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp) {
//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];

//     } else {
//         return 'Not found'
//     }
// }
// console.log(checkObj("gift"));

////---------------------------------Manipulating Complex Objects----------------------------
// var myMusic = [{
//         "artist": "Billy joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": "True"
//     },
//     {
//         "artist": "James",
//         "title": "Composer",
//         "release_year": 1973,
//         "formats": [
//             "writer",
//             "speaker",
//             "LP"
//         ],
//     }
// ]
// var secondTree = myMusic[1].formats[1]
// console.log(secondTree);
////-------------------------------Record Collection------------------------------
// var collection = {
//     "2468": {
//         "artist": "Billy joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": "True"
//     },
//     "5439": {
//         "artist":"",
//         "title": "Composer",
//         "release_year": 1973,
//         "formats": [
//             "writer",
//             "speaker",
//             "LP"
//         ],
//     }
// }
// var CollectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id,prop,value){
//     if (value === ""){
//         delete collection[id][prop];
//     }else if (prop==="tracks"){
//         collection[id][prop]=collection[id][prop]|| [];
//         collection[id][prop].push(value);
//     }else{
//         collection[id][prop]= value;
//     }
//     return collection
// }
// updateRecords(2468,"tracks","test");
// console.log(updateRecords(5439,"artist","ABBA"));
////----------------------------Iterate with While Loops---------------------------------
// var myArray = [];

// var i =0;
// while(i<5){
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);

////---------------------------------------Iterate with for Loops----------------------
// var ourArray = [];
// for (var i = 0; i < 6; i++) {
//     ourArray.push(i);
// }
// var myArray = [];
// console.log(ourArray);
////-------------------------------------Iterate Odd Numbers with a for Loop-------------
// var ourArray = [];
// for (var i = 0; i < 6; i += 2) {
//     ourArray.push(i);
// }
// var myArray = [];
// console.log(ourArray);
////-------------------------------------------------------------
// var ourArray = [7,1,6,8,0,5,];
// var ourTotal = 0;
// for (var i = 0; i < ourArray.length; i++) {
//     ourTotal +=ourArray[i];
// }

// console.log(ourTotal);
////-------------------------------------------Nesting for loops-----------------
// function multiplyAll(arr) {
//     var product = 1;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }
//     return product;
// }
// var product = multiplyAll([
//     [1, 2],
//     [2, 4],
//     [5, 6, 9]
// ]);
// console.log(product);


////---------------------------------------Iterate with Do while loops----------------------
// var myArray = [];
// var i =10;

// do{
//     myArray.push(i);
//     i++;
// }while(i<5)
// console.log(i,myArray);

////--------------------------------------------------Profile Lookup-----------
// var contacts =[
//     {
//         "firstname":"Akira",
//         "lastname":"Laine",
//         "number":"09123",
//         "likes":["watching","condig","bronie Points"]
//     },   {
//         "firstname":"jame",
//         "lastname":"shera",
//         "number":"091237890",
//         "likes":["games","condig","bronie Points"]
//     },   {
//         "firstname":"leo",
//         "lastname":"ezra",
//         "number":"09123456",
//         "likes":["pizza","camping","bronie Points"]
//     },
// ];
// function lookupProfile(name,prop){
//     for(var i = 0; i < contacts.length;i++){ 
//         if(contacts[i].firstname === name){
// return contacts[i][prop] || "No such property";
//         }
//     }
//     return 'No such contact'
// }
// var data = lookupProfile("leo","number");
// console.log(data);

////------------------------------------------Generate Random Fraction-------------------
// function ranmdomFraction(){
//     return Math.random();
// }
// console.log(ranmdomFraction);

////----------------------------------------------Generate Random whole number---------------
// var randomNumberBetween0and19 = Math.floor(Math.random()*20);
// function randomWholeNum(){
//     return Math.floor(Math.random()*10);
// }
// console.log(randomWholeNum());
////-------------------------------------------------Generate Random Whole Number within a Range------------
// function ourRandomRange(ourMin, ourMax) {
//     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }

// console.log(ourRandomRange(1, 9));

////----------------------------------------------------convertToInteger---------
// function convertToInteger(str){
//     return parseInt(str);
// }
// console.log(convertToInteger(98));

////-------------------------------------------------------Use the parseInt Function with a Radix----convert into decimal--
// function convertToInteger(str){
// return parseInt(str,2);
// }
// console.log(convertToInteger("11111111"));
////------------------------------------------------Use the Conditional (Ternary) Operator-------------
// function checkEqual(a,b){
//     if a===b ? true : false;
// }
// console.log(checkEqual(1,2));

////-------------------------------------------------------Use Multiple Condition (ternary) Operation------
// function checksign(num){
//     return num > 0 ? 'positive': num<0?"negative":'zero'
// }
// console.log(checksign(0));

////---------------------------------------------------------Difference Between the var and let Keywords----
// let catName ="Quincy";
// let qoute;
// catName = "Bea";
// function catTalk(){
//     "use strick";
// catName="Oliver";
// qoute = catName + "says Meow";
// }
// console.log(catTalk());

////-------------------------------------------------------compare scope var and let------
// function checkScope(){
//     "use strict";
//    let i = "function scope";
//     if (true){
//         let i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("function scope i is: ", i);
//     return i;
// }
// checkScope();
////------------------------------------------------------Declare a Read-only Variable with the const keyword-----const for not declare twice--
// function printManyTimes(str) {
//     "use strict";
//     const sentence = str + "is cool";

//     for(let i = 0;0<str.length;i+=2){
//         console.log(sentence);

//     }
// }
// printManyTimes("freedomCamp")
////--------------------------------------------------------Mutate an Array deckared with condt-----
// const s=[5,4,3];
// function editInPlace(){
//     "use trict";
//     //s=[2,5,4];
// s[0]=2;
// s[1]=3;
// s[2]=4;
// }
// console.log(s);

////--------------------------------------------------------Prevent Object Mutation-----
// function freezeObj(){
//     "use strict";
//     const MATH_CONSTANTS ={
//         PI:3.14
//     };

//     Object.freeze(MATH_CONSTANTS);

//     try{
//         MATH_CONSTANTS.PI=99;
//     }catch(ex){
//         console.log(ex);
//     }
//    return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();
// console.log(PI);

////--------------------------------------------------------Use Arrow Function to write Concise Anonymous Functions-----
// var magic = function(){
//     return new Date();
// };

// const magic = () => new Date();

////---------------------------------------------------------Write Arrow Functions with Parameters----
// var myConcat = (arr1,arr2) => arr2.concat(arr1);
// console.log(myConcat([1,2],[3,4,5]));
////---------------------------------------------------------Write Higher Order arrow functions----
// const realNummberArray =[4,5.4,-9.8,3.14,42,6,8,34,-2];
// const squarelist = (arr) =>{
//     const squaredIntegers=arr.filter(num => Number.isInteger(num)&& num > 0).map(x =>x*x);
//     return squaredIntegers;
// };
// const squaredIntegers = squarelist(realNummberArray);
// console.log(squaredIntegers);

////-------------------------------------------------------Write Higher Order arrow functions------
// const increment = (function(){
//     return function increment(number,value=1){
//         return number+value;
//     };
// })();
// console.log(increment(5,2));
// console.log(increment(5));


////---------------------------------------------------------use the rest operator with function parameter----
// const sum =(function(){
//     return function sum(...args){
//         return args.reduce((a,b)=>a+b,0);

//     };
// })();
// console.log(sum(1,2,3,4));

////-------------------------------------------------------use the spread operator to evaluate array in-place------
// const arr1 = ['jan','feb','mar',"apr","may"];
// let arr2;
// (function(){
//     arr2=arr1;//---or[...arr1]
//     arr1[0]='potato'
// })();
// console.log(arr2);

////--------------------------------------------------------Use Destructing Assignment to Assign Variables from Objects-----
// var voxel = {x:3.6,y:7.4,z:6.54};

// var x = voxel.x;
// var y = voxel.y;
// var z =voxel.z;

// const AVG_TEMPARATURES ={
//     today: 77.5,
//     tomorrow:78
// };
// function getTempofTmrw(avgTemperatures){
//     "use strict";
//     const {tomorrow: tempofTomorow}=avgTemperatures;
//     return tempofTomorow;
// }
// console.log(getTempofTmrw(AVG_TEMPARATURES));


////--------------------------------------------------------Use Destructuring assignment with nested objects-----
// const LOCAL_FORECAST={
//     today:{min:72,max:83},
//     tomorrow:{min:73.3,max:82.6}
// };
// function getMaxOfTmrw(forecast){
//     "use strict";
//     const {tomorrow: {max:maxOfTomorrow} } =forecast;
//     return maxOfTomorrow;
// }
// console.log(getMaxOfTmrw(LOCAL_FORECAST));

////--------------------------------------------------------Use Destructing Assignment to Assign Variables from Arrays-----
// const [z,x, ,y]=[1,2,3,4,5,6];
// console.log(z,x,y);
// let a = 8,b = 6;
// (()=>{
//     "use strick";
//     [a,b]=[b,a];
// })
// console.log(a);
// console.log(b);


////-------------------------------------------------------Use Destructing Assignment with the rest operature------
// const source =[1,2,3,4,5,6];
// function removeFirsttwo(list){
//     const[ , , ...arr]=list;
//     return arr;
// }
// const arr = removeFirsttwo(source);
// console.log(arr);
// console.log(source);


////--------------------------------------------------------Use Destructing Assignment to pass an object as function's parameter-----
// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// };
// const half = (function () {
//     return function half({max,min}) {
//          return (max + min) / 2.0;
//     };
// })();
// console.log(stats);
// console.log(half(stats));
////----------------------------------------------------------create string using template literals---
// const person ={
//     name: "Zodiac Hasbro",
//     age: 56
// };
// const greeting =`Hello, my name is is ${person.name}!
// i am ${person.age} years old.`;
// console.log(greeting);
////-------------------------------------------------------------

// true ? console.log('true') 
// ? console.log('a') : console.log('a') : console.log('false')