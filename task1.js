var timeUpdate = document.getElementById("button");
timeUpdate.addEventListener('click', textChange);
function textChange() {
    const element = document.getElementById("current_time");
    element.innerText = new Date();
}