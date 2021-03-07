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
playerScores = [];
playerInitals = [];

playerScores2 = "";
playerInitals2 = "";
var resultScore, resultInital;
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
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    answers: {
      a: "<javascript>",
      b: "<scripted>",
      c: "<script>",
      d: "<js>",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    answers: {
      a: "alertbox(“GeeksforGeeks”);",
      b: "msg(“GeeksforGeeks”);",
      c: "msgbox(“GeeksforGeeks”);",
      d: "alert(“GeeksforGeeks”);",
    },
    correctAnswer: "d",
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    answers: {
      a: "interface",
      b: "throws",
      c: "program",
      d: "short",
    },
    correctAnswer: "c",
  },
];

var choiceOne, choiceTwo, choiceThree, choiceFour;

// --------------------Variable Sectors Section-------------------- //

//Timer Located in the header
timerElement = document.querySelector(".timer");

wholeQuiz = document.querySelector(".quiz");
//questions div
questionElement = document.querySelector(".question");

//answers div
choicesElement = document.querySelector(".choices");

startQuizBtn = document.querySelector(".start-quiz");

choiceResult = document.querySelector(".results");

var scoreSubmit, nameSubmit, hsList, goBack, clearScore, list;
/// -------------------- Functions  Section --------------------  ///

//function to reset the timer
function resetTimer() {
  timer = 60;
}

//Function to start the timer
function startTimer() {
  var startTimer = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerElement.textContent = "Time Left: " + timer;
    } else if (timer === 0) {
      clearInterval(startTimer);
      endQuiz();
    } else if (timer < 0) {
      clearInterval(startTimer);
      timer = 0;
      timerElement.textContent = "Time Left: " + timer;
      endQuiz();
    }
  }, 1500);
}
// Function for Home Page //
function home() {
  centerChoices();
  questionElement.innerHTML = "<h1><center>Coding Quiz Challenge</center></h1>";
  choicesElement.innerHTML =
    "<h2><center>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!</center></h2>" +
    "<br><center><button class='start-quiz' type='button'>Start Quiz</button></center>";
  startQuizBtn = document.querySelector(".start-quiz");
  startQuizBtn.addEventListener("click", startQuiz);
  startQuizBtn.addEventListener("click", resetTimer);
}

