import React, { useState } from 'react'
export default function AddTodo ({ addTodo }) {
    const [ input, setInput ] = useState('')

    function handleAdd () {
        if (input) {
            addTodo(input)
            setInput('')
        }
    }
    return (
        <form onSubmit={e => { e.preventDefault(); handleAdd() }}>
            <input
                type="text"
                placeholder="enter new task..."
                style={{ width: 350, height: 15 }}
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <input
                type="submit"
                style={{ float: 'right', marginTop: 2 }}
                disabled={!input}
                value="add"
            />
        </form>
    )
}