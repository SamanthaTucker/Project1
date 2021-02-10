console.log("Project 1")

let cardArray = [
    {name:"purple", img: "https://bit.ly/2OoGT5G"},
    {name:"tulip", img: "https://bit.ly/3jAsoHB"},
    {name:"rose", img: "https://bit.ly/3cXvPH1"}
]

let mainGridImages = document.querySelectorAll('.grid-item')

let restartButton = document.querySelector('.restart-button')

let cardsId = []
let cardsSelected = []


document.addEventListener("DOMContentLoaded", ()=>{
    createGameGrid(grid)
})
