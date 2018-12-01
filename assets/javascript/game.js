//document ready function
$(document).ready(function() {

    //set wins and losses
    var wins = 0;
    var losses = 0;
    var crystalsUsed = 0;
    $("#wins-display").text("Wins: " + wins);
    $("#losses-display").text("Losses: " + losses);
    $("#crystals-used").text(crystalsUsed);

    //Assign a random value to all crystals
    function assignCrystalValues() {
        $("#blue-crystal").attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
        $("#red-crystal").attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
        $("#purple-crystal").attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
        $("#diamond-crystal").attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    }

    //initialize game function
    function initializeGame() {

        //assign new values for crystals
        assignCrystalValues();

        //set the target number and display it
        targetNum = Math.floor((Math.random() * 102) + 19);
        $("#target-number").text(targetNum);

        //reset the user crystal score 
        userCrystalScore = 0;
        $("#crystal-score").text(userCrystalScore);  
        
        //reset crystals used
        crystalsUsed = 0;
        $("#crystals-used").text(crystalsUsed);
    }

    //On click event to add value of the crystal to the total score
    $(".crystal-image").on("click", function() {

        //increment crystals used
        crystalsUsed++;
        $("#crystals-used").text(crystalsUsed);

        //get the value of the crystal from the data-crystalvalue attribute and convert it to a int 
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        //add it to the total score
        userCrystalScore += crystalValue;

        //display it in the crystal-score div
        $("#crystal-score").text(userCrystalScore);

        //logic for win or lose
        if (userCrystalScore === targetNum) {
            alert("YOU WIN!!");
            initializeGame();
            wins++;
            $("#wins-display").text("Wins: " + wins);
        }

        else if (userCrystalScore >= targetNum) {
            alert("YOU LOSE");
            initializeGame();
            losses++;
            $("#losses-display").text("Losses: " + losses);
        }

    });

    //Call the initialize game function to play the game
    initializeGame();

});