// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (btn, index) => {
    // Your game logic here
    if (cells[index] == "" && result.textContent != `Player ${currentPlayer} Won`) {
        cells[index] = currentPlayer;
        btn.value = currentPlayer;

        for (const condition of conditions) {
            const [a, b, c] = condition;
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                result.textContent = `Player ${currentPlayer} Won`;
                btns.forEach(btn => btn.disabled = true);
                return;
            }
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        result.textContent = `Player ${currentPlayer} Turn`;
    }

};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = 'Player X Turn';
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);

// Initialize the game with "Player X Turn" message
result.textContent = 'Player X Turn';