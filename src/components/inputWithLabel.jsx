import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function InputWithLabel({ type, id, value, onChange, children, placeholder }) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="flex gap-2 items-center">
            <label htmlFor={id}>{children}:</label>
            <input 
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                ref={inputRef}
                className="border p-1 pl-2 w-70"
                placeholder={placeholder}
            />
        </div>
    )
};

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default InputWithLabel;
