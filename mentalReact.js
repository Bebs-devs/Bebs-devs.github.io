
let timeElapsed;
let startTime = Date.now();
function StartTimer() {
    timeElapsed = 0;
    startTime = Date.now();
}
function StopTimer() {
    timeElapsed = Date.now() - startTime;
    document.getElementById("reactTime").innerHTML = "You got: " + timeElapsed.toString() + "ms"; 
    //document.getElementById("pbTime").innerHTML = "Your best: " + timeElapsed.toString() + "ms"; 
    document.getElementById("highscoreTime").innerHTML = "WORLD RECORD: " + highscore + "ms"; 

    if (timeElapsed < highscore) {SaveNewHighscore(timeElapsed, user);}
}

let SaveNewHighscore;
function SendSaveFunction (func){
    SaveNewHighscore = func;
}

let logIO;
function SendLogIOFunction (func){
    logIO = func;
}

function LogIn(){
    logIO(true);
}
function LogOut(){
    logIO(false);
}

let btn;
let box;
function Init() {
    document.getElementById("reactTime").innerHTML = "You got: " + NaN + "ms"; 
    //document.getElementById("pbTime").innerHTML = "Your best: " + timeElapsed.toString() + "ms"; 
    document.getElementById("highscoreTime").innerHTML = "WORLD RECORD: " + NaN + "ms by null"; 
    btn = document.getElementById("startButton");
    box = document.getElementById("stopButton");
    MoveStopButtonRandomly();
    btn.addEventListener("click", () => {
        MoveStopButtonRandomly();
    });

    
}

function MoveStopButtonRandomly(params) {
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    let randY = Math.floor((Math.random() * height) + 1);
    let randX = Math.floor((Math.random() * width) + 1);
    box.style.top = randY + "px";
    box.style.right = randX + "px";
}

let highscore;
function LoadNewHighscore(data){
    console.log(data);
    highscore = data.time;
    console.log(highscore);
    document.getElementById("highscoreTime").innerHTML = "WORLD RECORD: " + highscore + "ms by " + user; 
}

let user;
function LoggedIn(info){
    user = info.displayName;
    console.log("Wassup; " + user);
    document.getElementById("userInfo").innerHTML = "Logged In as " + info.displayName;
}

function LoggedOut(){
    user = null;
    console.log("Logged Out")
    document.getElementById("userInfo").innerHTML = "Logged Out";
}
