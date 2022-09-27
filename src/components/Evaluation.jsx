import style from './css/Evaluation.module.css'

function AnimeEvaluation() {
    return (
    <div id={style.evaluation}>
        <h1 id={style.note}>7.5</h1>
        <label>Insira sua avaliação</label>
        <input id={style.evaluationInput} type="number" min="0" max="10" step="0.25"  />
    </div>
    )
}

export { AnimeEvaluation }