//function when start quiz button is clicked
function startQuiz() {
  alignChoices();
  startTimer();
  if (questionCounter === 0) {
    choicesElement.innerHTML = "";
    renderQuestion(myQuestions[questionCounter]);
    createButton(myQuestions[questionCounter]);
    createListeners();
  } else if (questionCounter === 1) {
    choicesElement.innerHTML = "";
    renderQuestion(myQuestions[questionCounter]);
    createButton(myQuestions[questionCounter]);
    createListeners();
  } else if (questionCounter === 2) {
    choicesElement.innerHTML = "";
    renderQuestion(myQuestions[questionCounter]);
    createButton(myQuestions[questionCounter]);
    createListeners();
  } else if (questionCounter === 3) {
    choicesElement.innerHTML = "";
    renderQuestion(myQuestions[questionCounter]);
    createButton(myQuestions[questionCounter]);
    createListeners();
  } else if (questionCounter === 4) {
    choicesElement.innerHTML = "";
    renderQuestion(myQuestions[questionCounter]);
    createButton(myQuestions[questionCounter]);
    createListeners();
  } else if (questionCounter === 5) {
    choicesElement.innerHTML = "";
    renderQuestion(myQuestions[questionCounter]);
    createButton(myQuestions[questionCounter]);
    createListeners();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionCounter = 0;
  timer = 0;
  if (score < 0) {
    score = 0;
  }
  questionElement.innerHTML = "<h1>All done!</h1>";
  choicesElement.innerHTML =
    "Your final score is " +
    score +
    "<div class='score'>Enter initials: <input type='text' id='initals'><button id='score-submit'>Submit</button></div>";
  scoreSubmit = document.querySelector("#score-submit");
  nameSubmit = document.querySelector("#initals");
  scoreSubmit.addEventListener("click", clickedScore);
}

//function when the submit high score button is clicked
function clickedScore() {
  if (playerInitals.includes(nameSubmit.value)) {
    alert("That inital already exist");
  } else if (
    nameSubmit.value === "" ||
    nameSubmit.value === null ||
    nameSubmit.value === undefined
  ) {
    alert("Please enter valid initals");
  } else {
    playerInitals.push(nameSubmit.value);
    playerScores.push(score);
    setLS();
    matchHS();
    viewHS();
  }
}

function setLS() {
  playerScores2 = playerScores.toString();
  localStorage.setItem("playerScore", playerScores2);
  playerInitals2 = playerInitals.toString();
  localStorage.setItem("playerInital", playerInitals2);
}

function matchHS() {
  if (localStorage.getItem("playerScore") === null) {
    playerScores = [];
    playerInitals = [];
    playerScores2 = "";
    playerInitals2 = "";
  } else {
    playerInitals2 = localStorage.getItem("playerInital");
    playerScores2 = localStorage.getItem("playerScore");
    playerInitals = playerInitals2.split(",");
    playerScores = playerScores2.split(",");
  }
}
//function to view highscore
function viewHS() {
  questionElement.innerHTML = "<h1>High Scores</h1>";
  choicesElement.innerHTML = "<ul id='hs-list'><ul>";
  hsList = document.querySelector("#hs-list");

  if (
    localStorage.getItem("playerInital", "") === "" ||
    playerScores === [] ||
    playerInitals === []
  ) {
    questionElement.innerHTML = "<h1>High Scores</h1>";
    choicesElement.innerHTML = "No High Scores";
  } else {
    //loop through high score array
    for (var i = 0; i < playerScores.length; i++) {
      var list = document.createElement("li");
      list.setAttribute("id", "list");
      list.textContent = playerInitals[i] + " - " + playerScores[i];
      hsList.appendChild(list);
    }
  }

  //create div to contain buttons
  var btnDiv = document.createElement("div");
  btnDiv.className = "endQuiz";
  choicesElement.appendChild(btnDiv);

  //create buttons to go back and clear hs
  var goBackBtn = document.createElement("button");
  var clearScoreBtn = document.createElement("button");
  goBackBtn.setAttribute("id", "goBackBtn");
  clearScoreBtn.setAttribute("id", "clearScoreBtn");
  goBackBtn.innerHTML = "Go Back";
  clearScoreBtn.innerHTML = "Clear High Score";
  //append to div
  btnDiv.appendChild(goBackBtn);
  btnDiv.appendChild(clearScoreBtn);

  //create event listeners for buttons
  goBack = document.querySelector("#goBackBtn");
  clearScore = document.querySelector("#clearScoreBtn");
  goBackBtn.addEventListener("click", home);
  clearScore.addEventListener("click", clearHighScore);

  //function to clear the high schore in high score page
  function clearHighScore() {
    playerScores = [];
    playerInitals = [];
    playerScores2 = "";
    playerInitals2 = "";
    localStorage.setItem("playerInital", "");
    localStorage.setItem("playerScore", "");
    viewHS();
  }
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

  createCheck = false;
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
      score += 5;
      startQuiz();
    }, 1000);
  } else {
    choiceResult.innerHTML = "Incorrect: -10 Seconds";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score -= 5;
      timer -= 10;
      startQuiz();
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
      startQuiz();
    }, 1000);
  } else {
    choiceResult.innerHTML = "Incorrect: -10 Seconds";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score -= 5;
      timer -= 10;
      startQuiz();
    }, 1000);
  }
}

function clickedChoiceThree() {
  if ("c" === myQuestions[questionCounter].correctAnswer) {
    choiceResult.innerHTML = "Correct";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score += 5;
      startQuiz();
    }, 1000);
  } else {
    choiceResult.innerHTML = "Incorrect: -10 Seconds";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score -= 5;
      timer -= 10;
      startQuiz();
    }, 1000);
  }
}

function clickedChoiceFour() {
  if ("d" === myQuestions[questionCounter].correctAnswer) {
    choiceResult.innerHTML = "Correct";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score += 5;
      startQuiz();
    }, 1000);
  } else {
    choiceResult.innerHTML = "Incorrect: -10 Seconds";
    setTimeout(() => {
      choiceResult.innerHTML = "";
      questionCounter++;
      score -= 5;
      timer -= 10;
      startQuiz();
    }, 1000);
  }
}

//function to align divs in the center
function centerChoices() {
  choicesElement.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center;"
  );
  questionElement.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center;"
  );
  wholeQuiz.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center;"
  );
}

//function to align divs in a row
function alignChoices() {
  choicesElement.setAttribute(
    "style",
    "display: flex; justify-content: flex-start; align-items: flex-start;"
  );
  questionElement.setAttribute(
    "style",
    "display: flex; justify-content: flex-start; align-items: flex-start;"
  );
  wholeQuiz.setAttribute(
    "style",
    "display: flex; justify-content: flex-start; align-items: flex-start;"
  );
}

home();
matchHS();

//global event listeners
highscore = document.querySelector("#highscore");
highscore.addEventListener("click", viewHS);
