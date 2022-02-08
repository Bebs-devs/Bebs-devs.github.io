
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
    
    //localStorage.clear;
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

    console.log(localStorage.SmuffinCount);
    muffinCount = parseInt( localStorage.SmuffinCount );
    UpdateMuffinText();
    LoadUpgrades();

    console.log("INIT: " + muffinCount);

    setInterval(() => {
        muffinCount += up1Owned;
        muffinCount += up2Owned*50;
        muffinCount += up3Owned*10000;
        muffinCount += up4Owned*10000000;
        muffinCountElement.innerHTML = muffinCount.toString() + " Muffins";

        localStorage.SmuffinCount = muffinCount;
        console.log("stored muffins");
        console.log("LOOP");
    }, 1000);
}

function UpdateMuffinText() {
    muffinCountElement.innerHTML = muffinCount.toString() + " Muffins";
}
function ClickCookie() {
    cookieCount ++;
    cookieCountElement.innerHTML = cookieCount + " Cookies";
}

function ClickMuffin() {
    console.log("clicked muffin");
    muffinCount++;
    muffinCount += cUp1Owned;
    muffinCount += cUp2Owned*5;
    muffinCount += cUp3Owned*1000;
    muffinCount += cUp4Owned*1000000;
    UpdateMuffinText();
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
                localStorage.Sup1Owned = up1Owned.toString();
                UpdateMuffinText();
                upgradeElement1.innerHTML = "Cost:100 Owned:" + up1Owned;
            }  
            break;
        case 2:
            if (muffinCount >= 5000) 
            {
                muffinCount -= 5000;
                up2Owned++;
                localStorage.Sup2Owned = up2Owned.toString();
                UpdateMuffinText();
                upgradeElement2.innerHTML = "Cost:5000 Owned:" + up2Owned;
            }
            break;
        case 3:
            if (muffinCount >= 1000000) 
            {
                muffinCount -= 1000000;
                up3Owned++;
                localStorage.Sup3Owned = up3Owned.toString();
                UpdateMuffinText();
                upgradeElement3.innerHTML = "Cost:1m Owned:" + up3Owned;
            }
        case 4:
            if (muffinCount >= 1000000000) 
            {
                muffinCount -= 1000000000;
                up4Owned++;
                localStorage.Sup4Owned = up4Owned.toString();
                UpdateMuffinText();
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
                localStorage.ScUp1Owned = cUp1Owned.toString();
                UpdateMuffinText();
                clickUpgradeElement1.innerHTML = "Cost:100 Owned:" + cUp1Owned;
            }  
            break;
        case 2:
            if (muffinCount >= 5000) 
            {
                muffinCount -= 5000;
                cUp2Owned++;
                localStorage.ScUp2Owned = cUp2Owned.toString();
                UpdateMuffinText();
                clickUpgradeElement2.innerHTML = "Cost:5000 Owned:" + cUp2Owned;
            }
            break;
        case 3:
            if (muffinCount >= 1000000) 
            {
                muffinCount -= 1000000;
                cUp3Owned++;
                localStorage.ScUp3Owned = cUp3Owned.toString();
                UpdateMuffinText();
                clickUpgradeElement3.innerHTML = "Cost:1m Owned:" + cUp3Owned;
            }
        case 4:
            if (muffinCount >= 1000000000) 
            {
                muffinCount -= 1000000000;
                cUp4Owned++;
                localStorage.ScUp4Owned = cUp4Owned.toString();
                UpdateMuffinText();
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
        UpdateMuffinText();
}

function ABC() {console.log("ALPHABET"); nb}

function SaveUpgrades() {
    
}

function LoadUpgrades() {
    let t1 = parseInt( localStorage.Sup1Owned );
    upgradeElement4.innerHTML = "Cost:100 Owned:" + ((t1 != NaN) ? t1 : 0);
    let t2 = parseInt( localStorage.Sup2Owned );
    upgradeElement4.innerHTML = "Cost:5000 Owned:" + ((t2 != NaN) ? t2 : 0);
    let t3 = parseInt( localStorage.Sup3Owned );
    upgradeElement4.innerHTML = "Cost:1m Owned:" + ((t3 != NaN) ? t3 : 0);
    let t4 = parseInt( localStorage.Sup4Owned );
    upgradeElement4.innerHTML = "Cost:1b Owned:" + ((t4 != NaN) ? t4 : 0);

    let tc1 = parseInt( localStorage.ScUp1Owned );
    clickUpgradeElement1.innerHTML = "Cost: 100 Owned: " + ((tc1 != NaN) ? tc1 : 0);
    console.log(tc1);
    let tc2 = parseInt( localStorage.ScUp2Owned );
    clickUpgradeElement2.innerHTML = "Cost: 5000 Owned: " + ((tc2 != NaN) ? tc2 : 0);
    let tc3 = parseInt( localStorage.ScUp3Owned );
    clickUpgradeElement3.innerHTML = "Cost: 1m Owned: " + ((tc3 != NaN) ? tc3 : 0);
    let tc4 = parseInt( localStorage.ScUp4Owned );
    clickUpgradeElement4.innerHTML = "Cost: 1b Owned: " + ((tc4 != NaN) ? tc4 : 0);
}
    