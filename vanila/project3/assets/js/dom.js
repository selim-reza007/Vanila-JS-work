

// const rootDiv = document.createElement("div");
// let p1 = `<p>This is a p tag from JavaScript</p>`;
// rootDiv.innerHTML = p1;
// let p2 = `<p>Another P tag</p>`;
// rootDiv.insertAdjacentHTML("beforeend", p2);
// let p3 = document.createElement("p");
// p3.textContent = "New P tag text content";
// rootDiv.appendChild(p3);
// let p4 = document.createElement("p");
// let p5 = document.createElement("p");
// let p6 = document.createElement("p");
// p4.textContent = "Some content for p4";
// p5.textContent = "This is p5";
// p6.textContent = "p6 content";
// const childListE = [p4, p5, p6];
// rootDiv.append(...childListE)
// document.body.appendChild(rootDiv);

// // p4.remove();
// // rootDiv.removeChild(p4);

const liItem = document.createElement("li");
liItem.textContent = "Dynamic Content";
document.body.firstElementChild.appendChild(liItem);

liItem.addEventListener("click", function () {
    this.classList.toggle("my-class");
});