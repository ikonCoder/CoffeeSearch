let test = 0;
let arr = [];
let blur = 0;
let blurCheck = 0;


//Getting value from "ajax.php".
function fill(Value) {
    $('#search').val(Value);
    //Hiding "display" div in "search.php" file.
    $('#display').hide();   
 }
 
function searchSuccess(){
    blur ? blurCheck = 1 : blurCheck = 0; 
    if(blurCheck){
        $("#starterBlocksContainer").css("filter","blur(8px)");
        $("#display").css("z-index","10");
    } else {
        $("#starterBlocksContainer").css("filter","none");
    }
 }
 //Ran when list item is selected
 function menuItemClick(item){
    console.log(item +" was selected");

    $.ajax({
        type: "POST",
        // dataType: "json",
        url: "ajax.php",
        data: {
            selected: item
        },
        //Passes data to buildClickedContainer function
        success: function(data) {
            // test = data;
            test = $.parseJSON(data);
            fill(item);
            buildClickedContainer(data,item);
        }
        
    });
}

 //build container for selected item
 function buildClickedContainer(data,item){
    let strContainer = 0;
    let str = 0;
    let cleanData = $.parseJSON(data);
    
    for(i=0; i < cleanData.length; i++){
        console.log(cleanData[i].company);
        
    }
    // let str =  `<div class="message"><h2>${data}</h2><p>[end of results!]</p></div>` ;
    str = `<div class="resultContainer"><span class="itemSelected">${item}</span>
    <div id="resultsContainer"> </div>
        <div data-aos="fade-right" class="card" style="width: 15rem;">
            <div class="card-body">
                <h5 class="card-title">${cleanData[0].company}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-dark">Explore</a>
            </div>
        </div>
    </div>` ;

    $.fancybox.open(str);
 }



 $(document).ready(function() {
    //On pressing a key on "Search box" in "search.php" file. This function will be called.
    $("#search").keyup(function() {
        //Assigning search box value to javascript variable named as "name".
        var name = $('#search').val();
        //Validating, if "name" is empty.
        if (name == "") {
            //Assigning empty value to "display" div in "search.php" file.
            $("#display").html("");
        }
        //If name is not empty.
        else {
            //AJAX is called.
            $.ajax({
                //AJAX type is "Post".
                type: "POST",
                //Data will be sent to "ajax.php".
                url: "ajax.php",
                //Data, that will be sent to "ajax.php".
                data: {
                    search: name
                },
                //If result found, this funtion will be called.
                success: function(data) {
                    //Assigning data returned to "display" div in "index.php" file.
                    if(data == 0){
                        blur = 0;
                        $("#display").hide();
                        $("#errorTxt").show();
                    } else {
                        blur = 1;
                        searchSuccess();
                        $("#display").html(data).show();
                        $("#errorTxt").hide();
                    }
                }
            });
        }
        //on keyup, checks for if the field is blank due to backspacing
        if(!$("#search").val()){
            console.log("backspace empty");
            blur = 0;
            searchSuccess();
            $("#display").hide();   
        }
    });


 });




