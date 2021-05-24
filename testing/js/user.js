let signUpCreds, emailValid, pwdValid = 0;

function firstLogin(signUpCreds, email, pwd, todaysDate, uid){
    if(signUpCreds){
        $("#login_err_txt").css("display", "none");
        $.ajax({
            type: "POST",
            url: "includes/db_login.php",
            data: {
                f_email: email,
                f_password: pwd,
                date: todaysDate,
                uid: uid
            },
            beforeSend: function(){
                $(".loading_gif").show();
                $("#body_inner_wrapper").addClass("filter"); 
            },
            complete: function(){
                $(".loading_gif").hide();
                $("#body_inner_wrapper").removeClass("filter");               
            },
            success: function(data){
                if(data){
                    let dataReturned = data;
                    dataReturned.toString();
                        if(dataReturned === "acc_exists"){
                            $("#login_err_txt").css("display", "block");
                            $("#login_err_txt").html("Account already exisits.");
                            console.log(dataReturned);
                        }else{
                            //start profile info creation
                            profileStart(uid);
                            console.log(dataReturned);
                        }
                }
            },
            error: function(){
                console.log("sign up ajax error");
            }
        });
    }else{
        return;
    }
}

function profileStart(uid){
    console.log("UID IS: " + uid)
    $("#profileOptions").css("display", "block");
    $("#login_container").css("display", "none");    
}

// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             $('#imagePreview').css('background-image', 'url('+e.target.result +')');
//             $('#imagePreview').hide();
//             $('#imagePreview').fadeIn(650);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }

//     alert("here");
// }

// $("#imageUpload").change(function() {
//     readURL(this);
// });

function signupValidate(){
    let email = $("#signup_email").val();
    let pwd = $("#signup_pwd").val();

    let specialCharRegex = ["/!@#\$%\^&\*\(\)_\+/"];

    // email check (contains @ symbol and is more than 5 characters)
    if(!emailValid){
        if(email.includes("@") && email.length > 5 && email != ""){
            // console.log("email good");
            emailValid = 1;
        }else{
            errorTxt("invalidEmail");
            return;
        }
    }

    // pwd check (lendth and special character)
    if(!pwdValid){
        for(i = 0; i < specialCharRegex.length; i++){
            if(pwd.search(specialCharRegex[i]) && pwd.length > 5 && pwd != ""){
                // console.log("password good");
                pwdValid = 1;
            } else{
                errorTxt("invalidPwd");
                return;
            }
        }
    }

    if(emailValid && pwdValid){
        signUpCreds = 1;
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        todaysDate = yyyy + '/' + mm + '/' + dd;

        let randomNum = Math.floor(Math.random() * 100000000); //creates a random num that is 8 digits long.
        let user_id = "UID-" + randomNum;

        firstLogin(signUpCreds, email, pwd, todaysDate, user_id);
    }else {
        console.log("signup failed..");
        errorTxt("allFields");
    }
}

function signup(){
    //hide all login fields
    $("#login_fields").css("display", "none");
    $("#signup_fields").css("display", "block");
}

function signIn(){
    //hide all login fields
    $("#login_fields").css("display", "block");
    $("#signup_fields").css("display", "none");
}

function errorTxt(err){
    switch(err){
        case "invalidEmail":
            $("#login_err_txt").css("display", "block");
            $("#login_err_txt").html("Please check your email.");
        break;
        
        case "invalidPwd":
            $("#login_err_txt").css("display", "block");
            $("#login_err_txt").html("Your password must be at least 5 characters and have one symbol.");
        break;

        case "allFields":
            $("#login_err_txt").css("display", "block");
            $("#login_err_txt").html("Please check both your email and password");
        break;
    }
}


