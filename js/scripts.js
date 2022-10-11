const winModal = document.querySelector('#winModal');
const loseModal = document.querySelector('#loseModal');
const collision = document.querySelectorAll('.collision');
const nest = document.querySelector('.nest');
const startButton = document.querySelector('.startBtn');
const maze = document.querySelectorAll('.line');
const startArea = document.querySelector('.startArea');

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