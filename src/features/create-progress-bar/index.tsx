import React, { useState, useCallback } from 'react';
import CompeteViaSetTimeoutJsBar from './complete-via-settimeout-js-bar';
import CompeteViaSetIntervalJsBar from './complete-via-setinterval-js-bar';

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
        <div>
            <h1>Create Progress Bar</h1>
            <button onClick={clickAdd}>Add</button>
            {progresses.length > 0 &&
                progresses.map((prg) => {
                    return (
                        <div key={prg.id}>
                            <CompeteViaSetTimeoutJsBar />
                            <CompeteViaSetIntervalJsBar />
                        </div>
                    );
                })}
        </div>
    );
};

export default CreateProgressBarFeature;
