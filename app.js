   var enterButton = document.getElementById('enterButton');
//    var aginButton = document.getElementById('playAgain');
   var output = document.getElementById('outputtext');
   var attempts=document.getElementById("attempts");
   console.log(attempts)

   function managefAttempts(){
        attempt--;
        attempts.innerHTML=`you have only ${attempt} remaining`
        console.log(attempts)
   }

   var attempt = 5;

   var randomNumber = Math.ceil(Math.random() * 10 )  ;
   function checkNumber(){
    
    var input  = document.getElementById('userInput').value;
    if(input == randomNumber)
    {
        output.innerHTML = "You guessed right :" + randomNumber;
        output.style.color= "green";
        enterButton.disabled = true; // Disable button on correct guess
    }
     else if((input > randomNumber) && (input < 10)){
        output.innerHTML = "You guessed too high";
        output.style.color= "red";
        managefAttempts()
    }
    else if((input < randomNumber) && (input >= 1 )){
        output.innerHTML = "You guessed too low";
        output.style.color= "red";
        managefAttempts()
    }
    else{
        output.innerHTML = "not valid number for guessing";
    }
    if (attempt === 0) {
        output.innerHTML = "Game over! The number was " + randomNumber + ".";
        enterButton.disabled = true; // Disable button when out of attempts
    }
    
    
   }
   enterButton.addEventListener('click',checkNumber);
//    aginButton.addEventListener('click',function()
//    {
//     location.reload();
//    }
//    )

