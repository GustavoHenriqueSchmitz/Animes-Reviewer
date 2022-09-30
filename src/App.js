import './App.css';
import { Anime } from './components/Anime';
import { AnimeDescription } from './components/Description';
import { AnimeEvaluation } from './components/Evaluation';

function App() {
  return (
    <>
      <div id="left-side">
        <Anime/>
      </div>
      <div id="right-side">
        <section id="section-description">
          <AnimeDescription/>
        </section>
        <section id="section-evaluation">
          <AnimeEvaluation/>
        </section>
      </div>
    </>
  );
}

export default App;
