import style from './css/Description.module.css'
import { description } from './js/api'

function AnimeDescription() {
    return (
        <>
            <div id={style.descriptionTitle}>
                <h1 className={style.titles}>Description</h1>
            </div>
            <div id={style.description}>
                <p className={style.texts}>{description}</p>
            </div>
        </>
    )
}

export { AnimeDescription }
