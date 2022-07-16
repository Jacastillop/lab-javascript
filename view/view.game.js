import { loadQuestions,getCountries } from "../js/game.controller.js";

export const viewGame = () => {
  const container = document.querySelector("#container");
  container.removeChild(container.firstChild);
  
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

  getCountries();
  loadQuestions();
};
