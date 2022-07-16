import { Question } from "./Question.js";

let level = 0;

export const loadQuestions = () => {
  fetch("/data/dbQuestion.json")
    .then((response) => response.json())
    .then((data) => {
      renderQuestion(data, level);
    });
};


const renderQuestion =  (data, category) => {
  const questions = data.category[category].questions;
  const myQuestion =  getRandomQuestion(questions);
  const questionContainer = document.querySelector("#question");
  myQuestion.answersRandomly();
  questionContainer.innerText = myQuestion.question;  
  renderAnswer(myQuestion.getAnswers());
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

const getRandomQuestion = (questions) => {
  const random = Math.floor(Math.random() * questions.length);
  return new Question(
    questions[random].id,
    questions[random].question,
    questions[random].answers
  );
};
