const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playto');

const reset = () => {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
};

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
    }
})

resetButton.addEventListener('click', reset);