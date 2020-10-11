//console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    

    function fetchChalOne(){
        fetch(imgUrl).then(function(response) {
            return response.json()
        }).then(function(json) {
            addImages(json)
        })
    }

    //fetchChalOne()
    fetchChalTwo()
    fetchChalThree()
    
    function addImages(obj) {
        const target = obj.message
        console.log(obj)
        const dogContainer = document.getElementById('dog-image-container')
        for (const element of target ) {
            
            const dogDiv = document.createElement('div')
            const dogImage = document.createElement('img')
            dogContainer.appendChild(dogDiv)
            dogDiv.appendChild(dogImage)
            dogImage.setAttribute('src', `${element}`)
            dogImage.setAttribute('height', "25%")
            dogImage.setAttribute('width', "25%")
        }
    }

    function fetchChalTwo() {
        fetch(breedUrl).then(function(response) {
            return response.json()
        }).then(function(json) {
            addBreedList(json)
        })
    }

    

    function addBreedList(obj) {
        const target = obj.message
        const dogList = document.getElementById('dog-breeds')
        for (const value in target) {
            const listItem = document.createElement('li')
            dogList.append(listItem)
            listItem.classList.add('breed-name')
            listItem.innerHTML = `<b> ${value} </b>   :   ${target[value]}, `
            
        }
    }

    function fetchChalThree() {
        const dogBreeds = document.getElementById('dog-breeds')
        dogBreeds.addEventListener('click', function(e) {
            const li = e.target
            if (e.target.matches('li')) {
                li.setAttribute('style', 'color: green')
            }
        })
    }

    function fetchChalFour() {
        const selector = document.getElementById('breed-dropdown')
        selector.addEventListener('click', function(e) {
            const option = e.target
            const listNodes = document.getElementsByClassName('breed-name')
            const nodesArray = [...listNodes]
            
            if (option.value === "a") {
                
                nodesArray.map(function(x) {
                    if (x.innerText.charAt(0) === 'a') {
                        x.hidden = false
                    } else {
                        x.hidden = true
                    }
                })
            } else if (option.value === "b") {
                
                nodesArray.map(function(x) {
                    if (x.innerText.charAt(0) === 'b') {
                        x.hidden = false
                    } else {
                        x.hidden = true
                    }
                })
            } else if (option.value === "c") {
                
                nodesArray.map(function(x) {
                    if (x.innerText.charAt(0) === 'c') {
                        x.hidden = false
                    } else {
                        x.hidden = true
                    }
                })
            } else if (option.value === "d") {
                
                nodesArray.map(function(x) {
                    if (x.innerText.charAt(0) === 'd') {
                        x.hidden = false
                    } else {
                        x.hidden = true
                    }
                })
            }
        })
    }


    fetchChalFour()




})