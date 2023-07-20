import style from './css/Anime.module.css'
import { name, image } from './js/api'
import { renderInformations } from '../App'

function Anime() {

    return (
        <>
            <h1 className={style.titles} id={style.animeName}>{name}</h1>
            <img id={style.animeImage} src={image} alt="Illustrating the anime or manga"/>
            <button id={style.animeButton} onClick={renderInformations}><p className={style.texts}>Next Anime</p></button>
        </>
    )
}

export { Anime }
