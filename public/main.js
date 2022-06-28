
const fetchPokemon = () => {

    document.querySelector('.search-button').addEventListener('click', fetchPokemon)
    const choice = document.querySelector('.search-input').value

    const url = `https://pokeapi.co/api/v2/pokemon/${choice}/`
    // const url = `https://pokeapi.co/api/v2/encounter-method/${choice}`
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            const pokemon = {
                name: data.name,
                id: data.id,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                specialAttack: data.stats[3].base_stat,
                specialDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,

            }
            console.log(data)
            console.log(pokemon)
            document.querySelector('.id').innerHTML = `ID: ${pokemon.id}`
            document.querySelector('.name').innerHTML = `Name: ${pokemon.name}`
            document.querySelector('.hp').innerHTML = `HP: ${pokemon.hp}`
            document.querySelector('.attack').innerHTML = `Attack: ${pokemon.attack}`
            document.querySelector('.defense').innerHTML = `Defense: ${pokemon.defense}`
            document.querySelector('.special-attack').innerHTML = `Special Attack: ${pokemon.specialAttack}`
            document.querySelector('.special-defense').innerHTML = `Special Defense: ${pokemon.specialDefense}`
            document.querySelector('.speed').innerHTML = `Speed: ${pokemon.speed}`

        })
}

fetchPokemon()
