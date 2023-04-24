let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
document.getElementById("count-el").innerText = count;
function increment(){
    count = count+1;
    countEl.textContent = count;
}
function save(){
    let countString = count + " - "
    saveEl.textContent += countString
    countEl.textContent = 0
    count = 0
}
