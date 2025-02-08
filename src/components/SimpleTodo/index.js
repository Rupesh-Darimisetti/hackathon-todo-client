import React from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const SimpleTodo = ({ isTodoAdded, setIsTodoAdded }) => {
    return (
        <div className="container">
            <h1>Simple Todo</h1>
            <TodoItem isTodoAdded={isTodoAdded} setIsTodoAdded={setIsTodoAdded} />
        </div>
    )
}
export default SimpleTodo