import React, { useState } from 'react';
import SimpleTodo from '../SimpleTodo';
import './index.css';

function AddTodo() {
    const [todo, setTodo] = useState('');
    const [isTodoAdded, setIsTodoAdded] = useState(false)

    const addTodo = async () => {
        if (!todo) {
            alert('Please Enter the todo')
            return
        }

        try {
            let URL = 'https://hackathon-todo-backend.onrender.com/todos/'
            const response = await fetch(URL, {
                mode: 'cors',
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: todo })
            })
            if (response.ok) {
                setTodo('')
                setIsTodoAdded(prev => !prev)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleChangeInput(event) {
        setTodo(event.target.value)
    }

    return (
        <div className='main-container'>
            <h1>Add Todo</h1>
            <div>
                <input type="text" id="todo" placeholder='Add Todo' onChange={handleChangeInput} value={todo} />
                <button type="button" onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <SimpleTodo iisTodoAdded={isTodoAdded} setIsTodoAdded={setIsTodoAdded} />
        </div>
    )
}

export default AddTodo