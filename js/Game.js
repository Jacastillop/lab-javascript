import { Round } from "/js/Round.js";


export class Game{
    constructor(){
        this.round = new Round(0);
        this.isOn = false;
    }

    startGame(){
        //this.player = new Player(namePlayer,0);
        //localStorage.setItem("player", JSON.stringify(this.player));
        this.isOn = true;
        this.round.loadQuestions();
    }


}