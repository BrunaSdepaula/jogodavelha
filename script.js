// Variáveis para controlar o jogo
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Função para verificar o vencedor
function checkWinner() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]              // Diagonais
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            return gameBoard[a];
        }
    }

    if (!gameBoard.includes('')) {
        gameOver = true;
        return 'T';
    }

    return null;
}

// Função para lidar com o clique em uma célula
function cellClick(index) {
    if (!gameOver && !gameBoard[index]) {
        gameBoard[index] = currentPlayer;
        document.getElementById('game-board').rows[Math.floor(index / 3)].cells[index % 3].textContent = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';

        const winner = checkWinner();
        if (winner) {
            if (winner === 'T') {
                alert('Empate!');
            } else {
                alert('O jogador ' + winner + ' venceu!');
            }
        }
    }
}

// Adicione eventos de clique às células
const cells = document.querySelectorAll('#game-board td');
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        cellClick(index);
    });
});
