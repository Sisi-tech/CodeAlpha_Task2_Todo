import React from "react";
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onRemoveTodo }) => {
    if (!todo) {
        return null;
    }

    return (
        <li className="flex justify-between items-center p-2 border-b border-gray-200">
            <span>{todo.title}</span> - <span>{todo.due}</span>
            <button 
                type="button" 
                className="bg-red-500 text-white p-1 rounded-md hover:bg-red-700" 
                onClick={() => onRemoveTodo(todo.id)}
            >
                Remove
            </button>
        </li>
    )
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string.isRequired,
        due: PropTypes.string.isRequired,
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoItem;