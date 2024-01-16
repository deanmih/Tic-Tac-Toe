function winMessage(winnerName) {
    let winMsg = document.createElement("div");
    winMsg.className = "container";
    winMsg.style.marginTop = "2%";
    winMsg.style.background = "white";
    winMsg.style.width = "400px"
    winMsg.style.height = "100px";
    winMsg.innerHTML = "Player " + winnerName + " Won!";
    winMsg.style.fontSize = "50px";
    winMsg.style.fontFamily = "Georgia";
    winMsg.style.borderRadius = "25px";
    document.body.appendChild(winMsg);
}

function drawMessage() {
    let drawMsg = document.createElement("div");
    drawMsg.className = "container";
    drawMsg.style.marginTop = "2%";
    drawMsg.style.background = "white";
    drawMsg.style.width = "400px"
    drawMsg.style.height = "100px";
    drawMsg.innerHTML = "Draw";
    drawMsg.style.fontSize = "50px";
    drawMsg.style.fontFamily = "Georgia";
    drawMsg.style.borderRadius = "25px";
    document.body.appendChild(drawMsg);
}

function refreshBtn() {
    let gameRefreshButton = document.createElement("button");
    gameRefreshButton.className = "container";
    gameRefreshButton.style.marginTop = "2%";
    gameRefreshButton.style.background = "white";
    gameRefreshButton.style.width = "400px"
    gameRefreshButton.style.height = "100px";
    gameRefreshButton.innerHTML = "Restart Game";
    gameRefreshButton.style.fontSize = "50px";
    gameRefreshButton.style.fontFamily = "Georgia";
    gameRefreshButton.style.border = "none";
    gameRefreshButton.addEventListener("click", refreshGame) 
    gameRefreshButton.style.borderRadius = "25px";
    document.body.appendChild(gameRefreshButton);
}
