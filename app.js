// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
// const resetButton = document.querySelector("#reset");
// const winningScoreSelect = document.querySelector("#playTo");
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 3;
// let isGameOver = false;

// p1Button.addEventListener("click", function () {
//     if (!isGameOver) {
//         p1Score += 1;
//         p1Display.textContent = p1Score;
//         if (p1Score == winningScore) {
//             isGameOver = true;
//             p1Display.classList.add("has-text-success");
//             p2Display.classList.add("has-text-danger");
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//     }
// });

// p2Button.addEventListener("click", function () {
//     if (!isGameOver) {
//         p2Score += 1;
//         p2Display.textContent = p2Score;
//         if (p2Score == winningScore) {
//             isGameOver = true;
//             p2Display.classList.add("has-text-success");
//             p1Display.classList.add("has-text-danger");
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//     }
// });

// resetButton.addEventListener("click", reset);

// winningScoreSelect.addEventListener("change", function () {
//     winningScore = parseInt(this.value);
//     reset();
// });

// function reset() {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;
//     p1Display.classList.remove("has-text-success", "has-text-danger");
//     p2Display.classList.remove("has-text-danger", "has-text-success");
//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

const p1 = {
    Button: document.querySelector("#p1Button"),
    Display: document.querySelector("#p1Display"),
    Score: 0,
};
const p2 = {
    Button: document.querySelector("#p2Button"),
    Display: document.querySelector("#p2Display"),
    Score: 0,
};

const clickEvent = function (player1, player2) {
    if (!isGameOver) {
        player1.Score += 1;
        player1.Display.textContent = player1.Score;
        if (player1.Score == winningScore) {
            isGameOver = true;
            player1.Display.classList.add("has-text-success");
            player2.Display.classList.add("has-text-danger");
            player1.Button.disabled = true;
            player2.Button.disabled = true;
        }
    }
};

p1.Button.addEventListener("click", function () {
    clickEvent(p1, p2);
});

p2.Button.addEventListener("click", function () {
    clickEvent(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1.Score = 0;
    p2.Score = 0;
    p1.Display.textContent = 0;
    p2.Display.textContent = 0;
    p1.Display.classList.remove("has-text-success", "has-text-danger");
    p2.Display.classList.remove("has-text-danger", "has-text-success");
    p1.Button.disabled = false;
    p2.Button.disabled = false;
}
