const selections = ["./images/img1.png", "./images/img2.png", "./images/img3.png"]; //Images source that would be later inserted in computer selection

// elements selected to menupulate it
let userSelection = document.querySelectorAll(".user-selection");
let computerSelection = document.getElementById("clicked-img-computer");
let userImage = document.getElementById("clicked-img-player");
// let submitBtn = document.getElementById("submit");
let roundGoingOnElement = document.getElementById("round");
let playerScoreElement = document.getElementById("player-score");
let computerScoreElement = document.getElementById("computer-score");
let roundStatus = document.getElementById("status");

let rockElement = document.getElementById("rock");
let paperElement = document.getElementById("paper");
let scissorElement = document.getElementById("scissor");

//variables for score section
let playerScore = 0;
let roundGoingOn = 0;
let computerScore = 0;

rockElement.addEventListener("click", submit);
paperElement.addEventListener("click", submit);
scissorElement.addEventListener("click", submit);

//displaying clicked image by the user and displaying it in user section image
userSelection.forEach(function (selected) {
     selected.addEventListener("mousedown", function () {
          // console.log(this.getAttribute("src"));
          userImage.setAttribute("src", this.getAttribute("src"));
          // console.log("executed");
     })
});

function submit() {
     // console.log("submitted");
     roundGoingOn++;
     roundGoingOnElement.innerHTML = roundGoingOn;
     let userSelectedImage = userImage.getAttribute("src");

     let randomImage = Math.floor(Math.random() * selections.length);
     computerSelection.src = selections[randomImage];
     let computerSelectedImage = computerSelection.getAttribute("src");

     if (userSelectedImage == computerSelectedImage) {
          roundStatus.innerHTML = "It's a Draw";
     }

     console.log("user: " + userSelectedImage)
     console.log("computer: " + computerSelectedImage)
 
     let rock = "./images/img1.png";
     let paper = "./images/img2.png";
     let scissor = "./images/img3.png";
     
     if (roundGoingOn <= 10) {
          if (userSelectedImage == rock) {
               if (computerSelectedImage == paper) {
                    computerScore++;
                    computerScoreElement.innerHTML = computerScore;
                    roundStatus.innerHTML = "You Lost ☹";
                    // this.classList.add("lost")
                    // setTimeout(function(){this.classList.remove("lost")},500);
               } else if (computerSelectedImage == scissor) {
                    playerScore++;
                    playerScoreElement.innerHTML = playerScore;
                    roundStatus.innerHTML = "You Won 🎉";
                    // this.classList.add("won")
                    // setTimeout(function(){this.classList.remove("won")},500);
               }
          } else if (userSelectedImage == paper) {
               if (computerSelectedImage == rock) {
                    playerScore++;
                    playerScoreElement.innerHTML = playerScore;
                    roundStatus.innerHTML = "You Won 🎉";
                    // this.classList.add("won")
                    // setTimeout(function(){this.classList.remove("won")},500);
               } else if (computerSelectedImage == scissor) {
                    computerScore++;
                    computerScoreElement.innerHTML = computerScore;
                    roundStatus.innerHTML = "You Lost ☹";
                    // this.classList.add("lost")
                    // setTimeout(function(){this.classList.remove("lost")},500);
               }
          } else if (userSelectedImage == scissor) {
               if (computerSelectedImage == rock) {
                    computerScore++;
                    computerScoreElement.innerHTML = computerScore;
                    // this.classList.add("lost")
                    // setTimeout(function(){this.classList.remove("lost")},500);
               } else if (computerSelectedImage == paper) {
                    playerScore++;
                    playerScoreElement.innerHTML = playerScore;
                    roundStatus.innerHTML = "You Won 🎉";
                    // this.classList.add("won")
                    // setTimeout(function(){this.classList.remove("won"); console.log(this);},500);
               }
          }
     } else {
          if (playerScore > computerScore) {
               alert("Congratulations!! 🎉✨ You Won");
          } else if (playerScore < computerScore) {
               alert("You Lost ☹ Better Luck next time");
          } else {
               alert("Match Draw");
          }
          // roundGoingOn=0;
          // playerScore=0;
          // computerScore=0;
     }
}