//syed muhammad haikal bin syed husni
// run node tictactoe.js in the command line


const prompt = require('prompt-sync')({sigint: true});

console.log("\nThis is a tictactoe project!");
console.log("by Syed Muhammad Haikal");
console.log("Under guidance of TalentLabs!");
console.log("in K-Youth Development Programme!\n");

function drawBoard(board) {
    console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
    console.log(`---+---+---`);
    console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
    console.log(`---+---+---`);
    console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);
}

function updateBoard(board, move, currentPlayer) {
    return board.map((cell, index) => {
        if (index === move - 1) {
            return currentPlayer;
        }
        return cell;
    });
}

function CheckWinCondition(board, currentPlayer) {
    let horizontalWin = false;
    let verticalWin = false;
    let diagonalWin = false;

    if (board[0] === board[1] && board[1] === board[2] ||
        board[3] === board[4] && board[4] === board[5] ||
        board[6] === board[7] && board[7] === board[8]) {
        horizontalWin = true;
    }

    if (board[0] === board[3] && board[3] === board[6] ||
        board[1] === board[4] && board[4] === board[7] ||
        board[2] === board[5] && board[5] === board[8]) {
        verticalWin = true;
    }

    if (board[0] === board[4] && board[4] === board[8] ||
        board[2] === board[4] && board[4] === board[6]) {
        diagonalWin = true;
    }

    if (horizontalWin || verticalWin || diagonalWin) {
        drawBoard(board);
        console.log(currentPlayer + " Wins!");
        return true;
    } else if (board.every(cell => cell === 'X' || cell === 'O')) {
        drawBoard(board);
        console.log("It's a draw!\n");
        return true;
    }
    return false;
}

let choice;

do {
    console.log("\nLet's play some tictactoe!");

    console.log("1. Play Alone!");
    console.log("2. Play with a friend locally!");
    console.log("3. How To Play");
    console.log("4. Exit");

    choice = prompt("Enter your choice : ");

    if (choice === '1') {
        // Single-player mode
        let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let currentPlayer = 'X';

        console.log("\nGame Commences!");
        console.log("X starts first");

        while (true) {
            drawBoard(board);

            if (currentPlayer === 'X') {
                // Player move
                let playerMove = prompt("Player X, choose your position (1-9) : ");
                playerMove = parseInt(playerMove);

                if (playerMove >= 1 && playerMove <= 9) {
                    if (board[playerMove - 1] !== 'X' && board[playerMove - 1] !== 'O') {
                        board = updateBoard(board, playerMove, currentPlayer);
                        if (CheckWinCondition(board, currentPlayer)) break;
                        currentPlayer = 'O'; // Switch to AI
                    } else {
                        console.log("\nInvalid Input, position is already occupied");
                    }
                } else {
                    console.log("Invalid Input, position is out of range");
                }
            } else {
                // AI move
                let aiMove;
                do {
                    aiMove = Math.floor(Math.random() * 9) + 1; // Mathrandom like assignment9 - Random move between 1 and 9
                } while (board[aiMove - 1] === 'X' || board[aiMove - 1] === 'O');

                board = updateBoard(board, aiMove, currentPlayer);
                console.log("AI chooses position " + aiMove);
                if (CheckWinCondition(board, currentPlayer)) break;
                currentPlayer = 'X'; // Switch to player
            }
        }

        console.log("\nThanks for playing!");

    } else if (choice === '2') {
        // Multiplayer mode
        let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let currentPlayer = 'X';

        console.log("\nGame Commences!");
        console.log("X starts first");

        while (true) {
            drawBoard(board);

            let playerMove = prompt("Player " + currentPlayer + " , choose your position (1-9) : ");
            playerMove = parseInt(playerMove);

            if (playerMove >= 1 && playerMove <= 9) {
                if (board[playerMove - 1] !== 'X' && board[playerMove - 1] !== 'O') {
                    board = updateBoard(board, playerMove, currentPlayer);
                    if (CheckWinCondition(board, currentPlayer)) break;
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                } else {
                    console.log("\nInvalid Input, position is already occupied");
                }
            } else {
                console.log("Invalid Input, position is out of range");
            }
        }

        console.log("\nThanks for playing!");

    } else if (choice === '3') {
        console.log("i. X will start first!");
        console.log("ii. The objective is to mark a position with your symbol up until you form either a horizontal, vertical, or diagonal line");
        console.log("iii. Whoever forms the line first wins!\n");
    } else if (choice !== '4') {
        console.log("\nInvalid Input!");
    }

} while (choice !== '4');

console.log("\nBye!");
