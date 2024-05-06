let emitDiv = document.getElementById("displayDiv");
let alldiv = document.querySelectorAll(".dragDiv");
let pathValueDiv = document.getElementById("clipPathValue");

let v1 = document.getElementById("div1");
let v2 = document.getElementById("div2");
let v3 = document.getElementById("div3");

let a1 = v1.offsetLeft;
let a2 = v1.offsetTop;
let b1 = v2.offsetLeft;
let b2 = v2.offsetTop;
let c1 = v3.offsetLeft;
let c2 = v3.offsetTop;
displayDiv.style.clipPath = `polygon(${a1}px  ${a2}px, ${b1}px  ${b2}px, ${c1}px  ${c2}px)`;

// displayDiv.style.clipPath= `polygon(100px  0px, 0px  200px, 200px 100px)` ;
alldiv.forEach((div) => {

    let x, y;
    let move = (e) => {
        div.style.left = `${e.clientX - x}px`;
        div.style.top = `${e.clientY - y}px`;
        let a1 = v1.offsetLeft;
        a2 = v1.offsetTop;
        b1 = v2.offsetLeft;
        b2 = v2.offsetTop;
        c1 = v3.offsetLeft;
        c2 = v3.offsetTop;
        displayDiv.style.clipPath = `polygon(${a1}px  ${a2}px, ${b1}px  ${b2}px, ${c1}px  ${c2}px)`;
        pathValueDiv.innerText = `clip-Path:polygon(${a1}px  ${a2}px, ${b1}px  ${b2}px, ${c1}px  ${c2}px)`;
        //   console.log(x,":",y,"from move fn");
    };
    div.addEventListener("mousedown", (e) => {
        x = e.clientX - div.offsetLeft;
        y = e.clientY - div.offsetTop;

        //    console.log(x,":",y,);
        document.addEventListener("mousemove", move)

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", move);
        })

    })

    div.classList.add("good");
    console.log(div);
})           