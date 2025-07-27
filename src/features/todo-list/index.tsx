import React, { useState } from 'react';

interface Todo {
    id: string | number;
    name: string;
    completed: boolean;
}

/**
 * 
Exercise 1: Todo List with Local Storage​
​Requirements:

1. Implement a Todo List with add/delete/toggle-complete functionality
2. Persist data to localStorage
3. Use functional components with Hooks
4. Add input validation (empty todo prevention)

 */
const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    return (
        <div>
            <h1>TODO LIST</h1>
            <div className="actions-bar">
                <button>Add Todo</button>
                <button>Delete todo</button>
            </div>

            <div className="todo-list">
                {todos?.length > 0 &&
                    todos.map((it) => {
                        return <div key={it.id}>{it.name}</div>;
                    })}
            </div>
        </div>
    );
};

export default TodoList;
