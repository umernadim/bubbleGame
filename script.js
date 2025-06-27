let timer = 60;
let score = 0;
let hitRn = 0;

function makeBubbles() {
    let clutter = "";
    for (let i = 1; i <= 180; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

function setTimer() {
    let timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector('#pbtm').innerHTML = `
            <div id= "gameOverCont">
                <h1>🎮 Game Over</h1>
                <h1>⭐ Final Score: ${score}</h1>
                <button class="btn" onclick="restartGame()">Play Again</button>
                </div>
            `;
        }
    }, 1000);
}

function getNewHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent = hitRn;
}

function increaseScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', function (dets) {
    if (dets.target.classList.contains("bubble")) {
        let clickedNum = Number(dets.target.textContent);
        if (clickedNum === hitRn) {
            increaseScore();
            getNewHit();
            makeBubbles();
        }
    }
});

function restartGame() {
    timer = 60;
    score = 0;
    document.querySelector('#scoreVal').textContent = score;
    document.querySelector('#timerVal').textContent = timer;
    getNewHit();
    makeBubbles();
    setTimer();
}

// Initialize Game
getNewHit();
setTimer();
makeBubbles();
