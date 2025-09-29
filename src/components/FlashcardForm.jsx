import {useState} from 'react';

export default function FlashcardForm({onAdd}){
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const f = front.trim()
        const b = back.trim()
        if(!f || !b) return 
        onAdd(f, b)
        setFront('')
        setBack('')

    }

    return(
        <form className="flashcard-form" onSubmit={handleSubmit}>
            <h3> Add Card </h3>

            <div className="field">
                <label>Front</label>
                <input
                    value={front}
                    onChange = {(e) => setFront(e.target.value) }
                    placeholder = "Question or Prompt"
                />
            </div>

            <div className="field">
                <label> Back </label>
                <input
                    value = {back}
                    onChange = {(e) => setBack(e.target.value)}
                    placeholder = "Answer"
                />
            </div>

            <div style={{display: 'flex', gap : 8}}>
                <button type="submit" className="primary"> Add </button>
            </div>

        </form>
    )
}