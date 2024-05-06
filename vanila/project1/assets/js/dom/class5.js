


let form__inp2 = document.querySelector(".form__inp2");


form__inp2.onfocus = function () {
    form__inp2.style.backgroundColor='red';
};

form__inp2.onblur = function () {
    this.style.backgroundColor = "white";
}