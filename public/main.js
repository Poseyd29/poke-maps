// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()

console.log('hello world')





const fetchPokemon = () => {

    document.querySelector('.search-button').addEventListener('click', fetchPokemon)
    const choice = document.querySelector('.search-input').value

    const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
    // const url = `https://pokeapi.co/api/v2/encounter-method/${choice}`
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            const pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                locations: data.location_area_encounters
            }
            document.querySelector('.screen').innerHTML = pokemon.locations
        })
}

fetchPokemon()
