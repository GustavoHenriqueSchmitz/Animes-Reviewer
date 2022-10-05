let name = 'Cowboy Bebop'
let image = 'https://media.kitsu.io/anime/poster_images/1/original.jpg'
let description = "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as 'Cowboys'. The ragtag team aboard the spaceship Bebop are two such individuals.Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. Well-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after."

async function RenderizeInformations() {

    while (true) {
        const animeId = Math.floor(Math.random() * (5000 - 1) + 1)
        const url = `https://kitsu.io/api/edge/anime/${animeId}`
    
        // GET request using fetch with error handling
        const response = await fetch(url)

        if (response.status === 200) {
            const data = await response.json()
            name = data.data.attributes.canonicalTitle

            if (name.length > 40) {
                name = data.data.attributes.abbreviatedTitles[0]
            }

            //name = data.data.attributes.abbreviatedTitles[0]
            image = data.data.attributes.posterImage.original
            description = data.data.attributes.description
            break
        }
        continue
    }
}

export { RenderizeInformations, name, image, description}