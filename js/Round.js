import { dbQuestion} from "../data/dbQuestion.js";
import { renderQuestion} from "../view/view.game.js";

export class Round {
  constructor() {
    this.level = 0;
    this.questions = [];
  }

  loadQuestions(){
    renderQuestion(dbQuestion,this.level);  
  }

  nextLevel(){
    this.level++;
    this.loadQuestions();
  }
}
