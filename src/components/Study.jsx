import { useState, useMemo } from 'react'

function shuffle(arr) {
  const out = arr.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export default function Study({ cards = [], onExit }) {
  // create a randomized order once per mount / when cards change
  const order = useMemo(() => shuffle(cards.map((c) => c.id)), [cards])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState(null) // null | 'correct' | 'incorrect'

  if (!cards || cards.length === 0) {
    return <div className="study-empty">No cards to study.</div>
  }

  const currentId = order[index]
  const current = cards.find((c) => c.id === currentId) || cards[0]

  function next() {
    if (index < order.length - 1) {
      setFlipped(false)
      setIndex((i) => i + 1)
      setGuess('')
      setFeedback(null)
    }
  }

  function prev() {
    if (index > 0) {
      setFlipped(false)
      setIndex((i) => i - 1)
      setGuess('')
      setFeedback(null)
    }
  }

  function handleSubmitGuess(e) {
    e && e.preventDefault && e.preventDefault()
    const normalized = (guess || '').trim().toLowerCase()
    const answer = (current.back || '').trim().toLowerCase()
    if (!normalized) return
    if (normalized === answer) {
      setFeedback('correct')
      setFlipped(true)
    } else {
      setFeedback('incorrect')
    }
  }

  return (
    <div className="study-root">
      <form onSubmit={handleSubmitGuess} className="study-card-form">
        <div
          className={`study-card ${flipped ? 'flipped' : ''}`}
          onClick={() => setFlipped((f) => !f)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setFlipped((f) => !f) }}
        >
          <div className="side front">{current.front}</div>
          <div className="side back">{current.back}</div>
        </div>

        <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
          <label style={{ display: 'none' }} htmlFor="guess-input">Your guess</label>
          <input id="guess-input" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Type your guess" />
          <button className="small" type="submit">Submit</button>
          {feedback === 'correct' && <div style={{ color: 'green' }}>Correct!</div>}
          {feedback === 'incorrect' && <div style={{ color: 'red' }}>Try again</div>}
        </div>
      </form>

      <div className="controls">
        <button className="small" onClick={prev} disabled={index === 0}>Prev</button>
        <button className="small" onClick={next} disabled={index === order.length - 1}>Next</button>
        <button
          className="small"
          onClick={() => {
            setIndex(0)
            setFlipped(false)
            setGuess('')
            setFeedback(null)
            onExit()
          }}
        >
          Exit
        </button>
      </div>

      <div className="position">{index + 1} / {order.length}</div>
    </div>
  )
}