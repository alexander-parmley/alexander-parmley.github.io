var treasLocation = Math.floor((Math.random()*9))
var bombLocation = Math.floor((Math.random()*9))
var countEl = document.getElementById("click-counter")

if(bombLocation==treasLocation){
    var bombLocation = Math.floor((Math.random()*9))
}

var clickCounter = 3;

countEl.innerHTML = clickCounter

const treasureFinder = (location) => {

    if(clickCounter === 0) {
        alert("You lose!")
    } else if(location === bombLocation) {
        document.getElementById(location).innerHTML = "&#x2620"
        alert("You lose!")
        // window.addEventListener('click',()=>{ window.location.reload()})
        // window.location.reload()
        countEl=0
    } else if(location === treasLocation) {
        document.getElementById(location).innerHTML = "&#x1f308"
        alert("You win!")
        // window.addEventListener('click',()=>{ window.location.reload()})
        // window.location.reload()
        countEl=0
    } else{
        document.getElementById(location).innerHTML = "&#x1f332"
        clickCounter -= 1
        countEl.innerHTML = clickCounter
    }
}