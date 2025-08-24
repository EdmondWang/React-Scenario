import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TimerFeature from './features/timer/index.tsx';
import TreeQuizFeature from './features/tree-quiz/index.tsx';
import TodoListFeature from './features/todo-list/index.tsx';
import CreateProgressBarFeature from './features/create-progress-bar/index.tsx';
import CardListFeature from './features/card-list/index.tsx';
import CardListFromTrae from './features/card-list-from-trae/index.tsx';
import LeakDemo from './features/memory-leak/index.tsx';
import AnimationEventFeature from './features/animation-event/index.tsx';
import AsyncStateFeature from './features/async-state/index.tsx';
import ExposeMethodFeature from './features/expose-method/index.tsx';
import DynamicStyleFeature from './features/dynamic-style/index.tsx';
import NavMenuFeature from './features/nav-menu/index.tsx';
import NewsFeature from './features/news/index.tsx';
import ClosureTrapFeature from './features/closure-trap/index.tsx';
import HocFeature from './features/hoc/index.tsx';
import CountDownFeature from './features/count-down/index.tsx';
import MouseTrackerFeature from './features/mouse-tracker/index.tsx';
import DragAndDropFeature from './features/drag-and-drop/index.tsx';
import HolyGrailLayoutFeature from './features/holy-grail-layout/index.tsx';

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
                        <Link to="/count-down">Countdown Feature</Link>
                        <span className="description">
                            Demonstration of useEffect trap
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
                        <Link to="/progress-bar">Create Progress Bar</Link>
                        <span className="description">
                            Separate state management
                        </span>
                    </li>
                    <li>
                        <Link to="/card-list">Card List</Link>
                        <span className="description">
                            Initial data loading and subsequent pagination
                        </span>
                    </li>
                    <li>
                        <Link to="/card-list-from-trae">
                            Card List from Trae
                        </Link>
                        <span className="description">
                            New card list with ID pagination and time formatting
                        </span>
                    </li>
                    <li>
                        <Link to="/memory-leak">Memory Leak Demo</Link>
                        <span className="description">
                            Demonstration of memory leaks in React
                        </span>
                    </li>
                    <li>
                        <Link to="/animation-event">Animation Event</Link>
                        <span className="description">
                            Demonstration of animation event in React
                        </span>
                    </li>
                    <li>
                        <Link to="/life-cycle">Life Cycle</Link>
                        <span className="description">
                            Demonstration of life cycle in React
                        </span>
                    </li>
                    <li>
                        <Link to="/async-state">Async State</Link>
                        <span className="description">
                            Demonstration of async state in React
                        </span>
                    </li>
                    <li>
                        <Link to="/expose-method">Expose Method</Link>
                        <span className="description">
                            Demonstration of exposing child component method in
                            React
                        </span>
                    </li>
                    <li>
                        <Link to="/dynamic-style">Dynamic Style</Link>
                        <span className="description">
                            Demonstration of useInsertionEffect
                        </span>
                    </li>
                    <li>
                        <Link to="/nav-menu">Nav Menu</Link>
                        <span className="description">
                            Demonstration of useNavigate
                        </span>
                    </li>
                    <li>
                        <Link to="/news/1">First News</Link>
                        <span className="description">
                            Demonstration of useParams
                        </span>
                    </li>
                    <li>
                        <Link to="/closure-trap">Closure Trap</Link>
                        <span className="description">
                            Demonstration of closure trap within useState and
                            useEffect
                        </span>
                    </li>
                    <li>
                        <Link to="/hoc">HOC Feature</Link>
                        <span className="description">
                            Demonstration of higher order component
                        </span>
                    </li>
                    <li>
                        <Link to="/mouse-tracker">Mouse Tracker Feature</Link>
                        <span className="description">
                            Compare between render props and use hooks
                        </span>
                    </li>
                    <li>
                        <Link to="/mouse-tracker">Drag and Drop Feature</Link>
                        <span className="description">
                            Demonstration of drag and drop within React
                        </span>
                    </li>
                    <li>
                        <Link to="/holy-grail-layout">
                            Holy Grail Layout Feature
                        </Link>
                        <span className="description">
                            Demonstration of css layout
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

const DynamicLifeCycleFeature = React.lazy(
    () => import('./features/life-cycle/index.tsx')
);

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/timer" element={<TimerFeature />} />
                <Route path="/count-down" element={<CountDownFeature />} />
                <Route path="/favorite-gundam" element={<TreeQuizFeature />} />
                <Route path="/todo-list" element={<TodoListFeature />}></Route>
                <Route
                    path="/progress-bar"
                    element={<CreateProgressBarFeature />}
                ></Route>
                <Route path="/card-list" element={<CardListFeature />}></Route>
                <Route
                    path="/card-list-from-trae"
                    element={<CardListFromTrae />}
                ></Route>
                <Route path="/memory-leak" element={<LeakDemo />}></Route>
                <Route
                    path="/animation-event"
                    element={<AnimationEventFeature />}
                ></Route>
                <Route
                    path="/life-cycle"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <DynamicLifeCycleFeature />
                        </Suspense>
                    }
                ></Route>
                <Route
                    path="/async-state"
                    element={<AsyncStateFeature />}
                ></Route>
                <Route
                    path="/expose-method"
                    element={<ExposeMethodFeature />}
                ></Route>
                <Route
                    path="/dynamic-style"
                    element={<DynamicStyleFeature />}
                ></Route>
                <Route path="/nav-menu" element={<NavMenuFeature />}></Route>
                <Route path="/news/:id" element={<NewsFeature />}></Route>
                <Route
                    path="/closure-trap"
                    element={<ClosureTrapFeature />}
                ></Route>
                <Route path="/hoc" element={<HocFeature />}></Route>
                <Route
                    path="/mouse-tracker"
                    element={<MouseTrackerFeature />}
                ></Route>
                <Route
                    path="/drag-and-drop"
                    element={<DragAndDropFeature />}
                ></Route>
                <Route
                    path="/holy-grail-layout"
                    element={<HolyGrailLayoutFeature />}
                ></Route>
            </Routes>
        </div>
    );
};

export default App;
