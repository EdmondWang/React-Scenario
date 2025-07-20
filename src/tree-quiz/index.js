import React from 'react';
import Checkbox from '../components/Checkbox';
import { gundamTimeline } from './quiz-data';
import './index.css';

const TreeQuiz = () => {
    return (
        <div>
            <div>
                {gundamTimeline.map((world) => {
                    return (
                        <div key={world.id}>
                            <Checkbox id={world.id} label={world.name} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TreeQuiz;
