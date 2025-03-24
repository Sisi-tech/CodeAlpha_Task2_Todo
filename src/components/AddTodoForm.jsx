import { useState } from "react";
import InputWithLabel from "./inputWithLabel";
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (title.trim() && dueDate.trim()) {
            onAddTodo({
                title,
                due: dueDate,
            });
            setTitle("");
            setDueDate("");
        } else {
            alert("Both title and due date are required.")
        }
        
    }
    return (
        <form onSubmit={handleAddTodo} className='flex flex-col gap-4 w-full p-10 justify-center items-center'>
            <InputWithLabel
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            >
                Title
            </InputWithLabel>
            <InputWithLabel
                id="due"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            >
                Due
            </InputWithLabel>
            <button type="submit" className="">Add</button>
        </form>
    )
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
