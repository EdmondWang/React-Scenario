import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './counter/index.js';
import TreeQuiz from './tree-quiz/index.js';

function Home() {
  return (
    <div className="home">
      <h1>React Scenario Examples</h1>
      <nav>
        <ul>
          <li><Link to="/timer">Timer</Link></li>
          <li><Link to="/favorite-gundam">Favorite Gundam</Link></li>
        </ul>
      </nav>
    </div>
  );
}

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/timer" element={<Counter />} />
                <Route path="/favorite-gundam" element={<TreeQuiz />} />
            </Routes>
        </div>
    );
};

export default App;
