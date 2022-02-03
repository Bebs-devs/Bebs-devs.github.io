
let cookieCount = 0;
let muffinCount = 0;
let cookieCountElement;
let muffinCountElement;
function Init() {
    cookieCountElement = document.getElementById("cce");
    muffinCountElement = document.getElementById("mce");
}

function ClickCookie() {
    cookieCount++;
    cookieCountElement.innerHTML = cookieCount + " Cookies";
}

function ClickMuffin() {
    muffinCount++;
    muffinCountElement.innerHTML = muffinCount + " Muffins";
}