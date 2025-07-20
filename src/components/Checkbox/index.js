import React from 'react';
import './index.css';

const Checkbox = ({ id, label, checked }) => {
    return (
        <div className="checkbox">
            <input id={id} type="checkbox" checked={checked} />
            <label for={id}>{label}</label>
        </div>
    );
};

export default Checkbox;
