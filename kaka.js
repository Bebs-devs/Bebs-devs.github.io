
let cookieCount = 0;
let cookieCountElement;
function Init() {
    cookieCountElement = document.getElementById("cce");
}

function Click() {
    cookieCount++;
    cookieCountElement.innerHTML = cookieCount + " Cookies";
}