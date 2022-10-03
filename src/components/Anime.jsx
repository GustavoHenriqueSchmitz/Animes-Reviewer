import style from './css/Anime.module.css'
import { useEffect, useState } from 'react'
import { RenderizeAnimeImage } from './js/api'
import { GetWindowSize } from './js/render'

function Anime() {

    const [image, setImage] = useState('https://media.kitsu.io/anime/poster_images/1/original.jpg')

    useEffect(async ()=>{
       const renderizedImage =  await RenderizeAnimeImage()
       setImage(renderizedImage)
       console.log(image)
    },[])

    return (
        <>
            <h1 className={style.titles} id={style.animeName}>Nome do anime</h1>
            {image && <img id={style.animeImage} src={image} alt="Imagem ilustrando o anime ou manga."/> }
            <button id={style.animeButton}><p className={style.texts}>Próximo Anime</p></button>
        </>
    )
}

export { Anime }