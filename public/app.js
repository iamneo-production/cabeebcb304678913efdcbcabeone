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
const ticTacToe = (element, index) => {
    // Check if the cell is empty and the game is not already won
    if (!cells[index] && !result.textContent) {
        // Set the cell value to the current player ('X' or 'O')
        cells[index] = currentPlayer;
        // Display the current player's symbol on the button
        element.value = currentPlayer;
        element.textContent = currentPlayer;
        
        // Check for winning conditions
        for (const condition of conditions) {
            const [a, b, c] = condition;
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                // Display the winning message
                result.textContent = `Player ${currentPlayer} wins!`;
                // Disable all buttons
                btns.forEach(btn => btn.disabled = true);
                return;
            }
        }

        // Toggle the current player for the next turn
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        // Update the result element to show the current player's turn
        result.textContent = `Player ${currentPlayer} Turn`;
    }
};

// Function to reset the game
const resetGame = () => {
    // Reset the game state
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    // Clear the result message
    result.textContent = 'Player X Turn';
    // Enable all buttons
    btns.forEach(btn => {
        btn.value = '';
        btn.textContent = '';
        btn.disabled = false;
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);

// Initialize the game with the "Player X Turn" message
result.textContent = 'Player X Turn';
