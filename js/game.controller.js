import { Question } from "./Question.js";
import { Answer} from "./Answer.js";


export const getRandomQuestion = (questions) => {
  const random = Math.floor(Math.random() * questions.length);
  return new Question(
    questions[random].id,
    questions[random].question,
    createAnswer(questions[random].answers)
  );
};

const createAnswer = (answers) => {
  let answerArray = [];
  answers.forEach(answer => {
    answerArray.push(new Answer(answer.answer, answer.correct));
  });
  return answerArray;
}

const answerValidation = (answer, answers) => {
  let isCorrect = false;
  answers.forEach(ans => {
    if (ans.isCorrect) {
      isCorrect = true;
    }
  });
  return isCorrect;
}