console.log("Project 1")


//first create an array of my 'cards' aka all my images
const imagesArray = [
    {name:"purple", img: "https://bit.ly/2OoGT5G"},
    {name:"tulip", img: "https://bit.ly/3jAsoHB"},
    {name:"rose", img: "https://bit.ly/3cXvPH1"}
]

//the div holding my card image is the grid-item
const gridItemImages = document.getElementsByClassName('plant-img-front')

const images = [...imagesArray] //The three dots in JavaScript are spread / rest operator... -- Thank you stackoverflow.com 

//now time for my loop to add my eventlisteners to each of my cardImages
for(let i = 0; i < images.length; i++){
    images[i].addEventListener('click', displayGridImages)
    console.log(images[i])
}

// i need to actually display the cards now:

const displayGridImages = ()=>{
    this.classList.toggle('open')
    this.classList.toggle('show')
    this.classList.toggle('disabled')
}

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  console.log(shuffle(images))


const wholeBoard = document.querySelector('grid-container')

function startGame(){
let shuffledCards = shuffle(images)

for(let i = 0; i < shuffledCards.length; i++){
    [].forEach.call(shuffledCards, function(item){
        wholeBoard.appendChild(item)
    })
}
}

window.onload = startGame()





// let displayImages = ()=>{
//     this.classList.toggle('show')
//     this.classList.toggle('open')
// }

// function shuffle(array){
//     const currentImages = array.length, randomIndex

//     while(currentImages !== 0){
//         randomIndex = Math.floor(Math.random()* currentIndex)
//         currentIndex -= 1
//         array[currentIndex] = array[randomIndex]
//     }
//     return array
// }