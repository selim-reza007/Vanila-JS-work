


const homeObj = {
    name: "Abdus Salam Villa",
    vehicle: ["Bike", "Car", "Cycle"],
    person: {
        personName: "Abdus Salam",
        age: 65,
        child: ["Child A", "Child B", "Child C", "Child D"],
        display: function () {
            console.log(`${this}`);
        }
    }
}

// homeObj.person.display();

// const fruits = ["Apple", "Banana", "Orange", "Mango", "Watermelon"];

// fruits.forEach(function (item) {
//     console.log(item);
// });

const busket = {
    name: "Plustic Busket",
    fruits: ["Apple", "Banana", "Orange", "Mango", "Watermelon"],
    display: function () {
        // console.log(this);
        this.fruits.forEach((i) => {
            console.log(`${this.name} - ${i}`);
        })
    }
}

// busket.display();
//0,"", 
//0, "", NaN, null, undefined, false
//falsy value
// if (false) {
//     console.log("If block");
// } else {
//     console.log("Else block");
// }



//array find()
// const num = [5, 10, 15, 20, 25, 30];
// let res = num.find((cValue, cIndex, arr) => cValue > 20);
// console.log(res);


//array.prototype.findIndex()

// let result = num.findIndex((cValue, cIndex, arr) => cValue > 20);
// console.log(result);

// let resultOfFind = num.find(cValue => cValue > 20);
// console.log(resultOfFind);
// let resultOfIndex = num.findIndex(cValue => cValue > 10);
// console.log(resultOfIndex);



//array.prototype.filter()
// let filterResult = num.filter(cValue => cValue > 15);
// console.log(filterResult);
const friends = ["Sagor A", "Romim R", "Tofazzal F", "Mnsabbir F", "Real Ramjan R"];
// let realFrieds = friends.filter(cValue => cValue.includes("R"));
// let fraudFrieds = friends.filter(cValue => cValue.includes("F"));
// console.log(`Real friend list : ${realFrieds}`);
// console.log(`Froud friend list : ${fraudFrieds}`);


//array.prototype.slice()
// const num = [5, 10, 15, 20, 25, 30];
// let slicingArray = num.slice(3)
// console.log(slicingArray);
// console.log(num);


//array.prototype.splice()
// console.log(num);
// let spliceResult = num.splice(3, 0, 101, 202, 303);
// console.log(spliceResult);
// console.log(num);

// num.map((cValue, cIndex, arr) => {
//     // console.log(cValue*2);
// });

// const myObj = {
//     num: [1, 3, 5, 7, 9, 11],
//     stringArr: ["Pen", "Apple", "Ball", "Cat", "Doll"]
// }

// myObj.num.forEach(val => console.log(val * 2));
const num = [5, 1, 5, 2, 01];

// let result = num.reduce((previousVal, currentVal) => {
//     return previousVal = previousVal + currentVal;
// });

// console.log(result);


//spread operator
// const myArray = [...num, 44, 55, 66];
// console.log(myArray);



//Destructuring
// const person = {
//     fName: "Selim",
//     lName: "Reza",
//     education: "B.Sc Honors",
//     university: "Daffodil International University"
// }

// const { fName, lName, education, university } = person;

// console.log(`${fName} ${lName}, ${education}, ${university}`);

// const [a, b, c, d, e = 505] = num;
// console.log(`${a} ${b} ${c} ${d} ${e}`);



