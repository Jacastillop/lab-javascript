import {Player} from './Player.js';
import { viewGame } from "../view/view.game.js";
import { Round } from "../js/Round.js";

export class Game{
    constructor(){
        this.player = null;
        this.round = null;
        this.isOn = null;
    }

    startGame(namePlayer){
        this.player = new Player(namePlayer,0);
        localStorage.setItem("player", JSON.stringify(this.player));
        console.log(localStorage.getItem("player"));
        this.isOn = true;
        this.round = new Round(1);
        viewGame();
    }
}