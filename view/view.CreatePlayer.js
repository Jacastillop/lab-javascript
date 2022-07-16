
export const viewCreatePlayer = (myGame) => {
    const container = document.querySelector("#container");

    const createPlayerContainer = document.createElement("div");
    createPlayerContainer.classList.add("create-player-container");

    const createPlayer = document.createElement("div");
    createPlayer.classList.add("create-player");

    const createPlayerTitle = document.createElement("h1");
    createPlayerTitle.innerText = "Insert your nickname";

    const createPlayerInput = document.createElement("input");
    createPlayerInput.id = "selectPlayerInput";
    createPlayerInput.type = "text";
    createPlayerInput.placeholder = "Nickname";

    const startGameButton = document.createElement("button");
    startGameButton.id = "startGameButton";
    startGameButton.innerText = "Start Game";

    createPlayer.append(createPlayerTitle, createPlayerInput, startGameButton);
    createPlayerContainer.appendChild(createPlayer);
    container.appendChild(createPlayerContainer);


    startGameButton.addEventListener("click", () => { myGame.startGame(createPlayerInput.value)});
}