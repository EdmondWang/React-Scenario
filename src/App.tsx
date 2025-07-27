import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './features/timer/index.tsx';
import TreeQuiz from './features/tree-quiz/index.tsx';
import TodoList from './features/todo-list/index.tsx';

function Home() {
    return (
        <div className="home">
            <h1>React Scenario Examples</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/timer">Timer</Link>
                    </li>
                    <li>
                        <Link to="/favorite-gundam">Favorite Gundam</Link>
                    </li>
                    <li>
                        <Link to="/todo-list">Todo List</Link>
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
                <Route path="/timer" element={<Counter />} />
                <Route path="/favorite-gundam" element={<TreeQuiz />} />
                <Route path="/todo-list" element={<TodoList />}></Route>
            </Routes>
        </div>
    );
};

export default App;
