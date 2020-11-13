const foods = require('./foods')
const geometric = require('geometric')
const colors = require('colors')

function loop(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

const degreeAngle = geometric.angleToDegrees(3.14)
const radianAngle = geometric.angleToRadians(180)

const points = geometric.polygonRegular(favorites.length)

const rainbowFavorites = favorites[0].rainbow

loop(favorites)
console.log(degreeAngle)
console.log(radianAngle)
console.log(points)
console.log(rainbowFavorites)