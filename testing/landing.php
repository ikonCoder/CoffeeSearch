<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coffee Search</title>

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">

    <!-- fancybox -->
    <link rel="stylesheet" type="text/css" href="../fancybox/jquery.fancybox.min.css">

    <!-- aos: for fading -->
    <link rel="stylesheet" href="../css/aos.css" />

    <!-- main css -->
    <link rel="stylesheet" href="landing.css?t=2"/>

</head>
<body>
    <div id="body_inner_wrapper">
        <section id="welcome_left"></section>  
            
        <section id="login_section">
            <div id="login_container"> 
                <div id="loginInner"> 
                    <span id="login_inner_title">Coffee Search
                        <div>
                        A search engine built for finding coffee from all over the world! Sign-Up to search by country or brand and find a new coffee today!
                        </div>
                    </span>
                    <div class="err_txt" id="login_err_txt" style="display:none"></div>
                    <div id="login_fields">
                        <input id="login_username" type="text" placeholder="Username">
                        <input id="login_pwd" type="password" placeholder="Password">
                        <div id="sign-in_btn" onclick="loginValidate()">SIGN-IN</div>
                        <div id="sign-up_txt" onclick="signup();">SIGN-UP</div>
                    </div>
                    <div id="signup_fields" style="display:none;">
                        <input id="signup_email" type="email" placeholder="Email">
                        <input id="signup_pwd" type="password" placeholder="Password">
                        <div id="sign-up_btn" onclick="signupValidate()">SIGN-UP</div>
                        <div id="sign-in_txt" onclick="signIn();">SIGN-IN</div>
                    </div>
                </div>
            </div>
            <section id="profileOptions">
                <div id="profileInner">
                    <div class="container">
                        <div class="avatar-upload">
                            <div class="avatar-edit">
                                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                <label for="imageUpload"></label>
                            </div>
                            <div class="avatar-preview">
                                <div id="imagePreview" style="background-image: url(../testing/images/landing.jpg);">
                                </div>
                            </div>
                        </div>
                        <input id="profileUsername" type="text" placeholder="Username">
                        <div id="cont_btn">Continue &#x2192;</div>
                    </div>
                </div>
            </section>
        </section>
    </div>
    
    <span style="position: absolute;top: 50%;transform: translateY(-50%);left: 0;right: 0;}"> <div class="loading_gif"></div> </span>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- aos: for fading -->
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>  
    <!-- fancybox -->
    <script src="../fancybox/jquery.fancybox.min.js"></script>
    <!-- vue js -->
    <script src="https://unpkg.com/vue@3.0.5" ></script>
    <script src="js/user.js"></script>
    <script src="js/landing.js"></script>
    <script>
        AOS.init({
            duration: 1200,
        });
    </script>
</body>
</html>