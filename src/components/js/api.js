import { useState } from "react"

let name = 'Cowboy Bebop'
let image = 'https://media.kitsu.io/anime/poster_images/1/original.jpg'
let description = ''

async function RenderizeAnimeImage() {

    while (true) {
        const animeId = Math.floor(Math.random() * (5000 - 1) + 1)
        const url = `https://kitsu.io/api/edge/anime/${animeId}`
    
        // GET request using fetch with error handling
        const response = await fetch(url)

        if (response.status === 200) {
            const data = await response.json()
            name = data.data.attributes.canonicalTitle
            image = data.data.attributes.posterImage.original
            break
        }
        continue
    }
}

export { RenderizeAnimeImage, name, image, description}