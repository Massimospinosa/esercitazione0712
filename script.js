const query = 'image';  
const apiKey = 'nzcDLmxQHIun2Du89vogyENrtqimj3JMHpMs9wN6aZvN1nQL4H8xGfMo';
const url = `https://api.pexels.com/v1/search?query=${query}`;
getImages(url)

fetch(url, {
  headers: {
    Authorization: apiKey
  }
})
async function getImages(url) {
	const response = await fetch(url)
	const data = await response.json()
	console.log(data)
	const images = data.results
	console.log(images)

	// richiedere i dettagli dei singoli pokemon aggingendoli all'array dei pokemonDetails
	for (let i = 0; i < pokemons.length; i++) {
		const pokemon = pokemons[i]
		const response = await fetch(pokemon.url)
		const pokemonData = await response.json()
		pokemonDetails.push(pokemonData)
	}
	console.log(pokemonDetails)

	// stampo i pokemons con i dettagli
	let htmlListContent = ''
	pokemonDetails.forEach((pokemon) => {
		htmlListContent += `<div class="col-4">
					<div class="card">
						<img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}" />
						<div class="card-body">
							<h5 class="card-title">${pokemon.name}</h5>
							<button href="#" class="btn btn-primary">View</button>
						</div>
					</div>
				</div>`
	})

	elePokemonsList.innerHTML = htmlListContent
}