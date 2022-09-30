import style from './css/Anime.module.css'
import { useState } from 'react'
import { RenderizeAnimeImage } from './js/renderize'

function Anime() {

    let [image, setImage] = useState('https://media.kitsu.io/anime/poster_images/1/original.jpg')

    setImage(RenderizeAnimeImage())

    return (
        <>
            <h1 className={style.titles} id={style.animeName}>Nome do anime</h1>
            <img id={style.animeImage} src={image} alt="Imagem ilustrando o anime ou manga."/>
            <button id={style.animeButton}><p className={style.texts}>Próximo Anime</p></button>
        </>
    )
}

export { Anime }