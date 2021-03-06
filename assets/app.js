// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

/// ----- Variables  -----  ///
var timer = 60;
var questions = [];
// -----Variable Sectors Section----- //

//Timer Located in the header
timerElement = document.querySelector(".timer");
questionElement = document.querySelector(".question");
choicesElement = document.querySelector(".choices");
/// ----- Functions  -----  ///

//Function to start the timer
setInterval(() => {
  if (timer != 0) {
    timer--;
    timerElement.textContent = "Time Left: " + timer;
  }
}, 1000);

//Function for Home Page
function home() {
  questionElement.innerHTML = "<h1>Coding Quiz Challenge</h1>";
  choicesElement.innerHTML =
    "<h2><center>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!</center></h2>";
}
home();
/// ----- Main Flow  -----  ///

// While Quiz is Active - Start the Quiz

/// ----- Event Listeners  -----  ///
