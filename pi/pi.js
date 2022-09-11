function Init()
{
    digitPromptText = document.getElementById("digitPrompt")
    digitInField = document.getElementById("digitIn");
    newPrompt()
}

position = 0;
function guessed() 
{
    guess = digitInField.value;
    console.log(guess);
    if (guess == pi(position))
    {
        stats_correct();
        // feedback maybe fading green text
    } else
    {
        stats_incorrect();
        // feedback maybe fading red text
    }
    newPrompt();
}

function newPrompt()
{
    position = randomInRange(0,100);
    digitPromptText.innerHTML = `Digit at position ${position}:`;
}
function randomInRange(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function pi(position)
{
    return position*2;
}

function reqListener () {
    console.log(this.responseText);
  }
  
const req = new XMLHttpRequest();

req.addEventListener("load", reqListener);
req.open("GET", "digits.txt");
req.setRequestHeader('Content-Type', 'text/plain');
req.send();
