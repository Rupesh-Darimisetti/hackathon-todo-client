import React, { useEffect, useState } from 'react'
import './index.css'

const TodoItem = ({ isTodoAdded, setIsTodoAdded }) => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchTodos = async () => {
        let URL = "https://hackathon-todo-backend.onrender.com/todos"
        const response = await fetch(URL, { mode: 'cors' })
        const data = await response.json();
        if (response.ok) {
            setTodos(data);
        }
        setLoading(loading);

    }

    useEffect(() => {
        fetchTodos()
    }, [isTodoAdded])

    const deleteTodo = async (id) => {
        let URL = `https://hackathon-todo-backend.onrender.com/todos/${id}`
        const response = await fetch(URL, {
            method: 'DELETE', mode: 'cors'
        })
        if (response.ok) {
            setTodos(prevTodo => prevTodo.filter(eachTodo => eachTodo.id !== id))
            setIsTodoAdded(prev => !prev)
        }
    }

    return (
        <div className='todo-container'>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} >
                            <span>{todo.title}</span>
                            <button type="button" onClick={() => deleteTodo(todo.id)}>DELETE</button>
                        </li>
                    ))}
                </ul>
            )
            }
        </div >
    )
}
export default TodoItem