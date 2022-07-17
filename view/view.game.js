import {getRandomQuestion} from "../js/game.controller.js";


export const renderQuestion =  (data, category) => {
  viewGame()
  const questions = data.category[category].questions;
  const myQuestion =  getRandomQuestion(questions);
  const questionContainer = document.querySelector("#question");
  myQuestion.answersRandomly();
  questionContainer.innerText = myQuestion.question;  
  renderAnswer(myQuestion.getAnswers());
};


const viewGame = () => {
  const container = document.querySelector("#container");
  
  const gameContainer = document.createElement("div");
  gameContainer.classList.add("game-container");

  const questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");

  const answerContainer = document.createElement("div");
  answerContainer.classList.add("answer-container");

  const question = document.createElement("label");
  question.id = "question";
  question.innerText = "Question";

  questionContainer.appendChild(question);

  const answerA = document.createElement("button");
  answerA.id = "answerA";
  answerA.innerText = "Answer A";

  const answerB = document.createElement("button");
  answerB.id = "answerB";
  answerB.innerText = "Answer B";

  const rowAnswer1 = document.createElement("div");
  rowAnswer1.classList.add("row-answer");
  rowAnswer1.append(answerA, answerB);

  const answerC = document.createElement("button");
  answerC.id = "answerC";
  answerC.innerText = "Answer C";

  const answerD = document.createElement("button");
  answerD.id = "answerD";
  answerD.innerText = "Answer D";

  const rowAnswer2 = document.createElement("div");
  rowAnswer2.classList.add("row-answer");
  rowAnswer2.append(answerC, answerD);

  answerContainer.append(rowAnswer1, rowAnswer2);

  gameContainer.append(questionContainer, answerContainer);
  container.appendChild(gameContainer);
};

const renderAnswer = (answers) => {
  const answerA = document.querySelector("#answerA");
  const answerB = document.querySelector("#answerB");
  const answerC = document.querySelector("#answerC");
  const answerD = document.querySelector("#answerD");
  answerA.innerText = "A: "+answers[0].answer;
  answerB.innerText = "B: "+answers[1].answer;
  answerC.innerText = "C: "+answers[2].answer;
  answerD.innerText = "D: "+answers[3].answer;
};
