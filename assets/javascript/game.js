    var wins = 0
    var losses = 0
    var currentScore = 0
    
    // Generate random numbers that correspond with each crystal 
    var crystalOne = Math.floor((Math.random() * 10 + 1))
    var crystalTwo = Math.floor((Math.random() * 10 + 1))
    var crystalThree = Math.floor((Math.random() * 10 + 1))
    var crystalFour = Math.floor((Math.random() * 10 + 1))

    $(document).ready(function() {
    // Start a new game that generates a random winning number
    var winNum = Math.floor((Math.random() * 40) + 1)
    $('#winNumber').text(winNum);
      console.log(winNum)
      
    // Win function declaration 
    function Win(){
      wins++; 
      $('#winsDiv').text(wins);
      newGame();
    }
    // Loss function declaration  
    function Loss(){
      losses++; 
      $('#lossDiv').text(losses);
      newGame();
    }
    // New Game Function declaration
    function newGame(){
    crystalOne;
    crystalTwo;
    crystalThree;
    crystalFour;
    winNum;
    }
    
    // on click function to handle crystal click to then return the random number assigned to each crystal and add to our current score variable
    $(".crystalImage").on("click", function(){
        currentScore = currentScore + crystalOne;
        console.log(currentScore);
        $('#currentscore').text(currentScore); 
           if (currentscore == winNum){
             Win(); 
             if ( userTotal > Random){
              Loss();
            }   
      }  
    $(".crystalImage").on("click", function(){
        currentScore = currentScore + crystalTwo;
        console.log(currentScore);
        $('#currentscore').text(currentScore); 
           if (currentscore == winNum){
             Win(); 
            if ( userTotal > Random){
              Loss();
            }   
      }
    $(".crystalImage").on("click", function(){
        currentScore = currentScore + crystalThree;
        console.log(currentScore);
        $('#currentscore').text(currentScore); 
           if (currentscore == winNum){
             Win(); 
            if ( userTotal > Random){
              Loss();
            }   
      } 
    $(".crystalImage").on("click", function(){
        currentScore = currentScore + crystalFour;
        console.log(currentScore);
        $('#currentscore').text(currentScore); 
           if (currentscore == winNum){
             Win(); 
            if ( userTotal > Random){
              Loss();
            }   
      } })

      // Run functions

      newGame()
      
