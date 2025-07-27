import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TimerFeature from './features/timer/index.tsx';
import TreeQuizFeature from './features/tree-quiz/index.tsx';
import TodoListFeature from './features/todo-list/index.tsx';
import ProgressBarFeature from './features/progress-bar/index.tsx';
import CardListFeature from './features/card-list/index.tsx';

function Home() {
    return (
        <div className="home">
            <h1>React Scenario Examples</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/timer">Timer</Link>
                        <span className="description">
                            Closure trap of useEffect
                        </span>
                    </li>
                    <li>
                        <Link to="/favorite-gundam">Favorite Gundam</Link>
                        <span className="description">
                            Recursively render and update
                        </span>
                    </li>
                    <li>
                        <Link to="/todo-list">Todo List</Link>
                        <span className="description">
                            React.useCallBack and React.memo
                        </span>
                    </li>
                    <li>
                        <Link to="/progress-bar">Progress Bar</Link>
                        <span className="description">
                            React.useCallBack and React.memo
                        </span>
                    </li>
                    <li>
                        <Link to="/card-list">Card List</Link>
                        <span className="description">
                            Initial data loading and subsequent pagination
                        </span>
                    </li>
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
                <Route path="/timer" element={<TimerFeature />} />
                <Route path="/favorite-gundam" element={<TreeQuizFeature />} />
                <Route path="/todo-list" element={<TodoListFeature />}></Route>
                <Route
                    path="/progress-bar"
                    element={<ProgressBarFeature />}
                ></Route>
                <Route path="/card-list" element={<CardListFeature />}></Route>
            </Routes>
        </div>
    );
};

export default App;
