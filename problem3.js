/* Put the tail in the donkey 
Create a function called donkeyGame (outer Function) with a parameter called amountOfTries and this function should return a 
new function (inner function) that takes a parameter called ‘guess’. 
In the outer function, create a variable called ‘tail’ that contains a random number between 0 and 10 and another variable called ‘tries’ initialized to 0. 

In the inner function, we must check if the guess is equal to the tail value you must return the following string: ‘You hit the mark!’ 
if guess is less than tail you must return ‘The tail is above’ and if guess is higher than ‘The tail is below’. 
Finally, If the amount of function calls to the inner function is equal to the number in amountOfTries then you must return: ‘You have no tries left’  */

function donkeyGame(value){
    let amountOfTries = value;
    let tail = Math.floor(Math.random() * 10)+1;
    let tries = 0;
    do{
        tries = tries +1;
        console.log(tail)
        console.log(tries + " number of tries")
        if(tries <= amountOfTries)
        {
            return inner
        }
        else{
            console.log("you are out of tries")
        }

    }while(amountOfTries >= tries)



    function inner(guess){
        if(guess == tail){
            console.log("You hit the mark!")
            tries = tries +1;
        }
        else if(guess < tail){
            console.log("The tail is above")
        }else if(guess <= 0){
            console.log("input a positive number")
        }else{
            console.log("the tail is below")
        }
    }
}

donkeyGame(5)(6)