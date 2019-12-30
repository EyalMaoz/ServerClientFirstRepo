async function ValidateText() {

    var email = document.getElementById('email ').value;
    var password = document.getElementById('password ').value;
    //var URL = "http://localhost:8080/contactpage";

    var form = document.getElementById('loginForm');
    var username = document.getElementById('usernameid');
    var password = document.getElementById('pwd');
    //form.submit();
    $(form).submit(function() {
                $.ajax({
                    url: $(form).attr('action'),
                    type: 'POST',
                    data: $(form).serialize(),
                    success: function() {
                        window.alert("Username: " + username.value + "\n" + "Password: " + password.value);
                    }
                });
                return false;
                /*
                    if (email.match("Admin") && password.match("Admin")) {
                        window.location.href = "ContactPage.html";

                        return;
                    } else {
                        window.alert("Wrong details");
                        return;
                    }


                    var URL = "https://localhost:8080/";
                    var xhttp = new XMLHttpRequest();

                    var data = {
                        email,
                        password
                    }

                    xhttp.open("GET", 'server.js', true);
                    xhttp.send();
                */



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