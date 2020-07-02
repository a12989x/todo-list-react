import React from 'react';

const TodoItem = ({ id, task, toggleComplete, removeTodo }) => {
    return (
        <li className="todo-item">
            <label onClick={() => toggleComplete(id)}>
                <input type="checkbox" name="checkbox" value="css" />
                <span>{task}</span>
            </label>
            <button
                onClick={() => removeTodo(id)}
                className="todo-item__button"
            >
                X
            </button>
        </li>
    );
};

export default TodoItem;
