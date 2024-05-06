


// const mySet1 = new Set([1, 3, 5, 7, 9, 11]);
// const mySet2 = new Set([2, 3, 6, 8, 9, 10]);

// const unionSet = new Set([...mySet1, ...mySet2]);
// console.log(unionSet);

// const intersectionSet = new Set([...mySet1].filter(x => mySet2.has(x)));
// console.log(intersectionSet);

// let word = "Bangladesh is my mother is land";
// console.log(10n + "5");

// const myArr1 = [5, 9, 6, 2, 3, 8, 1, 2, 22];
// console.log(myArr1.concat(["s", "e", "l", "i", "m"]));
// const newArr = myArr1.entries();


// console.log(myArr1.copyWithin(1, 2, 3));
// console.log(myArr1.unshift(101));
// myArr1.sort((a, b) => a - b);
// console.log(myArr1);
// myArr1.reverse();
// console.log(myArr1);



// let strWord = "Selim Reza a software engineer!";
// console.log(strWord.slice(1, 3));
// console.log(strWord);
// let myNum = Math.random() * 10;
// console.log(myNum.toFixed());

// let x = "5";
// let y = "2";
// let z = x - y;
// console.log(z);

// class Human {
//     constructor(name, occupation) {
//         this.name = name;
//         this.occupation = occupation;
//     }

//     display() {
//         console.log(this.name, this.occupation);
//     }
// }

// const selim = new Human("Selim Reza", "Software engineer");
// selim.display();


//working with sting methods

// let myString = "Hello, this am is me Selim Reza. I am from Bangladesh";
// console.log(myString);
// console.log(myString.substr(15, 5));
// console.log(myString.substring(15, 20));
// console.log(myString.slice(15, 20));
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString.replace("Hello", "Hi"));
// console.log(myString.split(" "));
// console.log(myString.lastIndexOf("am"));
// console.log(myString.search("Selim Reza"));
// console.log(myString.indexOf("Selim Reza", 22));
// console.log(myString.match("Selim Reza"));
// console.log(myString.startsWith("Selim", 21)); //true
// console.log(myString.endsWith("Selim Reza", 31)); //true


//working with number and Math methods

// let num1 = 50.125;
// console.log(num1.toFixed(3));
// console.log(num1.toPrecision(5));
// const numArr = [10, 11, 12, 13, 14, 101, 15, 16, 20, 25, 18];
// console.log(numArr.slice(5, 8));
// // numArr.splice(5, 0, 111)
// console.log(numArr.indexOf(15));
// console.log(numArr.lastIndexOf(15, 8));
// console.log(numArr.findLast(x => x > 20));
// let filteredResult = numArr.filter(a => a > 18);
// console.log(Math.max.apply(null, numArr));
// numArr.sort((a, b) => a - b);
// console.log(numArr);


//working with js Date object

// let date = new Date();
// date.setFullYear(2011, 6, 22);
// // console.log(date.getTime());
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());
// console.log(date.getUTCDate());
// console.log(date.getVarDate);
// console.log(date.toDateString());
// console.log(date.toJSON());
// console.log(date.toTimeString());
// console.log(date.valueOf());



//working with Set

// const mySet = new Set([10, 20, 30, 5, 105, 15, 25, 40, 45, 50, 60, 70, 55]);
// const mySet1 = new Set([10, 20, 60, 70, 55]);
// const mySet2 = new Set([10, 20, 30, 76, 65]);
// const convertedArray = Array.from(mySet);
// // console.log(convertedArray);
// console.log("Biggest number : " + Math.max.apply(null, [...mySet]));
// const unionVal = new Set([...mySet1, ...mySet2]);
// console.log(unionVal);
// console.log([...mySet1].filter(a => mySet2.has(a)));



// const person = ["Selim", "Sagor", "Romim"];

// const [a, b, c] = person;
// console.log(`${a}, ${b}, ${c}`);


