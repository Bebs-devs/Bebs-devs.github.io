function GetEquation() {
    document.getElementById("equation").innerHTML = "e";
}

function GetAnswer() {
    document.getElementById("equationAnswer").innerHTML = Ord(7,73);
}

function Ord(n,a) 
{   
    console.log(`n:${n} and a:${a}`);
    //a**1-x-infinity mod n
    let res = 0; 
    let perhapsX = 1;
    while(perhapsX < 100) 
    {
        res = Math.pow(a,perhapsX) % n;
        console.log(`For x=${perhapsX} is ${res}`);
        if (res == 1) 
        {
            return perhapsX;
        }
        perhapsX++;
    }
}