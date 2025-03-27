let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);
const submit =  document.querySelector('#subt')
const userInput = document.querySelector('#guessField'); // yha sirf hamne userinput ko select kiya h 
const userGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let preGuess =[]
let numGuess = 1 

let playGame = true

if(playGame){
  submit.addEventListener('click', (e)=>{
    e.preventDefault()
    const guess = parseInt(userInput.value) // yha ham user se input lenge 
    console.log(guess)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert(`please enter a valid number`)
  }
  else if( guess < 1){
    alert(`please enter a positive number `)
  }
  else if(guess > 100){
    alert(`please enter a number less than 100`)
  }
  else{
    preGuess.push(guess) // here we push the user guess in the guess array
    if(numGuess>=10){ // here we check that if the user game is over or not
      displayGuess(guess) 
      displayMessage(`your game is over random number: ${randomNumber}`) // here we display the messaege and show the acutal number which user have to guess
      endGame() // finally call the end game fucntion
    }
    else{ // if upper else not execute which means user still have guesss 
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}


function checkGuess(guess){
     if(guess === randomNumber){
       displayMessage(`you guess it right`)
       endGame()
     }
     else if( guess < randomNumber){
       displayMessage(`your guess number is too low`)
     }
     else if( guess > randomNumber){
       displayMessage('your guess number is too high')
     }
}


function displayGuess(guess){
  userInput.value = ''  // hamne jo userinput se guess liya h hma use update kardenge ise cleanup method bhi bol skate h koy ki exctually me hame vlaue to kahli karni hi h
  userGuesses.innerHTML += `${guess}, `    //
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}


function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h>`
}


function endGame(){
   userInput.value =''
   userInput.setAttribute('disabled', '')
   p.classList.add('button')
   p.innerHTML ='<h2 id="newGame">Start new Game</h2>';
   startOver.appendChild(p)
   playGame = false
   newGame()
}


function newGame(){
  const newGmaeButton = document.querySelector('#newGame')
  newGmaeButton.addEventListener('click',(e)=>{
  randomNumber = parseInt(Math.random() * 100 + 1)
  preGuess =[]
  numGuess =1
  userGuesses.innerHTML= ''
  remaining.innerHTML = 10
  userInput.removeAttribute('disabled')
  startOver.removeChild(p);


  playGame = true
  })
}



