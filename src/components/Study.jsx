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

  if (!cards || cards.length === 0) {
    return <div className="study-empty">No cards to study.</div>
  }

  const currentId = order[index]
  const current = cards.find((c) => c.id === currentId) || cards[0]

  function next() {
    setFlipped(false)
    setIndex((i) => (i + 1) % order.length)
  }

  function prev() {
    setFlipped(false)
    setIndex((i) => (i - 1 + order.length) % order.length)
  }

  return (
    <div className="study-root">
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

      <div className="controls">
        <button className="small" onClick={prev}>Prev</button>
        <button className="small" onClick={next}>Next</button>
        <button
          className="small"
          onClick={() => {
            setIndex(0)
            setFlipped(false)
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