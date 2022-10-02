import style from './css/Anime.module.css'

function Anime() {

    return (
        <>
            <h1 className={style.titles} id={style.animeName}>Nome do anime</h1>
            <img id={style.animeImage} src={`https://media.kitsu.io/anime/poster_images/1/original.jpg`} alt="Imagem ilustrando o anime ou manga."/>
            <button id={style.animeButton}><p className={style.texts}>Próximo Anime</p></button>
        </>
    )
}

export { Anime }