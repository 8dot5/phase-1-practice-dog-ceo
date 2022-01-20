console.log('retry')

document.addEventListener('DOMContentLoaded', function () {
    fetchAllThings();

})

const fetchAllThings = () => {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(imgUrl)
    .then(res => res.json())
    .then(jsonObject => {
        jsonObject.message.forEach(image => appendImageToDOM(image))
    })

    fetch(breedUrl)
    .then(res => res.json())
    .then(jsonObject => {
        let breeds = Object.keys(jsonObject.message)
        updateBreedsList(breeds)

        let breedDropdown = document.querySelector('#breed-dropdown')
        breedDropdown.addEventListener('change', function(e) {
            let filterValue = e.target.value

            let filteredBreeds = breeds.filter(breed => breed[0] === filterValue)

            updateBreedsList(filteredBreeds)
        })
    })
}

const appendImageToDOM = (image) => {
    let container = document.querySelector('#dog-image-container')
    let newImage = document.createElement('img') //in the HTML
    newImage.src = image
    container.appendChild(newImage)
}

const updateBreedsList = (breeds) => {
    let ul = document.querySelector('#dog-breeds')
    ul.innerHTML = ''

    breeds.forEach(breed => appendBreedToDOM(breed))
}

const appendBreedToDOM = (breed) => {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')

    li.innerText = breed
    ul.appendChild(li)

    // add click event
    li.addEventListener('click', updateBreedColor)
}

const updateBreedColor = (event) => {
    // event.target.style.color = 'red'
    event.target.style.backgroundColor = 'yellow'
}
