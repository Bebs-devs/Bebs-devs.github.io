
let cookieCount = 0;
let muffinCount = 0;
let cookieCountElement;
let muffinCountElement;
let upgradeElement1;
let upgradeElement2;
let upgradeElement3;
let upgradeElement4;
let clickUpgradeElement1;
let clickUpgradeElement2;
let clickUpgradeElement3;
let clickUpgradeElement4;
function Init() {
    muffinCount = parseInt( localStorage.getItem(muffins) );
    cookieCountElement = document.getElementById("cce");
    muffinCountElement = document.getElementById("mce");
    upgradeElement1 = document.getElementById("ut1");
    upgradeElement2 = document.getElementById("ut2");
    upgradeElement3 = document.getElementById("ut3");
    upgradeElement4 = document.getElementById("ut4");
    clickUpgradeElement1 = document.getElementById("cUt1");
    clickUpgradeElement2 = document.getElementById("cUt2");
    clickUpgradeElement3 = document.getElementById("cUt3");
    clickUpgradeElement4 = document.getElementById("cUt4");

    setInterval(() => {
        muffinCount += up1Owned;
        muffinCount += up2Owned*50;
        muffinCount += up3Owned*10000;
        muffinCount += up4Owned*10000000;
        muffinCountElement.innerHTML = muffinCount + " Muffins";
        localStorage.setItem(muffins, muffinCount.toString());
        console.log("LOOP");
    }, 1000);
}

function ClickCookie() {
    cookieCount ++;
    cookieCountElement.innerHTML = cookieCount + " Cookies";
}

function ClickMuffin() {
    console.log("clicked muffin");
    muffinCount++;
    muffinCount += cUp1Owned;
    muffinCount += cUp2Owned*50;
    muffinCount += cUp3Owned*10000;
    muffinCount += cUp4Owned*1000000;
    muffinCountElement.innerHTML = muffinCount + " Muffins";
}

let up1Owned = 0;
let up2Owned = 0;
let up3Owned = 0;
let up4Owned = 0;
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
        case 4:
            if (muffinCount >= 1000000000) 
            {
                muffinCount -= 1000000000;
                up4Owned++;
                muffinCountElement.innerHTML = muffinCount + " Muffins";
                upgradeElement4.innerHTML = "Cost:1b Owned:" + up4Owned;
            }
            break;
        default:
            break;
    }
}
let cUp1Owned = 0;
let cUp2Owned = 0;
let cUp3Owned = 0;
let cUp4Owned = 0;
function ClickUpgrade(index) {
    switch (index) {
        case 1:
            if (muffinCount >= 100) 
            {
                muffinCount -= 100;
                cUp1Owned++;
                muffinCountElement.innerHTML = muffinCount + " Muffins";
                clickUpgradeElement1.innerHTML = "Cost:100 Owned:" + cUp1Owned;
            }  
            break;
        case 2:
            if (muffinCount >= 5000) 
            {
                muffinCount -= 5000;
                cUp2Owned++;
                muffinCountElement.innerHTML = muffinCount + " Muffins";
                clickUpgradeElement2.innerHTML = "Cost:5000 Owned:" + cUp2Owned;
            }
            break;
        case 3:
            if (muffinCount >= 1000000) 
            {
                muffinCount -= 1000000;
                cUp3Owned++;
                muffinCountElement.innerHTML = muffinCount + " Muffins";
                clickUpgradeElement3.innerHTML = "Cost:1m Owned:" + cUp3Owned;
            }
        case 4:
            if (muffinCount >= 1000000000) 
            {
                muffinCount -= 1000000000;
                cUp4Owned++;
                muffinCountElement.innerHTML = muffinCount + " Muffins";
                clickUpgradeElement4.innerHTML = "Cost:1m Owned:" + cUp4Owned;
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
    