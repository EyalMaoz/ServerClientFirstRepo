async function ValidateText() {

    var email = document.getElementById('email ').value;
    var password = document.getElementById('password ').value;
    //var URL = "http://localhost:8080/contactpage";
    var xhttp = new XMLHttpRequest();


    if (email.match("Admin") && password.match("Admin")) {
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("LoginBody").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "contactpage", true);
        xhttp.send();
        return xhttp.responseText;
    } else {
        window.alert("Wrong details");
        return false;
    }


    //Old:
    //var isPassGood = CheckPassword(password)
    //var isEmailGood = CheckEmail(email)
    //window.alert(isPassGood + isEmailGood)
}

function CheckPassword(pass) {
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    //var special = /[!+@+#+$+%+^+&+*+(+)+-+_+=+++\+|+[+]+{+}+;+:+?+.+>+<+]*/;

    if (pass.Length < 6) return false;
    if (!pass.match(numbers)) return false;
    if (!pass.match(lowerCaseLetters)) return false;
    if (!pass.match(upperCaseLetters)) return false;
    return true;
}

function CheckEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function OnSignUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confPassword = document.getElementById("confPassword").value;
    if (!CheckEmail(email)) {
        window.alert("Email incorrect form.");
        return;
    }
    if (!CheckPassword(password)) {
        window.alert("Password is incorrect form.");
        return;
    }
    if (password != confPassword) {
        window.alert("Password doesnt match! Try again");
        return;
    }
    window.alert("You Did It!\nEmail: " + email + "\nPassword: " + password);
    window.open("LoginPage.html", "_top", true);
}

function OnSubmitContact() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    if (email == "" || name == "" || subject == "") {
        window.alert("Please fill all the forms.");
        return;
    }
    if (!CheckEmail(email)) {
        window.alert("Email incorrect form.");
        return;
    }
    window.alert("Your request sent!\nName: " + name + "\nEmail: " + email + "\nSubject: " + subject);
}

function OnContactSupport() {
    window.location.href = "mailto:user@example.com?subject=I need 24/7 help";
}