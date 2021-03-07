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

/// -------------------- Variables  --------------------  ///
var timer = 60;
var questionCounter = 0;
var score = 0;
var myQuestions = [
  {
    question: "JavaScript is a ___ -side programming language",
    answers: {
      a: "Client",
      b: "Server",
      c: "Both",
      d: "None",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "None",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];

var choiceOne, choiceTwo, choiceThree, choiceFour;

// --------------------Variable Sectors Section-------------------- //

//Timer Located in the header
timerElement = document.querySelector(".timer");

//questions div
questionElement = document.querySelector(".question");

//answers div
choicesElement = document.querySelector(".choices");

startQuizBtn = document.querySelector(".start-quiz");

choiceResult = document.querySelector(".results");
/// -------------------- Functions  Section --------------------  ///

//Function to start the timer
setInterval(() => {
  if (timer != 0) {
    timer--;
    timerElement.textContent = "Time Left: " + timer;
  }
}, 1000);

// Function for Home Page //
function home() {
  questionElement.innerHTML = "<h1>Coding Quiz Challenge</h1>";
  choicesElement.innerHTML =
    "<h2><center>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!</center></h2>" +
    "<br><center><button class='start-quiz' type='button'>Start Quiz</button></center>";
  startQuizBtn = document.querySelector(".start-quiz");
}

//function when start quiz button is clicked
function startQuiz() {
  console.log("button clicked");
}

//function to render the Question
function renderQuestion(questionObj) {
  questionElement.innerHTML = questionObj.question;
}

//function to render buttons / answers
function createButton(obj) {
  var answerOne = document.createElement("button");
  answerOne.textContent = "a) " + obj.answers["a"];
  answerOne.setAttribute("id", "a");
  choicesElement.appendChild(answerOne);
  choiceOne = choicesElement.querySelector("#a");

  var answerTwo = document.createElement("button");
  answerTwo.textContent = "b) " + obj.answers["b"];
  answerTwo.setAttribute("id", "b");
  choicesElement.appendChild(answerTwo);
  choiceTwo = choicesElement.querySelector("#b");

  var answerThree = document.createElement("button");
  answerThree.textContent = "c) " + obj.answers["c"];
  answerThree.setAttribute("id", "c");
  choicesElement.appendChild(answerThree);
  choiceThree = choicesElement.querySelector("#c");

  var answerFour = document.createElement("button");
  answerFour.textContent = "d) " + obj.answers["d"];
  answerFour.setAttribute("id", "d");
  choicesElement.appendChild(answerFour);
  choiceFour = choicesElement.querySelector("#d");
}

//function to create eventListners for answer choices
function createListeners() {
  choiceOne.addEventListener("click", clickedChoiceOne);
  choiceTwo.addEventListener("click", clickedChoiceTwo);
  choiceThree.addEventListener("click", clickedChoiceThree);
  choiceFour.addEventListener("click", clickedChoiceFour);
}

//function when answer choice is clicked
function clickedChoiceOne() {
  if ("a" === myQuestions[questionCounter].correctAnswer) {
    choiceResult.innerHTML = "Correct";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
    }, 1000);
  } else {
    choiceResult.innerHTML = "Incorrect: -10 Seconds";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score -= 5;
      timer -= 10;
    }, 1000);
  }
}

function clickedChoiceTwo() {
  if ("b" === myQuestions[questionCounter].correctAnswer) {
    choiceResult.innerHTML = "Correct";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score += 5;
    }, 1000);
  } else {
    choiceResult.innerHTML = "Incorrect: -10 Seconds";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score -= 5;
      timer -= 10;
    }, 1000);
  }
}

function clickedChoiceThree() {
  if ("c" === myQuestions[questionCounter].correctAnswer) {
    choiceResult.innerHTML = "Correct";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
    }, 1000);
  } else {
    choiceResult.innerHTML = "Incorrect: -10 Seconds";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score -= 5;
      timer -= 10;
    }, 1000);
  }
}

function clickedChoiceFour() {
  if ("d" === myQuestions[questionCounter].correctAnswer) {
    choiceResult.innerHTML = "Correct";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
    }, 1000);
  } else {
    choiceResult.innerHTML = "Incorrect: -10 Seconds";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score -= 5;
      timer -= 10;
    }, 1000);
  }
}

/// -------------------- Main Flow  --------------------  ///
home();
// createButton(myQuestions[0]);
// createListeners();
// While Quiz is Active - Start the Quiz

/// -------------------- Event Listeners  --------------------  ///

//event listener for the start quiz button
// startQuizBtn.addEventListener("click", startQuiz);
