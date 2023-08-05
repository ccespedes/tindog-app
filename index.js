import newDogs from './data.js'

import Dog from './Dog.js'

let dogs = newDogs
let availableDogs = []
let dog = ''
let isWaiting = false;

let dogContainer = document.getElementById('dog-container')

function checkAvailableDogs() {
    availableDogs = dogs.filter(dog => !dog.hasBeenSwiped).map(dog => dog.name)
}

function getNextDog() {
    checkAvailableDogs()
    const dogToFind = availableDogs[0]
    const newDog = dogs.findIndex(dog => dog.name === dogToFind)
    dog = new Dog(dogs[newDog])
    document.getElementById('dog-container').innerHTML = dog.getDogHtml()
}

function setSwiped(status) {
    isWaiting = true
    const dogToFind = availableDogs.shift()

    dogs.map(dog => {
        if (dog.name === dogToFind) {
            dog.hasBeenSwiped = true
            dog.hasBeenLiked = status
        }
    })

    dogContainer.innerHTML = dog.showStatusHtml(status)
    if (availableDogs.length > 0) { // if still more dogs
        setTimeout(() => {
            getNextDog()
            isWaiting = false

        }, 1000)
    } else {
        setTimeout(() => {
            dogContainer.innerHTML = dog.noDogsHtml()
        }, 1000)
    }
}

document.getElementById('like-btn').addEventListener('click', () => {
    if (!isWaiting) {
        setSwiped(true)
    }
})

document.getElementById('nope-btn').addEventListener('click', () => {
    if (!isWaiting) {
        setSwiped(false)
    }
})

getNextDog()
