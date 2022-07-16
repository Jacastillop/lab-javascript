export class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    getName() {
        return this.name;
    }

    getScore() {
        return this.score;
    }

    setScore(score) {
        this.score = score;
    }
}