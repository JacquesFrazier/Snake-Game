//Goal:
//moving snake around
//have snake go around gameboard

//variables
//the movable object(snake)
var movableObject = document.getElementById('snake');


 // Set initial position
 var positionX = 0;
 var positionY = 0;

 // Set the step size for movement
 var stepSize = 10;

 // Function to update the position of the object
 function updatePosition() {
   
//snake
   movableObject.style.left = positionX + 'px';
   movableObject.style.top = positionY + 'px';

}
 // Event listener for keydown
 document.addEventListener('keydown', function(event) {

// Check which arrow key is pressed
   switch (event.key) {
     case 'ArrowUp':
       positionY -= stepSize;
       break;
     case 'ArrowDown':
       positionY += stepSize;
       break;
     case 'ArrowLeft':
       positionX -= stepSize;
       break;
     case 'ArrowRight':
       positionX += stepSize;
       break;
   }
// Update the position of the object
   updatePosition();

});



//second attempt(partial success just a few errors)
var container = document.getElementById('gameboard');

function gameBoard() {
  // Get the current position of the element
  var currentLeft = parseInt(movableObject.style.left) || 0;
  var currentTop = parseInt(movableObject.style.top) || 0;

  // Update the position based on arrow keys
  movableObject.style.left = (currentLeft + stepSize) % container.clientWidth + 'px';
  movableObject.style.top = (currentTop + stepSize) % container.clientHeight + 'px';
}

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      movableObject.style.top = (parseInt(movableObject.style.top) || 0) - stepSize + 'px';
      break;
    case 'ArrowDown':
      movableObject.style.top = (parseInt(movableObject.style.top) || 0) + stepSize + 'px';
      break;
    case 'ArrowLeft':
      movableObject.style.left = (parseInt(movableObject.style.left) || 0) - stepSize + 'px';
      break;
    case 'ArrowRight':
      movableObject.style.left = (parseInt(movableObject.style.left) || 0) + stepSize + 'px';
      break;
  }

gameBoard();
});

// Initial position update
gameBoard();


//the red piece .aka (eat)

var randomObject = document.getElementById('eat');

function getRandomPosition() {
  // Get the dimensions of the viewport
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  // Calculate random coordinates within the visible area
  var randomX = Math.floor(Math.random() * (viewportWidth - randomObject.clientWidth));
  var randomY = Math.floor(Math.random() * (viewportHeight - randomObject.clientHeight));

  return { x: randomX, y: randomY };
}

function placeRandomObject() {
  var randomPosition = getRandomPosition();

  // Set the position of the object
  randomObject.style.left = randomPosition.x + 'px';
  randomObject.style.top = randomPosition.y + 'px';
}

// Call the function to initially place the object
placeRandomObject();