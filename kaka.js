
let cookieCount = 0;
let muffinCount = 0;
let cookieCountElement;
let muffinCountElement;
let upgradeElement1;
function Init() {
    cookieCountElement = document.getElementById("cce");
    muffinCountElement = document.getElementById("mce");
    upgradeElement1 = document.getElementById("ut1");
}

function ClickCookie() {
    cookieCount++;
    cookieCountElement.innerHTML = cookieCount + " Cookies";
}

function ClickMuffin() {
    muffinCount++;
    muffinCountElement.innerHTML = muffinCount + " Muffins";
}

let up1Owned = 0;
function Upgrade(index) {
    if (muffinCount >= 100) 
    {
        muffinCount -= 100;
        up1Owned++;
        muffinCountElement.innerHTML = muffinCount + " Muffins";
        upgradeElement1.innerHTML = "Cost:100 Owned:" + up1Owned;
    }
}