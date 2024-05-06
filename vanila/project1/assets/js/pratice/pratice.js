


// let sentence = "I am currently learning new technologyies";

// console.log(sentence.slice(4, 14));

// console.log(sentence.split(" "));
// console.log(sentence.substring(4, 14));
// console.log(sentence.substr(4));

// let x = 5;

// let res = x === 1 ? "one" : x === 2 ? "two" : x === 3 ? "three" : x === 4 ? "four" : "five";
// console.log(res);

// xyz = 5;

// var xyz;
// console.log(xyz);

// function pyramid(rows) {
//     for (let j = rows; j >= 1; j--) {
//         let row = "";
//         for (let i = 1; i <= rows - j; i++) {
//             row += " ";
//         }

//         for (let i = 0; i < j * 2 - 1; i++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }

// pyramid(5);

// function regularPyramid(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let row = "";
//         for (let j = 1; j <= rows - i; j++) {
//             row += " ";
//         }
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }

// regularPyramid(5);
// 0, -0, "", false, undefined, null, NaN
// if(NaN) {
//     console.log("If block");
// }
// else {
//     console.log("Else block");
// }

// if( "23" == 23) {
//     console.log("True");
// }else {
//     console.log("False");
// }

// const person = {
//     name: "Selim",
//     gf: "Taskin"
// }

// const device = {
//     name: "Samsung",
//     qty: 1
// }

// const newPerson = person;

// if(typeof person === typeof device) {
//     console.log("If block");
//     console.log(newPerson);
// }else {
//     console.log("Else block");
// }

// function msgResult(arg1, arg2) {
//     return this.name+" is "+arg1+" "+arg2;
// }

// let person1 = {name: "Selim Reza"};
// let result = msgResult.apply(person1, ["learner", "student"]);
// console.log(result);

// function display(country) {
//     return `${this.name} and country is : ${country}`;
// }

// const monitor = {
//     display: function(country) {
//         return `${this.name} and country is : ${country}`;    
//     }
// }
// const person1 = { name: "Selim Reza"}

// // let result = display.call(person1, "Bangladesh");
// let result = monitor.display.call(person1, "Bangladesh");
// console.log(result);

// let entityObj = { name: "Selim Reza", occupation: "software developer" };

// function displayEntity(arg1, arg2) {
//     console.log(`${this.name} is a ${this.occupation}. \nHe is from ${arg1} which is a district of ${arg2} division.`);
// }
// displayEntity.apply(entityObj, ["Chapai nawabgonj", "Rajshahi"]);

// let personObj = { name: "Selim Reza", occupation: "Job seeker" };

// function displayData() {
//     console.log(`${this.name} is a ${this.occupation}`);
// }

// displayData.bind(personObj)();

// let personObj = { name: "Selim Reza" };

// function displayData() {
//     console.log(`${this.name}`);
// }
// displayData.call(personObj);
// setTimeout(() => {
//     displayData.call(personObj);
// }, 2000);
// displayData.apply(personObj);
// setTimeout(() => {
//     displayData.apply(personObj);
// }, 2000);
// setTimeout(displayData.apply(personObj), 2000);

// displayData.bind(personObj)();
// setTimeout(displayData.bind(personObj), 2000);

// function add (a) {
//     return function(b){
//       return a + b;
//     }
//   }

//   // let add1 = add(3);
//   // let res = add1(2);
//   console.log(add(2)(3));

// var y = 24;

// function favFunction() {
//   var x = 667;
//   var anotherFavFunction = function () {
//     console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
//   }

//   var yetAnotherFavFunction = function () {
//     console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
//   }

//   anotherFavFunction();
//   yetAnotherFavFunction();
// }
// favFunction();

// function outerFun() {
//   let num = 101;
//   return function() {
//     return num;
//   }
// }

// let funRes = outerFun();

// console.log(funRes());

// function memoizedAddTo256() {
//   // var cache = {};

//   return function (num) {
//     if (num in cache) {
//       console.log("cached value");
//       return cache[num]
//     }
//     else {
//       cache[num] = num + 256;
//       console.log("Calculated value");
//       return cache[num];
//     }
//   }
// }
// var memoizedFunc = memoizedAddTo256();

// memoizedFunc(21); 
// memoizedFunc(20);
// memoizedFunc(21); 

// const person = { name: "Selim Reza", occupation : "Learner", location: "Dhaka", university: "DIU" };

// for( let att in person ) {
//   console.log(person[att]);
// }
// Object.entries(person).forEach(([key, value]) => {
//   console.log(`${key} : ${value}`);
// })

// function myFunc(number) {
//   if (number > 0) {
//     console.log("Number: "+number);
//     number--;
//     myFunc(number);
//   }
// }

// myFunc(5);


function pyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 0; j <= rows - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

pyramid(5);