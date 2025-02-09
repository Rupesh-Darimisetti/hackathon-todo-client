import React, { useCallback, useEffect, useState } from 'react'
import './index.css'

const TodoItem = ({ isTodoAdded, setIsTodoAdded }) => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchTodos = useCallback(async () => {
        try {
            let URL = "https://hackathon-todo-backend.onrender.com/todos"
            const response = await fetch(URL)
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTodos()
    }, [isTodoAdded, fetchTodos])

    const deleteTodo = async (id) => {
        let URL = `https://hackathon-todo-backend.onrender.com/todos/${id}`
        const response = await fetch(URL, { method: 'DELETE', mode: 'cors' })

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