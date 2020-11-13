const foods = require('./foods')
const colors = require('colors')
const geometric = require('geometric')
const figlet = require('figlet')

function loop(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

loop(favorites)

const points = geometric.polygonRegular(favorites.length)
const rainbowFavorite = favorites[0].rainbow
const figFavorite = figlet.textSync(favorites[0], {font: 'Roman'})

console.log(points)
console.log(rainbowFavorite)
console.log(figFavorite)