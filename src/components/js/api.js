import { updateEvaluationComponent } from "../Evaluation"

// Initialize anime
let animeId = 0

// Initialize informations
let name = ""
let image = ""
let description = ""
let evaluation = 0

// Function RenderizeInformations, Get the information from the anime api.
async function RenderizeInformations() {

    while (true) {
        animeId = Math.floor(Math.random() * (5000 - 1) + 1)
        const url = `https://kitsu.io/api/edge/anime/${animeId}`
    
        // Sends a request to the anime API, to get the anime information
        let response = await fetch(url)

        // If the response is not 200 OK, try again by restarting the loop and making a new request.
        if (response.status === 200) {
            let data = await response.json()
            name = data.data.attributes.canonicalTitle

            // If the name of the anime is too long, take the abbreviated one
            if (name.length > 40) {
                name = data.data.attributes.abbreviatedTitles[0]
            }

            image = data.data.attributes.posterImage.original
            description = data.data.attributes.description
            await RenderizeEvaluation()
            break
        }
        continue
    }
}

async function RenderizeEvaluation() {
    const response = await fetch(`http://localhost:5000/api/evaluation/${animeId}`)
    const data = await response.json()
    evaluation = data.data.evaluation
}

async function SendEvaluation(event) {

    event.preventDefault()
    let form = event.currentTarget;
    let url = form.action;

    let formData = new FormData(form);
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJsonString = JSON.stringify({anime_id: animeId, anime_name: name, evaluation: Number(formDataObject.evaluation)});  // Set the fetch options (headers, body)
    
    await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formDataJsonString,
    })
    await RenderizeEvaluation()
    updateEvaluationComponent()
}

export { RenderizeInformations, SendEvaluation, name, image, description, evaluation }