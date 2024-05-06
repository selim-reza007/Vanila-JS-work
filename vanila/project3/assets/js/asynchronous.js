
// let fun1 = () => {
//     setTimeout(() => {
//         console.log("Solving after 1s");
//     }, 1000);
// };

// let fun2 = (fun) => {
//     setTimeout(() => {
//         console.log("Solving ater 1.5s");
//         fun();
//     }, 1500);
// }

// let fun3 = (fun) => {
//     setTimeout(() => {
//         console.log("Solving ater 2s");
//         fun();
//     }, 2000);
// }

// // async function myAsunc() {
// //     fun2();
// //     fun1();
// // }
// // myAsunc();

// fun3(() => {
//     fun2(() => {
//         fun1();
//     })
// });

// const isMeeting = false;
// const isApproval = false;

// function myMeeting() {
//     return new Promise((resolve, reject) => {
//         if (!isMeeting) {

//             setTimeout(() => {
//                 resolve();
//             }, 1000);
//         } else {
//             reject(new Error("Meeting already scheduled!"))
//         }
//     })
// }

// function approval() {
//     if (!isApproval) {
//         return Promise.resolve("Permision is now granteed");
//     } else {
//         return Promise.reject("Permission is already guranteed!");
//     }
// }

// myMeeting()
//     .then(approval)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.message))

// // async function meetingDetails() {
// //     console.log(await myMeeting());
// //     console.log(await approval());
// // }

// // meetingDetails();

// function multiply(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c;
//         }
//     }
// }

// let res = multiply(2)(3)(4);
// console.log(res);

// 'use strict';

// let isDrinkableWater = false;
// let isTimeCompleted = true;

// function waterBoil() {
//     return new Promise((resolve, reject) => {
//         if (!isDrinkableWater) {
//             resolve();
//         } else {
//             reject(new Error("No need to boild water."))
//         }
//     })
// }

// function timeCount() {
//     return new Promise((resolve, reject) => {
//         if (isTimeCompleted) {
//             resolve();
//         } else {
//             reject(new Error("No, the required time is not completed yet!"))
//         }
//     })
// }

// function offStove() {
//     return Promise.resolve("Turn of the stove");
// }

// waterBoil()
//     .then(timeCount)
//     .then(offStove)
//     .then(response => console.log(response))
//     .catch(error => console.log(error.message))

// (async function () {
//     try {
//         await waterBoil();
//         await timeCount();
//         let res = await offStove();
//         console.log(res);
//     } catch (error) {
//         console.log(error.message);
//     }
// })()



