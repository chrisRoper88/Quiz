const quiz = [
  {
    question: "What year was the exorcist released?",
    answer: "1974"
  },
  {
    question: "Who starred in the Evil Dead Movies?",
    answer: "bruce campbell"
  },
  {
    question: "What name did Stephen King use, when writing The Running Man?",
    answer: "richard bachman"
  },
  {
    question: "What collection of slasher films features Jason Voorhees as the main villain?",
    answer: "friday the 13th"
  }
];

let correctAnswers = 0;
let wrongAnswers = 0;
let correct = [];
let wrong = [];


for ( let i = 0; i < quiz.length; i ++ ) {
  let question = quiz[i].question;
  let answer = quiz[i].answer;
  let userAnswer = prompt(question);

  if ( answer === userAnswer.toLocaleLowerCase()) {
    correctAnswers ++;
    correct.push(question);
  } else {
    wrongAnswers ++;
    wrong.push(question + "<br>");
  }

  let results = `
  <h3>You got ${correctAnswers} questions correct!</h3>
  <p>${correct.join(`<br>`)}</p>
  <h3>You got ${wrongAnswers} questions wrong!</h3>
  <p>${wrong.join(`<br>`)}</p>
  `;

  document.querySelector("main").innerHTML = results

}