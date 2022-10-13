/* -----Animations----- */
/*
 Constructor for the creatures
 Arrow functions cannot be used as constructors and will throw an error when used with new
*/
export const dynamicObject = function(element, aniFrame, startPos, endPos, speed, action = 'moveRight') {
    this.element = element;    // For which element you're selecting
    this.aniFrame = aniFrame;  // Empty variable which to be redefined with a callback to the animation function
    this.startPos = startPos;  // The starting position in px
    this.endPos = endPos;      // The ending position in px
    this.action = action;      // For the direction of movement
    this.speed = speed;        // Set the speed of the object
    this.currentPos = this.startPos;  // Sets the start position of each creature to the current position
}

// Function to animate each creature using the properties of each object
export const objectMove = (timestamp, creature) => {
    if (creature.action === 'moveRight') {
        creature.currentPos += creature.speed;
        if (creature.currentPos >= creature.endPos) {
            creature.action = 'moveLeft';
        }
    } else {
        creature.currentPos -= creature.speed;
        if (creature.currentPos <= creature.startPos) {
            creature.action = 'moveRight';
        }
    }
    creature.element.style.left = creature.currentPos + 'px';
    creature.aniFrame = requestAnimationFrame(
        (timestamp) => {
            objectMove(timestamp, creature)
        });
}