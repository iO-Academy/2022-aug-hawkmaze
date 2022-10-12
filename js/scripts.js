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

/* -----Animations----- */
/*
 Constructor for the creatures
 Arrow functions cannot be used as constructors and will throw an error when used with new
* */
const Creature = function(element, aniFrame, startPos, endPos, action = 'moveRight') {
    this.element = element;    // For which element you're selecting
    this.aniFrame = aniFrame;  // Empty variable which to be redefined with a callback to the animation function
    this.startPos = startPos;  // The starting position in px
    this.endPos = endPos;      // The ending position in px
    this.action = action;      // For the direction of movement
    this.currentPos = this.startPos;
}

// Constants to construct each creature
const hawk1Obj = new Creature(hawk1, null, 50, 300, 'moveRight');
const hawk2Obj = new Creature(hawk2, null, 480, 663, 'moveRight');
const snakeObj = new Creature(snake, null, 250, 450, 'moveRight');

// Function to animate each creature using the properties of each object
const creatureMoveHoriz = (timestamp, creature) => {
    if (creature.action === 'moveRight') {
        creature.currentPos += 2;
        if (creature.currentPos >= creature.endPos) {
            creature.action = 'moveLeft';
        }
    } else {
        creature.currentPos -= 2;
        if (creature.currentPos <= creature.startPos) {
            creature.action = 'moveRight';
        }
    }
    creature.element.style.left = creature.currentPos + 'px';
    creature.aniFrame = requestAnimationFrame(
        (timestamp) => {
            creatureMoveHoriz(timestamp, creature)
        });
}

/* -----Main content----- */
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
}

startButton.addEventListener('click', gameStart);