let test = 0;
let arr = [];
let blur = 0;
let blurCheck = 0;


//Getting value from "db_search.php".
function fill(Value) {
    $('#search').val(Value);
    //Hiding "display" div in "db_search.php" file.
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
        url: "db_search.php",
        data: {
            selected: item
        },
        //Passes data to buildClickedContainer function
        success: function(data) {
            test = $.parseJSON(data);
            fill(item);
            buildClickedContainer(data,item);
        }
        
    });
}

 //build container for selected item
 function buildClickedContainer(data,item){
    let strContainer = "";
    let x = '';
    let cleanData = $.parseJSON(data);
    console.log(cleanData);

    let str = `<div class='resultContainer'><span class='itemSelected'>${item}</span><div id="cardContainer">`;
    
    for(i=0; i < cleanData.length; i++){
        //check for blank name field.
            let nonBlankEntry = 0;
            if(cleanData[i].company != 0){
                nonBlankEntry = i;
                str += `
                <div class="card" style="width: 15rem;">
                    <div class="card-body">
                        <h5 class="card-title">${cleanData[i].company}</h5>
                        <div class="card-text">
                            <ul> 
                                <li class="blueHash"><span>#Region:</span> ${cleanData[i].region} </li>
                                <li class="redHash">#Altitude: ${cleanData[i].altitude} </li>
                                <li class="orangeHash">#Processing Method: ${cleanData[i].processing_method} </li>
                            <ul/>
                        </div>
                        <a onclick="explore('${cleanData[i].company}');" id="exploreBttn" class="btn btn-dark">Explore</a>
                    </div>
                </div>`; 
                console.log("total items are: ");
            }
        // console.log(cleanData[i].company);
    }

    str += "</div></div>"
    $.fancybox.open(str);
 }

 function explore(data){
    $.ajax({
        type: "POST",
        url: "db_search.php",
        data: {
            explore: data
        },
        success: function(companyName) {
            buildExplore(companyName);
        }
    });
 }


 $(document).ready(function() {
    //On pressing a key in "Search box" - This function will be called.
    $("#search").keyup(function() {
        //Assigning search box value to javascript variable named as "name".
        var name = $('#search').val();
        //Validating, if "name" is empty.
        if (name == "") {
            //Assigning empty value to "display/results" div in "db_search.php" file.
            $("#display").html("");
        }
        else {
            $.ajax({
                type: "POST",
                url: "db_search.php",
                data: {
                    search: name
                },
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




