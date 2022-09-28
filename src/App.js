import './App.css';
import { Anime } from './components/Anime';
import { AnimeDescription } from './components/Description';
import { AnimeEvaluation } from './components/Evaluation';

function App() {
  return (
    <>
      <div id="left-side">
        <section id="section-description">
          <AnimeDescription/>
        </section>
        <section id="section-evaluation">
          <AnimeEvaluation/>
        </section>
      </div>
      <div id="right-side">
        <Anime/>
      </div>
    </>
  );
}

export default App;
