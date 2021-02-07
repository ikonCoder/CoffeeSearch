function buildExplore(data){
    // let photoArrNum = Math.floor(Math.random() * 3);
    let cleanData = $.parseJSON(data);
    console.log(cleanData[0].company);


    let str = `
    <div class='exploreContainer'>
        <div class='coffeeContainer' id="coffeeBackground1"></div>
        <div class='coffeeDataContainer'>
            <div> 
                <span id="explore_companyName">
                    ${cleanData[0].company}
                </span>
                    <div id="exploreInfo">
                        <span class="exploreItem">Region: ${cleanData[0].region}</span>
                        <span class="exploreItem">Altitude: ${cleanData[0].altitude}</span>
                        <span class="exploreItem">Processing Method: ${cleanData[0].processing_method}</span>
                    </div>
                    <span id="buttonContainer">
                        <button onclick="comingSoon()" type="button" class="btn btn-success">Buy</button>
                    </span>
            </div>
        </div>
    </div>`;

    $.fancybox.open(str)
}

function comingSoon(){
    alert("Feature coming soon.");
}

function googleBuy(){
    alert("google buy script");
}
