const catResult = document.getElementById('catResult')
const dogResult = document.getElementById('dogResult')
const catBtn = document.getElementById('catBtn')
const dogBtn = document.getElementById('dogBtn')

catBtn.addEventListener('click', getRandomCat)
dogBtn.addEventListener('click', getRandomDog)

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            catResult.innerHTML = `<img src="${data.file}"/>`
        })
}

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog()
            } else {
                dogResult.innerHTML = `<img src="${data.url}"/>`
            }
        })
}