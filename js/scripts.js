const winModal = document.querySelector('#winModal');
const loseModal = document.querySelector('#loseModal');
const collision = document.querySelectorAll('.collision');
const nest = document.querySelector('.nest');
const startButton = document.querySelector('.startBtn');
const maze = document.querySelectorAll('.line');
const startArea = document.querySelector('.startArea');
const hawk1 = document.querySelector('.hawk1');
const hawk2 = document.querySelector('.hawk2');
const snake = document.querySelector('.snake');

/* -----Animation----- */
let hawk1AniFrame;
let actionHawk1 = 'moveRight';
let hawk1Horizontal = 50;

const hawk1Move = () => {
    if (actionHawk1 === 'moveRight') {
        hawk1Horizontal -= 2;
        if (hawk1Horizontal <= 50) {
            actionHawk1 = 'moveLeft';
        }
    } else {
        hawk1Horizontal += 2;
        if (hawk1Horizontal > 300) {
            actionHawk1 = 'moveRight';
        }
    }
    hawk1.style.left = hawk1Horizontal + 'px';
    hawk1AniFrame = requestAnimationFrame(hawk1Move);
}

let hawk2AniFrame;
let actionHawk2 = 'moveRight';
let hawk2Horizontal = 480;

const hawk2Move = () => {
    if (actionHawk2 === 'moveRight') {
        hawk2Horizontal -= 2;
        if (hawk2Horizontal <= 480) {
            actionHawk2 = 'moveLeft';
        }
    } else {
        hawk2Horizontal += 2;
        if (hawk2Horizontal > 663) {
            actionHawk2 = 'moveRight';
        }
    }
    hawk2.style.left = hawk2Horizontal + 'px';
    hawk2AniFrame = requestAnimationFrame(hawk2Move);
}

let snakeAniFrame;
let actionSnake = 'moveRight';
let snakeHorizontal = 200;

const snakeMove = () => {
    if (actionSnake === 'moveRight') {
        snakeHorizontal -= 2;
        if (snakeHorizontal <= 200) {
            actionSnake = 'moveLeft';
        }
    } else {
        snakeHorizontal += 2;
        if (snakeHorizontal > 450) {
            actionSnake = 'moveRight';
        }
    }
    snake.style.left = snakeHorizontal + 'px';
    snakeAniFrame = requestAnimationFrame(snakeMove);
}

/* -----Main content section----- */
// event Handlers for win and lose conditions
const lose = () => {
    loseModal.style.display = "block";
}

const win = () => {
    winModal.style.display = "block";
}

const stopPropagation = (ev) => {
    ev.stopPropagation();
}

// event listeners for win and lose
const listenForCollisions = () => {
    collision.forEach(item => {
        item.addEventListener('mouseover', lose);
    });
}

// event listener for maze lines
const listenForLeaveMaze = () => {
    maze.forEach(item => {
        item.addEventListener('mouseover', stopPropagation);
    });
}

const listenForStartArea = () => {
    startArea.addEventListener('mouseover', stopPropagation);
}

const listenForWinning = () => {
    nest.addEventListener('mouseenter', win);
}
const stopWinningPropagation = () => {
    nest.addEventListener('mouseover', stopPropagation);
}
/*
 event to initiate game, start the animations, set up
the event listeners for the win/lose conditions and make the start button disappear
*/
const gameStart = (ev) => {
    ev.preventDefault();
    startButton.style.display = 'none'; // makes start button disappear

    listenForWinning();
    stopWinningPropagation();

    listenForCollisions();
    listenForLeaveMaze();

    listenForStartArea();
    /*
    *  insert callbacks for animations
    * */
}

startButton.addEventListener('click', gameStart);