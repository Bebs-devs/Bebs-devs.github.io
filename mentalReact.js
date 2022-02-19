let timeElapsed = 0;
let startTime = Date.now();
function StartTimer() {
    timeElapsed = 0;
    startTime = Date.now();
}
function StopTimer() {
    timeElapsed = Date.now() - startTime;
    document.getElementById("reactTime").innerHTML = timeElapsed.toString() + "ms"; 
}



function Init() {
    const btn = document.getElementById("startButton");
    const box = document.getElementById("stopButton");
    btn.addEventListener("click", () => {
        const height = document.documentElement.clientHeight;
        const width = document.documentElement.clientWidth;
        let randY = Math.floor((Math.random() * height) + 1);
        let randX = Math.floor((Math.random() * width) + 1);
        box.style.top = randY + "px";
        box.style.right = randX + "px";
    });
}
