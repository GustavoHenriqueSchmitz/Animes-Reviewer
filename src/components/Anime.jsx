import style from './css/Anime.module.css'
import { useReducer } from 'react'
import { RenderizeAnimeImage } from './js/api'
import { name, image } from './js/api'

function Anime() {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

    async function renderInformations() {
        await RenderizeAnimeImage()
        forceUpdate()
    }

    return (
        <>
            <h1 className={style.titles} id={style.animeName}>{name}</h1>
            <img id={style.animeImage} src={image} alt="Imagem ilustrando o anime ou manga."/>
            <button id={style.animeButton} onClick={renderInformations}><p className={style.texts}>Próximo Anime</p></button>
        </>
    )
}

export { Anime }
