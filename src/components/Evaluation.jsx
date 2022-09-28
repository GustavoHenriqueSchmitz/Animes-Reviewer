import style from './css/Evaluation.module.css'

function AnimeEvaluation() {
    return (
    <>
        <div id={style.note}>
            <h1>7.5</h1>
        </div>
        <div id={style.evaluation}>
            <label>Insira sua avaliação</label>
            <input type="number" min="0" max="10" step="0.25"/>
        </div>
    </>
    )
}

export { AnimeEvaluation }
