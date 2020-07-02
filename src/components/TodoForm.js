import React, { useState } from 'react';
import uuid from 'uuid/v4';

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({ id: 0, task: '', completed: false });

    const handleChange = (e) => {
        setTodo({ ...todo, task: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo.length);
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            setTodo({ ...todo, task: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                name="task"
                type="text"
                onChange={handleChange}
                value={todo.task}
                className="todo-form__input"
            />
            <button type="submit" className="todo-form__button">
                Add Todo
            </button>
        </form>
    );
};

export default TodoForm;
