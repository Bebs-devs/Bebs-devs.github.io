
let cookieCount = 0;
let muffinCount = 1000000;
let cookieCountElement;
let muffinCountElement;
let upgradeElement1;
let upgradeElement2;
let upgradeElement3;
function Init() {
    cookieCountElement = document.getElementById("cce");
    muffinCountElement = document.getElementById("mce");
    upgradeElement1 = document.getElementById("ut1");
    upgradeElement2 = document.getElementById("ut2");
    upgradeElement3 = document.getElementById("ut3");

    setInterval(() => {
        muffinCount += up1Owned;
        muffinCount += up2Owned*50;
        muffinCount += up3Owned*10000;
        muffinCountElement.innerHTML = muffinCount + " Muffins";
        console.log("LOOP");
    }, 1000);
}

function ClickCookie() {
    cookieCount++;
    cookieCountElement.innerHTML = cookieCount + " Cookies";
}

function ClickMuffin() {
    console.log("clicked muffin");
    muffinCount++;
    muffinCountElement.innerHTML = muffinCount + " Muffins";
}

let up1Owned = 0;
let up2Owned = 0;
let up3Owned = 0;
function Upgrade(index) {
    switch (index) {
        case 1:
            if (muffinCount >= 100) 
            {
                muffinCount -= 100;
                up1Owned++;
                muffinCountElement.innerHTML = muffinCount + " Muffins";
                upgradeElement1.innerHTML = "Cost:100 Owned:" + up1Owned;
            }  
            break;
        case 2:
            if (muffinCount >= 5000) 
            {
                muffinCount -= 5000;
                up2Owned++;
                muffinCountElement.innerHTML = muffinCount + " Muffins";
                upgradeElement2.innerHTML = "Cost:5000 Owned:" + up2Owned;
            }
            break;
        case 3:
            if (muffinCount >= 1000000) 
            {
                muffinCount -= 1000000;
                up3Owned++;
                muffinCountElement.innerHTML = muffinCount + " Muffins";
                upgradeElement3.innerHTML = "Cost:1m Owned:" + up3Owned;
            }
            break;
        default:
            break;
    }
}

function BakeMuffins(amount)
{
        muffinCount += amount;
        muffinCountElement.innerHTML = muffinCount + " Muffins";
}

function ABC() {console.log("ALPHABET"); nb}
    