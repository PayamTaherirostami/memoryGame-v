const cardArray=[
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseberger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseberger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardsChosenIds = []
let cardsWon = []
let allChosenId = []

function creatBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
creatBoard () 

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId === optionTwoId){
        alert('You have clicked the same images!')
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
    }

    else if (cardChosen[0] == cardChosen[1]){
        alert('you found a match!')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
        allChosenId.push(optionOneId,optionTwoId)
    } else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("Sorry try again!")
    }
    resultDisplay.textContent = cardsWon.length 
    cardChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = "Congrats, you found them all!"
    }

}
function start () {
    
    const cards = document.querySelectorAll('#grid img')
    for (let i = 0; i < allChosenId.length; i++){
        cards[allChosenId[i]].setAttribute('src','images/blank.png')
    }
    allChosenId=[]
    cardsWon=[]
    resultDisplay.textContent = cardsWon.length 
}
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}
