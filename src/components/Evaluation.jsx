import style from './css/Evaluation.module.css'

function AnimeEvaluation() {
    return (
    <>
        <div id={style.note}>
            <p>7.5</p>
        </div>
        <div id={style.evaluation}>
            <form action="">
                <label>Insira sua avaliação</label>
                <input type="number" min="0" max="10" step="0.25"/>
            </form>
        </div>
    </>
    )
}

export { AnimeEvaluation }
