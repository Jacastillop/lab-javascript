export class Answer{
    constructor(answer,isCorrect){
        this.answer = answer;
        this.isCorrect = isCorrect;
    }

    getAnswer(){
        return this.answer;
    }

    IsCorrect(){
        return this.isCorrect;
    }

 

}