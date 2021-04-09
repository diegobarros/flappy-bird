
let bird;
let gameOver = false;
let ground = document.querySelector(".ground");

window.onload = (event) => {

    bird = new Bird(".sky");

    startGame();

};

window.addEventListener("resize", (event) => {
    bird.resetPosition();
});

window.addEventListener("keyup", (event) => {
    if (event.code === "Space")
        bird.jump();
});

let startGame = () => {

    ground.classList.add("move-ground");
};

let gameTimerId = setInterval(startGame, 20)

let finishGame = () => {
    gameOver = true;
    window.removeEventListener("keyup");
    ground.classList.remove("move-ground");
}