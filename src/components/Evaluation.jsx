import style from './css/Evaluation.module.css';
import { evaluation, SendEvaluate } from './js/api';
import { GetWindowSize } from './js/render';
import { useReducer } from 'react';
import { SendEvaluation } from './js/api'

let updateEvaluationComponent

function AnimeEvaluation() {

    const isDesktop = GetWindowSize()
    const [, forceUpdate] = useReducer(x => x + 1, 0) // useReducer value, to force a refresh.

    updateEvaluationComponent =  function updateEvaluationComponent() {
        forceUpdate()
    }

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
                    <p>{evaluation}</p>
                </div>
                <div id={style.evaluationForm}>
                    <form onSubmit={SendEvaluation} method="post" action="http://localhost:5000/api/evaluate">
                        <input name="evaluation" type="number" min="0" max="10" step="0.25" placeholder='0.00'/>
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
                <p>{evaluation}</p>
            </div>
            <div id={style.evaluationForm}>
                <form onSubmit={SendEvaluation} method="post" action="http://localhost:5000/api/evaluate">
                    <input name="evaluation" type="number" min="0" max="10" step="0.25" placeholder='0.00'/>
                </form>
            </div>
        </>
        )}
    </>
    )
}

export { AnimeEvaluation, updateEvaluationComponent }
