import React from "react";
import PropTypes from 'prop-types';

const TodoItem = ({ todo, onRemoveTodo }) => {
    if (!todo) {
        return null;
    }

    return (
        <li className="flex justify-between items-center p-2 border-b border-gray-200 gap-8 text-md">
            <span>{todo.title}</span>
            <span>{todo.due}</span>
            <button 
                type="button" 
                className="bg-gray-500 text-white p-1 pl-2 pr-2 rounded-xl hover:bg-red-500 text-sm" 
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