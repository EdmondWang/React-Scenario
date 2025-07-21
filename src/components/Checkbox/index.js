import React from 'react';
import './index.css';

const Checkbox = ({ id, name, label, checked, indeterminate, onChange }) => {
    return (
        <div className="checkbox-wrapper">
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked ?? false}
                onChange={onChange}
                className="checkbox-control"
            />
            <label
                htmlFor={id}
                className={`
                    checkbox-interactive-control
                    ${checked === true ? 'checked' : ''}
                    ${indeterminate === true ? 'indeterminate' : ''}`}
            ></label>
            <span className="checkbox-label">{label}</span>
        </div>
    );
};

export default Checkbox;
