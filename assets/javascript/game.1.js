//document ready function
$(document).ready(function() {


    //initialize game function
    function initializeGame() {

        var wins = 0;
        var losses = 0;

        function resetGame() {

            //Assign a random value to all crystals
            $("#blue-crystal").attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
            $("#red-crystal").attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
            $("#yellow-crystal").attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
            $("#diamond-crystal").attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
    
            //set the target number and display it
            targetNum = Math.floor((Math.random() * 120) + 19);
            $("#target-number").text(targetNum);
    
            //reset the user crystal score 
            userCrystalScore = 0;
            $("#crystal-score").text(userCrystalScore);        
        
            //On click event to add value of the crystal to the total score
            $(".crystal-image").on("click", function() {
    
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
                    resetGame();
                    wins++;
                    console.log(wins);
                    $("#wins-display").text(wins);
                }
    
                else if (userCrystalScore >= targetNum) {
                    alert("YOU LOSE");
                    resetGame();
                    losses++;
                    console.log(losses);
                    $("#losses-display").text(losses);
                }
    
            });
        }
    }

    

    //Call the initialize game function to play the game
    initializeGame();

});