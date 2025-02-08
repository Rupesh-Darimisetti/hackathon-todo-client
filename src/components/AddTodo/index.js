import React, { useState } from 'react';
import SimpleTodo from '../SimpleTodo';

function AddTodo() {
    const [todo, setTodo] = useState('');
    const [isTodoAdded, setIsTodoAdded] = useState(false)

    const addTodo = () => {
        if (!todo) {
            alert('Please Enter the todo')
            return
        }

        try {
            let URL = 'https://hackathon-todo-backend.onrender.com/todos'
            const response = fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: todo })
            })
            if (response.ok) {
                setTodo("")
                setIsTodoAdded(!isTodoAdded)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleChangeInput(event) {
        setTodo(event.target.value)
    }

    return (
        <div>
            <h1>Add Todo</h1>
            <div>
                <input type="text" placeholder='Add Todo' onChange={handleChangeInput} value={todo} />
                <button type="button" onclick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <SimpleTodo isTodoAdded={isTodoAdded} setIsTodoAdded={setIsTodoAdded} />
        </div>
    )
}

export default AddTodo