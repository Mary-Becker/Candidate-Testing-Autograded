const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["1. Who was the first American woman in space?", "2. True or false: 5 kilometers == 5000 meters?", "3. (5 + 3)2 * 10 = ?","4. Given the array [8,'orbit','trajectory', 45], what entry is at index 2?", "5. What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride", "True", "40","Trajectory","3"];
let candidateAnswers = " ";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name?")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
  candidateAnswers = input.question(questions[i]);
  return candidateAnswers
  }
  // candidateAnswers = (input.question(questions))
} 

function gradeQuiz(correctAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i = 0; i < correctAnswers.length; i++) {
  if (candidateAnswers === correctAnswers[i]) {
     console.log (`Correct! The answer was ${correctAnswers[1]}`);
} else {
  console.log (`Incorrect. The answer is ${correctAnswers[i]}, not ${candidateAnswers}.`);
}
// START BACK HER AFTER WORK! YOU NEED TO MAKE A LOOP TO PULL OUT THE INDIVIDUAL INDEXES OF THE CORRECT ANSWERS, MAYBE PUT A CONDITIONAL INTO A LOOP.

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Welcome to canidate testing " + candidateName + ", we are excited to have you!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};