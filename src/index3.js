console.log('hi')

document.addEventListener('DOMContentLoaded', function () {
fetchImages();
fetchBreeds();

})

const fetchImages = () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(jsonObject => {
        jsonObject.message.forEach(image => appendImageToDOM(image))
    })
}

const appendImageToDOM = (image) => {
    let container = document.querySelector('#dog-image-container')
    let newImage = document.createElement('img')
    newImage.src = image

    container.appendChild(newImage)
}

const fetchBreeds = () => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(res => res.json())
    .then(jsonObject => {
        let breedsList = Object.keys(jsonObject.message)

        updateBreedsList(breedsList)
    })
}

const updateBreedsList = (breedsList) => {
    let ul = document.querySelector('#dog-breeds')
    ul.innerHTML = ''

    breedsList.forEach(breed => appendBreedsListToDOM(breed)) //not breedsList
}

const appendBreedsListToDOM = (breedsList) => {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.innerText = breedsList
    ul.appendChild(li)

    //add click event
    li.addEventListener('click', updateBreedsListColor)
}

const updateBreedsListColor = (e) => {
    e.target.style.color = 'red'
}