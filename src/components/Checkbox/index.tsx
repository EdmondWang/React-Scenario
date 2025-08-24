import React, { useRef, useEffect } from 'react';
import styles from './index.module.css';

interface CheckboxProps {
    id: string;
    name: string;
    label: string;
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    id,
    name,
    label,
    checked = false,
    indeterminate = false,
    onChange,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    return (
        <div className={styles['checkbox-wrapper']}>
            <input
                ref={inputRef}
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange && onChange(e.target.checked)}
                className={styles['checkbox-control']}
            />
            <label
                htmlFor={id}
                className={`
                    ${styles['checkbox-interactive-control']}
                    ${checked ? styles.checked : ''}
                    ${indeterminate ? styles.indeterminate : ''}
                `}
            ></label>
            {label}
        </div>
    );
};

export default Checkbox;
