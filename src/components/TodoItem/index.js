import React, { useEffect, useState } from 'react'

const TodoItem = ({ isTodoAdded, setIsTodoAdded }) => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchTodos = async () => {
        let URL = "https://hackathon-todo-backend.onrender.com/todos"
        const response = await fetch(URL)
        const data = await response.JSON();
        console.log(data)
        setTodos(data);
        setLoading(!loading);
    }

    useEffect(() => {
        fetchTodos()
    }, { isTodoAdded })

    const deleteTodo = async (id) => {
        let URL = `https://hackathon-todo-backend.onrender.com/todos/${id}`
        const response = await fetch(URL, {
            method: 'DELETE'
        })
        if (response.ok) {
            setTodos(prevTodo => prevTodo.filter(eachTodo => eachTodo.id !== id))
            setIsTodoAdded(!isTodoAdded)
        }
    }

    return (
        <div>
            {loading ? <p>Loading</p> : (
                <ul>{todos.map(todo => {
                    <li key={todo.id}>
                        <span>{todo.title}</span>
                        <button type="button" onClick={() => deleteTodo(todo.id)}>DELETE</button>
                    </li>
                })}</ul>
            )}
        </div>
    )
}
export default TodoItem