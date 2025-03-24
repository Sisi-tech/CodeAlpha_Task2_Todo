import { useState } from "react";
import InputWithLabel from "./inputWithLabel";
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (title.trim() && dueDate.trim()) {
            const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);
            onAddTodo({
                title: formattedTitle,
                due: dueDate,
            });
            setTitle("");
            setDueDate("");
        } else {
            alert("Both title and due date are required.")
        }

    }
    return (
        <form onSubmit={handleAddTodo} className='flex flex-col gap-6 w-full p-10 justify-center items-center'>
            <InputWithLabel
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add Todo Item"
            >
                Title
            </InputWithLabel>
            {/* <InputWithLabel
                type="date"
                id="due"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            >
                Due
            </InputWithLabel> */}
            <div className="flex gap-2 items-center">
                <label htmlFor="dueDate">Due:</label>
                <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="border p-1 pl-2 w-70"
                    min={new Date().toISOString().split("T")[0]}
                />
            </div>
            <button type="submit" className="pl-4 pr-4 p-1 rounded-2xl bg-green-700 hover:bg-green-800 shadow-md shadow-gray-600 text-white">Add</button>
        </form>
    )
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
