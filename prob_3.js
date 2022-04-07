/* Put the tail in the donkey 
Create a function called donkeyGame (outer Function) with a parameter called amountOfTries and this function should return a 
new function (inner function) that takes a parameter called ‘guess’. 
In the outer function, create a variable called ‘tail’ that contains a random number between 0 and 10 and another variable called ‘tries’ initialized to 0. 

In the inner function, we must check if the guess is equal to the tail value you must return the following string: ‘You hit the mark!’ 
if guess is less than tail you must return ‘The tail is above’ and if guess is higher than ‘The tail is below’. 
Finally, If the amount of function calls to the inner function is equal to the number in amountOfTries then you must return: ‘You have no tries left’  */

function donkeyGame(amountOfTries) {
  let tail = Math.floor(Math.random() * 10) + 1;
  let tries = 0;

  return inner;
  function inner(guess) {
    while (tries <= amountOfTries) {
      tries++;
      console.log("tries " + tries);
      console.log("tail = " + tail);
      console.log("guess = " + guess);
      if (guess === tail) {
        return "You hit the mark!";
      } else if (guess < tail) {
        return "The tail is above";
      } else {
        return "the tail is below";
      }
    }
    return "Out of tries";
  }
}

//donkeyGame(5)(4)
//let inputTries = 2;
const amount = donkeyGame(3);

console.log(amount(10));
console.log(amount(4));
console.log(amount(3));
console.log(amount(2));
console.log(amount(2));
console.log(amount(2));
