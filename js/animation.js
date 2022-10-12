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
    this.currentPos = this.startPos;  // Sets the start position of each creature to the current position
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
