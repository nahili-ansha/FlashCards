import { useState } from 'react'
import './App.css'
import FlashcardForm from './components/FlashcardForm.jsx'
import Study from './components/Study.jsx'

function App() {
  const [cards, setCards] = useState([
    { id: 1, front: 'Capital of France', back: 'Paris' },
    { id: 2, front: '2 + 2', back: '4' },
  ])
  const [studyMode, setStudyMode] = useState(false)

  function addCard(front, back) {
    setCards((prev) => [...prev, { id: Date.now(), front, back }])
  }

  function deleteCard(id) {
    setCards((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className="app-root">
      <header className="app-header">Flashcards</header>

      <main className="app-main">
        <section className="panel left">
          <h2>Your Cards</h2>

          <div className="card-list">
            {cards.map((c) => (
              <div key={c.id} className="card-item">
                <div className="pair">
                  <div className="pair-front">{c.front}</div>
                  <div className="pair-back">{c.back}</div>
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="small" onClick={() => deleteCard(c.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          <FlashcardForm onAdd={addCard} />

          <button
            className="primary study-btn"
            onClick={() => setStudyMode(true)}
            disabled={cards.length === 0}
          >
            Start Study
          </button>
        </section>

  <section className={"panel right" + (studyMode ? ' playing' : '')}>
          <h2>Study Area</h2>
          {studyMode ? (
            <Study cards={cards} onExit={() => setStudyMode(false)} />
          ) : (
            <p className="hint">Click "Start Study" to review cards in random order. Click the card to flip it.</p>
          )}
        </section>
      </main>

      <footer className="app-footer">Built with React + Vite</footer>
    </div>
  )
}

export default App