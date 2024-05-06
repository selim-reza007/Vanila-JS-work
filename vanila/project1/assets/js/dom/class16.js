



// let div = document.createElement("div");
// let h2 = document.createElement("h2");
// h2.textContent = "Dynamic content";
// div.appendChild(h2);

// let p = `<p>
//     Hello, I am Selim Reza. I am a software engineer. I love this passion.
// </p>`;

// div.insertAdjacentHTML("beforeend", p);
// //document.body.appendChild(div);
// let ullist = document.querySelector("#ulid1");
// document.body.insertBefore(div, ullist);

// let div = document.createElement("div");
// div.innerHTML = `
//     <h2>Some dummy content</h2>
//     <table>
//         <thead>
//             <tr>
//                 <th>
//                     ID
//                 </th>
//                 <th>
//                     Name
//                 </th>
//                 <th>
//                     Short Description
//                 </th>
//                 <th>
//                     Manufacturer
//                 </th>
//                 <th>
//                     status
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>
//                     1
//                 </td>
//                 <td>
//                     Dell Inspirion 3537 i7
//                 </td>
//                 <td>
//                     The product was bought in 2014
//                 </td>
//                 <td>
//                     Dell
//                 </td>
//                 <td>
//                     Operating well
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     2
//                 </td>
//                 <td>
//                     Samsung galaxy m21
//                 </td>
//                 <td>
//                     During Covid-19 situation I bought this device from Priyoshob.com
//                 </td>
//                 <td>
//                     SAMSUNG
//                 </td>
//                 <td>
//                     Operating well
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     3
//                 </td>
//                 <td>
//                     Nokia 105
//                 </td>
//                 <td>
//                     This is a dumb cell phone. I carry this with me
//                 </td>
//                 <td>
//                     Nokia
//                 </td>
//                 <td>
//                     Operating well
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// `;
// let targetElement = document.querySelector("#ulid1");

// document.body.insertBefore(div, targetElement);


let div = document.createElement("div");
let p1 = document.createElement("p");
p1.textContent = "Selim Reza";

p1.style = {
    color: "red",
    fontSize : "40px"
};

let p2 = document.createElement("p");
p2.textContent = "Taskin Tamanna";

let p3 = document.createElement("p");
p3.textContent = "I think I am in love with Taskin";
div.append(p1,p2,p3);

let targetElement = document.querySelector("#ulid1");
document.body.insertBefore(div, targetElement);
