let version = "Version: 0.5.6"
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

    for (let i = 0; i<allTimeHighscores.length; i++) {
        const element = allTimeHighscores[i];
        if (timeElapsed < element || element < 0) 
        {
            //allTimeHighscores[i] = timeElapsed;
            allTimeHighscores.splice(i, 0, timeElapsed);
            allTimeHighscores.pop();

            //allTimehighscoreUsers[i] = user;
            allTimehighscoreUsers.splice(i, 0, user);
            allTimehighscoreUsers.pop();

            SaveNewHighscore(allTimeHighscores, allTimehighscoreUsers, true);
            break;
        }
    }

    for (let i = 0; i<dailyHighscores.length; i++) {
        const element = dailyHighscores[i];
        if (timeElapsed < element || element < 0) 
        {
            //dailyHighscores[i] = timeElapsed;
            dailyHighscores.splice(i, 0, timeElapsed);
            dailyHighscores.pop();
            //dailyHighscoreUsers[i] = user;
            dailyHighscoreUsers.splice(i, 0, user);
            dailyHighscoreUsers.pop();
            SaveNewHighscore(dailyHighscores, dailyHighscoreUsers, false);
            break;
        }
    }
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
    document.getElementById("version").innerHTML = version;
    document.getElementById("reactTime").innerHTML = "You got: " + NaN + "ms"; 
    //document.getElementById("pbTime").innerHTML = "Your best: " + timeElapsed.toString() + "ms"; 
    btn = document.getElementById("startButton");
    box = document.getElementById("stopButton");
    MoveStopButtonRandomly();
    btn.addEventListener("click", () => {
        MoveStopButtonRandomly();
    });

    console.log(Days());
}

function Days(){
    var now = new Date();
    return fullDaysSinceEpoch = Math.floor(now/8.64e7);
}

function MoveStopButtonRandomly(params) {
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    let randY = Math.floor((Math.random() * height) + 1);
    let randX = Math.floor((Math.random() * width) + 1);
    box.style.top = randY + "px";
    box.style.right = randX + "px";
}

let allTimeHighscores;
let allTimehighscoreUsers;
let dailyHighscores;
let dailyHighscoreUsers;
function LoadNewHighscore(data){
    console.log(data);
    allTimeHighscores = data.allTimes;
    allTimehighscoreUsers = data.allUsers;
    dailyHighscores = data.dailyTimes;
    dailyHighscoreUsers = data.dailyUsers;
    let dailyDay = data.dailyDay;
    console.log(dailyHighscoreUsers[1]);

    const aDiv = document.getElementById("allTimeBoardDiv");
    const dDiv = document.getElementById("dailyBoardDiv");
    
    aDiv.innerHTML = `<b>All Time Leaderboard:</b> <br>
     1. ${allTimeHighscores[0]}ms by ${allTimehighscoreUsers[0]} <br>
     2. ${allTimeHighscores[1]}ms by ${allTimehighscoreUsers[1]} <br>
      3. ${allTimeHighscores[2]}ms by ${allTimehighscoreUsers[2]} <br>
       4. ${allTimeHighscores[3]}ms by ${allTimehighscoreUsers[3]} <br>
        5. ${allTimeHighscores[4]}ms by ${allTimehighscoreUsers[4]}`
    
    dDiv.innerHTML = `<b>Daily Leaderboard: </b> <br>
     1. ${dailyHighscores[0]}ms by ${dailyHighscoreUsers[0]} <br>
      2. ${dailyHighscores[1]}ms by ${dailyHighscoreUsers[1]} <br>
       3. ${dailyHighscores[2]}ms by ${dailyHighscoreUsers[2]} <br>`
}

let user;
function LoggedIn(info){
    user = info.displayName;
    console.log("Wassup; " + user);
    document.getElementById("userInfo").innerHTML = "Logged In as " + user;
}

function LoggedOut(){
    user = null;
    console.log("Logged Out")
    document.getElementById("userInfo").innerHTML = "Logged Out";
}
