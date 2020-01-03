async function ValidateText() {

    var email = document.getElementById('email ').value;
    var password = document.getElementById('password ').value;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == 'OK') {
                window.location.href = "https://client-server-proj.herokuapp.com/contactpage";

            } else {
                window.alert("Wrong details");

            }
        }
    };
    xhttp.open("POST", "checkUser", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("email=" + email + "&password=" + password);
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
    var xhttp = new XMLHttpRequest();


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

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == 'OK') {
                window.alert("You Did It!\nEmail: " + email + "\nPassword: " + password);
                window.location.href = "https://client-server-proj.herokuapp.com/";

            } else {
                window.alert(this.responseText);
            }
        }
    };
    xhttp.open("POST", "newUser", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("email=" + email + "&password=" + password);
}

function OnSubmitContact() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var xhttp = new XMLHttpRequest();

    if (email == "" || name == "" || subject == "") {
        window.alert("Please fill all the forms.");
        return;
    }
    if (!CheckEmail(email)) {
        window.alert("Email incorrect form.");
        return;
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == 'OK') {
                window.alert("Your request sent!\nName: " + name + "\nEmail: " + email + "\nSubject: " + subject);

            } else {
                window.alert(this.responseText);
            }
        }
    };
    xhttp.open("POST", "contactusSent", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("email=" + email + "&name=" + name + "&subSubject=" + "TODO" + "&subject=" + subject);
}

function OnContactSupport() {
    window.location.href = "mailto:user@example.com?subject=I need 24/7 help";
}