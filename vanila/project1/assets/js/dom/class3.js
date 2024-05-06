let pId2 = document.querySelector("#id2");


console.log(pId2.classList);
pId2.classList.remove("myClass");
console.log(pId2.classList);
pId2.classList.add("myClass1");
console.log(pId2.classList);

document.querySelector(".class1").classList.add("dynamic");
