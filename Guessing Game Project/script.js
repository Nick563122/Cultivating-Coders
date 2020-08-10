/*
Make a guessing game function using the DOM and Javascript! You shouldn't need to
modify the HTML at all. You may modify the CSS by hand to improve the look of 
your game.

We'll be implementing a (hopefully better-looking) version of this game here:

https://www.funbrain.com/games/guess-the-number

Do this in steps:

1. Create a div with an id of "game"
2. Append that div to the body. 
3. Make a button with an id of 'start'
4. Append that button to the div.
5. Add a listener so that when the button is clicked,  your game() function runs.
Inside the game() function, which should take in no inputs...
6. Create an img tag and add it below the button tag. This should contain an image
    of some kind of character who will act as the "host" to your game. This can be
    anything you want, from a honey badger to LeBron James to a Scandinavian 
    viking.
7. Create an input tag and add that below the img tag. This will be where the user 
    types in their guess.
8. Create a button tag that should display to the right of the input tag.  
    Add a listener so that when that button is clicked, the user officially 
    'makes' a guess.
9. Store a random number between 1 and 100 as the actual 'right' answer.
10. Initialize a loop of some kind that should always run UNLESS the user wins
11. When the button is clicked, check the user's guess against the right answer. 
    Tell the user if their guess is "too high" or "too low". If the user guesses 
    correctly, let them know they have won and end the game by breaking the loop. 
    This information should be displayed on the document itself somehow, 
    perhaps using innerText or by appending a new tag to hold this information.*/ 

    //1&2
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let body = document.querySelector("body");

let div = document.createElement("div");
div.id = "game";
body.appendChild(div);

    //3&4
let button = document.createElement("button");
button.innerHTML = "Start";
button.id = "start";
div.appendChild(button);
let div2 = document.createElement("div");
div2.id = "gameStart";
body.appendChild(div2);
let hostAbsent = true;


button.onclick = function game(){
    image = document.createElement("img");
    image.src = "http://placekitten.com/200/200";
    image.style.height = "200px";
    image.style.width = "200px";
    image.style.display = "block";
    image.style.marginleft = "250px"; 
    body.appendChild(image);
    let input = document.createElement("input");
    div.appendChild(input);
    div.removeChild(start);
   
    
    let para = document.createElement('p');
    para.innerText = "Please guess a number between 1 - 100";
    body.appendChild(para);
    para.style.fontWeight = 700;

    let container = document.createElement("div");
    let guessList = document.createElement("span");
    guessList.innerText = input.value;
    container.appendChild(guessList);

    let button2 = document.createElement("button");
    button2.innerHTML = "Guess";
    button2.id = "guess";
    div.appendChild(button2);
    button2.onclick = function takeGuess(){
        
        let counter = 0;
        while (input.value != randomNumber && counter < 10){
            counter++;

            if (input.value > randomNumber) {
                
                div2.innerText = "Your guess is to high ";
                
                
            }

            else if (input.value < randomNumber){
                div2.innerText = "Your guess is to low ";
                
                
            }

            else {
                div2.innerText = "Hurray! You are correct! ";
                break;
            }
            
        }
        
    }
  
}