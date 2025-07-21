import React from 'react';
import Counter from './counter/index.js';
import TreeQuiz from './tree-quiz/index.js';

const App = () => {
    return (
        <div className="App">
            <h2 className="Case">Timer</h2>
            <Counter />
            <h2 className="Case">Favorite Gundam</h2>
            <TreeQuiz />
        </div>
    );
};

export default App;
