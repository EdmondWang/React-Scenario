import React, { useState } from 'react';
import styles from './index.module.css';
import withLogger from './with-logger';

const Product = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

const ProductWithLogger = withLogger(Product);

const HocFeature: React.FC = () => {
    const [title, setTitle] = useState('Old title');
    const [description, setDescription] = useState('Old description');

    const changeTitle = () => {
        setTitle('New title');
    };
    const changeDescription = () => {
        setDescription('New description');
    };

    return (
        <div>
            <button onClick={changeTitle}>Change title</button>
            <button onClick={changeDescription}>Change description</button>
            <div>
                <ProductWithLogger title={title} description={description} />
            </div>
        </div>
    );
};

export default HocFeature;
