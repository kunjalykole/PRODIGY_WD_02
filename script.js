// script.js
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const resetBtn = document.querySelector('.reset-btn');

let turn = 'X';
let gameOver = false;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        const condition = winningConditions[i];
        const cell1 = cells[condition[0]];
        const cell2 = cells[condition[1]];
        const cell3 = cells[condition[2]];

        if (cell1.textContent === turn && cell2.textContent === turn && cell3.textContent === turn) {
            gameOver = true;
            message.textContent = `${turn} Wins!`;
            return;
        }
    }
}

function handleCellClick(cell) {
    if (cell.textContent === '') {
        cell.textContent = turn;
        checkWinner();
        if (!gameOver) {
            turn = turn === 'X' ? 'O' : 'X';
            message.textContent = `Next Player: ${turn}`;
        }
    }
}

cells.forEach(cell => cell.addEventListener('click', () => handleCellClick(cell)));

resetBtn.addEventListener('click', () => {
    cells.forEach(cell => cell.textContent = '');
    turn = 'X';
    gameOver = false;
    message.textContent = 'Next Player: X';
});
