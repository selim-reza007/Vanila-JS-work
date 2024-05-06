let stdI = 0;
let studentDiv = document.querySelector(".student");

function submitForm(e) {
    e.preventDefault();
    let inputName = document.querySelector("#nameInp").value;
    let inputEmail = document.querySelector("#emailInp").value;
    let inputCountry = document.querySelector("#country").value;
    let inputGender = document.querySelector(".gender[name=gender]:checked").value;
    let inputHobbies = document.querySelectorAll(".hobbies[name=hobbies]:checked");
    let hobbiesValue = [];
    for (let i = 0; i < inputHobbies.length; i++) {
        hobbiesValue.push(inputHobbies[i].value);
    }

    let source = inputGender == "male" ? "assets/images/male_avatar.png" : "assets/images/female_avatar.png";

    let liHobbies = "";
    for (let i = 0; i < hobbiesValue.length; i++) {
        liHobbies += `<li>${hobbiesValue[i]}</li>`
    }


    let newStudent = `
    <div class="student__card">
        <div class="student__img">
            <img src=${source} alt="sample img of student">
        </div>
        <div class="student__info">
            <p class="student__name">${inputName}</p>
            <p class="student__email">${inputEmail}</p>
            <p class="student__country">${inputCountry}</p>
            <p class="student__hobbies">Student hobbies list</p>
            <ol>${liHobbies}</ol >
        </div >
        <div onclick="deleteStudent(this)" id="std-${stdI}">X</div>
    </div > `;

    studentDiv.insertAdjacentHTML("afterbegin", newStudent);
    stdI++;
}

function deleteStudent(obj) {
    // alert(obj.id);
    studentDiv.removeChild(obj.parentNode);
}

let body__p3 = document.querySelector(".body__p3");
let spanTag = document.createElement("span");
spanTag.textContent = " Selim Reza";
body__p3.appendChild(spanTag);

let newPTag = document.createElement("p");
newPTag.textContent = "This new P tag";
document.body.insertBefore(newPTag, body__p3);

let targetElement = body__p3.previousElementSibling.previousElementSibling.previousElementSibling;

let containerDiv = document.createElement("div");
let imgTag = document.createElement("img");
imgTag.setAttribute("alt", "Testing of lignt");
imgTag.setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif");
containerDiv.appendChild(imgTag);

targetElement.insertAdjacentElement("beforebegin", containerDiv);

imgTag.addEventListener("mouseover", function () {
    this.src = "https://www.w3schools.com/js/pic_bulbon.gif";
});

imgTag.addEventListener("mouseout", function () {
    console.log(this);
    this.src = "https://www.w3schools.com/js/pic_bulboff.gif";
});

let body__ol = document.querySelector(".body__ol");
body__ol.lastElementChild.style.color = "red";

let targetlitem = document.querySelector(".body__ul").lastElementChild.previousElementSibling;
targetlitem.addEventListener("mouseover", function () {
    this.classList.add("custome_style");
});

// targetlitem.addEventListener("mouseout", function() {
//     this.classList.remove("custome_style");
// });

targetlitem.addEventListener("mouseout", function() {
    this.classList.remove("custome_style");
});

console.log(0.3-0.1);