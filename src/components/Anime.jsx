import style from './css/Anime.module.css'
import { name, image } from './js/api'
import { renderInformations } from '../App'

function Anime() {

    return (
        <>
            <h1 className={style.titles} id={style.animeName}>{name}</h1>
            <img id={style.animeImage} src={image} alt="Imagem ilustrando o anime ou manga."/>
            <button id={style.animeButton} onClick={renderInformations}><p className={style.texts}>Próximo Anime</p></button>
        </>
    )
}

export { Anime }
