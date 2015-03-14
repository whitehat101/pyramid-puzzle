// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let RandomPuzzle = function*(dimensions, depth) {
  while (true) {
    let puzzle = []
    for (let i = 0; i < dimensions; i++)
      puzzle.push(getRandomInt(0,depth))
    yield puzzle
  }
}

export default RandomPuzzle
