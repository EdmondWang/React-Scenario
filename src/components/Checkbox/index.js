import React from 'react';
import './index.css';

const Checkbox = ({ id, label, checked, handleClick }) => {
    return (
        <div className="checkbox-wrapper">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                className="checkbox-control"
            />
            <label
                htmlFor={id}
                className={`checkbox-interactive-control ${
                    checked ? 'checked' : ''
                }`}
                onClick={(e) => {
                    if (typeof handleClick === 'function') {
                        handleClick(e);
                    }
                }}
            ></label>
            <span className="checkbox-label">{label}</span>
        </div>
    );
};

export default Checkbox;
