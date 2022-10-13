/* -----Animations----- */
/*
 Constructor for the creatures
 Arrow functions cannot be used as constructors and will throw an error when used with new
*/
export const DynamicObject = function(element, aniFrame, startPos, endPos, speed, action = 'moveRight') {
    this.element = element;    // For which element you're selecting
    this.aniFrame = aniFrame;  // Empty variable which to be redefined with a callback to the animation function
    this.startPos = startPos;  // The starting position in px
    this.endPos = endPos;      // The ending position in px
    this.action = action;      // For the direction of movement
    this.speed = speed;        // Set the speed of the object
    this.currentPos = this.startPos;  // Sets the start position of each creature to the current position
}

// Function to animate each creature using the properties of each object
export const objectMove = (timestamp, dynamicObject) => {
    if (dynamicObject.action === 'moveRight') {
        dynamicObject.currentPos += dynamicObject.speed;
        if (dynamicObject.currentPos >= dynamicObject.endPos) {
            dynamicObject.action = 'moveLeft';
        }
    } else {
        dynamicObject.currentPos -= dynamicObject.speed;
        if (dynamicObject.currentPos <= dynamicObject.startPos) {
            dynamicObject.action = 'moveRight';
        }
    }
    dynamicObject.element.style.left = dynamicObject.currentPos + 'px';
    dynamicObject.aniFrame = requestAnimationFrame(
        (timestamp) => {
            objectMove(timestamp, dynamicObject)
        });
}