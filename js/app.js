console.log("Project 1 JS")


let flowers = document.getElementsByClassName("flowers")
let flowerCards = [...flowers] //  thank you https://dev.to/sagar/three-dots---in-javascript-26ci
const flowerUl = document.getElementById("all-flower-cards")
let matchedFlower = document.getElementsByClassName("match")
let clickedCards = []

function shuffleIcons(flowerCards) {
    let currentNum = flowerCards.length, tempValue, randomIcon
    while (currentNum !== 0) {
        randomIcon = Math.floor(Math.random() * currentNum)
        currentNum -= 1
        tempValue = flowerCards[currentNum]
        flowerCards[currentNum] = flowerCards[randomIcon]
        flowerCards[randomIcon] = tempValue
    }
    return flowerCards
}
//console.log(flowerCards)

document.body.onload = startGame()

function startGame(){
    let clickedCards = []
    flowerCards = shuffleIcons(flowerCards)
        for (let i = 0; i < flowerCards.length; i++){
            flowerUl.innerHTML = ""
              clickedCards.forEach.call(flowerCards, function(icon) {
                  flowerUl.appendChild(icon)
            })
        flowerCards[i].classList.remove("show", "open", "match", "disabled")
     }
}
startGame()

const displayCard = function (){
    this.classList.toggle("open")
    this.classList.toggle("show")
    this.classList.toggle("disabled")
}

function cardOpen(event) { // I cant get this to reach the type of my images!!!!!
    clickedCards.push(event.target)
    let length = clickedCards.length

        if(length === 2){
            //console.log(clickedCards)
         if(clickedCards[0].src === clickedCards[1].src){
             console.log('Found match')
                matched()
            }else {
                console.log('No match found')
                unmatched()
            }
    }
}
//for matching cards!!
function matched(){
    clickedCards[0].classList.add("match", "disabled")
    clickedCards[1].classList.add("match", "disabled")
    clickedCards[0].classList.remove("show", "open", "no-event")
    clickedCards[1].classList.remove("show", "open", "no-event")
    clickedCards = []
}

// no match!!!
function unmatched(){
    clickedCards[0].classList.add("unmatched")
    clickedCards[1].classList.add("unmatched")
    disable()
    setTimeout(function(){
        clickedCards[0].classList.remove("show", "open", "no-event","unmatched")
        clickedCards[1].classList.remove("show", "open", "no-event","unmatched")
        enable()
        clickedCards = []
    }, 1000)
}

for (let j = 0; j < flowerCards.length; j++){
    flowers = flowerCards[j]
    flowers.addEventListener("click", displayCard) 
    flowers.addEventListener("click", cardOpen)
}

function disable(){
    Array.prototype.filter.call(flowerCards, function(flowers){
        flowers.classList.add('disabled')
    })
}

function enable(){
    Array.prototype.filter.call(flowerCards, function(flowers){
        flowers.classList.remove('disabled')
        for(let j = 0; j < matchedFlower.length; j++){
            matchedFlower[j].classList.add("disabled")
        } 
     })
}