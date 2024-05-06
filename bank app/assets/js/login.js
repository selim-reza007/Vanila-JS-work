


//////////////////////  LogIn //////////////////////////////
document.getElementById("loginBtn").addEventListener('click', function () {

    let email = document.getElementById("email");
    let password = document.getElementById("password");



    if (email.value == "user@gmail.com" && password.value == 12345) {
        window.location.href = 'Account.html';

    }
    else { alert('!!!!Wrong Information!!!!'); }
})