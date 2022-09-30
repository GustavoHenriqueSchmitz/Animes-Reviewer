function RenderizeAnimeImage() {

    const animeId = Math.floor(Math.random() * (5000 - 1) + 1)
    const url = `https://kitsu.io/api/edge/anime/${animeId}`

    // GET request using fetch with error handling
    const image = fetch(url)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return Promise.resolve(data.attributes.posterImage.original)
        })
        .catch(error => {
            return ({ errorMessage: error.toString() });
        });

        return image
}

export { RenderizeAnimeImage }