import './App.css';
import { Anime } from './components/Anime';
import { AnimeDescription } from './components/Description';
import { AnimeEvaluation } from './components/Evaluation';
import { GetWindowSize } from './components/js/render';
import { useReducer } from 'react';
import { RenderizeInformations } from './components/js/api';
import { Analytics } from "@vercel/analytics/react"

// Variable to export the function renderInformations
let renderInformations
let initiated = 0

function App() {

  const isDesktop = GetWindowSize() // Function getWindowSize, get the window size.
  const [, forceUpdate] = useReducer(x => x + 1, 0) // useReducer value, to force a refresh.

  // Variable renderInformation get the renderInformation function, renderize the anime information.
  renderInformations = async ()=> {
      await RenderizeInformations()
      forceUpdate()
  }

  if (initiated < 2) {
    initiated += 1
    renderInformations()
  }

  return (
    // Returns the html according to window size
    <>
      {isDesktop ? (
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
      ) : (
        <>
          <section id="anime">
            <Anime/>
          </section>
          <section id="description">
            <AnimeDescription/>
          </section>
          <section id="evaluation">
            <AnimeEvaluation/>
          </section>
        </>
      )}
      <Analytics/>
    </>
  )
}

export { App, renderInformations };
