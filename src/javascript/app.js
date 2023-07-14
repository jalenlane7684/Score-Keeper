const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

const updateScores = function (player, opponents) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            for (let opponent of opponents) {
                opponent.display.classList.add('has-text-danger');
                opponent.button.disabled = true;
            }
            player.button.disabled = true;
        }
    }
}

const reset = function () {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
};

p1.button.addEventListener('click', function() {
    updateScores(p1, [p2])
});

p2.button.addEventListener('click', function() {
    updateScores(p2, [p1])
});

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})