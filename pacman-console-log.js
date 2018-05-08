// console.log('Pac-Man eats ghosts for lunch');

var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log('There are ' + ghosts.length + ' ghosts');
console.log('Their names are; ');
console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);

console.log('objects are setup when they are first defined')
console.log(ghosts);

// ruby class equivalent in JS
console.log('These are the attributes of the inky instance')
var inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);

console.log('');

// you can retrieve the values in your object by using . ir [] notation
var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange'};
// . notation
console.log(ghosts.inky);
console.log(ghosts.blinky);  

// square bracket notation
console.log(ghosts['inky']);
console.log(ghosts['blinky']);