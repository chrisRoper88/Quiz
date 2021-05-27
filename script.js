//Object containing quiz questions and answers
const quiz = [
  
  {
    question: "What year was the Excorist released?", 
    answer: "1974"
  },
  {
    question: "Who starred in the Evil Dead Movies?",
    answer: "bruce campbell"
  },
  {
    question:"What name did Stephen King use, when writing The Running Man?",
    answer: "richard bachman"
  },
  { 
    question: "What collection of slasher films features Jason Voorhees as the main villain?",
    answer: "friday the 13th"
  },
  {
    question: "The End!"
  }

];

//Varibles to select html elements and apply content
const question = document.getElementById("question");
const button = document.getElementById("button");
const userInput = document.getElementById("userInput");
const input = document.getElementById("input");

let questionNumber = 1;
question.textContent = quiz[questionNumber - 1].question;

//Varibles to keep track of users score
const correctAnswers = [];
const wrongAnswers = [];
const score = document.getElementById("score");
let userScore = 0;

//Click handler event to work though questions
button.addEventListener("click", () => {
  
  questionNumber++;
  question.textContent = quiz[questionNumber - 1].question;
  

  if ( input.value === quiz[questionNumber - 2].answer ) {
    userScore++;
    score.textContent = "Score: " + userScore;
  } else {
    score.textContent = "Score: " + userScore;
  }

  input.value = "";

});




