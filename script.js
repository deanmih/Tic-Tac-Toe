let playerTurnIndex = 1;
let winCombinations = ["123", "456", "789", "147", "258", "369", "159", "753"];
let winLineExists = 0;

function addChar(buttonId) {
    if (playerTurnIndex % 2 != 0) {
        document.getElementById(buttonId).innerHTML = "X";
        document.getElementById(buttonId).disabled = true;
        ++playerTurnIndex;
    } else if (playerTurnIndex % 2 == 0) {
        document.getElementById(buttonId).innerHTML = "0";
        document.getElementById(buttonId).disabled = true;
        ++playerTurnIndex;
    }
    for (let i = 0; winLineExists == 0 && i < winCombinations.length; ++i) {
        let lineCheckPoints = winCombinations[i].toString();
        let firstPoint = document.getElementById(lineCheckPoints[0]).innerHTML;
        let secondPoint = document.getElementById(lineCheckPoints[1]).innerHTML;
        let thirdPoint = document.getElementById(lineCheckPoints[2]).innerHTML;
        let empty = " ";
        if (firstPoint != empty && firstPoint == secondPoint && secondPoint == thirdPoint) {
            ++winLineExists;
        }
        for (let j = 0; winLineExists == 1 && j < lineCheckPoints.length; ++j) {
            document.getElementById(lineCheckPoints[j]).style.background = "Black";
            document.getElementById(lineCheckPoints[j]).style.color = "White";
        }
        for (let k = 1; winLineExists == 1 && k <= 9 || playerTurnIndex == 10 && k <= 9; ++k) {
            document.getElementById(k).disabled = true;
        }
        if (winLineExists == 1) {
            winMessage(firstPoint);
            refreshBtn();  
        }
    }
    if (playerTurnIndex == 10 && winLineExists == 0) {
        drawMessage();
        refreshBtn();
    }
}

function refreshGame() {
    location.reload();    
}
