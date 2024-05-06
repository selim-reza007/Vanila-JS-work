


let studentDiv = document.querySelector(".student");
let i = 1;

function submitForm(e) {
    e.preventDefault();
    let sId = document.querySelector("#id").value;
    let sName = document.querySelector("#name").value;
    let sCountry = document.querySelector("#country").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let source;
    // console.log(sId, sName, sCountry, gender);
    if(gender === "male") {
        source = "assets/images/male_avatar.png";
    }else {
        source = "assets/images/female_avatar.png";
    }
    let newRecord = `
    <div class="student__card">
        <div class="student__img">
            <img src=${source} alt="student">
        </div>
        <div class="student__info">
            <p class="student__id">${sId}</p>
            <p class="student__name">${sName}</p>
            <p class="student__country">${sCountry}</p>
        </div>
        <div class="student__close" id="student__close-${i}" onclick="deleteRecord(this)">X</div>
    </div>`;
    
    studentDiv.insertAdjacentHTML("afterbegin", newRecord);
    i++;
}

function deleteRecord(obj) {
    let conformation = confirm("Do you want to delete record?");
    if(conformation)
        studentDiv.removeChild(obj.parentNode);
}