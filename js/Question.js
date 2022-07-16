export class Question {
    constructor(id,question, answers) {
        this.id = id;
        this.question = question;
        this.answers = answers;
    }

    getQuestion(){
        return this.question;
    }

    getAnswers(){
        return this.answers;
    }

    answersRandomly(){
        let length = this.answers.length;
        for (let i = length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.answers[i], this.answers[j]] = [this.answers[j], this.answers[i]];
        }
    }
}

