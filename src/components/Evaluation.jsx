import style from './css/Evaluation.module.css';
import { GetWindowSize } from './js/render'

function AnimeEvaluation() {

    const isDesktop = GetWindowSize()

    return (
    <>
       {isDesktop ? (
            <div id={style.evaluation}>
                <div id={style.evaluationTitle}>
                    <h1 className={style.titles}>Evaluation</h1>
                </div>
                <div id={style.evaluationFormTitle}>
                    <h1 className={style.titles}>Rate Anime</h1>
                </div>
                <div id={style.evaluationNote}>
                    <p>7.5</p>
                </div>
                <div id={style.evaluationForm}>
                    <form action="">
                        <input type="number" min="0" max="10" step="0.25" placeholder='0.00'/>
                    </form>
                </div>
            </div>
        ) : (
        <>
            <div id={style.evaluationTitle}>
                <h1 className={style.titles}>Evaluation</h1>
            </div>
            <div id={style.evaluationFormTitle}>
                <h1 className={style.titles}>Rate Anime</h1>
            </div>
            <div id={style.evaluationNote}>
                <p>7.5</p>
            </div>
            <div id={style.evaluationForm}>
                <form action="">
                    <input type="number" min="0" max="10" step="0.25" placeholder='0.00'/>
                </form>
            </div>
        </>
        )}
    </>
    )
}

export { AnimeEvaluation }
