
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

    muffinImg = document.getElementById("muffinImg");

    console.log(localStorage.SmuffinCount);
    muffinCount = parseInt( localStorage.SmuffinCount );
    if (isNaN(muffinCount)) {muffinCount=0;}
    UpdateMuffinText();
    LoadUpgrades();

    console.log("INIT: " + muffinCount);

    setInterval(() => {
        muffinCount += up1Owned;
        muffinCount += up2Owned*50;
        muffinCount += up3Owned*10000;
        muffinCount += up4Owned*10000000;
        if (isNaN(muffinCount)) {muffinCount=0;}
        UpdateMuffinText();
        
        localStorage.SmuffinCount = muffinCount;
        console.log("LOOP "+ muffinCount);
    }, 1000);
}

var lastThousand = 0;
function UpdateMuffinText() {
    muffinCountElement.innerHTML = muffinCount.toString() + " Muffins";
    muffinThousand = Math.floor(Math.log10(muffinCount) / 3) + 1;
    if (muffinThousand != lastThousand) 
    {
        path = `muffinsUpscaled/muffin_${muffinThousand}.png`
        muffinImg.src = path;
        lastThousand = muffinThousand;
        console.log("NEW MUFFIN");
    }
    //muffinImg.src = "hackanm.gif";
    //TODO
    // change way of updating from every loop to when change
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
    if (isNaN(muffinCount)) {muffinCount=0;}
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

function SecretMuffinCheat(amount)
{
        muffinCount += amount;
        UpdateMuffinText();
}

function ABC() {console.log("ALPHABET"); nb}

function SaveUpgrades() {
    
}

function LoadUpgrades() {
    let t1 = parseInt( localStorage.Sup1Owned );
    up1Owned = ((!isNaN(t1)) ? t1 : 0);
    upgradeElement1.innerHTML = "Cost:100 Owned:" + up1Owned;

    let t2 = parseInt( localStorage.Sup2Owned );
    up2Owned = ((!isNaN(t2)) ? t2 : 0);
    upgradeElement2.innerHTML = "Cost:5000 Owned:" + up2Owned;

    let t3 = parseInt( localStorage.Sup3Owned );
    up3Owned = ((!isNaN(t3)) ? t3 : 0);
    upgradeElement3.innerHTML = "Cost:1m Owned:" + up3Owned;

    let t4 = parseInt( localStorage.Sup4Owned );
    up4Owned = ((!isNaN(t4)) ? t4 : 0);
    upgradeElement4.innerHTML = "Cost:1b Owned:" + up4Owned;


    let tc1 = parseInt( localStorage.ScUp1Owned );
    cUp1Owned = ((!isNaN(tc1)) ? tc1 : 0);
    clickUpgradeElement1.innerHTML = "Cost:100 Owned: " + cUp1Owned;

    let tc2 = parseInt( localStorage.ScUp2Owned );
    cUp2Owned = ((!isNaN(tc2)) ? tc2 : 0);
    clickUpgradeElement2.innerHTML = "Cost:5000 Owned: " + cUp2Owned;

    let tc3 = parseInt( localStorage.ScUp3Owned );
    cUp3Owned = ((!isNaN(tc3)) ? tc3 : 0);
    clickUpgradeElement3.innerHTML = "Cost:1m Owned: " + cUp3Owned;

    let tc4 = parseInt( localStorage.ScUp4Owned );
    cUp4Owned = ((!isNaN(tc4)) ? tc4 : 0);
    clickUpgradeElement4.innerHTML = "Cost:1b Owned: " + cUp4Owned;

}
    