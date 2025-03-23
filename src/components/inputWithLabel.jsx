import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function InputWithLabel({ id, value, onChange, children }) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="flex gap-3 items-center">
            <label htmlFor={id}>{children}:</label>
            <input 
                type="text"
                id={id}
                value={value}
                onChange={onChange}
                ref={inputRef}
                className=""
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
