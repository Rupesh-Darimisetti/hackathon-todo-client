import React from 'react'
import TodoItem from '../TodoItem'

const SimpleTodo = ({ isTodoAdded, setIsTodoAdded }) => {
    return (
        <div>
            <h1>Simple Todo</h1>
            <TodoItem isTodoAdded={isTodoAdded} setIsTodoAdded={setIsTodoAdded} />
        </div>
    )
}
export default SimpleTodo