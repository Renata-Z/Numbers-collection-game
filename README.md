# Numbers collection game

Determine if you can reach the last element on a numbers array, according to these rules:

- You start at the first element.
- Current element value indicates how many steps you can take at most (example: if the value is 3 you can take 0, 1, 2 or 3 steps).
- You have to end up on the last array element.

The user can modify numbers collection which are being used in the game.

## Tech Stack:

- TypeScript
- React
- SASS
- HTML

## Getting started:

- npm install
- npm start

## Testing:
- npm test

## Possible improvements:
- update inputs value after adding a number to the array.
- solve vulnerability to infinite loop, e.g. when use [ 2, 2, -2, 1 ] as input.
- improve the UI to create a more convenient way to enter numbers (now one number at a time, if you do a mistake, you have to clear everything and start over).
- improve the algorithm to provide most efficient path.
