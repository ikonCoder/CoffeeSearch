<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coffee Search</title>

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <!-- aos: for fading -->
    <link rel="stylesheet" href="css/aos.css" />

    <!-- main css -->
    <link rel="stylesheet" href="css/style.css"/>

</head>
<body>
    <section id="searchSectionContainer">
        <div id="searchContainer">
            <h1 id='brandTitle'>Coffee Search</h1>
                <!-- <form  autocomplete="off" action="/action_page.php" style="text-align: center;"> -->
                    <!-- <div class="autocomplete"> -->
                        <input id="search" type="text" name="searchbar" placeholder="Country, Brand, or Roast" >
                    <!-- </div> -->
                    <!-- <input type="submit" id="" placeholder="Search" /> -->

                <!-- </form> -->
                <div id="display"></div>
            </div>
        <div id="starterBlocksContainer">
            <h3 id="recomendTxt">Recommendations</h3>
            <div data-aos="fade-right" class="card" style="width: 18rem;">
                <img class="card-img-top" src="images/recCoff1.jpg"Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Peet's Coffee</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark">Explore</a>
                </div>
                </div>
                <div data-aos="fade-right" class="card" style="width: 18rem;">
                <img class="card-img-top" src="images/recCoff2.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Revolt</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark">Explore</a>
                </div>
                </div>
                <div data-aos="fade-right" class="card" style="width: 18rem;">
                <img class="card-img-top" src="images/recCoff3.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">1850</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark">Explore</a>
                </div>
                </div>
        </div>
        
    </section>


<!-- bootstrap -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
<!-- bootstrap -->

<!-- aos: for fading -->
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<!-- aos: for fading -->

<!-- custom js -->
<script src="js/search.js"></script>

<script>
  AOS.init({
  duration: 1200,
})
</script>
</body>
</html>