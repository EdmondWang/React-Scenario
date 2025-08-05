import React, { useState, useCallback } from 'react';
import SelfCompeteJsBar from './self-complete-js-bar';
import './styles.css';

const CreateProgressBarFeature: React.FC = () => {
    const [id, setId] = useState<number>(0);
    const [progresses, setProgresses] = useState<{ id: number }[]>([]);

    const clickAdd = useCallback(() => {
        setProgresses((prev) => {
            return [
                ...prev,
                {
                    id,
                },
            ];
        });
        setId((prev) => prev + 1);
    }, [id]);

    return (
        <div className="progress-bar-container">
            <div className="progress-card card">
                <h1>Create Progress Bar</h1>
                <p className="description">Click the button below to add animated progress bars that fill automatically.</p>
                <button className="add-button" onClick={clickAdd}>Add Progress Bar</button>
                {progresses.length > 0 ? (
                    progresses.map((prg) => (
                        <div key={prg.id} className="progress-item">
                            <span className="progress-label">Progress Bar {prg.id + 1}</span>
                            <SelfCompeteJsBar />
                        </div>
                    ))
                ) : (
                    <p className="description">No progress bars added yet. Click the button above to create one.</p>
                )}
            </div>
        </div>
    );
};

export default CreateProgressBarFeature;
